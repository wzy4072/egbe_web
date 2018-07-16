// 这个文件的功能是根据路由 指向不同的处理方法
// 默认指向 /controllers下的js文件
// js必须如下 POST EGT 大写加空格加访问路径
// module.exports = {
//     'GET /hello/:name': fn_hello
// };

const fs = require('fs')

function addMapping(router, mapping) {
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4)
            router.get(path, mapping[url])
            console.log(`注册路由：GET：${path}`)
        }
        if (url.startsWith('POST ')) {
            var path = url.substring(5)
            router.post(path, mapping[url])
            console.log(`注册路由：POST ${path}`)
        }
        if (url.startsWith('OPTIONS ')) {
            var path = url.substring(5)
            router.options(path, async (ctx, next) => {
                ctx.response.status = 200
                ctx.response.body = '允许跨域'
            })
        }
    }

}

function addControllers(router) {
    var files = fs.readdirSync(__dirname + '/controllers')
    var js_files = files.filter((f) => {
        return f.endsWith('.js')
    })
    for (var f of js_files) {
        let mapping = require(__dirname + '/controllers/' + f)
        addMapping(router, mapping)
    }
}

module.exports = function () {
    const router = require('koa-router')()
    addControllers(router)
    return router.routes()
}