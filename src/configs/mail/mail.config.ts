import { registerAs } from '@nestjs/config';
import * as process from 'process';
export default registerAs('mail', () => ({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  user: process.env.EMAIL_USER,
  password: process.env.EMAIL_PASSWORD,
  secure: process.env.EMAIL_SECURE,
}));
