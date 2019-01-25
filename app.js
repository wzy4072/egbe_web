const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-session')
// const controller = require('./controllers')
const mongoose = require('mongoose')
const tools = require('./common/tools')
const path = require('path')
const db = 'mongodb://localhost/nodeapi'
// require('babel-register')


// mongoose连接数据库
mongoose.Promise = require('bluebird')
mongoose.connect(db)

// 引入各模块
const models_path = path.join(__dirname, '/app/models')
tools.reqFils(models_path,function(file){ require(file)})

const app = new Koa()
app.use(logger())
app.use(session(app))
app.use(bodyParser())

// 使用路由转发请求
const router = require('./app/router')()
app.use(router.routes())
   .use(router.allowedMethods());

app.use(async (ctx, next) => {
    console.log('有人访问我啦！-----------------------------------')
    console.log(ctx)
    // ctx.header['Access-Control-Allow-Origin'] = '*';
    await next()
})
// app.use(controller())


app.listen(3000)
console.log('app start at port 3000')