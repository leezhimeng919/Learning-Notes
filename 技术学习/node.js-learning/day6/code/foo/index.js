var fs = require('fs')

fs.readFile(path.join(__dirname,'/a.txt'),'utf8',function(err,data) {
	if(err){
		throw err
	}
	console.log(data)
})