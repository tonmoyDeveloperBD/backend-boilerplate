import { SetMetadata } from '@nestjs/common';
/**
 * Decorator for disabling caching for a specific method.
 *
 * Usage:
 * Apply this decorator to methods in your controllers or services where you want to disable caching.
 * When applied, caching will be bypassed for the annotated method.
 *
 * Example:
 * ```
 * import { Controller, Get } from '@nestjs/common';
 * import { DisableCache } from '@/core/decorators/disable-cache.decorator';
 *
 * @Controller()
 * export class AppController {
 *
 *   @Get('test')
 *   @DisableCache()
 *   async test() {
 *     return 'This method is not cached';
 *   }
 * }
 * ```
 *
 * This example disables caching for the 'test' method in the `AppController`.
 */
export const DisableCache = () => SetMetadata('disableCache', true);
