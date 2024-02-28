import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MessageBrokerService } from '@/core/message-broker/message-broker.service';
import { MailService } from '@/core/mail/mail.service';
import { NotificationService } from '@/core/notification/notification.service';
import { FirebaseService } from '@/shared/services/firebase-service/firebase.service';
import { NotificationModule } from '@/core/notification/notification.module';
import { FirebaseModule } from '@/shared/services/firebase-service/firebase.module';

@Module({
  imports: [EventEmitterModule.forRoot(), NotificationModule, FirebaseModule],
  providers: [MessageBrokerService, MailService],
  exports: [MessageBrokerService],
})
export class MessageBrokerModule {}
