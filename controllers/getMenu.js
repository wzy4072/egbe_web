
let readfile = require('./readjson.js')

var getMenus = async (ctx, next) => {
  ctx.response.body = readfile('/account/menus')
};

module.exports = {
  'POST /getMenus': getMenus
};