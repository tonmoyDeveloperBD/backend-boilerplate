import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class CacheDisableInterceptor implements NestInterceptor {
  constructor(
    private readonly configService: ConfigService,
    private readonly reflector: Reflector,
  ) {}

  async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
    const enableCache = this.configService.get('db.enable_cache');
    if (enableCache === false) return next.handle();

    const disableCache = this.reflector.get<boolean>('disableCache', context.getHandler());
    if (enableCache === false || disableCache) {
      return next.handle(); // Skip caching
    }
    return next.handle();
  }
}
