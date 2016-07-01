var Vue = require("vue")
var test_html = require('./test.html')
require('./test.css')


var test = Vue.extend({
	name: "test",
	data: function() {
		return {
		    testmsg: "测试一下引入组件",
		    msg: "来自又一个vue的消息，也来自 webpack-dev-server",
			list: [
			  "总",
			  "觉",
			  "得",
			  "webpack-dev-server",
			  "比",
			  "broswersync",
			  "热加载",
			  "慢一些"
			],
			other: "然后另一个情况是,根HTML不进行热加载"
		}
	},
	template: test_html
})

module.exports = test