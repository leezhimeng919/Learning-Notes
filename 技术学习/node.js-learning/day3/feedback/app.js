//app application 应用程序
//把当前模块所有的依赖项都声明在文件模块最上面
//为了让目录结构保持统一清晰，所以我们约定，把所有的html文件都放到views目录
//我们为了方便的统一处理这些静态资源，所以我们约定把所有的静态资源都存放在pubilc目录
//那些资源能被用户访问，哪些资源不能被用户访问，我现在可以通过代码进行非常灵活的控制

// /index.html
// /public整个 public目录中的资源都允许被访问
// 前后端融会贯通了，为所欲为

var express = require('express')
//var template = require('art-template')
var fs = require('fs')


var comments = [
	{
		name:'陈独秀1',
		message:'求求你别秀了',
		dateTime:'2018-8-20'
	},
	{
		name:'陈独秀2',
		message:'求求你别秀了',
		dateTime:'2018-8-20'
	},
	{
		name:'陈独秀3',
		message:'求求你别秀了',
		dateTime:'2018-8-20'
	},
	{
		name:'陈独秀4',
		message:'求求你别秀了',
		dateTime:'2018-8-20'
	},
	{
		name:'陈独秀5',
		message:'求求你别秀了',
		dateTime:'2018-8-20'
	},
	{
		name:'陈独秀6',
		message:'求求你别秀了',
		dateTime:'2018-8-20'
	},
]



/*http.createServer(function(req,res) {
	var parseObj = url.parse(req.url,true)
	var pathname = parseObj.pathname
	if(pathname === '/'){
		fs.readFile('./views/index.html',function(err,data){
			if (err) {
				return res.end('404')
			}

			var htmlStr = template.render(data.toString(),{
				comments:comments
			})

			res.end(htmlStr)
		})

	}else if(pathname.indexOf('/public/') === 0){
		//统一处理：	如果请求路径是以/public/开头的，则我认为你要获取public中的某个资源
		//			所以我们就直接可以吧请求路径当做文件路径来直接进行读取
		fs.readFile('.'+pathname,function(err,data){
			if (err) {
				return res.end('404')
			}
			res.end(data)
		})

	}else if(pathname === '/post'){
			fs.readFile('./views/post.html',function(err,data){
				if (err) {
					return res.end('404')
				}
				res.end(data)
			})

	}
	else if(pathname === '/pinglun'){
			//console.log(parseObj.query)
			//res.end(JSON.stringify(parseObj.query))
			//我们已经使用url模块的parse方法把请求路径中的查询字符串给解析成一个对象
			//所以接下来要做的是：1.获取表单提交的数据 2.生成日期到数据对象中，然后存储到数组中
			//3.让用户重新跳转到首页/  当用户重新请求/的时候，我数组中的数据已经发生变化。

			var comment = parseObj.query
			comment.dateTime = '2017-11-2 17:11:22'
			comments.unshift(comment)
			//服务端这个时候已经把数据存储好了，接下来就是让用户重新请求/

			//如何通过服务器让客户端重定向？
			//	1.状态码设置为302  临时重定向
			//		statusCode
			//	2.在响应头中通过location告诉客户端往哪重定向
			//		setHeader
			//如果客户端发现收到服务器的响应的状态码是302 就会自动去响应头中找location
			//所以你就能看到客户端自动跳转了
			res.statusCode = 302
			res.setHeader('Location','/')
			res.end()
	}
	else{
		fs.readFile('./views/404.html',function(err,data){
			if(err){
				return res.end('404')
			}
			res.end(data)
		})
	}

})
.listen(3000,function(){

})
*/

var app = express()
app.engine('art', require('express-art-template'));
//app.engine('fs', require('fs'));

app.get('/',function(req,res) {
	fs.readFile('./views/index.html',function(err,data) {
		if(err)
		{
			return res.send('404')
		}
			console.log(data.toString())
			res.send(data)

	})
	//console.log(req.query)
})

app.listen(3000,function() {
	
	console.log('i am running')
})

// Node 不适合从来没有接触过服务端的人学习
// 如果想要真正的学号服务端，还是老牌的 Java、PHP 这些平台
// Node 不是特别适合入门服务端，但不代表 Node 不强大
// Node 很厉害，具有经验的人可以玩儿的非常的牛
// 不适合新手的原因就在于比较偏底层、而且太灵活
// Java、PHP 好入门的原因就在于：这些平台屏蔽了一些底层
// res.redirect('重定向')


// 晚上写案例照着下面的步骤写：
// 1. / index.html
// 2. 开放 public 目录中的静态资源
//    当请求 /public/xxx 的时候，读取响应 public 目录中的具体资源
// 3. /post post.html
// 4. /pinglun
//    4.1 接收表单提交数据
//    4.2 存储表单提交的数据
//    4.3 让表单重定向到 /
//        statusCode
//        setHeader

// 明天：
// 模块系统
// Express（第三方 Web 开发框架）
//    这两做的事儿，在框架里面就是一个 API 的事儿
//    使用框架的目的就是让我们更加专注于业务，而不是底层细节
