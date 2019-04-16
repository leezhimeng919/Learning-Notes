 var express = require('express')

var app = express()
//第一个参数可以省略，请求路径也随之改变
app.use('/public/',express.static('./public/'))

app.use(express.static('public'))
app.get('/',function(req,res) {
	res.send('haha')
})

app.listen(3000,function(){

})