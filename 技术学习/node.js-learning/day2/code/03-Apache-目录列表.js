var http = require('http')
var fs = require('fs')

var server = http.createServer()

var wwwDir = '../app/www'

server.on('request',function(req,res) {
	var url = req.url

	fs.readFile('./template.html',function(err,data){
		/*if(err){
			return res.end('404 Not Found.')
		}
*/
		//1.如何的搭配wwwDir目录列表中的文件名和目录名
		//		fs.readdir
		//2.如何将得到的文件名和目录名替换到template.html中
		//		2.1.在template.html中需要替换的位置预留一个特殊的标记（就像以前使用模板引擎的标记一样）
		//		2.2.根据files生成需要的HTML内容

		//		模块引擎
		//只要做了这两件事就OK了
		fs.readdir(wwwDir,function(err,files){
			if(err){
			return res.end('Can not find wwwdir.')
			}
			//2.2生成需要替换的内容
				var content = ''
				files.forEach(function(item){
					//在es6的`字符串中，可以使用${}来引用变量
						content +=`
					 	<tr>
					        <td data-value="apple/"><a class="icon dir" href="../app/www">${item}/</a></td>
					        <td class="detailsColumn" data-value="0"></td>
					        <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
					    </tr>
						`
				})	
		//2.3替换
		data = data.toString()

		data = data.replace('^_^',content)

		//3.发送解析过后的响应数据
		res.end(data)
				//console.log(files)
		})

	
	})
})

server.listen('3000',function(){

	console.log('run')
})