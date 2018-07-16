
let readfile = require('./readjson.js')

var login = async (ctx, next) => {
  ctx.response.setHeader('Set-Cookie', ['username=stephon', 'token=wzy4072']);
  ctx.response.body = readfile('/succ')
};
var loginState = async (ctx, next) => {
  console.log(ctx.request.header)
  ctx.response.body = readfile('/succ')
};

module.exports = {
  'POST /account/login': login,
  'GET /account/loginstate': loginState
};