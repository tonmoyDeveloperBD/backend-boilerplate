import { Args, Query, Resolver } from '@nestjs/graphql';
import { CacheTTL } from '@nestjs/cache-manager';
// import { CacheTTL } from '@nestjs/cache-manager';

@Resolver()
export class FooResolver {
  // @CacheKey('hi')
  // //@UseInterceptors(CacheInterceptor)
  @Query(() => String, { name: 'hi' })
  sayHello(): string {
    return 'Hello World!';
  }

  @Query(() => String, { name: 'hi2' })
  //@CacheTTL(100)
  sayHello2(@Args('test_name') name: string): string {
    return 'Hello';
  }
}
