import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { CacheService_ } from '@/core/cache/cache.service';
import { LoggerService } from '@/core/logger/logger.service';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class CacheDeleteInterceptor implements NestInterceptor {
  constructor(
    private readonly cacheService: CacheService_,
    private readonly loggerService: LoggerService,
    private readonly reflector: Reflector,
  ) {}

  async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
    const deletePattern = this.reflector.get<string>('deleteCache', context.getHandler());
    if (deletePattern) {
      try {
        await this.cacheService.deleteCacheKeysWithPattern(deletePattern);
      } catch (e) {
        this.loggerService.error(e, '');
      }
    }
    return next.handle();
  }
}
