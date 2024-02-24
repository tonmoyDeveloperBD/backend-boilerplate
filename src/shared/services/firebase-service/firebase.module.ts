import { Module } from '@nestjs/common';
import { FirebaseProvider } from '@/shared/services/firebase-service/firebase.option';
import { ConfigModule } from '@nestjs/config';
import { FirebaseService } from '@/shared/services/firebase-service/firebase.service';

@Module({
  imports: [ConfigModule],
  providers: [FirebaseProvider, FirebaseService],
  exports: [FirebaseService],
})
export class FirebaseModule {}
