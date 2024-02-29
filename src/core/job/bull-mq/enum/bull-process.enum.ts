export enum BullProcessEnum {
  ORDER_PROCESS = 'orderProcess',
  PAYMENT_PROCESS = 'paymentProcess',
  MAIL_SEND = 'mailSend',
  OTP_SEND = 'otpSend',
}

export enum BullNotificationProcessEnum {
  NOTIFICATION_SEND_TO_TOPIC = 'notificationSendToTopic',
  NOTIFICATION_SEND = 'notificationSend',
  NOTIFICATION_SUBSCRIBE_TO_TOPIC = 'notificationSubscribeTopic',
  NOTIFICATION_UNSUBSCRIBE_TO_TOPIC = 'notificationUnsubscribeTopic',
}
