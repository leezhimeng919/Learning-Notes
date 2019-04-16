var fs = require('fs')
//文件操作的相对路径可以省略./
// /是当前页面位置所在磁盘的根目录
fs.readFile('./data/a.txt',function(err,data) {
	if(err){
		return console.log('404')
	}
	console.log(data.toString())
})