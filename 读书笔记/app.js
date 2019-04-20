var three = require('three')
var http = require('http');

var server = http.createServer(function(req,res) {

	res.end('index.html')
}).listen(3000,function(err,data) {
	console.log(run)
});
