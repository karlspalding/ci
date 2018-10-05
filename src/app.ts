import express, { Request, Response } from 'express';

import Settings from '../settings';
import crypto from 'crypto';
import parser from 'body-parser';


const app = express();

const verify = (req: Request, _res: Response, buf: Buffer): void => {

  const signature = req.get('X-Hub-Signature');

  if (typeof signature === 'undefined') {

    throw new Error('Webhooks must set a valid X-Hub-Signature header.');

  }

  const digest = crypto.createHmac('sha1', Settings.SECRET).update(buf)
    .digest();

  const valid = crypto.timingSafeEqual(
    digest,
    Buffer.from(signature.slice(5), 'hex'),
  );

  if (!valid) {

    throw new Error('Webhooks must set a valid X-Hub-Signature header.');

  }

};

app.use(parser.json({ verify }));

app.get('/', (_req, res): Response => res.send('Hello, World!'));

app.post('/', (req, res): void => {

  // eslint-disable-next-line no-console
  console.log(req.body);

  res.end();

});

export default app;
