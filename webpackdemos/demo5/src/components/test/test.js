var Vue = require("vue")
var test_html = require('./test.html')
require('./test.css')


var test = Vue.extend({
	name: "test",
	data: function() {
		return {
		    testmsg: "测试一下引入组件"
		}
	},
	template: test_html
})

module.exports = test