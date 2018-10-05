import 'source-map-support/register';

import Settings from '../settings';
import app from './app';


app.listen(
  Settings.PORT,
  // eslint-disable-next-line no-console
  (): void => console.log(`Listening on port ${Settings.PORT}...`),
);
