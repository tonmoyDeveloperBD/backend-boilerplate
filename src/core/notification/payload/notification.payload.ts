import { Field, InputType } from '@nestjs/graphql';
import { DataMessagePayload, NotificationMessagePayload } from 'firebase-admin/lib/messaging/messaging-api';

@InputType()
export class NotificationPayload {
  @Field()
  topic: string;

  @Field()
  data: DataMessagePayload;

  @Field()
  notification: NotificationMessagePayload;
}
