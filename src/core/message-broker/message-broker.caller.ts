import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { MessageBrokerChannel } from '@/core/message-broker/channel/message-broker.channel';
import { SendMailWithTemplate } from '@/core/mail/dto/mail-with-template.input';
import { messaging } from 'firebase-admin';
import MessagingPayload = messaging.MessagingPayload;
import { Message } from 'firebase-admin/lib/messaging/messaging-api';

@Injectable()
export class MessageBrokerCaller {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  async sendMailWithTemplate(payload: SendMailWithTemplate): Promise<void> {
    this.eventEmitter.emit(MessageBrokerChannel.SEND_MAIL_WITH_TEMPLATE, payload);
  }

  async sendNotificationToTopic(topic: string, payload: MessagingPayload): Promise<void> {
    this.eventEmitter.emit(MessageBrokerChannel.SEND_NOTIFICATION_TO_TOPIC, topic, payload);
  }

  async sendNotification(message: Message): Promise<any> {
    this.eventEmitter.emit(MessageBrokerChannel.SEND_NOTIFICATION, message);
  }

  async subscribeToTopic(registrationTokens: string | string[], topic: string): Promise<any> {
    this.eventEmitter.emit(MessageBrokerChannel.SUBSCRIBE_TO_TOPIC, registrationTokens, topic);
  }

  async unsubscribeToTopic(registrationTokens: string | string[], topic: string): Promise<any> {
    this.eventEmitter.emit(MessageBrokerChannel.UNSUBSCRIBE_TO_TOPIC, registrationTokens, topic);
  }
}
