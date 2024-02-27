import { OnQueueCompleted, OnQueueError, OnQueueFailed, Processor } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { BullProcessEnum } from '@/core/job/bull-mq/enum/bull-process.enum';
import { Job } from 'bull';
import { BullProcessorEnum } from '@/core/job/bull-mq/enum/bull-processor.enum';

@Processor(BullProcessorEnum.ORDER_QUEUE)
export class OrderListener {
  constructor() {}

  @OnQueueFailed({ name: BullProcessEnum.MAIL_SEND })
  async onMailSendFailed(job: Job, error: Error) {
    console.log('Mail send job failed:', job.id, error.message);
    // Handle the failure, log it, or perform other actions
  }

  @OnQueueError({ name: BullProcessEnum.MAIL_SEND })
  async onMailSendError(error: Error) {
    console.log('Mail send queue error:', error.message);
    // Handle the queue error, log it, or perform other actions
  }

  @OnQueueCompleted({ name: BullProcessEnum.MAIL_SEND })
  async onMailSendCompleted(job: Job) {
    console.log('Mail send job completed:', job.id);
    // Handle the completion, log it, or perform other actions
  }
}
