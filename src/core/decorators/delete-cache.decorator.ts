import { SetMetadata } from '@nestjs/common';
/**
 * Decorator for deleting cache keys with a specified pattern after method execution.
 *
 * @param pattern The pattern of cache keys to delete.
 *
 * Usage:
 * Apply this decorator to methods in your controllers or services where you want to delete cache keys
 * with a specific pattern after method execution.
 *
 * Example:
 * ```
 * import { DeleteCacheKeysWithPattern } from '@/core/decorators/cache.decorator';
 *
 * @Controller()
 * export class AppController {
 *
 *   @Get('test')
 *   @DeleteCacheKeysWithPattern('/test')
 *   async test() {
 *     return 'result';
 *   }
 * }
 * ```
 *
 * This example deletes cache keys with the pattern '/test' after the 'test' method is executed.
 */
export const DeleteCache = (pattern: string) => SetMetadata('deleteCache', pattern);
