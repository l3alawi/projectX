var helpers = require('./helpers');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	entry: './src/index.js',


	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader', exclude: /node_modules/
			},
			{
				test: /\.jsx$/,
				loader: 'babel-loader', exclude: /node_modules/
			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'file-loader?name=assets/[name].[hash].[ext]'
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader?sourceMap'
				})
			}

		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			inject: 'body'
		})
	]
}
