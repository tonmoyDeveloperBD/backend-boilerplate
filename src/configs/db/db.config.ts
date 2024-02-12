import { registerAs } from '@nestjs/config';

/**
 * File path to the configuration file.
 */
export default registerAs('db', () => ({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'postgres',

  redis_host: process.env.REDIS_HOST,
  redis_port: process.env.REDIS_PORT,
  redis_username: process.env.REDIS_USERNAME,
  redis_password: process.env.REDIS_PASSWORD,
  redis_ttl: process.env.REDIS_TTL,
  enable_cache: process.env.ENABLE_CACHE,
}));
