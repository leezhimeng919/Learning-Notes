/*
模块职责要清晰要单一，不要乱写
我们划分模块的目的就是为了增强项目代码复用率


router.js路由模块
职责
	处理路由
	根据不同的请求方法+请求路径设置具体的请求函数
*/


var Student = require('./student.js')
//Express提供一个更好的方法，专门用来包装路由的
var express = require('express')
//1.创建一个路由容器
var router = express.Router()
//2.把路由都挂载到Router中

router.get('/students', function(req,res) {
	//readFile第二个参数是可选的，传入utf8就是告诉他把读取到的文件直接按照utf8编码格式转换
	/*fs.readFile('./db.json','utf8',function(err,data) {
		if(err){
			return res.status(500).send('error')
		}
		//console.log(JSON.parse(data))
		res.render('index.html',{
		fruits:[
			'apple',
			'banan',
			'orange'
		],
		students:JSON.parse(data).students
	})
	})*/

	Student.find(function(err,students) {
		if(err){
			return res.status(500).send('error')
		}
		//console.log(JSON.parse(data))
		res.render('index.html',{
		fruits:[
			'apple',
			'banan',
			'orange'
		],
		
		students:students
		})
	})
})
router.get('/students/new',function(req,res) {
	res.render('new.html')
	})
router.post('/students/new',function(req,res) {
	//1.获取表单数据
	//2.处理 	将数据保存到db.json文件中用以持久化
	//3.发送响应		先读取出来，转成对象，然后往对象中push数据，然后把对象转成字符串，然后把字符串写入文件
	new Student(req.body).save(function(err,data) {
		if(err){
			return res.status(500).send('error')
		}
		res.redirect('/students')
	})
	//res.end()
})
router.get('/students/edit',function(req,res) {
	//1.在客户端的列表页中处理链接问题（需要有id参数）
	//2.获取要编辑的学生id
	//3.渲染编辑页面
	//	根据id吧学生信息查出来
	//	使用模板引擎渲染页面
	console.log(req.query)

	//replace
	//	字符串模式
	//		简单，但是不支持全局和忽略大小写问题
	//	正则表达式模型
	//		强大，支持全局和忽略大小写问题
	Student.findById(req.query.id.replace(/"/g,''),function(err,student) {
		if(err){
			//console.log(err)
			return res.status(500).send('error')
		}
		res.render('edit.html',{
			student:student
		})
	})

})

//处理编辑学生
router.post('/students/edit',function(req,res) {
	//1.获取表单数据 req.body
	//2.更新		
	//	Student.update()
	//3.发送响应
	//
	Student.findByIdAndUpdate(req.body.id.replace(/"/g,''),req.body,function(err) {
		if(err){
			return res.status(500).send('error')
		}
		res.redirect('/students')
	})
})

router.get('/students/delete',function(req,res) {
	//1.获取要删除的ID
	//2.根据id执行删除操作
	//3.根据操作结果发送响应数据

	Student.findByIdAndRemove(req.query.id.replace(/"/g,''),function(err) {
		if(err){
			return res.status(500).send('error')
		}
		res.redirect('/students')
	})

})



//3.把router导出
module.exports = router
