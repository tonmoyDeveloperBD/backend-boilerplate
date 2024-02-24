// some.service.ts

import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class BullService {
  constructor(@InjectQueue('my_queue') private readonly myQueue: Queue) {}

  async addJobToQueue(data: any) {
    await this.myQueue.add('my_job', data, { delay: 10000 });
  }
}
