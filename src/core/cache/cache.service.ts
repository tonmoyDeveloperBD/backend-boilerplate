import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { RedisStore } from 'cache-manager-redis-store';

@Injectable()
export class CacheService_ {
  private readonly redisStore!: RedisStore;

  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {
    this.redisStore = cacheManager.store as unknown as RedisStore;
  }

  async set(key: string, value: any): Promise<void> {
    try {
      await this.cacheManager.set(key, value, 5);
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

  async deleteCacheKeysWithPattern(pattern: string): Promise<void> {
    const keys = await this.cacheManager.store.keys();
    const userCaches = keys.filter((el: string) => el.includes(pattern));
    if (userCaches.length > 0) {
      await Promise.all(
        userCaches.map(async (cacheKey) => {
          await this.cacheManager.del(cacheKey);
        }),
      );
    }
  }
}
