require('./index.css')
module.exports = {
	template: require('./index.html'),
	components: {
		list : require('./list'),
		basebtn: require('../base/utils/btn')
	}
}