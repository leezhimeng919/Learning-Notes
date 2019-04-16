var fs = require('fs')
//Promise是一个构造函数

//创建Promise容器
//console.log(1)
	//1.给别人一个承诺
	//Promise容器一旦创建，就开始执行里面的代码
var p1 = new Promise(function(resolve,reject) {
	//console.log(2)
	fs.readFile('./data/a.txt','utf8',function(err,data) {
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
//console.log(4)


//1->2->4->3->data
var p2 = new Promise(function(resolve,reject) {
	//console.log(2)
	fs.readFile('./data/b.txt','utf8',function(err,data) {
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

var p3 = new Promise(function(resolve,reject) {
	//console.log(2)
	fs.readFile('./data/c.txt','utf8',function(err,data) {
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
//p1就是那个promise
//当p1成功率，然后(then)做指定的操作
p1.then(function(data) {
	//then方法里的function就是promise中的resolve函数
	console.log(`读取文件成功了:${data}`)
	//当前函数中return的结果就可以在后面的then中的function接收到
	//真正有用的可以return一个promise对象
	//当return一个promise对象的时候，后续的then中的方法的第一个参数会作为p2的resolve
	return p2
},function(err) {
	console.log(`读取文件失败了:${err}`)
})
.then(function(data) {
	console.log(`读取文件成功了:${data}`)
	return p3
},function(err) {
	console.log(`读取文件失败了:${err}`)
}).then(function(data) {
	console.log(`读取文件成功了:${data}`)
	return p1
},function(err) {
	console.log(`读取文件失败了:${err}`)
})
.then(function(data) {
	console.log(`读取文件成功了:${data}`)

})