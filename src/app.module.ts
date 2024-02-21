import { Module } from '@nestjs/common';
import configs from '@/configs';
import { ConfigModule } from '@nestjs/config';
import { LoggerService } from '@/core/logger/logger.service';
import { LogglyService } from '@/core/logger/loggly/loggly.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { FooResolver } from '@/graphql/foo.resolver';
import { CacheModule_ } from '@/core/cache/cache.module';
import { AppController } from '@/app.controller';
import { CacheService_ } from '@/core/cache/cache.service';
import { MailModule } from '@/core/mail/mail.module';
import { MailService } from '@/core/mail/mail.service';
import { MessageBrokerModule } from '@/core/message-broker/message-broker.module';
import { MessageBrokerRequest } from '@/core/message-broker/request/message-broker.request';
import { PrismaService } from '@/core/database/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: configs,
    }),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
      path: 'api/gql',
      context: ({ req }) => ({ req }),
      playground: true,
      uploads: false,
    }),
    CacheModule_,
    MessageBrokerModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [
    FooResolver,
    LoggerService,
    LogglyService,
    CacheService_,
    MailService,
    MessageBrokerRequest,
    PrismaService,
  ],
})
export class AppModule {}
