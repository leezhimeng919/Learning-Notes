var fs = require('fs')

fs.readdir('../app/www',function(err,files) {
	if(err){
		console.log('目录不存在')
	}
	console.log(files)
})