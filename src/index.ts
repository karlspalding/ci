import 'source-map-support/register';

import app from './app';


const PORT = 3000;

app.listen(
  PORT,
  // eslint-disable-next-line no-console
  (): void => console.log(`Listening on port ${PORT}...`),
);
