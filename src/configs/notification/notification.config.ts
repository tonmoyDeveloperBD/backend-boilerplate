import { registerAs } from '@nestjs/config';

export default registerAs('notification', () => ({
  type: process.env.TYPE,
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKEN_URI,
  auth_cert_url: process.env.AUTH_CERT_URL,
  client_cert_url: process.env.CLIENT_CERT_URL,
  universal_domain: process.env.UNIVERSAL_DOMAIN,
}));
