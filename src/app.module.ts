import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import configs from '@/configs';
import { ConfigModule } from '@nestjs/config';
import { LoggerService } from '@/core/logger/logger.service';
import { LogglyService } from '@/core/logger/loggly/loggly.service';
import { FooResolver } from '@/graphql/foo.resolver';
import { CacheModule_ } from '@/core/cache/cache.module';
import { AppController } from '@/app.controller';
import { MailModule } from '@/core/mail/mail.module';
import { MessageBrokerModule } from '@/core/message-broker/message-broker.module';
import { MessageBrokerRequest } from '@/core/message-broker/request/message-broker.request';
import { PrismaService } from '@/core/database/prisma.service';
import { NotificationService } from '@/core/notification/notification.service';
import { NotificationModule } from '@/core/notification/notification.module';
import { FirebaseModule } from '@/shared/services/firebase-service/firebase.module';
import { GqlModule } from '@/graphql/graphql.module';
import { SecretKeyMiddleware } from '@/shared/middleware/secret-key.middleware';
import { BullModule } from '@/core/job/bull-mq/bull.module';
import { CommonModule } from '@/shared/common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: configs,
    }),
    GqlModule,
    CacheModule_,
    MessageBrokerModule,
    MailModule,
    NotificationModule,
    FirebaseModule,
    BullModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [FooResolver, LoggerService, LogglyService, MessageBrokerRequest, PrismaService, NotificationService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SecretKeyMiddleware).forRoutes('*');
  }
}
