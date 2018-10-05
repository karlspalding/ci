import request, { Test } from 'supertest';
import HTTP from 'http-status-codes';
import app from '../src/app';


test('Index returns Hello, World', (): Test => request(app)
  .get('/')
  .expect(HTTP.OK)
  .expect('Hello, World!'));
