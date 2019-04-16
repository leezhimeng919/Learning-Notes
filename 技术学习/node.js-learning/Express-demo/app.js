/*
app.js入口模块
职责：启动服务、
做一些服务相关配置、
	模板引擎
	、body-parser解析表单post请求体
	、挂载路由、
	提供静态资源服务、
监听端口服务

*/


var express = require('express')

var router = require('./router')
var bodyParser = require('body-parser')

var app = express()

app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))

app.engine('html',require('express-art-template'))

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())

//把路由器挂载到app服务中
app.use(router)

app.use(function(req,res) {
	res.render('404.html')
})

app.listen(3000,function() {

})

