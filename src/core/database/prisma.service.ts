import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly prisma: PrismaClient;

  constructor() {
    super();
    this.prisma = new PrismaClient();
  }

  async onModuleInit() {
    await this.prisma.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    process.on('SIGTERM', async () => {
      await this.prisma.$disconnect();
      await app.close();
    });
  }

  getPrismaClient(): PrismaClient {
    return this.prisma;
  }
}
