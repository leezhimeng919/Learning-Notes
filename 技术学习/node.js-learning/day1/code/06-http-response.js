var http = require('http');
var server = http.createServer();

//request 请求时间处理函数，需要接收两个参数：
	//Request 请求对象
	//		请求对象可以用来获取客户端的一些请求信息，例如请求数据
	//Response 响应对象
	//		响应对象可以用来给客户端发送响应消息

server.on('request',function(request,response){
	console.log("我收到了你的请求，请求路径是："+ request.url);

	//response对象有一个方法：write
	//可以用来给客户端发送响应数据
	//write可以使用多次，但是最后一定要使用end来结束响应，否则客户端会一直等待
	/*if(request.url === '/index')
	{
		response.write("shouye");
	}
	else if(request.url === '/login')

	{
		response.write("denglu");
	}
	//告诉客户端，我的话说完了，你可以给用户看了。
	response.end();*/


	//上面的方式比较麻烦，推荐使用更简单的方法
	//response.end("helloNode");

	//获取请求路径，不包括端口号 /开头
	var url = request.url;
	if(url === '/'){
		response.end("index page")
	}
	else if(url === '/login'){
		response.end("login page")
	}
	else{
		response.end("404 Not Found.");
	}
	//favicon.ico 收藏夹图标，浏览器默认行为

	//response.end里必须是字符串或者二进制
	//数组转字符串JSON.parse()   JSON.stringify()

})

server.listen(3000,function(){
	console.log("服务器启动成功了，可以通过http://localhost:3000/ 来进行访问");
})

