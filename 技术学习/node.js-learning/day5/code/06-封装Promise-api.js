var fs = require('fs')

function pReadFile(filePath) {
return new Promise(function(resolve,reject) {
	//console.log(2)
	fs.readFile(filePath,'utf8',function(err,data) {
		if(err){
			//失败了，承诺容器中的任务失败了
			//把容器的Pending状态改变为rejected

			//调用了reject就相当于调用了then方法的第二个参数
			reject(err)
		}else{
			//console.log(3)
			//承诺容器中的任务成功了
			//吧容器的Pending状态改变为Resolved
			//这里调用的resolve方法，实际上就是then方法传递的第一个参数的
			resolve(data)
		}
	})
})
}

pReadFile('./data/a.txt')
	.then(function(data) {
		console.log(data)
		return pReadFile('./data/b.txt')
	})
	.then(function(data) {
		console.log(data)
		return pReadFile('./data/c.txt')
	})
	.then(function(data) {
		console.log(data)
	})