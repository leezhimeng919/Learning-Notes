const path = require('path')


//这个配置文件，其实就是一个JS文件，通过Node中的模块操作，向外暴露了一个配置对象
module.exports = {

	 entry: path.join(__dirname,'index.js'),

	 output: {
	 	path: path.join(__dirname,''),
	
	 	filename: 'bundle.js'

	 }
}

/*



*/