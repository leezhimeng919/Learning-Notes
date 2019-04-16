
var foo = 'bar'
module.exports.foo = foo


function add(x,y) {

	return x+y
}

module.exports = {

	add:function(x,y){
			return x+y
		},
	str:'hellp'
}
//我希望加载得到直接就是一个：
//	方法、字符串、数字、数组（默认是对象）
//module.exports = key