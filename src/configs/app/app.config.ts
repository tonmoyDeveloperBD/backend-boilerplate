import { registerAs } from '@nestjs/config';

/**
 * File path to the configuration file.
 */
export default registerAs('app', () => ({}));
