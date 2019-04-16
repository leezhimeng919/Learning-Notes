#node.js是什么	
	- 官网定义：
		 Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
	·node.js不是一门语言，不是库，不是框架，是一个js运行时环境。
	·node.js可以解析和执行js代码
	·以前只有浏览器可以解析执行js代码
	·现在js可以完全脱离浏览器来运行，一切归功于node.js
	·浏览器中的js
		·ES
		·bom
		·dom
	·node.js中的js
		·没有bom
		·没有dom
		·有ES
		·在node这个js执行环境中为js提供了一些服务器级别的操作API
			·例如文件读写
			·网络服务的构建
			·网络通信
			·http服务器
			·等处理。
	·构建于V8引擎之上
		·代码只是具有特定格式的字符串而已
		·引擎可以认识代码，引擎可以去帮你去解析和执行
		·V8引擎是目前工人的解析执行js代码最快的
		·node.js的作者吧google Chrome中的v8引擎移植了出来，开发了一个独立的js运行时环境。
	·event-driven 事件驱动
	·非阻塞IO模型（异步）
	·轻量高效
	·npm是世界上最大的开源库生态系统（基于node.js的包管理工具）
	·绝大多数js相关的包都存放在了npm上，这样做的目的是为了让开发人员更方便的去下载使用我
	·`npm install jquery`

node能做什么
	·web服务器后台
	·命令行工具（例如git）
		·npm（node）
		·git（c语言）
		·hexo（node）
		·。。。
	·对于前端开发工程来讲，接触node最多的是他的命令行工具
		·自己写的很少，主要是使用别人第三方的
		·webpack
		·gulp
		·npm

预备知识
	·html
	·css
	·js
	·简单的命令行操作
		·cd
		·dir
		·ls
		·mkdir
		·rm
	·具有服务端开发经验更佳


一些资源
	·深入浅出nodejs
		·偏理论，几乎没有实战
		·理解原理底层有帮助
		·结合课程的学习去看
	·nodejs权威指南
		·API讲解
		·也没有业务，没有实战
	·js标准参考教程alpha ：http://javascript.ruanyifeng.com/
	·node入门 :http://www.nodebeginner.org/index-zh-cn.html
	·官方api文档 :
	·中文文档（旧）
	·cnode社区
	·cnode新手入门
	过程最重要，怎样都会有收获


能学到啥
	·B/S编程模型
		·Browser-Server
		·back-end
		·任何服务端技术这种BS编程模型都是一样，和语言无关
		·node知识作为我们学习BS编程模型的一个工具而已
	·模块化编程
		·RequireJS
		·SeaJS
		·@import('文件路径')
		·以前认知的js只能通过script标签来加载
		·在node中可以向@import()一样来引用加载js脚本文件
	·Node常用API
	·异步编程
		·回调函数
		·primsie
		·async
		·generator
	·Express Web开发框架
	·ES6
		·穿插讲解
		·新语法，提高编程效率
	·学习node不仅会帮助大家打开服务器黑盒子，同时会帮助你学习以后的前端高级内容
		·Vue.js
		·React
		·angular

