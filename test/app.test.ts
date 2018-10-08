import HTTP from 'http-status-codes';
import app from '../src/app';
import request from 'supertest';


test('Index returns Hello, World', async (): Promise<void> => {

  const instance = app.listen();
  const response = request(instance).get('/');

  response.expect(HTTP.OK);
  response.expect('Hello, World!');

  instance.close();

});
