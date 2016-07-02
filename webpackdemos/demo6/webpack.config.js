module.exports = {
	entry: "./src/main.js",
	output: {
		path: "./dist",
		publicPath: "/dist/",
		filename: "build.js"
 	},
 	module: {
      loaders: [
        { test: /\.css$/, loaders: ['style', 'css'] }, // CSS 加载器
        { test: /\.html$/,loader: "html-loader" }
      ]
    }
}