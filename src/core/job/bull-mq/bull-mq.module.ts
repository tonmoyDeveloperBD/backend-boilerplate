import { Module } from '@nestjs/common';
import { BullModule as Bull } from '@nestjs/bull';
import { BullProcessor } from './bull.processor';
import { BullService } from '@/core/job/bull-mq/bull.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    Bull.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        redis: {
          username: configService.get<string>('db.redis_username'),
          password: configService.get<string>('db.redis_password'),
          host: configService.get<string>('db.redis_host'),
          port: parseInt(configService.get<string>('db.redis_port')!),
        },
      }),
      inject: [ConfigService],
    }),

    Bull.registerQueue({
      name: 'my_queue',
    }),
  ],
  providers: [BullProcessor, BullService],
  exports: [BullService],
})
export class BullModule {}
