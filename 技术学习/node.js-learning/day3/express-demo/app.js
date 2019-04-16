//0.安装
//1.引包
var express = require('express')

//2.创建你的服务器应用程序
//		也就是原来的http.createServer
var app = express()

//在Express中开放资源就是一个API的事儿
//公开指定目录
//只要这样做了，你就可以直接通过
app.use('/public/',express.static('./public/'))
app.use('/static/',express.static('./static/'))



//当服务器收到get请求/的时候，执行回调处理函数
app.get('/',function(req,res) {
	//req.query
	//res.render
	res.send('hello express!')
})

app.get('/about',function(req,res) {
	res.send('my name is Express')
})

app.listen(3000,function(){
	console.log('app running')
})