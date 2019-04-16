// EcmaScript 6 对数组新增了很多方法
//    find
//    findIndex

// find 接收一个方法作为参数，方法内部返回一个条件
// find 会遍历所有的元素，执行你给定的带有条件返回值的函数
// 符合该条件的元素会作为 find 方法的返回值
// 如果遍历结束还没有符合该条件的元素，则返回 undefined


var arr = [
	{id:1,name:'zs1'},
	{id:2,name:'zs2'},
	{id:3,name:'zs3'},
	{id:4,name:'zs4'}
]

var ret = arr.find(function(item) {
	return item.id === 4
})

console.log(ret.name)