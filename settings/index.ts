import * as development from './development';
import * as production from './production';
import * as test from './test';

import crypto from 'crypto';


interface Settings {
  PORT: number;
  SECRET: string;
}

let settings: Settings = {
  PORT: 3000,
  SECRET: crypto.randomBytes(32).toString('hex'),
};

// eslint-disable-next-line no-process-env
const environment = process.env.NODE_ENV || 'development';

switch (environment) {

case 'development':
  settings = development;
  break;
case 'production':
  settings = production;
  break;
case 'test':
  settings = test;
  break;
default:
  throw new Error(`No settings found for ${environment} environment.`);

}

export default settings;
