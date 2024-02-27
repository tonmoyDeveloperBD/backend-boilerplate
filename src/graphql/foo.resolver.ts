import { Args, Query, Resolver } from '@nestjs/graphql';
import { NotificationService } from '@/core/notification/notification.service';
import { BullService } from '@/core/job/bull-mq/bull.service';

@Resolver()
export class FooResolver {
  constructor(
    private readonly notificationService: NotificationService,
    private readonly bullService: BullService,
  ) {}
  // @Query(() => Object, { name: 'hi' })
  // @DisableCache()
  // async sayHello(): Promise<any> {
  //   // let result = await this.notificationService.sendNotificationToTopic('1', {
  //   //   notification: {
  //   //     title: 'hi',
  //   //   },
  //   // });
  //   //
  //   // console.log(result);
  //
  //   // throw new GraphQLError('Test Error', {
  //   //   extensions: {
  //   //     code: 403,
  //   //     status: 'FAILED',
  //   //   },
  //   // });
  //   const data = { message: 'Success!' };
  //   const successResponse = SuccessResponse.create(data, 200, 'SUCCESS');
  //   console.log(successResponse);
  //   return successResponse;
  // }

  // @Query(() => SuccessResponse, { name: 'hi' })
  // async sayHello(): Promise<SuccessResponse<FooEntity[]>> {
  //   const array: FooEntity[] = [{ name: 'tonmoy' }, { name: 'sumaiya' }];
  //
  //   return SuccessResponse.create(array, 200, 'SUCCESS');
  // }
  //
  @Query(() => String, { name: 'hi2' })
  async sayHello2(@Args('test_name') name: string): Promise<string> {
    // await this.bullService.orderProcess({
    //   message: 'HI',
    //   notification: 'tst',
    // });
    return `Hello ${name}`;
  }
  @Query(() => String, { name: 'hi' })
  async test(): Promise<string> {
    return `Hello`;
  }
}
