var mongoose = require('mongoose')

var Schema = mongoose.Schema
//1.连接数据库
//指定连接的数据库不需要存在，当你插入第一条数据之后就会自动创建
mongoose.connect('mongodb://localhost/itcast')

//2.设计集合结构(表结构)
//字段名称就是表结构中的属性名称
// 约束的目的是为了保证数据的完整性，不要有脏数据
 var userSchema = new Schema({
  username:{
  	type:String,
  	required:true//必须有
  },
  password:{
  	type:String,
  	required:true
  },
  email:{
  	type:String
  }

  })

 //3.将文档结构发布为模型
 // mongoose.model方法就是用来将一个架构发布为model
 //	第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
 //			mongoose会自动将大写名词的字符串生成 小写负数的集合名称
 //			例如这里的User最终会变成users集合名称
 //第二个参数：架构Schema
 //		返回值：模型构造函数
 var User = mongoose.model('User',userSchema)

 //4.当我们有了模型构造函数之后，就可以使用这个构造函数对user集合中的数据增删改查了

//*********新增**********
/*var admin = new User({
	username:'admin',
	password:'123456',
	email:'admin@admin.com'
})

admin.save(function(err,ret) {
	if(err){
		console.log('保存失败')
	}
	console.log('保存成功')
	console.log(ret)
})*/

//***********查询**********

/*User.findOne({
	//username:'zs',
	password:'123'
},function(err,ret) {
	if(err){
		console.log('保存失败')
	}
	console.log('保存成功')
	console.log(ret)
})*/
/*User.find()
	.then(function(data) {
		console.log(data)
	})*/
User.findOne({username:'admin'})
	.then(function(user) {
		if(user){
			console.log(用户已存在)
		}
		else{
			return new User({
				username:'aaa',
				password:'123',
				email:'dasdas'
			}).save()
		}
	})
	.then(function(ret) {
		console.log(ret)
	})

//***********删除**********
/*User.remove({
	username:'admin'
},function(err,ret) {
	if(err){
		console.log('删除失败')
	}
	console.log('删除成功')
	console.log(ret)
})*/

//*************更新数据********
/*User.findByIdAndUpdate('5b97ca5d1d246e3fe0230b85',{
	password:'123'
},function(err,ret) {
	if(err){
			console.log('修改失败')
		}
		console.log('修改成功')
		console.log(ret)
})*/


/*var DashBoard = mongoose.model('DashBoard',dashBoardSchema)

var admin = new User({
	name:'banana',
	img:'/public/img/move.png',
	comment:'text1'
})

admin.save(function(err,ret) {
	if(err){
		console.log('保存失败')
	}
	console.log('保存成功')
	console.log(ret)
})
*/
