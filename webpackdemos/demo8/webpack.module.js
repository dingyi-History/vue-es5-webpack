module.exports = {
		loaders: [
			{ test: /\.html$/,loader: 'html-loader' },
			{ test: /\.css$/,loader: "style-loader!css-loader!postcss-loader" }
		],
		postcss: function () {
          return [require('autoprefixer'), require('precss')];
        }
	}