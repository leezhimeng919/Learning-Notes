var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/itcast',{ useNewUrlParser: true })

var Schema = mongoose.Schema

var dashBoardSchema = new Schema({
	name:{
		type:String,
		required:true
	},
	img:{
		type:String,
		required:true
	},
	comment:{
		type:String,
		required:true
	}
})

//直接导出模型构造函数
module.exports = mongoose.model('DashBoard',dashBoardSchema)