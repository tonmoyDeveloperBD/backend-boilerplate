import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { BullProcessorEnum } from '@/core/job/bull-mq/enum/bull-processor.enum';
import { BullNotificationProcessEnum } from '@/core/job/bull-mq/enum/bull-process.enum';
import { MessageBrokerCaller } from '@/core/message-broker/message-broker.caller';

@Processor(BullProcessorEnum.NOTIFICATION_QUEUE)
export class BullNotificationProcessor {
  private readonly logger = new Logger(BullNotificationProcessor.name);

  constructor(private readonly messageBrokerCaller: MessageBrokerCaller) {}

  @Process(BullNotificationProcessEnum.NOTIFICATION_SEND)
  async notificationSend(job: any) {
    const data = job?.data;
    await this.messageBrokerCaller.sendNotification(data);
  }

  @Process(BullNotificationProcessEnum.NOTIFICATION_SEND_TO_TOPIC)
  async notificationSendJob(job: any) {
    const data = job?.data;
    await this.messageBrokerCaller.sendNotificationToTopic(data?.topic, data?.payload);
  }

  @Process(BullNotificationProcessEnum.NOTIFICATION_SUBSCRIBE_TO_TOPIC)
  async notificationSubscribeToTopic(job: any) {
    const data = job?.data;
    await this.messageBrokerCaller.subscribeToTopic(data?.registrationTokens, data?.topic);
  }

  @Process(BullNotificationProcessEnum.NOTIFICATION_UNSUBSCRIBE_TO_TOPIC)
  async notificationUnsubscribeToTopic(job: any) {
    const data = job?.data;
    await this.messageBrokerCaller.unsubscribeToTopic(data?.registrationTokens, data?.topic);
  }
}
