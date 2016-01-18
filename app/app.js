var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = 'Welcome to my World!';
});


app.listen(3000);

