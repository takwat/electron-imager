const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [
	//	Browser JavaScript
	{
		mode: 'development',
		entry: './src/index.js',
			target: 'electron-renderer',
			output: {
			path: `${__dirname}/dist`,
			filename: 'index.js'
		},
		module: {
			rules: [
				{
					test: /\.vue$/,
					use: [
						{
							loader: 'vue-loader',
							options: {
								scss: 'vue-style-loader!css-loader!sass-loader'
							}
						}
					]
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: [
						{
						loader: 'babel-loader'
						}
					]
				},
				{
					test: /\.(png|jpg|gif|svg)$/,
					loader: 'file-loader',
					options: {
						name: '[name].[ext]?[hash]'
					}
				},
				{
					test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
					loader: 'url-loader'
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				},
				{
					test: /\.scss$/,
					use: ['style-loader', 'css-loader', 'sass-loader']
				}
			]
		},
		resolve: {
		// modules: [path.join(__dirname, 'src'), 'node_modules'],
		alias: {
			'@': path.resolve(__dirname, 'src/'),
			vue$: 'vue/dist/vue.esm.js'
		},
		extensions: ['*', '.vue', '.js']
		},
		plugins: [
			new webpack.ProvidePlugin({
				jQuery: 'jquery',
				$: 'jquery',
				'window.jQuery': 'jquery',
			}),
			new VueLoaderPlugin(),
			new copyWebpackPlugin([
				{ from: './src/*.html', to: '[name].[ext]' },
				{ from: './src/package.json' },
			])
		]
	},
	//	Main
	{
		mode: 'development',
		entry: './src/main.js',
		target: 'electron-main',
		output: {
			path: `${__dirname}/dist`,
			filename: 'main.js'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'babel-loader'
						}
					]
				}]
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src/'),
			},
			extensions: ['*', '.js']
		},
	}
]
