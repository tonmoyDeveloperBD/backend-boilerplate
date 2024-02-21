import { Injectable } from '@nestjs/common';
import { MessageBrokerChannel } from '@/core/message-broker/channel/message-broker.channel';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { SendMailWithTemplate } from '@/core/mail/dto/mail-with-template.input';

@Injectable()
export class MessageBrokerRequest {
  constructor(private eventEmitter: EventEmitter2) {}

  async callSendMailWithTemplate(payload: SendMailWithTemplate) {
    this.eventEmitter.emit(MessageBrokerChannel.SEND_MAIL_WITH_TEMPLATE, payload);
  }
}
