import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { RedisStore } from 'cache-manager-redis-store';

@Injectable()
export class CacheService_ {
  private readonly redisStore!: RedisStore;

  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly configService: ConfigService,
  ) {
    this.redisStore = cacheManager.store as unknown as RedisStore;
  }

  async set(key: string, value: any): Promise<void> {
    try {
      await this.cacheManager.set(key, value);
    } catch (e) {}
  }

  async get(key: string): Promise<any> {
    return await this.cacheManager.get<string>(key);
  }

  async delete(key: string): Promise<void> {
    await this.cacheManager.del(key);
  }

  async clearAllCache(): Promise<void> {
    await this.cacheManager.reset();
  }
}
