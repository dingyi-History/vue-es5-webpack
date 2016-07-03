var Vue = require('vue')
var VueRouter = require('vue-router')
Vue.use(VueRouter)
var router = new VueRouter()
var app = require('./js/app.js')
require('./css')

router.map({
    '/': {
        component: require('./js/view1')
    },
    '/v2': {
        component: require('./js/view2')
    }
})

router.start(app,'app')