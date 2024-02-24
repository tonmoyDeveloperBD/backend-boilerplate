import { Injectable } from '@nestjs/common';
import { FirebaseService } from '@/shared/services/firebase-service/firebase.service';
import { messaging } from 'firebase-admin';
import MessagingPayload = messaging.MessagingPayload;

@Injectable()
export class NotificationService {
  constructor(private readonly firebaseService: FirebaseService) {}

  async sendNotificationToTopic(topic: string, payload: MessagingPayload): Promise<any> {
    return this.firebaseService.sendNotificationToTopic(topic, payload);
  }
}
