// bull.module.ts

import { Module } from '@nestjs/common';
import { BullModule as Bull } from '@nestjs/bull';
import { BullProcessor } from './bull.processor';
import { BullService } from '@/core/job/bull-mq/bull.service';

@Module({
  imports: [
    Bull.forRoot({
      redis: {
        username: 'redis',
        password: '@1982gonzoO',
        host: 'redis-14782.c252.ap-southeast-1-1.ec2.cloud.redislabs.com',
        port: 14782,
      },
    }),
    Bull.registerQueue({
      name: 'my_queue',
    }),
  ],
  providers: [BullProcessor, BullService],
  exports: [BullService],
})
export class BullModule {}
