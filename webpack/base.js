const webpack = require('webpack');
const path = require('path');
// webpack 4.0 中用来抽离css 的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
let host = require('../src/config/config.js');
const HappyPack = require('happypack');
const os = require('os');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
// 针对 Lodash 按需打包
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const nodeModules = path.resolve(__dirname, '../node_modules');
const nodeENV = process.env.NODE_ENV;
const isDev = (nodeENV != 'prevProduction' && nodeENV != 'production');
const isLocalServeENV = (nodeENV == 'development');
const uglify = require('uglifyjs-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const happyThreadPool = HappyPack.ThreadPool({
	size: os.cpus().length
});
function createHappyPlugin(id, loaders) {
	return new HappyPack({
		id: id,
		loaders: loaders,
		threadPool: happyThreadPool,
	});
}
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const projectPath = path.resolve(__dirname, '../');
const sourceCodePath = path.join(projectPath, '/src');
const distExportPath = path.join(projectPath, '../../web/static/supervise');
let bundleTime = function() {
	let date = new Date();
	let year = date.getFullYear();
	//获取当前月份的日期
	let mouth = date.getMonth() + 1;
	let day = date.getDate();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	let milliseconds = date.getMilliseconds();
	return (year + '-' + mouth + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + milliseconds);
};
let cssLoaderMiniCssExtractPluginRule = {
	//将CSS提取为独立的文件的插件，对每个包含css的js文件都会创建一个CSS文件
	loader: MiniCssExtractPlugin.loader,
	options: {
		// you can specify a publicPath here
		// by default it use publicPath in webpackOptions.output
		publicPath: '../'
	}
};

