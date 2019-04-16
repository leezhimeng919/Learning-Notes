var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true })

var Schema = mongoose.Schema

var userSchema = new Schema({
	email: {
		type: String,
		required: true
	},
	nickname: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	created_time: {
		type: Date,
		//这里不要写Date.now()，因为会即刻调用
		//这里直接给了一个方法：Date.now
		//当你去new Model的时候，如果你没有传递create_time，
		//则mongoose就会调用default指定的Date.now方法，
		//使用其返回值作为默认值
		default: Date.now
	},
	last_modified_time: {
		type: Date,
		default: Date.now
	},
	avatar: {
		type: String,
		default: '/public/img/avatar-default.png'
	},
	bio: {
		type: String,
		default: ''
	},
	gender: {
		type: Number,
		enum: [-1,0,1],
		default: -1
	},
	birthday: {
		type: Date,
		default:'1990-1-1'
	},
	status: {
		type: Number,
		//没有权限限制0、不可以评论1、不可以登录2、
		enum:[0,1,2],
		default:0
	}
})

module.exports = mongoose.model('User', userSchema)