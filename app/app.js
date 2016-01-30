import koa from 'koa';
const logger = require('koa-logger')
const serve = require('koa-static')


const app = koa();
app.use(logger())
app.use(serve('public'))

app.use(function *(){
  this.body = 'Welcome to my World!!!!!!';
});


export default app;

