//如果是非路径形式的模块标识
//路径形式的模块：
/* 
	./		当前目录，不可省略
	../		上一级目录，不可省略
	/xxx	几乎不用
		首位的/在这里标识的是当前文件模块所属磁盘根路径
	D：/xx/xx 几乎不用
	.js可省
*/

//require('模块标识')

//核心模块
//核心模块的本质也是文件。已经被编译到了二进制文件中，我们只需要按照名字加载即可
//require('fs')

//第三方模块
//凡是第三方模块都必须通过npm下载
	//npm i xxx
//不可能有任何一个第三方和核心模块的名字是一样的
//既不是核心模块、也不是路径形式的模块
//	先找到当前文件所处目录中的node-modules目录
//	node_modules/art-template/package.json/文件中的main属性
//	main属性中就记录了index.js--art-template的入口模块
//	然后加载使用这个第三方包，实际上最终加载的还是文件

//	如果package.json文件不存在或者main指定的入口模块也没有
//	node会自动找该目录下的index.js，默认备选项


//
如果以上所有任何一个条件都不成立，则会进入上一级目录中的node_modules目录查找
//若上一级还没有，则继续往上上一级查找....知道当前磁盘根目录还找到则报错
//cannot find modules xxx
var template = require('art-template')

//注意：我们一个项目有且只有一个node_modules，放在项目根目录中即可

/*
	模块查找机制
		优先从缓存中加载
		核心模块
		路径形式的文件模块
		第三方模块
			node_modules/art-template/package.json/文件中的main属性
			main属性中就记录了index.js--art-template的入口模块
			如果以上所有任何一个条件都不成立，则会进入上一级目录中的node_modules目录查找
			若上一级还没有，则继续往上上一级查找....知道当前磁盘根目录还找到则报错
			cannot find modules xxx
*/