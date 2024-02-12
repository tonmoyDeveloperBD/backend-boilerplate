import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoggerService } from '@/core/logger/logger.service';
import { Loggly } from 'loggly';

@Injectable()
export class LogglyService {
  private readonly loggly: Loggly;
  constructor(private readonly configService: ConfigService) {
    if (this.configService.get('loggly')) {
      const config = this.configService.get('loggly');
      this.loggly = new Loggly({
        token: config.token,
        subdomain: config.subdomain,
        tags: config.tags,
        json: config.json,
      });
      //logger.log('@LogglyService - Loggly configured');
    } else {
      //logger.error('@LogglyService - Loggly is not configured', 'LogglyService');
    }
  }

  log(message: string) {
    this.loggly.log(message);
  }
}
