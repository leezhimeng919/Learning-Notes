
var fooExports = require('./foo')
//默认得到的是对象
//使用对象中的成员必须.某个成员来访问
//有时候，对于一个模块，我仅仅就希望导出一个方法就行了。
console.log(fooExports)