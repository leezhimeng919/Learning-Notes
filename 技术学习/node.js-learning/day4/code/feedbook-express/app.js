var express = require('express')

var app = express()

var bodyParser = require('body-parser')
app.use('/public/',express.static('./public/'))
//第一个参数表示当渲染以.html结尾的文件的时候，
//使用art-template模板引擎
//express-art-template是专门用来在Express中把art-template
//合到Express中虽然外面这里不需要记载art-template
//但是也必须安装，原因是express-art-template依赖了art-template
app.engine('html', require('express-art-template'));

//Express为Response相应对象提供了一个方法render
//render方法默认是不可以使用，但是如果配置了模板引擎就可以使用了
//res.remder('html模板名',{模板数据})
//第一个参数不能写路径，默认会去项目中的views目录查找该模板文件
//也就是说Express有一个约定：要求开发者吧所有的视图文件都放到views目录中


//如果想要修改默认的views目录，则可以
//app.set('views',render函数的默认路径)

var comments = [
	{
		name:'陈独秀1',
		message:'求求你别秀了',
		dateTime:'2018-8-20'
	},
	{
		name:'陈独秀2',
		message:'求求你别秀了',
		dateTime:'2018-8-20'
	},
	{
		name:'陈独秀3',
		message:'求求你别秀了',
		dateTime:'2018-8-20'
	},
	{
		name:'陈独秀4',
		message:'求求你别秀了',
		dateTime:'2018-8-20'
	},
	{
		name:'陈独秀5',
		message:'求求你别秀了',
		dateTime:'2018-8-20'
	},
	{
		name:'陈独秀6',
		message:'求求你别秀了',
		dateTime:'2018-8-20'
	},
]

app.get('/',function(req,res) {
	res.render('index.html',{
		comments:comments
	})
})

app.get('/post',function(req,res) {
	res.render('post.html')
})

//配置body-parser,res请求对象上会多一个body属性

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.post('/post',function(req,res) {
	var comment = req.body
	comment.dateTime = '2018-9-4 21:52'
	comments.unshift(comment)
	res.redirect('/')

	//redirect会自动结束响应
})

app.get('/pinglun',function(req,res) {
	var comment = req.query
	comment.dateTime = '2018-9-4 21:52'
	comments.unshift(comment)
	res.redirect('/')
	//res.statusCode = 302
	//res.setHeader('Location','/')
})

app.listen(3000,function() {
	console.log('running...')
})