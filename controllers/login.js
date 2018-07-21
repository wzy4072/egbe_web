
let readfile = require('./readjson.js')

var login = async (ctx, next) => {
  let userList = readfile('/account/users')
  const reqUser = ctx.request.body.username
  const reqPass = ctx.request.body.password
  let userInfoList = userList.filter(item => { return item.userName == reqUser })

  let resp = readfile('/error')
  if (userInfoList.length == 0) {
    resp.message = '用户不存在'
    ctx.response.body = resp
  } else {
    if (userInfoList[0].passWord !== reqPass) {
      resp.message = '密码不正确！'
      ctx.response.body = resp
    } else {
      let resp2 = readfile('/succ')
      ctx.response.body = resp2
    }
  }
};
var loginState = async (ctx, next) => {
  // console.log(ctx.request.header)
  ctx.response.body = readfile('/succ')
};



module.exports = {
  'POST /account/login': login,
  'GET /account/loginstate': loginState
};