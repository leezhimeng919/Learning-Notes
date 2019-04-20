###现代前端开发
	- ES6(ES2015)
		+ 语言特性
			* const、let关键字
				** let
				** const
			* 函数
				** 箭头函数
				** this在箭头函数中的使用
				** 函数默认参数
				** Rest参数
			* 展开操作符
				** 用于函数调用
				** 用于数组字面量
				** 对象的展开运算符
			* 模板字符串
			* 解构赋值
				** 结构数组
				** 结构对象
			* 类
			* 模块
		+ 使用Babel
			* Babel是一种多用途的JavaScript编译器，他把最新版本的JavaScript编译成当下可以执行的版本。简而言之，利	** 用Babel就可以让我们在当前的项目中随意地使用这些最新的ES6语法特性
			* 安装Babel CLI，这是一个可以在命令行中使用Babel编译的方法
			* 配置
			  ** Babel是通过安装插件plugin或者预设preset来编译代码的
			  	++ 创建一个配置文件.babelrc
			  	++ 安装一个预设：`npm i --save-dev babel-preset-es2015`
			  	++ 安装object-rest-spread：`npm i babel-plugin-transform-object-rest-spread --save-dev`
			* Babel的核心概念就是利用一系列的plugin来管理编译规则，通过不同的plugin，它不仅可以编译ES6代码，还可以编译 React JSX语法或者是CoffeeScript等，甚至可以使用还在提案阶段的一些特性
			* 可扩展性、易用性
	- Component组件和module模块的发展历程
		+ 模块:模块是语言层面的，在前端领域我们说的module一般都是指Javascript module，往往表现为一个单独的JS文件，对外暴露一些属性或方法
		+ 组件：更多是业务层面的概念，可以看成一个可独立使用的功能实现，往往表现为一个UI部件，一个组件包含它所需要的所有资源，包括逻辑(JavaScript)、样式(CSS)、模板(HTML/template)，甚至图片和字体
		+ 一个组件有时仅仅是一个JavaScript模块，而更多时候不仅是一个JavaScript模块。前端的组件化方案都不可避免要以JavaScript的模块化方案为基础。
		+ JavaScript模块化方案
			* 经历了三个阶段：
				1.全局变量+命名空间(namespace)
					第一个阶段是很原始的，基于同一个全局变量，各模块按照各自的命名空间进行挂载。
					模块内部一般通过简单的自执行函数实现局部作用于，避免污染全局作用域，这么做的问题很多：
						* 依赖全局变量，污染全局作用域的同事，安全性得不到保障
						* 依赖约定命名空间来避免冲突，可靠性不高
						* 需要依赖手动管理并控制执行顺序，容易出错。
						* 需要在最终上线前手动合并所有用到的模块。
				2.AMD&CommonJS
					AMD将革命性的JavaScript模块化方案带到了前端开发中，它解决了前面方案的几乎所有问题：
						* 仅仅需要在全局环境下定义require与define，不需要其他的全局变量。
						* 通过文件路径或模块自己生命的模块名定位模块
						* 模块实现中声明依赖，依赖的加载与执行均由加载器操作
						* 提供了打包工具自动分析依赖并合并
						define(function(require){
							通过相对路径获得依赖模块
							const bar = require('./bar');
							模块产出
							return function(){
								//
							};
							});
					CommonJS规范本身不适合浏览器环境，但依赖现代打包工具的能力，CommonJS规范的模块也可以经过转换后在浏览器中执行。相比AMD的模块格式，CJ更简洁，而且可以更方便地实现前后端代码的共用(Node.js的模块正是使用CJ规范)
						const bar = require('./bar');
						module.exports = function () {}
				3.ES6模块
					引用与暴露的方式更多样，支持较复杂的静态分析，使构建工具更细粒度地移除模块实现中的无用代码成为可能(tree shaking)
					import bar from './bar'
					export default function () {}
		+ 前端的模块化和组件化
			* 划分为4个阶段
				1.基于命令空间的多入口文件组件
					特点：
						基于全局变量+命名空间
						不同资源分别手动引入(或手动合并)
					典型：
						jQuery插件
				2.基于模块的多入口文件组件
					后来前端有了流行的模块化方案，这一时期的组件也趋于使用像AMD这样的规范来组织其JavaScript实现，把自己也暴露为一个模块。然而，样式内容及其他的依赖资源还没能纳入整体的模块化方案中，因此这时的组件往往会呈现为：
						* 一个AMD模块，为JavaScript实现
						* 一个CSS(或Less、Sass)文件，为样式内容
						* 其他资源内容，往往不需要手动引入，组件会在其CSS实现中通过相对路径引入
					我们使用时需要：
						* 在JavaScript代码中require组件对应的模块
						* 在样式代码中引入组件的样式内容
					不难发现，虽然JavaScript模块化了，但是组件的实现与使用依然不便利
				3.单JavaScript入口组件
					browserify、webpack等现代打包工具的出现为解决上一个方案遗留的问题带来了一线曙光。它们允许我们将一般的资源视作与JavaScript平等的模块，并以一致的方式加载进来，这样就可以按如下方式组织组件
						foo/
							- img/
							- index.js
							- style.less
						bar/
						...
					其中index.js如下
						reuqire('./style.less');
						const bar = require('./bar');
						module.exports = function () {
							//...
						};
					目前较为主流的前端组件化方案
				4.Web Component
					这个方案主要包含4部分内容
						1.自定义元素	Custom Element
						2.HTML模板	Template
						3.Shadow DOM
						4.HTML的引入	Import
					像使用普通HTML标签一样使用组件，组件的样式内外隔绝，通过
					<link rel="import" href="bar.html">就可以引入组件实现
					然而，浏览器支持程度迟迟不够，而且很难通过polyfill得以在旧版本浏览器上运行，该方案使用起来与已有的“单JavaScript入口组件”方案相比并无较大优势。
	- 前端开发的常用工具：
		+ 包管理器(Package Manager)：用来下载和管理前端代码库
			* 软件包管理器是值在计算器中自动安装、配置、卸载和升级软件包的工具组合。
				Ubuntu：apt-get
				Mac：homebrew
				Python、Ruby:pip、Gem
			* 前端开发对应的包管理器：Bower、Component、Spm、npm
			* npm
		+ 任务流工具(Task Runner)：用来执行一系列开发中的任务
			* 在前端项目中会遇到各种各样的任务，比如说压缩合并代码、验证代码格式、测试代码、监视文件是否有变化等。执行这些任务的方法一般是在命令行中执行相应的命令。
			* base语法对于一些前端开发者来说也许学习成本有点高。
			* Grunt和Gulp
				Grunt是一个命令行工具，可以通过npm来安装
					`npm install grunt-cli -g`
					他有着非常完善的插件机制，插件是把各种工具和Grunt结合在一起的桥梁。 
					Grunt任务的配置是通过一个名为gruntfile.js的文件来进行的，这个问价你是一个标准的Node.js模块
					Grunt这个工具使用插件机制和Gruntfile.js实现了多任务的配置、组合和运行，使用前端开发者熟悉的JS文件比base脚本更容易学习和接受
				Gulp是后起之秀，它在Grunt之后出现，吸取了Grunt的有点，并且推出了很多全新的特性
					`npm install -g gulp-cli`
					Gulp也是通过插件机制来完成第三方工具的适配的--通过一个名为gulpfile.js的文件来完成任务的配置
					它的创新之处在于通过流(Stream)的概念来简化多个任务之间的配置和输出，让任务的配置更加简洁和易于上手
		+ 模块打包工具(Bundler)：用来转换和合并前端代码的模式
			* 将浏览器不支持的模块进行编译、转换、合并，并且最后生成的代码可以再浏览器端良好运行的工具，不妨称为Bundler
				browserify是先驱者，它是的浏览器端使用CommonJS的格式组织代码成为可能，有了一个简单的模块，可以再另外一个文件导入并且使用。如果要在浏览器中使用，可以用browserify来处理。
					`browserify test.js > bundle.js`
					生成的bundle.js就是已经处理完毕、可供浏览器使用的文件，只需要插入到<script></script>即可
				webpack是后起之秀，它支持AMD和CommonJS类型，通过loader机制也可以使用ES6的模块格式。它通过一个config文件，还能提供更加丰富的功能，支持多种静态文件，还有强大的code splitting
			* Bundle的主要任务是突破浏览器的鸿沟，将各种格式的JavaScript代码，甚至是静态文件，进行分析、压缩、合并、打包，最后生成浏览器支持的代码。
