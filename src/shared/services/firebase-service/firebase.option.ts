import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';

export const FirebaseProvider = {
  provide: 'FIREBASE_APP',
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    const firebaseConfig = {
      type: configService.get<string>('notification.type'),
      project_id: configService.get<string>('notification.project_id'),
      private_key_id: configService.get<string>('notification.private_key_id'),
      private_key: configService.get<any>('notification.private_key'),
      client_email: configService.get<string>('notification.client_email'),
      client_id: configService.get<string>('notification.client_id'),
      auth_uri: configService.get<string>('notification.auth_uri'),
      token_uri: configService.get<string>('notification.token_uri'),
      auth_provider_x509_cert_url: configService.get<string>('notification.auth_cert_url'),
      client_x509_cert_url: configService.get<string>('notification.client_cert_url'),
      universe_domain: configService.get<string>('notification.universal_domain'),
    } as admin.ServiceAccount;

    return admin.initializeApp({
      credential: admin.credential.cert(firebaseConfig),
      databaseURL: `https://${firebaseConfig.projectId}.firebaseio.com`,
      storageBucket: `${firebaseConfig.projectId}.appspot.com`,
    });
  },
};
