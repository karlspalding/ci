import express, { Request, Response } from 'express';
import request, { SuperAgentRequest } from 'superagent';

import Settings from '../settings';
import crypto from 'crypto';


interface Commit {
  id: string;
}

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

app.use(express.json({ verify }));

app.get('/', (_req, res): Response => res.send('Hello, World!'));

app.post('/', async (req, res): Promise<void> => {

  const repo = req.body.repository.name;
  const owner = req.body.repository.owner.name;
  const { commits } = req.body;

  await Promise.all(commits.map((commit: Commit): SuperAgentRequest => {

    const sha = commit.id;
    const path = `repos/${owner}/${repo}/statuses/${sha}`;
    // eslint-disable-next-line no-console
    console.log(`/repos/${owner}/${repo}/statuses/${sha}`);

    return request.post(`https://api.github.com/${path}`)
      .set('Authorization', `token ${Settings.TOKEN}`)
      .send({
        context: 'ci',
        state: 'pending',
      });

  }));

  res.end();

});

export default app;
