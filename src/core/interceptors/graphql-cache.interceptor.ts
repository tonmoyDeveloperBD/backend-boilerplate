import { Injectable, Inject } from '@nestjs/common';
import { ExecutionContext, CallHandler } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { CacheInterceptor, CACHE_MANAGER } from '@nestjs/cache-manager';
import { Observable, lastValueFrom } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GraphQLCacheInterceptor extends CacheInterceptor {
  protected reflector: Reflector;

  constructor(
    @Inject(CACHE_MANAGER) cacheManager: any,
    reflector: Reflector,
    private readonly configService: ConfigService,
  ) {
    super(cacheManager, reflector);
    this.reflector = reflector;
  }

  async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
    const graphqlContext = GqlExecutionContext.create(context);
    const args = graphqlContext.getArgs();

    //Check if cache is enabled
    const enableCache = this.configService.get('db.enable_cache');
    if (enableCache === false) return next.handle();

    // Check if the request is a GraphQL request
    if (args) {
      const cacheKey = this.getCacheKey(args, context);
      let cacheValue = await this.cacheManager.get(cacheKey);

      // If cache hit, return cached value
      if (!cacheValue) {
        cacheValue = {};
      }

      // If cache miss, proceed with the request
      const response = await lastValueFrom(next.handle());
      await this.cacheManager.set(cacheKey, response ? response : cacheValue, { ttl: 1000 } as any);

      return new Observable((observer) => {
        observer.next(response);
        observer.complete();
      });
    }

    // If not a GraphQL request, proceed with the normal cache interception
    return super.intercept(context, next);
  }

  private getCacheKey(args: Record<string, any>, context: ExecutionContext): string {
    // Get the name of the mutation or query
    const gqlContext = GqlExecutionContext.create(context);
    const info = gqlContext.getInfo();
    const operationName = info.fieldName;

    // Generate cache key based on the operation name and arguments
    return `${operationName}:${JSON.stringify(args)}`;
  }
}
