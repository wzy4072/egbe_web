const Koa = require('koa');
const app = new Koa()
// const bodyParser = require('koa-bodyparser')
const controller = require('./controllers')

// app.use(bodyParser)

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
    console.log('hello')
    await next();
});

app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'application/json';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');