var express = require('express')
var path = require('path')
var router = require('./router')
var bodyParser = require('body-parser')
var session = require('express-session')
var app = express()

app.use('/public/',express.static(path.join(__dirname,'./public/')))

app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')))

//ejs/jade(pug)/handlebars/nunjucks
app.engine('html',require('express-art-template'))

app.set('views',path.join(__dirname,'./views'))

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())


//在Express这个框架中，默认不支持Session和Cookie
//但是我们可以使用第三方中间件：express-session来解决
//npm i express-session
//配置->使用
//档把这个插件配置好之后，我们就可以通过req.seesion来发访问和设置session成员
//	添加session数据： req.session.foo = 'bar'
//	访问session数据： req.session.foo
//默认Session数据是内存存储的，服务器一旦重启就会丢失，真正的生产环境会把session进行持久化存储。
app.use(session({
	//配置加密字符串，他会在原有加密基础之上和这个字符串拼起来去加密
	//谜底是为了增加安全性，防止客户端恶意伪造
	secret:'keyboard cat',
	resave: false,
	//无论你是否使用session，我都默认直接分配一把钥匙给你
	saveUninitialized: true
}))
 
app.use(router)

app.listen(3000,function() {
	console.log('running')
})

