// 这个文件是项目入口
const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const controller = require('./controllers')

// request 的解析插件
app.use(bodyParser)

app.use(async (ctx, next) => {
    // 先设置 允许跨域
    console.log(`有人访问我啦～`)
    await next()
})
app.use(async (ctx, next) => {
    console.log(`有人访问我啦～2`)
})

app.listen(3000)
console.log('app start at port 3000')