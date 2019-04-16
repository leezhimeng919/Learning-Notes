###修改完代码自动重启
	-nodemon来帮我们解决频繁修改代码重启服务器问题
	-nodemon是一个基于Node.js开发的一个第三方命令行工具，我们使用的时候需要独立安装
	-npm install --global nodemon
	-node app.js改为nodemon app.js
###路由
	-路由其实就是一张表，表里面有具体的映射关系
	-get
		+当你以GET方法请求/的时候，执行对应的处理函数
		+app.get('/',fun(){
			res.send('')
			})
	-post
		+当以POST方法请求/的时候，执行对应的处理函数
		+app.post('/',fun(){
			res.send('')
			})
###静态服务
		+app.use(express.static('public'))
###在Express中配置使用`express-art-template`
	-安装
		npm install --save art-template
		npm install --save express-art-template
	-配置
		app.engine('html', require('express-art-template'));
	-使用
		app.get('/',function(req,res) {
		默认会去项目中的views目录查找
		res.render('admin/index.html',{
			title:'管理系统'
		})
		})
		//如果想要修改默认的views目录，则可以
		第一个参数views不能修改
		//app.set('views',render函数的默认路径)
		+第一个参数表示当渲染以.html结尾的文件的时候，使用art-template模板引擎express-art-template是专门用来在Express中把art-template整合到Express中虽然外面这里不需要记载art-template但是也必须安装，原因是express-art-template依赖了art-template
	-render
		+Express为Response相应对象提供了一个方法render
		+render方法默认是不可以使用，但是如果配置了模板引擎就可以使用了
		+res.remder('html模板名',{模板数据})
		+第一个参数不能写路径，默认会去项目中的views目录查找该模板文件
		+也就是说Express有一个约定：要求开发者把所有的视图文件都放到views目录中
###Express中获取表单POST请求体数据
	-在Express中没有内置获取表单POST请求体的API，
	这里我们需要使用一个第三方包：body-parser
	-安装
		+ npm i -S body-parser
	-配置
	var express = require('express')
	var bodyParser = require('body-parser')
	var app = express()
	// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: false }))
	// parse application/json
	app.use(bodyParser.json())
	app.use(function (req, res) {
	  res.setHeader('Content-Type', 'text/plain')
	  res.write('you posted:\n')
	  //可以通过req.body获取表单数据
	  res.end(JSON.stringify(req.body, null, 2))
	})
###Express中获取表单GET请求体数据
	-req.query获取
	-Express内置了一个API
###Express -crud
 	-模块化思想
		+模块职责要单一
###起步
-初始化
-模板处理

###路由设计
| 请求方法 |     请求路径       | get 参数 |           post 参数             |       备注      |
|----------|------------------|----------|--------------------------------|------------------|
| GET      | /students         |          |                                | 渲染首页         |
| GET      | /students/new    |          |                                | 渲染添加学生页面 |
| POST     | /students/new     |          | name、age、gender、hobbies       | 处理添加学生请求 |
| GET      | /students/edit   | id       |                                | 渲染编辑页面     |
| POST     | /students/edit    |          | id、name、age、gender、hobbies    | 处理编辑请求     |
| GET      | /students/delete | id       |                                | 处理删除请求     |          |                  |          |

###自己编写的步骤
	- 处理模板
	- 配置开放静态资源
	- 配置模板引擎
	- 简单路由： /students渲染静态页出来
	- 路由设计
	- 提取路由模块
	- 由于接下来一系列的业务操作都需要处理文件数据，所以我们需要封装student.js
	- 先写好student.js文件结构
		+ 查询所有学生列表的API find
		+ findById
		+ save
		+ updataById
		+ deleteById
	- 实现具体功能
		+ 通过路由收到请求
		+ 就收请求中的数据(get、post)
			* req.query
			* req.body
		+ 调用数据操作API处理数据
		+ 根据操作结果给客户端发送响应
	- 业务功能顺序
		+ 列表
		+ 添加
		+ 编辑
		+ 删除
	- find
	- findIndex


