###概念
	- 本质上，webpack是一个现代JavaScript应用程序的静态模块打包器。在webpack处理应用程序时，它会在内部创建一个依赖图，用于映射到项目需要的每个模块，然后将所有这些依赖生成到一个或多个bundle
	- 从webpack4.0版本开始，可以不用通过引入一个配置文件打包项目。然而，webpack仍然还是高度可配置的，并且能够很好的满足需求
	- 核心概念：
		+ 入口 entry
			* 入口起点指示webpack应该使用哪个模块，来作为构建其内部依赖图的开始，webpack会找出有哪些模块和library是入口起点(直接和间接)依赖的
			* 默认值时 ./src/index.js,然而，可以在webpack配置中配置entry属性，来指定一个不同的入口起点，或者指定多个
		+ 输出 output
			* output属性告诉webpack在哪里输出它所创建的bundles，以及如何命名这些文件，主输出文件默认为 ./dist/main.js，其他生成文件的默认输出目录是 ./dist
			* 可以通过在配置中指定一个output字段，来配置这些处理过程。
		+ loader
			* 作为开箱即用的自带特性，webpack自身只支持JavaScript。而loader能够让webpack处理那些非JavaScript文件，并且先将它们转换为有效模块，然后添加到依赖图中，这样就可以提供给应用程序使用
			* 在更高层面，webpack的配置中loader有两个特征：
				** test属性，用于标识出应该被对应的loader进行转换的某个或某些文件
				** use属性，表示进行转换时，应该使用哪个loader
		+ 插件plugins
			* loader被用于转换某类型的模块，而插件则可以用于执行范围更广的任务，插件的范围包括：打包优化、资源管理和注入环境变量。
		+ 模式
			* 通常将mode参数设置为development、production或none，可以弃用对应环境下webpack内置的优化。默认值时production
			