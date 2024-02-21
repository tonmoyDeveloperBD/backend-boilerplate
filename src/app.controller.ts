import { Controller, Get } from '@nestjs/common';
import { MessageBrokerRequest } from '@/core/message-broker/request/message-broker.request';
import { PrismaService } from '@/core/database/prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly messageBrokerRequest: MessageBrokerRequest,
  ) {}
  @Get('test')
  async test() {
    // await this.messageBrokerRequest.callSendMailWithTemplate({
    //   to: 'tonmoypersonal@gmail.com',
    //   subject: 'hi',
    //   template: PugTemplateEnum.WELCOME,
    //   context: { name: 'Tonmoy' },
    // });
    return 'HELLO My Boy';
  }

  @Get('t')
  async t() {
    await this.prismaService.user.create({
      data: {
        email: 'tonmoy.developer.bd@gmail.com',
        name: 'tonmoy',
      },
    });
    let result = await this.prismaService.user.findMany();
    return result;
  }
}
