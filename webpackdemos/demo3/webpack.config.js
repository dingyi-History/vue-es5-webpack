module.exports = {
	entry: './src/app.js',
	output: {
		path: './bin',
		filename: 'app.build.js'
	},
	module: {
		loader: [{
			// 加载所有的js后缀文件
			test: /\.js$/,
			// 除了node_modules文件夹
			exclude: /node_modules/,
			// 选用的加载器
			loader: 'babel-loader'
		}]
	}
}