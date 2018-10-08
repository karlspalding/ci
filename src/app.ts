import Koa from 'koa';


const app = new Koa();

app.use(async (ctx): Promise<void> => {

  ctx.body = 'Hello, World!';

});

export default app;
