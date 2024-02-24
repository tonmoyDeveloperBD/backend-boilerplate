import { Injectable, Inject } from '@nestjs/common';
import { ExecutionContext, CallHandler } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { CacheInterceptor, CACHE_MANAGER } from '@nestjs/cache-manager';
import { Observable, lastValueFrom } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { CacheService_ } from '@/core/cache/cache.service';

@Injectable()
export class GraphQLCacheInterceptor extends CacheInterceptor {
  constructor(
    @Inject(CACHE_MANAGER) cacheManager: any,
    reflector: Reflector,
    private readonly configService: ConfigService,
    private readonly cacheService: CacheService_,
  ) {
    super(cacheManager, reflector);
  }

  async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
    const graphqlContext = GqlExecutionContext.create(context);
    const args = graphqlContext.getArgs();
    if (args) {
      const enableCache = this.configService.get('db.enable_cache');
      if (enableCache === false) {
        return next.handle(); // Skip caching
      }

      const disableCache = this.reflector.get<boolean>('disableCache', context.getHandler());
      if (enableCache === false || disableCache) {
        return next.handle(); // Skip caching
      }

      const cacheKey = this.getCacheKey(args, context);
      let cacheValue = await this.cacheManager.get(cacheKey);

      if (!cacheValue) {
        cacheValue = {};
      }
      const response = await lastValueFrom(next.handle());

      if (response) {
        await this.cacheManager.set(cacheKey, response);
      }

      return new Observable((observer) => {
        observer.next(response);
        observer.complete();
      });
    }

    return super.intercept(context, next);
  }

  private getCacheKey(args: Record<string, any>, context: ExecutionContext): string {
    const gqlContext = GqlExecutionContext.create(context);
    const info = gqlContext.getInfo();
    const operationName = info.fieldName;

    return `${operationName}:${JSON.stringify(args)}`;
  }
}
