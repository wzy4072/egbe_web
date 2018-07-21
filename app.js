const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const controller = require('./controllers')

app.use(bodyParser())

app.use(async (ctx, next) => {
    console.log('有人访问我啦！-----------------------------------')
    // console.log(ctx)
    // ctx.header['Access-Control-Allow-Origin'] = '*';
    await next()
})

app.use(controller())

app.listen(3000)
console.log('app start at port 3000')