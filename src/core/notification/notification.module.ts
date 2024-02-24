import { Module } from '@nestjs/common';
import { FirebaseModule } from '@/shared/services/firebase-service/firebase.module';

@Module({
  imports: [FirebaseModule],
  providers: [],
  exports: [],
})
export class NotificationModule {}
