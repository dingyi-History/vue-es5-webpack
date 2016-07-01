var Vue = require('vue')

var testComponent = require("./components/test/test")

new Vue({
	el: 'app',
	components: {
		"test": testComponent
	},
	template: '<test></test>'
})