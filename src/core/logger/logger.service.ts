import { Injectable } from '@nestjs/common';
import { Logger } from 'pino';
import pino from 'pino';
import { LogglyService } from '@/core/logger/loggly/loggly.service';

@Injectable()
export class LoggerService {
  private readonly logger: Logger;

  constructor(private readonly logglyService: LogglyService) {
    this.logger = pino({
      name: 'App',
      level: 'info', // Set your desired log level
      redact: ['req.headers.authorization'],
      // prettyPrint: {
      //   colorize: true,
      //   translateTime: 'yyyy-dd-mm, h:MM:ss TT',
      //   ignore: 'pid,hostname',
      // },
      timestamp: pino.stdTimeFunctions.isoTime,
      formatters: {
        level: (label: string) => ({ level: label }),
      },
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
          ignore: 'pid,hostname',
          crlf: true,
          levelFirst: true,
          translateTime: 'yyyy-dd-mm, h:MM:ss TT',
        },
      },
    }); //.child({ loggly: logglyService });
  }

  error(message: string, trace: string) {
    this.logger.error(message, trace);
  }

  warn(message: string) {
    this.logger.warn(message);
  }

  log(message: string) {
    this.logger.info(message);
  }

  debug(message: string) {
    this.logger.debug(message);
  }
}
