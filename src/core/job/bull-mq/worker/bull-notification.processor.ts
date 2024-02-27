// bull.processor.ts

import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { BullProcessorEnum } from '@/core/job/bull-mq/enum/bull-processor.enum';
import { BullProcessEnum } from '@/core/job/bull-mq/enum/bull-process.enum';
import { NotificationService } from '@/core/notification/notification.service';

@Processor(BullProcessorEnum.NOTIFICATION_QUEUE)
export class BullNotificationProcessor {
  private readonly logger = new Logger(BullNotificationProcessor.name);

  constructor(private readonly notificationService: NotificationService) {}
  @Process(BullProcessEnum.NOTIFICATION_SEND)
  async notificationSendJob(job: any) {
    const data = job?.data;
    await this.notificationService.sendNotificationToTopic(data?.topic, data?.payload);
  }
}
