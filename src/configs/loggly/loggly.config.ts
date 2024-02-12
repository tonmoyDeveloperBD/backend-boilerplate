import { registerAs } from '@nestjs/config';

export default registerAs('loggly', () => ({
  token: process.env.LOGGLY_TOKEN || '538f678f-8ccd-4123-9a83-40cf36b82b50',
  subdomain: process.env.LOGGLY_SUBDOMAIN || 'tonmoy.loggly.com',
  tag: process.env.LOGGLY_TAG || ['Hutmart', 'App'],
  json: process.env.LOGGLY_JSON || true,
}));
