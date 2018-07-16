const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const controller = require('./controllers')

app.use(async (ctx, next) => {
    console.log('有人访问我啦！-----------------------------------')
    // ctx.header['Access-Control-Allow-Origin'] = '*';
    await next()
})

app.use(async (ctx, next) => {
    if (ctx.request.method === 'OPTIONS') {
        console.log(ctx.response)
        ctx.response.header["Access-Control-Allow-Origin"] = "*"
        ctx.response.header['Access-Control-Allow-Methods'] = 'OPTIONS,GET,POST,PUT,DELETE'
        ctx.response.header["Access-Control-Allow-Headers"] = "Origin,X-Requested-With,Content-Type,Accept,Authorization"
        ctx.response.header["cache-control"] = "no-cache"
        ctx.response.header["content-type"] = "application/json; charset=utf-8"
        ctx.response.header["ETag"] = ''
        ctx.response.body = {}
        console.log(ctx.response)
    }
})

app.use(bodyParser())


app.use(controller())

app.listen(3000)
console.log('app start at port 3000')