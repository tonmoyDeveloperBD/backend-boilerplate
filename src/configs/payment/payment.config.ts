import { registerAs } from '@nestjs/config';
import * as process from 'process';
export default registerAs('payment', () => ({
  bkash: process.env.BKA,
  sslcommerz: process.env.SSL,
  otherss: process.env.OTH,
}));
