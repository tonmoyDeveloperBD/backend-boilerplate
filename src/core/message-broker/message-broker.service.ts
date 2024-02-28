import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { MessageBrokerChannel } from '@/core/message-broker/channel/message-broker.channel';
import { MailService } from '@/core/mail/mail.service';
import { SendMailWithTemplate } from '@/core/mail/dto/mail-with-template.input';
import { NotificationService } from '@/core/notification/notification.service';
import { messaging } from 'firebase-admin';
import MessagingPayload = messaging.MessagingPayload;
import { Message } from 'firebase-admin/lib/messaging/messaging-api';

@Injectable()
export class MessageBrokerService {
  constructor(
    private readonly mailService: MailService,
    private readonly notificationService: NotificationService,
  ) {}

  @OnEvent(MessageBrokerChannel.SEND_MAIL_WITH_TEMPLATE)
  async handleOrderCreatedEvent(payload: SendMailWithTemplate) {
    return this.mailService.sendSingleEmailWithTemplate(payload);
  }

  @OnEvent(MessageBrokerChannel.SEND_NOTIFICATION_TO_TOPIC)
  async sendNotificationToTopic(topic: string, payload: MessagingPayload): Promise<void> {
    return this.notificationService.sendNotificationToTopic(topic, payload);
  }
  @OnEvent(MessageBrokerChannel.SEND_NOTIFICATION)
  async sendNotification(message: Message): Promise<any> {
    return this.notificationService.sendNotification(message);
  }

  @OnEvent(MessageBrokerChannel.SUBSCRIBE_TO_TOPIC)
  async subscribeToTopic(registrationTokens: string | string[], topic: string): Promise<any> {
    return this.notificationService.subscribeToTopic(registrationTokens, topic);
  }

  @OnEvent(MessageBrokerChannel.UNSUBSCRIBE_TO_TOPIC)
  async unsubscribeToTopic(registrationTokens: string | string[], topic: string): Promise<any> {
    return this.notificationService.unsubscribeToTopic(registrationTokens, topic);
  }
}
