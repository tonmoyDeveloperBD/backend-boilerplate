/*
|--------------------------------------------------------------------------
|--> Config Services
|--------------------------------------------------------------------------
| This file is used to register the configuration services.
| The configuration services are used to load the configuration files.
| The configuration files are used to set the application configuration.
*/

import config___app from '@/configs/app/app.config';
import config___db from '@/configs/db/db.config';
import config___loggly from '@/configs/loggly/loggly.config';

/**
 * Register the configuration services.
 */
export default [config___app, config___db, config___loggly];
