import { Controller } from '@nestjs/common';
import { MessageBrokerRequest } from '@/core/message-broker/request/message-broker.request';
import { PrismaService } from '@/core/database/prisma.service';
import { CacheService_ } from '@/core/cache/cache.service';

@Controller()
export class AppController {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly messageBrokerRequest: MessageBrokerRequest,
    private readonly cacheService: CacheService_,
  ) {}
}
