import { CacheModuleAsyncOptions } from '@nestjs/cache-manager';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-store';

export const RedisOptions: CacheModuleAsyncOptions = {
  isGlobal: true,
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => {
    const store = await redisStore({
      username: configService.get<string>('db.redis_username'),
      password: configService.get<string>('db.redis_password'),
      socket: {
        host: configService.get<string>('db.redis_host'),
        port: parseInt(configService.get<string>('db.redis_port')!),
      },
      ttl: configService.get<number>('db.redis_ttl'),
    });
    return {
      store: () => store,
    };
  },
  inject: [ConfigService],
};
