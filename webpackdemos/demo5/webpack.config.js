var path = require('path') // 用于处理相对路径和绝对路径的转换 https://nodejs.org/docs/latest/api/path.html#path_path_resolve_path NodeJS中的Path对象，用于处理目录的对象，提高开发效率。 
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
	entry: {
		app: ["./src/main.js"] // 入口文件
	},
	output: {
		path: path.resolve(__dirname,"dist"),  // 相当于不断的调用系统的cd命令 转为绝对路径
		publicPath: "/dist/",
		filename: "build.js"
 	},
 	module: {
      loaders: [
        { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
        { test: /\.html$/,loader: "html-loader" }
      ]
    },
    plugins: [
        new ExtractTextPlugin("build.css")
    ]
}