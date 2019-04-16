###package.json和package-lock.json
	- npm5以前是不会有package-lock.json
	- npm5 以后才加入了这个文件
	- 当你安装包的时候，npm都会生成或者更新-lock.json
	- npm5以后的版本安装包不需要--save参数，他会自动保存依赖信息
	- 当你安装包的时候，会自动创建或者是更新-lock.json这个文件
	- package-lock.json这个文件虎保存node_modules中所有包的信息(版本、下载地址)
		+这样的话重新npm install速度回提升
	-从文件来看，有一个lock称之为锁
		+这个lock是用来锁定版本的
		+如果项目依赖了^1.1.1版本，如果重新insatll会下载最新版本，而不是1.1.1版本
		+我们的目的就是希望可以锁住1.1.1版本，所以-lock.json这个文件的另一个作用就是锁定版本号，防止自动升级新版
###MongoDB
	-关系型数据库和非关系型数据库
		+表就是关系，或者说表与表之间存在关系
		+所有的关系型数据库都需要通过sql语言来操作
		+所有的关系型数据库再操作之前都需要设计表结构
		+而且数据表还支持约束
			*唯一的
			*主键
			*默认值
			*非空
		+非关系型数据库非常灵活
		+有的非关系型数据库就是key-value对
		+在MongoDB是长得最像关系型数据库的非关系数据库
			*数据库->数据库
			*数据表->集合(数组)
			*表记录->文档对象
		+MongoDB不需要设计表结构
		+也就是说你可以任意的往里面存数据，没有结构性这么一说
	-安装
		+下载
		+安装
		+配置环境变量
		+ `mongod --version` 测试是否安装成功
	-启动和关闭数据库
		+启动
			*MongoDB默认使用执行mongod命令索处盘符根目录下的/data/db作为自己的数据存储目录
			所以在第一次执行该命令之前先自己手动新建一个目录
			*如果想要修改默认的数据存储目录，可以
				**mongod --dbpath=数据存储目录路径
				建议使用默认的
			*`mongod`启动
		+停止
			*在开启服务的控制台，直接ctrl+c即可停止
			*或者直接关闭开启服务的控制台也可以
	-连接和退出数据库
		+连接
			*`mongo`
			*该命令默认连接本机的MongoDB服务
		+退出
			*`exit`
			*在连接状态输入exit退出连接
	-基本命令
		+`show dbs`
			*查看显示所有数据库
		+`db`
			*查看当前操作的数据库
		+`use 数据库名称`
			*切换到指定的数据库，如果不存在会新建
		+`show collections`
			*查看当前操作数据库的所有集合
	-在Node中如何操作MongoDB数据
		+使用官方的mongodb包来操作
		[官方mongodb包](https://github.com/mongodb/node-mongodb-native)
		+使用第三方mongoose来操作MongoDB数据库
			*第三方包：mongoose基于MongoDB官方的mongodb包再一次做了封装
		+mongoose
			*MongoDB数据库的基本概念
				**1最外层，可以有多个数据库
				**2第二层，一个数据库中可以有多个集合(表)
				**3最里层，一个集合中可以有多个文档(表记录)
				**文档结构很灵活，没有任何限制
				**MongoDB非常灵活，不需要像mysql先创建数据库、表、设计表结构
					***在这里只需要：当你需要插入数据的时候，只需要指定往哪个数据库的哪个集合操作就可以了
					***一切都有MongoDB来帮助你自动完成建库建表这个过程
				{
					qqdb:{
						users:[
							{name:'张三',age:15},
							{name:'李四',age:15},
							{name:'张三1',age:15},
							{name:'张三2',age:17},
							{name:'张三3',age:18},
							...
						],
						products:[
						],
						...
					},
					taobaodb:{
					},
					baidudb:{
					}
				}
	-起步
		+设计Schema发布model
		+增加数据
		var admin = new User({
		username:'zs',
		password:'123456',
		email:'admin@admin.com'
		})
		
		admin.save(function(err,ret) {
		if(err){
		console.log('保存失败')
		}
		console.log('保存成功')
		console.log(ret)
		})
		+查询
			*查询所有
				User.find(function(err,ret) {
				if(err){
				console.log('保存失败')
				}
				console.log('保存成功')
				console.log(ret)
				})
			*按条件查询所有
				User.find({
				username:'zs',
				password:'123456'
				},function(err,ret) {
				if(err){
				console.log('保存失败')
				}
				console.log('保存成功')
				console.log(ret)
				})
			*查询第一个
				User.findOne(function(err,ret) {
				if(err){
				console.log('保存失败')
				}
				console.log('保存成功')
				console.log(ret)
				})
			*按条件查询单个
				User.findOne({
				username:'zs',
				password:'123456'
				},function(err,ret) {
				if(err){
				console.log('保存失败')
				}
				console.log('保存成功')
				console.log(ret)
				})
		+删除数据
			*User.remove({
			username:'admin'
			},function(err,ret) {
			if(err){
			console.log('删除失败')
			}
			console.log('删除成功')
			console.log(ret)
			})
			*根据条件删除一个
			findOneAndRemove(condition,option,callback)
			*根据ID删除一个
			findByIdAndRemove(id,option,callback)
		+更新数据
			*根据条件更新所有
			update
			*根据指定条件更新一个
			findeOneAndUpdate
			*根据id更新一个
			findByIdAndUpdate
###使用Node操作MySQL数据库
###Promise
	-回调地狱嵌套
	-为了解决回调地狱，在ES6中新增了一个API：`Promise`
	-promise本身不是异步，里面的任务是异步
	-
