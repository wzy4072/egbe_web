const Router = require('koa-router')
const User = require('./controllers/user')

module.exports = function(){
	// var router = new Router({
  //   prefix: '/api'
  // })
  var router = new Router()

//   router.post('/signup', App.hasBody, User.signup)
//   router.post('/update', App.hasBody, App.hasToken, User.update)
  router.post('/account/login',User.users)
//   router.post('/user/delete', App.hasBody, User.deleteUser)
  return router
}