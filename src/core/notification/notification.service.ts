import { Injectable } from '@nestjs/common';
import { FirebaseService } from '@/shared/services/firebase-service/firebase.service';
import { messaging } from 'firebase-admin';
import MessagingPayload = messaging.MessagingPayload;
import { Message } from 'firebase-admin/lib/messaging/messaging-api';

@Injectable()
export class NotificationService {
  constructor(private readonly firebaseService: FirebaseService) {}

  async sendNotification(message: Message): Promise<any> {
    return this.firebaseService.sendNotification(message);
  }

  async sendNotificationToTopic(topic: string, payload: MessagingPayload): Promise<any> {
    return this.firebaseService.sendNotificationToTopic(topic, payload);
  }

  async subscribeToTopic(registrationTokens: string | string[], topic: string): Promise<any> {
    await this.firebaseService.subscribeToTopic(registrationTokens, topic);
  }

  async unsubscribeToTopic(registrationTokens: string | string[], topic: string): Promise<any> {
    await this.firebaseService.unsubscribeToTopic(registrationTokens, topic);
  }
}
