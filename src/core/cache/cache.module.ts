import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { CacheService_ } from '@/core/cache/cache.service';
import { RedisOptions } from '@/core/cache/cache.option';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GraphQLCacheInterceptor } from '@/core/interceptors/graphql-cache.interceptor';
import { LoggerService } from '@/core/logger/logger.service';
import { LogglyService } from '@/core/logger/loggly/loggly.service';
import { CacheDisableInterceptor } from '@/core/interceptors/cache-disable.interceptor';
import { CacheDeleteInterceptor } from '@/core/interceptors/cache-delete.interceptor';

@Module({
  imports: [CacheModule.registerAsync(RedisOptions)],
  providers: [
    CacheService_,
    LoggerService,
    LogglyService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheDisableInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheDeleteInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: GraphQLCacheInterceptor,
    },
  ],
  exports: [CacheService_],
})
export class CacheModule_ {}
