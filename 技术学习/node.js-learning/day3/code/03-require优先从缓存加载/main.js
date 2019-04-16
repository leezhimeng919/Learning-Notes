require('./a')
var fn = require('./b')
//优先从缓存记在
//由于在a中已经加载过b了
//不会重复加载，可以拿到其中的接口对象，目的是避免重复加载增加效率

console.log(fn)