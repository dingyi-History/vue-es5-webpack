var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
	// 插件项
	plugins: [
	  commonsPlugin
	],
	// 页面入口文件配置
	entry: {
		index: './src/main.js'
	},
	// 入口文件输出配置
	output: {
		path: 'dist/',
		filename: '[name].js'
	},
	module: {
		// 加载器配置
		loaders: [
		  // CSS 加载器 ,正则匹配文件结尾
		  { test: /\.css$/,loader: 'style-loader!css-loader'},
		  // JS加载器
		  //  png/jpg加载器
		  { test:/\.(png|jpg)$/,loader: 'url-loader?limit=8192'}
		]
	}
}