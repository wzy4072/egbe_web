let readfile = require('./readjson.js')

var fn_hello = async (ctx, next) => {
    var name = ctx.params.name;
    // ctx.response.type = 'application/json';
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
};
var test = async (ctx, next) => {
    // ctx.response.type = 'application/json';
    console.log(ctx)
    let result = readfile('/stu/list/add')
    ctx.response.body = result;
};

module.exports = {
    'GET /hello/:name': fn_hello,
    'GET /test': test
};