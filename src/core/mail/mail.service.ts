import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { SendMailWithTemplate } from '@/core/mail/dto/mail-with-template.input';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendSingleEmailWithTemplate(sendMailWithTemplate: SendMailWithTemplate): Promise<boolean> {
    return Boolean(await this.mailerService.sendMail(sendMailWithTemplate));
  }
}