###webpack
	- webpack与RequireJS、browerify
		+ RequireJS是一个JavaScript模块加载器，基于AMD规范实现。它同时也提供了对模块进行打包与构建工具r.js,通过将开发时单独的匿名磨具爱具体化并进行合并，实现线上页面资源加载的性能优化
		+ ...
	- 基于webpack进行开发
		+ npm i webpack@1.12.14 -g
		+ webpack ./index.js bundle.js
		+ 解析bundle.js
			* 整段代码的就够是一个立即执行函数表达式IIFE，暂且将这个函数成为webpackBootstrap
			* webpackBootstrap接收一个参数modules，实参是一个数组，数组的每一项都是一个匿名函数，这两个匿名函数的内容分别对应了刚才定义的两个模块index及hello	
				** 值得注意的是，在构建命令中指定了index模块所对应的JavaScript文件，webpack通过静态分析语法树，递归地检测到了所有依赖模块，以及依赖的依赖，并合并到最终的代码中
			* 这里的匿名函数成为工厂方法factory，即运行就可以得到模块的方法，就像一个生产特定模块的工厂一样
				** require被替换成了__webpack_require__
		+ 总结：webpack主要做了两部分工作
			* 分析得到所有必须模块并合并
			* 提供了让这些模块有序、正常执行的环境
	- 使用loader
		+ loader是作用于应用中资源文件的转换行为。它们是函数(运行在Node.js环境中)，接受资源文件的源代码作为参数，并返回新的代码
		+ 使用：在webpack中，每个loader往往表现为一个命名为xxx-loader的npm包，针对特定的资源类型(xxx)进行转换
			* 为了将CSS资源添加到项目中，style-loader、css-loader
				** 前者将CSS代码以<style>标签的形式插入到页面上从而生效
				** 后者通过检查CSS代码中import语句找到依赖并合并
	- 配置文件webpack.config.js
	- 使用plugin
	- 实时构建webpack-dev-server

