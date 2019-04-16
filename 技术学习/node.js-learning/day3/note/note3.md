 	###forEach、each
 		-伪数组是对象
 		-对象的原型链中没有forEach
 		-对象的原型链是Object.prototype
 		这个each是jQuery提供的，在jQuery的原型链中
 	&('div').each(arr,function(index.item){
 		console.log(item)
 	})

 	jQuery不是专门用来遍历jQuery元素的
 	1.方便的遍历jQuery元素
 	2.可以再不兼容的forEach的低版本浏览器中使用jQuery的each方法

 	真的想用forEach遍历数组则要将伪数组转换成数组
 	;[].slice.call(&('div'))


 	###Node Server 和 PHP+Apache
 	-PHP默认帮你封装好了很多底层细节操作
 	-但是在Node偏底层，很多东西需要亲自写代码来实现
 		+在Node中，我们开启的Web服务是一个完全的黑盒子，不想PHP
 		+php中无论是代码还是网页，都可以直接通过web url路径来访问
 		+在node中开启的服务器，默认是黑盒子，所有资源都不允许用户来访问，用户可以访问那些资源由具体的开发人员编写设计的代码为准
 		/    index.html
 		/post   post.html
 	在Node中就可以很方便的来自定义这个url地址，Node可以把url地址处理的非常精简漂亮，优雅

 	自定义非常灵活

 	设计url地址，设计好这个规则，让用户按照你的规则来访问使用




 	### Node中的模块系统
 		使用node编写程序主要就是在使用
 		-ES
 			+和浏览器不一样，在Node中没有BOM、DOM
 		-核心模块
 			+ 文件操作的fs
 			+ http服务的http
 			+ url路径操作的url
 			+ path路径处理的path
 			+ os操作系统信息的os

 		-第三方模块
 			+ art-tempalte
 			+ 必须通过npm下载才可以使用

 		-自己写的模块
 			+ 自己创建的文件

  	###什么是模块化？
  	 	-文件作用域
  	 	-通信规则
  	 		+加载	`require`
  	 			++语法：
  	 				```JavaScript
  	 				var 自定义变量名称 = require('模块')
  	 				```
  	 			++两个作用
  	 				+++执行被加载模块中的代码
  	 				+++得到被加载模块中的exports导出接口对象
  	 		+导出	`exports`
  	 			++Node中是模块作用域，默认文件中给所有的成员只在当前文件模块有效
  	 			++对于希望可以被其他模块访问的成员，我们就需要把这些公开的成员都挂载到exports接口对象中就可以了

  	 				+++导出多个成员(必须在对象中)
  	 					exports.a = 123
  	 					exports.b = 'hello'

  	 				+++导出单个成员(拿到的就是：函数、字符串)
  	 					module.exports = 'hello'

  	 					后者会覆盖前者
  	 		+原理解析
  	 			-exports和module.exports的一个引用
  	 			给exports重新赋值会断开和module.exports的引用
  	 			给module.exports重新赋值也会断开

  	### CommonJS模块规范

  		-js本身是不支持模块化的
  		-在Node中的js还有一个很重要的概念：模块系统
  			+模块作用域
  			+使用require方法用来加载模块
  			+使用exports接口对象用来导出模块中的成员


  	### require方法加载规则
  		-核心模块
  			+模块名
  		-第三方模块
  			+模块名
  		-用户自己写的
  			+路径

  		-优先从缓存加载
  		-判断模块标识
  			+核心模块
  			+第三方模块
  			+用户自己写的模块

  	### npm(npmjs.com)
  		- node package manage
  		- npm的第二层含义就是一个命令行工具，有版本的概念
  			  npm --version
  		- 升级npm
  			  npm install --global npm
  		- 常用命令
  			+ npm init
  				++ npm init -y 跳过向导，快速生成
  			+ npm install
  				++一次性把dependencies选项中的依赖项全部安装
  			+ npm install 包名
  				++只下载
  			+ npm install --save 包名
  				++ 简写 npm i -S 包名
  				++ 下载并且保存依赖项(package.json)
  			+ npm uninstall 包名
  				++简写 npm un
  				++只删除，如果有依赖项会依然保存
  			+ npm uninstall --save 包名
  				++简写 npm un -S 包名
  				++删除的同事会把依赖信息也去除
  			+ npm help
  				++ 查看使用帮助
  			+ npm 命令 --help
  				++ 查看指定命令的使用帮助
  		- 解决npm被墙问题
  			+npm存储包文件的服务器在过来
  				https://npm.taobao.org/ 淘宝npm镜像
  			+安装淘宝的cnpm

  				++ npm install --global cnpm
  				++ --global 全局装，在任意路径下
  				++ 接下来你安装包的时候把之前的npm替换成cnpm

  				++ 装完之后原来的npm还能用

  				++ 不想安装cnpm又想使用淘宝服务器
  					npm i XXX --registry=https://registry.npm.taobao.org

  				++ 但是每一次手动加参数很麻烦，所以我们可以把这个选项加入配置
  					npm config set registry https://registry.npm.taobao.org

  				++ 查看npm配置信息
  					npm config list

  	### package.json
  		-这个文件可以通过npm init的方式来自动初始化出来

  			+操作参考day3->npm-demo

  		-最有用的是哪个dependencies选项，可以帮我们保存第三方包的依赖信息
  			+建议每一个项目都有一个package.json文件
  			+建议执行npm install包名的时候都加上--save保存依赖项信息
  			+如果node_modules删除了也不用担心，只需要npm install就会自动把
  				package.json中的dependences里的依赖项下载回来


  	### Express
  		-原生的http在某些方面表现不足以应对我们的开发需求，我们需要框架加快开发效率，让我们的代码更高度统一。

  		-静态资源
  		app.use('/static/',express.static('./static/'))


  		

