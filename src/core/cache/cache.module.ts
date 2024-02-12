import { Module } from '@nestjs/common';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { CacheService_ } from '@/core/cache/cache.service';
import { RedisOptions } from '@/core/cache/cache.option';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GraphQLCacheInterceptor } from '@/core/interceptors/graphql-cache.interceptor';

@Module({
  imports: [CacheModule.registerAsync(RedisOptions)],
  providers: [
    CacheService_,
    {
      provide: APP_INTERCEPTOR,
      useClass: GraphQLCacheInterceptor,
    },
  ],
})
export class CacheModule_ {}
