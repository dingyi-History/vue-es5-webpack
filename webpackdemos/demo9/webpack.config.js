var ExtractTextPlugin = require("extract-text-webpack-plugin")

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
			{ test: /\.css$/,loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
		]
	},
	plugins: [
        new ExtractTextPlugin("build.css")
    ]
}