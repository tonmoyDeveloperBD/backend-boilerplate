import { Module } from '@nestjs/common';
import { BullModule as Bull } from '@nestjs/bull';
import { BullService } from '@/core/job/bull-mq/bull.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BullProcessorEnum } from '@/core/job/bull-mq/enum/bull-processor.enum';
import { BullOrderProcessor } from '@/core/job/bull-mq/worker/bull-order.processor';
import { BullNotificationProcessor } from '@/core/job/bull-mq/worker/bull-notification.processor';
import { NotificationModule } from '@/core/notification/notification.module';

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
      name: BullProcessorEnum.ORDER_QUEUE,
    }),
    Bull.registerQueue({
      name: BullProcessorEnum.NOTIFICATION_QUEUE,
    }),
    NotificationModule,
  ],
  providers: [BullOrderProcessor, BullNotificationProcessor, BullService],
  exports: [BullService],
})
export class BullModule {}
