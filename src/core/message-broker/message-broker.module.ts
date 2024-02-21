import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MessageBrokerService } from '@/core/message-broker/message-broker.service';
import { MailService } from '@/core/mail/mail.service';

@Module({
  imports: [EventEmitterModule.forRoot()],
  providers: [MessageBrokerService, MailService],
  exports: [],
})
export class MessageBrokerModule {}
