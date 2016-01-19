import koa from 'koa';
let app = koa();

app.use(function *(){
  this.body = 'Welcome to my World!';
});


export default app;

