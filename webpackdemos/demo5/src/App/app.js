var test = require('../components/test/test')
var app_html = require('./app.html')
require('./app.css')

module.exports = {
	template: app_html,
	components: {
		test
	}
}