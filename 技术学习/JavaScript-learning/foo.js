//导入bar模块中的hello函数
import hello from './bar'
var hungry = "hippo";
function awesome(){
	console.log(hello(hungry).toUpperCase())
}

export awesome;