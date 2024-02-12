import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';
// import { CacheService_ } from '@/core/cache/cache.service';

@Controller()
export class AppController {
  constructor() {}
  @Get('test')
  async test(@Param('name000') name: string) {
    //await this.cacheService.delete('ABCDE');
    return 'HELLO My Boy';
  }
}
