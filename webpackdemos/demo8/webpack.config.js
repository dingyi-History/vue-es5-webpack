module.exports = {
	entry: './src/main.js',
	output: {
		path: './dist',
		filename: 'build.js',
		publicPath: '/dist/'
	},
	module: require('./webpack.config/module.js')
}