// bull.processor.ts

import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';

@Processor('my_queue')
export class BullProcessor {
  private readonly logger = new Logger(BullProcessor.name);

  @Process('my_job')
  async handleMyJob(job: any) {
    this.logger.debug('Processing job ' + JSON.stringify(job.data));
    // Your job processing logic here
  }
}
