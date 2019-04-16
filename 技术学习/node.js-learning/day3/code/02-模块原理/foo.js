//在Node 中，每个模块内部度偶又一个自己的module对象
//该module对象中，有一个成员叫exports对象
//你需要对外导出成员，只需要把导出的成员挂载到module.exports

//Node为了简化你的操作，专门提供了一个exports代替了module.exports

/*
var module = {
	exports:{

	}
}
var exports = module.exports
谁来reuqire我，谁就得到module.exports

//底层最后return的是module.exports而不是erxports，所以重新赋值exports不管用
return module.exports

*/