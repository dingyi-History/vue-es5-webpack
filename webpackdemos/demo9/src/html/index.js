//  html注册表 好处在于不需要每次自己去找层级，固定引入一个对象就可以获取到所有的html

module.exports = {
	app: require('./app.html'),
	view1: {
		index: require('./view1/index.html'),
		list: require('./view1/list.html')
	},
	view2: {
		index: require('./view2/index.html'),
		list: require('./view2/list.html')
	}
}