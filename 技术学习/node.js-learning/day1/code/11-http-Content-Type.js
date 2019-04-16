//require
//端口号

var http = require('http');

var server = http.createServer();

server.on('request',function(req,res) {
	//在服务端默认发送的数据，其实是utf8编码的内容
	//但浏览器不知道你是utf8编码的内容
	//浏览器在不知道服务器响应内容的编码的情况下会按照当前操作系统的默认编码去解析
	//中文操作系统默认是gbk(国标扩)汉字内码扩展规范
	//解决方法就是正确的告诉浏览器我给你发送的内容格式什么编码
	//在http协议中，Content-Type就是用来告诉对象我给你发送的内容是什么类型
	//
	
	//text/plain	就是普通文本
	//如果发送的是html格式的字符串，则也要告诉浏览器我给你发送的是text/html格式的内容
	var url = req.url

	if(url === '/plain'){
	res.setHeader('Content-Type','text/plain; charset=utf-8')
	res.end('hello 世界')
	}else if(url === '/html'){
	//res.setHeader('Content-Type','text/html; charset=utf-8')
	res.end('<p>helloworld<a href="">点我</a></p>')

	}
})

server.listen(3000,function(){
	console.log('Server is running...')
})