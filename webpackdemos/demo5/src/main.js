var Vue = require('vue')
require('./css/list.css')

var testComponent = require("./components/test/test")

new Vue({
	name: "mainjs",
	el: '#app',
	data: {
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
	},
	components: {
		"test": testComponent
	}
})