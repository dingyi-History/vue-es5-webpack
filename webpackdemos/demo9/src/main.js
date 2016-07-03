var Vue = require('vue')
var VueRouter = require('vue-router')
var app = require('./js/app.js')
var routerConfig = require('./router.js')
Vue.use(VueRouter)
require('./css')

let router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  transitionOnLoad: true
})

// 独立出来的路由配置
routerConfig(router)

router.start(app,'app')