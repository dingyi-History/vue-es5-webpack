module.exports = {
	entry: './src/main.js',
	output: {
		path: './dist',
		filename: 'build.js',
		publicPath: '/dist/'
	},
	module: {
		loaders: [
			{ test: /\.html$/,loader: 'html-loader' },
			{ test: /\.css$/,loaders: ['style','css'] }
		]
	}
}