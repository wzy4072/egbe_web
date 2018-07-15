var fn_hello = async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.type = 'application/json';

    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
};
var test = async (ctx, next) => {
    console.log(ctx)
    ctx.response.type = 'application/json';
    ctx.response.body = `<h1>Hello, test!</h1>`;
    // ctx.response.status = 200
};

module.exports = {
    'GET /hello/:name': fn_hello,
    'GET /test': test
};