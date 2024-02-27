import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';
import { BullProcessorEnum } from '@/core/job/bull-mq/enum/bull-processor.enum';
import { BullRetryAttemptsOption } from '@/core/job/bull-mq/bull-retry-attempts.option';
import { BullProcessEnum } from '@/core/job/bull-mq/enum/bull-process.enum';
import { messaging } from 'firebase-admin';
import MessagingPayload = messaging.MessagingPayload;

@Injectable()
export class BullService {
  constructor(
    @InjectQueue(BullProcessorEnum.ORDER_QUEUE) private readonly orderQueue: Queue,
    @InjectQueue(BullProcessorEnum.NOTIFICATION_QUEUE) private readonly notificationQueue: Queue,
  ) {}

  async orderProcess(data: any): Promise<void> {
    await this.orderQueue.add(BullProcessEnum.MAIL_SEND, data, new BullRetryAttemptsOption(3, 4));
  }

  async notificationSendProcess(topic: string, payload: MessagingPayload): Promise<void> {
    await this.notificationQueue.add(
      BullProcessEnum.NOTIFICATION_SEND,
      { topic, payload },
      new BullRetryAttemptsOption(2, 10),
    );
  }
}
