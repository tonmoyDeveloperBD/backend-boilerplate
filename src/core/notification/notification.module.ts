import { Module } from '@nestjs/common';
import { FirebaseModule } from '@/shared/services/firebase-service/firebase.module';
import { NotificationService } from '@/core/notification/notification.service';

@Module({
  imports: [FirebaseModule],
  providers: [NotificationService],
  exports: [NotificationService],
})
export class NotificationModule {}
