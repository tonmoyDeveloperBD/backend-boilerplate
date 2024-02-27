import { Inject, Injectable } from '@nestjs/common';
import admin, { app, messaging } from 'firebase-admin';
import { Message } from 'firebase-admin/lib/messaging/messaging-api';
import MessagingTopicManagementResponse = messaging.MessagingTopicManagementResponse;
import MessagingPayload = messaging.MessagingPayload;

@Injectable()
export class FirebaseService {
  #db: FirebaseFirestore.Firestore;
  #collection: FirebaseFirestore.CollectionReference;
  #messaging: admin.messaging.Messaging;
  #auth: admin.auth.Auth;

  constructor(@Inject('FIREBASE_APP') private firebaseApp: app.App) {
    this.#messaging = this.firebaseApp.messaging();
  }

  async sendNotificationToTopic(topic: string, payload: MessagingPayload): Promise<any> {
    try {
      const result = await this.#messaging.sendToTopic(topic, {
        data: payload.data,
        notification: payload.notification,
      });
      console.log(result);
      return result;
    } catch (e) {
      throw new Error(`Error sending notification to topic: ${e}`);
    }
  }

  async sendNotification(message: Message) {
    try {
      return await this.#messaging.send(message);
    } catch (e) {
      throw new Error(`Error sending notification to topic: ${e}`);
    }
  }

  async subscribeToTopic(
    registrationTokens: string | string[],
    topic: string,
  ): Promise<MessagingTopicManagementResponse> {
    try {
      return await this.#messaging.subscribeToTopic(registrationTokens, topic);
    } catch (e) {
      throw new Error(`Error sending notification to topic: ${e}`);
    }
  }

  async unsubscribeToTopic(registrationTokens: string | string[], topic: string): Promise<any> {
    try {
      return this.#messaging.unsubscribeFromTopic(registrationTokens, topic);
    } catch (e) {
      throw new Error(`Error sending notification to topic: ${e}`);
    }
  }
}
