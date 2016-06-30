var Vue = require("vue")
var a = require('./js/a.js')
var b = require('./js/b.js')
a.push(b)

new Vue({
	el: "body",
	data: {
		message: "我是来自vue的消息",
		list: a

	}
})