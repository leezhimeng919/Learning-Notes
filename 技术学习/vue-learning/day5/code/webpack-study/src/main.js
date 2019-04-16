

import $ from 'jquery'
//import *** from *** 是ES6中导入模块的方式
//由于ES6代码太高级了，浏览器解析不了，所以这一行会报错

// 使用import语法，导入css样式表
import './css/index.css'
//注意：webpack默认只能打包处理JS类型的文件，无法处理其他的非JS类文件
//如果要处理非JS类型的文件，我们需要手动安装一些合适的第三方loader加载器
//1.如果想要打包处理css文件，需要安装 npm i style-loader css-loader -D
//2.打开webpack.config.js这个配置文件，在里面，
//新增一个配置节点，叫做module，他是一个对象，在这个module对象身上，
//有个rules属性，这个rules属性是个数组，这个数组中存放了所有第三方文件的匹配和处理规则

import './css/index.less'
import './css/index.scss'
/*
注意： webpack处理第三方文件类型的过程：
	1.发现这个要处理的文件不是JS文件，然后就去配置文件中，查找有没有对应的第三方loader规则
	2.如果能找到对应的规则，就会调用对应的loader处理这种文件类型
	3.在调用loader的时候，是从后往前的顺序调用
	4.当最后一个loader调用完毕，会把处理的结果，直接交给webpack进行打包合并，最终输出到bundle.js中去


*/
$(()=>{
	$('li:odd').css('backgroundColor','red')
	$('li:even').css('backgroundColor',()=>{
		return 'blue'
	})
})

// 1. webpack能够处理JS 文件的互相依赖关系
// 2. webpack能够处理JS 的兼容问题，把高级的、浏览器不识别的语法，转为低级的，浏览器能正常识别的语法
// 刚才运行的命令格式： webpack 要打包的文件的路径 打包好的输出文件的路径


/*
	使用webpack-dev-server这个工具，来实现自动打包编译的功能
	1.运行 npm i webpack-dev-server -D把这个工具安装到项目的本地开发依赖
	2.安装完毕后，这个工具的用法，和webpack命令的用法，完全一样
	3.由于，我们在项目中，本地安装的webpack-dev-server，所以，无法把它当做脚本命令，在powershell
	终端中直接运行；只有那些安装到全局-g的工具，才能在终端中正常执行
	4.注意，webpack-dev-server这个工具，如果想要正常运行，要求在本地项目中，必须安装webpack
	5.webpack-dev-server帮我们打包生成的bundle.js文件，并没有存放到实际的物理磁盘上；而是
	直接托管到了电脑的内存中，所以，我们在项目根目录中根本找不到 这个打包好的bundle.js
	6.我们可以认为，webpack-dev-server把打包好的文件，以一种虚拟的形式，托管到了咱们项目的
	根目录中，虽然我们看不到它，但是，可以认为，和dist  src  node_modules平级
	有一个看不见的文件，叫做bundle.js
*/