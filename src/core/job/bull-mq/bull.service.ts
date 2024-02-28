import { Injectable } from '@nestjs/common';
import { Job, Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';
import { BullProcessorEnum } from '@/core/job/bull-mq/enum/bull-processor.enum';
import { BullRetryAttemptsOption } from '@/core/job/bull-mq/option/bull-retry-attempts.option';
import { BullProcessEnum, BullNotificationProcessEnum } from '@/core/job/bull-mq/enum/bull-process.enum';
import { messaging } from 'firebase-admin';
import MessagingPayload = messaging.MessagingPayload;
import { Message } from 'firebase-admin/lib/messaging/messaging-api';

@Injectable()
export class BullService {
  constructor(
    @InjectQueue(BullProcessorEnum.ORDER_QUEUE) private readonly orderQueue: Queue,
    @InjectQueue(BullProcessorEnum.NOTIFICATION_QUEUE) private readonly notificationQueue: Queue,
  ) {}

  async orderProcess(data: any): Promise<void> {
    await this.orderQueue.add(BullProcessEnum.ORDER_PROCESS, data);
  }

  async notificationSendToTopicProcess(topic: string, payload: MessagingPayload): Promise<void> {
    await this.notificationQueue.add(
      BullNotificationProcessEnum.NOTIFICATION_SEND_TO_TOPIC,
      { topic, payload },
      new BullRetryAttemptsOption(2, 10),
    );
  }

  async notificationSend(message: Message): Promise<any> {
    await this.notificationQueue.add(BullNotificationProcessEnum.NOTIFICATION_SEND, message);
  }
}
