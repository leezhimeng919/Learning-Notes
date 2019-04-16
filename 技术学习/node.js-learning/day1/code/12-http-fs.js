//1.结合fs发送文件中的数据
//2.Content-Type		不同的资源对应的Content-Type是不一样的
//图片不需要指定编码，一般只为字符数据才指定编码。

var http = require('http');
var fs = require('fs')

var server = http.createServer();

server.on('request',function(req,res) {
	var url =req.url;

	if(url ==='/'){
		//我们要发送的还是文件中的内容
		fs.readFile('./resource/hello.html',function(error,data){
			if(error){
				//res.setHeader('Content-Type','text/plain;charset=utf-8');
				res.end('文件读取失败，请稍后再试');
			}else{
				//如果不继续操作data，可以不转字符串
				res.setHeader('Content-Type','text/html;charset=utf-8');
				res.end(data)
			}

		})

	}else if(url ==='/a'){
		//url：统一资源定位符。一个url最终其实是要对应一个资源的

		fs.readFile('./resource/ab2.jpg',function(error,data){
			if(error){
				res.setHeader('Content-Type','text/plain;charset=utf-8');
				res.end('文件读取失败，请稍后再试');
			}else{
				//如果不继续操作data，可以不转字符串
				//图片就不需要指定编码了，因为我们常说的编码一般指的是：字符编码
				res.setHeader('Content-Type','image/jpeg');
				res.end(data)
			}

		})

	}
})

server.listen(3000,function(){
	console.log('Server is running...')
})