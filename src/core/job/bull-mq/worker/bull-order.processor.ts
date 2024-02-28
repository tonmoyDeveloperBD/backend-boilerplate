import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { BullProcessorEnum } from '@/core/job/bull-mq/enum/bull-processor.enum';
import { BullProcessEnum } from '@/core/job/bull-mq/enum/bull-process.enum';

@Processor(BullProcessorEnum.ORDER_QUEUE)
export class BullOrderProcessor {
  private readonly logger = new Logger(BullOrderProcessor.name);

  // Perform order processing tasks
  // For example, tasks like:
  // - Processing payment
  // - Updating inventory
  // - Sending order confirmation email
  // - Notifying the warehouse about the new order
  // - Logging the order details

  @Process({
    name: BullProcessEnum.ORDER_PROCESS,
  })
  async orderProcessJob(job: any) {
    //this.logger.debug('Processing job ' + JSON.stringify(job.data));
    try {
      // Simulate a payment failure
      //console.log('ok');
      //throw new Error('Payment failed: Insufficient funds');
    } catch (error) {
      // Log the error
      // console.error('Payment processing failed:', error.message);

      // Retry the job
      throw error;
    }
  }

  // @OnQueueActive()
  // async onQueueActive()
}