module.exports = {
    mode: isDev ? 'development' : 'production',
	//解决开发代码与实际运行代码不一致
	devtool: isDev ? 'cheap-module-eval-source-map' : 'nosources-source-map',
	entry: {
		context: [path.join(sourceCodePath, '/main.js')]
	},
	output: {
		path: distExportPath,
		filename: '[name].[hash].js',
	},
    performance: {
        //资源(asset)和入口起点超过指定文件限制
        hints: false
    },
	//提取第三方库和公共模块，避免首屏加载的bundle文件或者按需加载的bundle文件体积过大，从而导致加载时间过长
	optimization: {
        //优化持久化缓存的
        // runtime 指的是 webpack 的运行环境(具体作用就是模块解析, 加载) 和 模块信息清单, 模块信息清单在每次有模块变更(hash 变更)时都会变更, 所以我们想把这部分代码单独打包出来
        //告诉 webpack 是否要把这部分单独打包出来.
        runtimeChunk: {
            name: 'manifest'
        },
        // 压缩js代码
		minimizer: [new uglify({
			// sourceMap:cheap-source-map选项不适用于此插件
			sourceMap: true,
			// 使用多进程并行运行来提高构建速度
			parallel: true,
			// UglifyJS 压缩选项
			uglifyOptions: {
				// 去掉debugger
				drop_debugger: true
			}
        })],
		splitChunks: {
			cacheGroups: {
                // 将多个css chunk合并成一个css文件  项目工程中自定义的公共样式及引入第三方组件的样式
                styles: {
                    name: 'globalPublic',
                    test: /\.css$/,
                    chunks: 'all',
                    //强制生成
                    enforce: true
                },
                //vendor.js中应该包含node_modules公共模块
                vendor: {
                    //缓存组的规则，表示符合条件的的放入当前缓存组
                    test: /node_modules/,
                    chunks: 'all',
                    //重写文件名称
                    name: 'nodeModules',
                    priority: 10,
                    minSize: 0,
                },
			}
		},
	},
	module: {
		rules: [{
				test: /\.vue$/,
				exclude: nodeModules,
				include: sourceCodePath,
				loader: 'vue-loader'
			}, {
				test: /\.js$/,
				exclude: nodeModules,
				include: sourceCodePath,
				use: ['happypack/loader?id=happy-babel-js']
			}, {
				test: /\.(css|less)$/,
				// use: [{
				// 		//将CSS提取为独立的文件的插件，对每个包含css的js文件都会创建一个CSS文件
				// 		loader: MiniCssExtractPlugin.loader,
				// 		options: {
				// 			// you can specify a publicPath here
				// 			// by default it use publicPath in webpackOptions.output
				// 			publicPath: '../'
				// 		}
				// 	},
				// 	{
				// 		loader: 'css-loader',
				// 		options: {
				// 			// 开启 CSS Modules
				// 			modules: true,
				// 			// 自定义生成的类名
				// 			localIdentName: '[name]--[local]--[hash:base64:8]'
				// 		}
				// 	},
				// 	// 对 CSS 进行各种不同的转换和处理
				// 	'postcss-loader',
				// 	'less-loader',
				// ],
				oneOf: [
					// 这里匹配 `<style module>`
					{
						resourceQuery: /module/,
						use: [
							cssLoaderMiniCssExtractPluginRule,
							{
								loader: 'css-loader',
								options: {
									modules: true,
									// localIdentName: '[path][name]__[local]--[hash:base64:5]'
								}
							},
							// 对 CSS 进行各种不同的转换和处理
							'postcss-loader',
							'less-loader',
						]
					},
					// 这里匹配普通的 `<style>` 或 `<style scoped>`
					{
					  	use: [
							cssLoaderMiniCssExtractPluginRule,
							'css-loader',
							// 对 CSS 进行各种不同的转换和处理
							'postcss-loader',
							'less-loader',
						]
					}
				  ]
			}, {
				test: /\.(gif|jpg|png)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8192,
						publicPath: './',
						name: 'images/[name].[hash:8].[ext]'
					}
				}]
			}, {
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
				use: [{
					loader: 'file-loader',
					options: {
						limit: 8192,
						publicPath: './',
						name: 'font/[name].[hash:8].[ext]'
					}
				}]
			}
		],
		noParse: /node_modules\/(jquey|js\-cookie\.js)/
	},
	resolve: {
		//在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在。
		extensions: ['.vue', '.js', '.json', 'css'],
		//使用绝对路径指明第三方模块存放的位置，以减少搜索步骤
		//其中， dirname 表示当前工作目录，也就是项目根目录
		modules: [
			sourceCodePath,
			nodeModules
		],
		//配置项通过别名来把原导入路径映射成一个新的导入路径
		alias: {
			vue: 'vue/dist/vue.js',
		},
	},
	plugins: [
		//自动补全css前缀
		require('autoprefixer'),
        //清除文件  类似rm -rf
        // new CleanWebpackPlugin(['dist']),
		//不必通过 import/require 使用模块
		// new webpack.ProvidePlugin({
		// 	jQuery: 'jquery',
		// 	$: 'jquery'
		// }),
		new webpack.DefinePlugin({
			__ENV__: JSON.stringify(nodeENV),
		}),
		//vue-loader插件
		new VueLoaderPlugin(),
		new htmlWebpackPlugin({
			hash: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
			favicon: path.join(sourceCodePath, '/asset/ico.ico'),
			template: path.join(sourceCodePath, '/template/index.html'),
			inject: true,
			lang: host[nodeENV].lang,
			bundleTime: bundleTime()
		}),
		//提取打包，css文件重复打包的问题
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: '[name].css'
		}),
		createHappyPlugin('happy-babel-js', [{
			loader: 'babel-loader',
			query: {
				// cacheDirectory: isDev,
				// presets: isDev ? ['react-hmre'] : []
			}
		}]),
		createHappyPlugin('css-pack', ['css-loader']),
		createHappyPlugin('vue', [{
			loader: 'vue',
			options: {
				loaders: {
					js: 'happypack/loader?id=babel'
				}
			}
		}]),
		createHappyPlugin('happy-less', [{
			loader: 'css-loader',
			query: {
				minimize: false,
				importLoaders: 2
			}
		}, {
			loader: 'less-loader',
			query: {}
		}]),
		createHappyPlugin('happy-font', [{
			loader: 'file-loader',
			query: {
				limit: 8192,
				name: 'font/[name].[hash:8].[ext]'
			}
		}]),
		//打包百分比进度显示
		new ProgressBarPlugin({
			format: chalk.blue.bold('build  ') + chalk.cyan('[:bar]') + chalk.green.bold(':percent') + ' (' + chalk.magenta(':elapsed') + ' seconds) ',
			clear: false
		}),
		//按需打包Lodash,各版本浏览器工具方法兼容
		new LodashModuleReplacementPlugin(),
        //集中拷贝静态资源
        // new copyWebpackPlugin([]),
	]
};
