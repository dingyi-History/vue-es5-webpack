module.exports = {
	entry: './src/main.js',
	output: {
		path: './dist',
		filename: 'build.js',
		publicpath: '/dist/'
	},
	module: {
		loaders: [
		  {
		  	test: /\.vue$/,
		  	loader: 'vue'
		  }
		]
	}

}