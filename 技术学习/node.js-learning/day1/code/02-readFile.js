//浏览器中的js是没有文件操作的能力的
//但是node中的js具有文件操作的能力

//fs是filesystem的简写，就是文件系统的意思
//在Node中如果想要进行文件操作，就必须引入fs这个核心模块
//在fs这个核心模块中，就提供了所有的文件操作相关的API
//例如：fs.readFile就是用来读写文件的

//1.使用require方法加载fs核心模块
var fs = require('fs')
//2.读取文件
	//第一个参数是路径
	//第二个参数是一个回调函数
	//	error
	//		如果读取失败，error就是错误对象；如果读取成功，error就是null
	//	data
	//		如果读取成功，data就是读取到的数据；如果读取失败，error就是错误对象

	//成功	data数据		error null
	//失败	datanull    error错误对象
fs.readFile('../note/node-note1-入门.md',function(error,data) {
//<Buffer 6e 6f 64 65 2e 6a 73 e6 98 af e4 bb 80 e4 b9 88 09 0d 0a 09 e5 ae 98 e7 bd 91 e5 ae 9a e4 b9 89 ef bc 9a 0d 0a 09 4e 6f 64 65 2e 6a 73 c2 ae 20 69 73 ... >
//文件中存储的其实都是二进制，这里是转成了16进制，可通过toString方法转
	if(error){
		console.log('读取文件失败了');
	}
	else{
		console.log(data.toString());
	}
})