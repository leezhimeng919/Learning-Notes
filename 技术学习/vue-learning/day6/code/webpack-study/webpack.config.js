
const path = require('path')

const webpack = require('webpack')
//导入在内存中生成html页面的插件
const htmlWebpackPlugin = require('html-webpack-plugin')
/*
htmlWP这个插件的两个作用
	1.自动吧内存中根据指定生成一个内存的页面
	2.自动把打包好的bundle.js追加到页面中去

*/
/*
	这个配置文件，其实就是一个JS文件，通过Node中的模块操作
	向外暴露了一个配置对象
*/
module.exports = {
	entry: path.join(__dirname,'./src/main.js'),
	output: {
		path: path.join(__dirname,'./dist'),
		filename:'bundle.js'
	},
	devServer: {
		//这是配置dev-server命令参数的第二种形式，相对来说，这种方式麻烦一些
		//--open --port 3000 --contentBase src --hot
		open: true,
		port: 3000,
		contentBase: 'src',
		hot: true //启动热更新 的第一步
	},
	plugins: [
	//配置插件的节点
		new webpack.HotModuleReplacementPlugin(),
		//new一个热更新的模块对象，这是启用热更新的第三部
		new htmlWebpackPlugin({//创建一个在内存中生成html页面的插件
			template: path.join(__dirname,'./src/index.html'),
			//指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
			filename: 'index.html'
			//指定生成页面的名称
		})
	],
	module: {//这个节点，用于配置所有第三方模块加载器
		rules: [//所有第三方模块的匹配规则
		{ test: /\.css$/,use:['style-loader','css-loader'] }, //配置处理.css文件的第三方loader规则
		{ test: /\.less$/,use:['style-loader','css-loader','less-loader'] },
		{ test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
		{ test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:32]-[name].[ext]' },
		//limit给定的值，是图片的大小，单位是byte，如果我们引用的图片，大于或等于给定的limite值，则不会被转为base64格式的字符串，如果 图片小于给定的limie值，则会被转为base64字符串
		]

	}
}