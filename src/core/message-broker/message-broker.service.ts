import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { MessageBrokerChannel } from '@/core/message-broker/channel/message-broker.channel';
import { MailService } from '@/core/mail/mail.service';
import { SendMailWithTemplate } from '@/core/mail/dto/mail-with-template.input';

@Injectable()
export class MessageBrokerService {
  constructor(private mailService: MailService) {}

  @OnEvent(MessageBrokerChannel.SEND_MAIL_WITH_TEMPLATE)
  async handleOrderCreatedEvent(payload: SendMailWithTemplate) {
    await this.mailService.sendSingleEmailWithTemplate(payload);
  }
}
