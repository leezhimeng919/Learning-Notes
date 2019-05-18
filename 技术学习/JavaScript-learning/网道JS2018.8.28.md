[define2018.8.28.md](httpswangdoc.comjavascriptindex.html)
<!-- MarkdownTOC -->

- [数据类型](#数据类型)
	- [undefined与null](#undefined与null)
	- [布尔值](#布尔值)
	- [整数和浮点数](#整数和浮点数)
- [数据类型的转换](#数据类型的转换)
	- [自动转换](#自动转换)
- [错误处理机制](#错误处理机制)
- [代码风格](#代码风格)
- [Console](#console)
- [面向对象编程](#面向对象编程)
	- [实例对象与new命令](#实例对象与new命令)
	- [this关键字](#this关键字)
	- [RegExp对象](#regexp对象)
	- [对象的继承](#对象的继承)
	- [Object对象的相关方法](#object对象的相关方法)
- [异步操作](#异步操作)
	- [异步操作概述](#异步操作概述)
	- [定时器](#定时器)
	- [Promise对象](#promise对象)
- [事件](#事件)
	- [EventTarget接口](#eventtarget接口)

<!-- /MarkdownTOC -->
<a id="数据类型"></a>
## 数据类型
<a id="undefined与null"></a>
### undefined与null
- undefined == null //true
- Number(null) //0
- Number(undefined) //NaN
- 用法与含义
	+ null表示空值
	+ undefined表示未定义
<a id="布尔值"></a>

<a id="布尔值"></a>
### 布尔值
- undefined、null、+-0、false、NaN、""、'' 自动转为false其余为ture

<a id="整数和浮点数"></a>
### 整数和浮点数
- JS内部，所有数字都是以64位浮点数形式储存。Js底层根本没有整数
- 0.1+0.2 === 0.3  //false
- 0.3/0.1 //2.99999999999996
- (0.3 - 0.2) === (0.2 - 0.1) //false
- 64位二进制
	+ 第一位符号位
	+ 第二位到第12位指数部分(11)
	+ 第13位到第64位小数部分(53)

<a id="数据类型的转换"></a>
## 数据类型的转换
- '4'-'3'  //1
- Number('') //0
- Number('324abc') //NaN
- Number([5]) //5
- parseInt('42 abc') //42  
	+ parseInt逐个解析字符
	+ Number整体转换字符串的类型
- Number底层
	+ 先调用valueOf()，若返回原始类型值，则Number()
	+ 若返回对象，则toString(),若返回原始类型值，则Number()
	+ 若返回对象，则报错
	+ valueOf方法先于toString方法执行

- String底层
	+ 先调用toString()，若返回原始类型值，则String()
	+ 若返回对象，则valueOf(),若返回原始类型值，则String()
	+ 若返回对象，则报错
	+ toString方法先于valueOf方法执行
- 所有对象的布尔值都是true	(出于性能考虑)
- Boolean(new Boolean(false)) // true

<a id="自动转换"></a>
### 自动转换
- 不同类型的数据运算
- 非布尔类型求布尔值
- 非数值类型进行一元运算(+、-)
- 规则：预期什么值就调用该类型的额转换函数
- 建议在预期为布尔、数值、字符串的地方，用函数显式转换

<a id="错误处理机制"></a>
## 错误处理机制
- Error构造函数接受一个参数，message表示错误提示
- 非标准属性
	+ name：错误名称
	+ stack：错误的堆栈
- Error的6个派生对象
	+ SyntaxError对象   
		*syntax语法token记号Invalid无效的unexpected始料不及的
		*Uncaught SyntaxError: Invalid or unexpected token
		* 解析代码时发生的语法错误
			**变量名错误
			**缺少括号
	+ ReferenceError对象
		*Uncaught ReferenceError: xx is not defined
		* 引用一个不存在的变量时发生的错误
			**使用一个不存在的值
			**将一个值分配给无法分配的嗯对象
	+ RangeError对象
		*Uncaught RangeError: Invalid array length
		*一个值超出有效范围时发生的错误
	+ TypeError对象
		*Uncaught TypeError: obj.xx is not a function
		*变量或参数不是预期类型时发生的错误
	+ URIError对象
		* encodeURI() decodeURI() encodeURIComponent()
			decodeURICoponent() escape() unescape()
		*URI相关函数的参数不正确时抛出的错误
	+ EvalError对象
		*eval函数没有被正确执行时
- 6+1都是构造函数,可手动生成实例
- 继承Error对象，可以自定义错误对象
- throw语句
	+ 作用：手动终端程序执行，抛出一个错误
	+ 可以抛出任何类型的值
- try...catch结构
	+ try代码块抛出错误，catch代码块捕获错误
	+ catch接受一个参数，表示try代码块抛出的值
	+ 	try{
		fun()
		}catch(e){
		//处理错误
		}
	+ catch代码块捕获错误之后，程序不会中断，会继续执行下去
- finally 代码块
	- try...catch结构允许在最后添加一个finally代码块，表示不管是否出现错误，都必须在最后运行的语句(之前报错或者return都会执行)

<a id="代码风格"></a>
## 代码风格
- 缩进
	+TAB和空格不要交叉使用
- 区块
	+总是使用大括号，起首的大括号，不要另起一行
- 圆括号
	+函数的调用
	+表达式组合
	+ 表示函数调用和函数定义时，函数名与左括号不要空格
- 全局变量
	+全部大写字母
- 变量声明
	+变量声明”提升“（hoist）到代码块（block）的头部	
- 自增和自减运算符
	用+=、-=代替++、--
- switch...case结构用对象结构代替

<a id="console"></a>
## Console
-console.log()
	+ 如果第一个参数是格式字符串、格式占位符，后面参数会替换
		* %s 字符串 string
		* %d 整数 decimal十进制
		* %i 整数 integer
		* %f 浮点数 float
		* %o 对象的链接
		* %c CSS格式字符串
			**console.log('%c aa','color:red;background: yellow; font-size: 24px;')
- debugger
	+debugger语句主要用于除错，作用是设置断点

<a id="面向对象编程"></a>
##面向对象编程
<a id="实例对象与new命令"></a>
### 实例对象与new命令
- 对象
	+对象是单个实物的抽象
	+对象是容器，封装property和method
- 构造函数
	+ 典型的OOP语言如C++和Java中的class就是对象的模板
	+ JavaScript中的对象是基于constructor构造函数和prototype原型链
	+ 构造函数的特点
		*函数体内部使用了this关键字，代表了所要生成的对象实例
		*生成对象的时候，必须使用new命令
		*构造函数名字第一个字母通常大写
- new命令
	+ 作用：执行构造函数，返回一个实例对象
	+ 忘了使用new，构造函数变成普通函数，this此时代表全局对象
	+ use strict
		*构造函数内部第一行加上，一旦忘了使用new命令，直接调用构造函数会报错
		*严格模式中，函数内部的this不能指向全局对象，默认等于undefined,js不允许对undefined添加属性
	+ if(!(this instanceof Fun)){
		return new Fun()
		}	
- new命令原理
	+ 使用new命令时，它后面的函数依次执行
		* 创建一个空对象，作为将要返回的对象实例
		* 将这个空对象的原型，指向构造函数的prototype属性
		* 将这个空对象赋值给函数内部的this关键字
		* 开始执行构造函数内部的代码
	+ return 
		*如果return后面跟着一个对象，new命令会返回且只返回return语句指定的对象，否则不会管return语句，返回this对象
		*如果new一个普通函数（内部没有this关键字），return不是对象则返回空对象，这是因为new命令总是返回一个对象
	+ new.target
		* 函数内部使用。
		* 如果当前函数被new调用了，new.target指向当前函数，否则为undefined
		* if(!new.target){
			throw new Error('请使用new命令调用')
		}
	+ Object.create()创建实例对象
		* 有时候拿不到构造函数，只能拿到一个现有的对象，可以将这个现有的对象作为模板生成新的实例对象
		* var per2 = Object.create(per1) 

<a id="this关键字"></a>
### this关键字
- 涵义
	+ this不管用在什么场合，它总是返回一个对象
	+ this就是属性或方法“当前”所在的对象
	+ 对象的属性可以赋给另一个对象，所以属性所在的当前对象可变
	+ 只要函数被赋给另一个变量，this的指向就会变
- 实质
	+ 将一个对象赋值给变量obj时，JavaScript引擎会存在内存里，生成一个对象，然后把对象的地址赋值给变量obj，也就说说obj是一个地址
	+ 原始的对象以字典结构保存，每一个属性名都对应一个属性描述对象
	属性的值保存在属性描述对象的value属性里面
		*属性的值如果是函数的话，引擎会将函数单独保存在内存中，然后将函数的地址赋值给属性的value属性
- 使用场合
	+ 全局环境
		* 全局环境使用this，它指的就是顶层对象window
	+ 构造函数
		* 构造函数中的this，指的是实例对象
	+ 对象的方法
		* 如果对象的方法里面包含this，this的指向就是方法允许时所在的对象。该方法赋值给另一个对象，就会改变this 的指向
		* 如果this所在的方法不在对象的第一层，这时this只是指向当前一层的对象，而不会继承更上面的层
- 使用注意点
	+ 避免多层this
		* 使用一个变量固定this 的值，然后内层函数调用跟这个变量
		* use strict
			** 如果函数内部this指向window，则报错
	+ 避免数组处理方法中的this
		* 数组的map和forEach允许一个函数作为参数，这个函数内部不应该使用this
			**固定this，方法如上
			**将this当做forEach、map的第二个参数，固定它的运行环境
	+ 避免回调函数中的this
		*回调函数中的this往往会改变指向，最好避免使用
		*可以采用this绑定的方法
- 绑定this的方法
	+JavaScript提供了call、apply、bind三个方法，来切换/固定this的指向
	+ Function.prototype.call()
		*函数实例的call方法，可以指定函数内部this的指向，然后再所指定的作用域中，调用该函数
		*call方法的参数，应该是一个对象。如果参数为空、null和undefined，则默认传入全局对象
		*如果call方法的参数是一个原始值，那么这个原始值会自动转成对应的包装对象，然后传入call方法
			** f.call(5)
			// Number{[[PrimitveValue]]:5}
		*fun.call(thisValue,arg1,arg2,...)
			** add.call(this,1,2) //3
		*call方法的应用
			**调用对象的原生方法
				***如果一个对象继承的原生方法被覆盖了的话，可以用call找回
				var obj = {}
				obj.hasOwnProperty = function () {
  					return true;
				};
				Object.prototype.hasOwnProperty.call(obj, 'a')
	+ Function.prototype.apply()
		*apply方法的作用与call方法类似，也是改变this指向，然后再调用该函数
		*apply与call的唯一区别就是，前者接受一个数组作为函数执行时的参数，使用格式如下
			**fun.apply(thisValue,[arg1,arg2,...])
			**add.apply(this,[1,2]) //3
		* apply方法的应用
			**找出数组中最大元素
				***Math.max.apply(null,arr)
				***一个数组里有空元素或者undefined，这个数组的最大值和最小值都是NaN
			**将数组的空元素变成undefined
				***Array.apply(null,arr)
				***空元素与undefined的差别在于，数组forEach方法会调过空元素，但是不会调过undefined。因此，遍历内部元素的时候，会得到不同的结果
			**转换类似数组的对象
				***Array.prototype.slice.apply()
			**绑定回调函数的对象
				***由于apply方法(或者call方法)不仅绑定函数执行时所在的对象，还会立即执行函数.
	+ Function.prototype.bind()
		*bind方法用于将函数体内的this绑定到某个对象，然后返回一个新函数
		*bind还可以接受更多的参数，将这些参数绑定原函数的参数
			**若bind里少了原函数参数，可在函数执行时补上
		*bind使用注意
		https://wangdoc.com/javascript/oop/this.html
			**每一次返回一个`新`函数
			**结合回调函数使用
			**结合call方法使用
				***改写JS原生方法的使用形式
				***简写一些原生方法
					var push = Function.prototype.call.bind(Array.prototype.push)

<a id="regexp对象"></a>
### RegExp对象
- 正则表达式：regular expression是一种表达文本模式(即字符串结构的方法)，有点像字符串的模板，常常用来按照“给定模式”匹配文本
- 新建正则表达式有两种方法。
	+ 一种是使用字面量，以斜杠表示开始和结束。
		var regex = /xyz/
		这种方法再引擎编译代码时，就会新建正则表达式
	+ 另一种是使用RegExp构造函数
		var regex = new RegExp('xyz')
		这种方式在运行时新建正则表达式，所以前者的效率较高


<a id="对象的继承"></a>
###对象的继承
-原型对象概述
	+构造函数的缺点
		*同一个构造函数的多个实例之间，无法共享属性，从而造成对系统资源的浪费
	+prototype属性的作用
		*原型对象的所有属性和方法，都能被实例对象共享
		*每个函数都有一个prototype属性，指向一个对象
		*对于普通函数来说，该属性基本无用。但是，对于构造函数来说，生成实例的时候，该属性会自动成为实例对象的原型
		*原型对象的属性不是实例对象自身的属性。只要修改原型对象，变动就立刻会体现在所有的实例对象上
		*如果实例对象自身就有某个属性或方法，它就不会再去原型对象寻找这个属性或方法
	+原型链
		*所有对象都有自己的原型对象
			**任何一个对象，都可以充当其他对象的原型
			**由于原型对象也是对象，所以他也有自己的原型
			**因此会形成一个prototype chain
			**原型链的尽头是null，Object.prototype的原型是null
		*读取对象的某个属性时
			**Js引擎先寻找对象本身的属性
			**若找不到，就去它的原型找
			**若找不到，就到原型的原型找
			**弱到顶层Object.prototype还找不到，则返回undefined
			**若对象自身和它的原型，都定义了一个同名属性，那么优先读取对象自身的属性
	+constructor属性
		*prototype对象有一个constructor属性，默认指向prototype对象所在的构造函数
		*constructor属性定义在prototype对象上面，可以被所有实例对象继承
		*作用：可以得知某个实例对象，到底是哪一个构造函数产生的
		*可以从一个实例对象新建另一个实例
-instanceof运算符
	+instanceof运算符返回一个布尔值，表示对象是否为某个构造函数的实例。
	+左边是实例对象，右边是构造函数
	+instanceof会检查右边构建函数的原型对象，是否在左边对象的原型链上
	+ v instanceof V === V.prototype.isPrototypeOf(v)
	+ 当左边对象的原型链上，只有null对象时，instanceof判断会失真
	+ 应用
		*判断值得类型
			** x instanceof Array
			** y instanceof Object
			** 只能用于对象，不适用原始类型的值
		*判断是否忘了加new命令的问题
-构造函数的继承
	+第一步是在子类的构造函数中，调用父类的构造函数
	+第二部是让子类的原型指向父类的原型，这样子类就可以继承父类原型
	
-多重继承
	+混入
-模块
	+基本的实现方法
		*模块是实现特定功能的一组属性和方法的封装
		*简单的做法是把模块写成一个对象，所有的模块成员都放到这个对象里面
	+封装私有变量：构造函数的写法
		*可以利用构造函数，封装私有变量
		*缺点：私有变量可从外部读写，不是很安全
	+封装私有变量：立即执行函数的写法
		*将相关的属性和方法封装在一个函数作用域里面，可以达到不暴露私有成员的目的
	+模块的放大模式
		*如果一个模块很大，必须分成几个部分，或者一个模块需要继承另一个模块，这时就必须采用放大模式。
		*宽方法模式：立即执行函数的参数可以是空对象
	+输入全局变量
		*为了在模块内部调用全局变量，必须显式地将其他变量输入模块
		*立即执行函数还可以起到命名空间的作用

<a id="object对象的相关方法"></a>
###Object对象的相关方法
- Object.getPrototypeOf()
	+ 返回参数对象的原型
	+ 特殊对象的原型
		* 空对象的原型是Object.prototype
		* Object.prototype的原型是null
		* 函数的原型是Function.prototype
- Object.setPrototypeOf()
	+ 为参数对象设置原型，返回该参数对象。它接受两个参数，第一个是现有对象，第二个是原型对象
	+ new命令可以用setPrototypeOf模拟	
		 var f = Object.setPrototypeOf({},F.prototype);
		 F.call(f)
- Object.create()
	+ 接受一个对象作为参数，然后以它的原型，返回一个实例对象。该实例完全继承原型对象的属性
	+ 下面三种方式生成的新对象是等价的
		*var obj1 = Object.create({})
		*var obj2 = Object.create(Object.prototype)
		*var obj3 = new Object();
	+ 如果想要生成一个不继承任何属性的对象，将Object.create的参数设为null
	+ Object.create方法必须提供对象原型，即参数不能为空，或者不是对象，否则报错。
	+ Object.create方法生成的新对象，动态继承了原型。在原型上修改或者添加任何方法，会立刻反映在新对象之上
	+ 除了对象的原型，Object.create方法还可以接受第二个参数。该参数是一个属性描述对象，它所描述的对象属性，会添加到实例对象，作为该对象自身的属性。
	+ 继承了原型对象的构造函数
- Object.prototype.isPrototypeOf()
	+ 用来判断该对象是否为参数对象的原型
	+ Object.prototype.isPrototypeOf(Object.create(null)) //false
- object.prototype.__proto__
	+ 返回该对象的原型。该属性可读写
	+ 只有浏览器才需要部署，其他环境没有这个属性
	+ 尽量少用这个内部属性
		*而是用getPrototypeOf()、setPrototypeOf()进行原型对象的读写操作
- 获取原型对象方法的比较
	+获取实例对象的原型对象有三种方法
		*obj.__proto__
		*obj.constructor.prototype
		*Object.getPrototypeOf(obj)
	+ __proto__属性只有浏览器才需要部署，其他环境可以不部署
	+ obj.constructor.prototype在手动改变原型对象是，可能会失效
	+ 推荐使用getPrototypeOf(obj)
- Object.getOwnPropertyNames()
	+返回一个数组，成员是参数对象本身的所有属性的键值，不包含继承的属性键名
	+对象本身的属性中，有些可以遍历，有些不可以遍历
	+若指向获取哪些可以遍历的属性，使用Object.keys()
- Object.prototype.hasOwnProperty()
	+返回一个布尔值，用于判断某个属性定义在对象自身还是定义在原型链上
	+hasOwnProperty方法是Js之中唯一一个处理对象属性时，不会遍历原型链的方法
- in运算符和for...in循环
	+in运算符返回一个布尔值，表示一个对象是否具有某个属性。它不区分自身还是继承
	+in运算符常用于检查一个属性是否存在
	+获取对象的所有可比案例属性，用for in
- 对象的拷贝
	+拷贝一个对象，需要做到下面两件事情
		*确保拷贝后的对象，与原对象具有同样的原型
		*确保拷贝后的对象，与原对象具有相同的实例属性
	+Object.getOwnPropertyDescriptors()

<a id="异步操作"></a>
## 异步操作
<a id="异步操作概述"></a>
### 异步操作概述
- 单线程模型
	+ JS只在一个线程上运行
	+ JS引擎有多个线程，单个脚本只能在一个线程上运行，称为主线程，其他的线程都在后台配合
	+ JS内部采用事件循环机制
- 同步任务和异步任务
	+ 同步任务
		*只有前一个任务执行完毕，才能执行后一个任务
	+ 异步任务
		* 被引擎放在一起，不进入主线程、而进入任务队列的任务。
		* 只有引擎认为某个异步任务可以执行了，该任务才会进入主线程执行
		* 异步任务没有堵塞效应，采用回调函数的形式
- 任务队列和事件循环
	+ 任务队列
		* JS运行时，除了一个正在运行的主线程，引擎还提供一个任务队列，里面是各种需要当前程序处理的异步任务
		* 主线程会去执行所有的同步任务，等到同步任务全部执行完，就回去看任务队列里面的异步任务。如果条件满足，那么异步任务就重新进入主线程开始执行，这时就变成同步任务了。等到执行完，下一个异步任务再进入主线程开始执行。一旦任务队列情况，程序就结束执行
	+ 事件循环
		* JS引擎回去检查挂起的异步任务是不是可以进入主线程。这种循环检查的机制叫事件循环
		* 事件循环是一个程序结构，用于等待和发送消息和事件
- 异步操作的模式
	+ 回调函数
	+ 事件监听
	+ 发布/订阅
- 异步操作的流程控制
	+ 如果存在多个异步操作，如何确定异步操作执行的顺序，以及如何保证遵守这种顺序
	+ 串行执行
		* 编写一个流程控制函数，让它来控制异步任务，一个任务完成以后，再执行另一个
	+ 并行执行
		* 流程控制含也可以是并行执行，即所有异步任务同时执行，等到全部完成以后才执行final函数
	+ 串并结合

<a id="定时器"></a>
### 定时器
- setTimeout()
	+ 一段时间后执行
- setInterval()
	+ 每隔一段时间执行一次
- clearTimeout(),clearInterval()
- debounce函数
- 运行机制
- setTimeout(f,0)

<a id="promise对象"></a>
### Promise对象
- 概述
- Promise对象的状态
- Promise构造函数
- Promise.prototype.then()
- then()用法辨析
- 图片加载

<a id="事件"></a>
## 事件
<a id="eventtarget接口"></a>
### EventTarget接口
- 概述
	+ DOM的事件操作(监听和触发)，等定义在EventTarget接口。
	+ 所有节点对象都部署了这个接口，其他一些需要事件通信的浏览器内置对象(XMLHttpRequest、AudioNode、AudioContext)也部署了这个接口
	+ 该接口主要提供三个实例方法
		* addEventListener：绑定时间的监听函数
		* removeEventListener：移除时间的监听函数
		* dipatchEvent：触发事件
- EventTarget.addEventListener()
	+ 用于在当前节点或对象上，定义一个特定事件的监听函数。一旦这个事件发生，就会执行监听函数。
	+ 该方法没有返回值
	+ 该方法接受三个参数
		* type：事件名称，大小写敏感
		* listener：监听函数。事件发生时，会调用该监听函数
			* 第二个参数除了监听函数，还可以是一个具有handleEvent方法的对象
			* 如果想向监听函数传递参数，可以用匿名函数包装一下监听函数
		* useCapture：布尔值，表示监听函数是否在捕获阶段触发
			* 默认为false
			* 第三个参数还可以是一个属性配置对象
				* capture：布尔值
					表示该事件是否在捕获阶段触发监听函数
				* once：布尔值
					表示监听函数是否只触发一次，然后就自动移除
				* passive：布尔值
					表示监听函数不会调用事件的prevenDefault方法。如果监听函数调用了，浏览器将忽略这个要求，并在监控台输出一行警告
- EventTarget.removeEventListener()
	+ 用来移除addEventListener方法添加的事件监听函数
	+ 没有返回值
- EventTarget.dispatchEvent()
	+ 在当前节点上触发制定事件，从而触发监听函数的执行。
	+ 返回一个布尔值
	+ 只要有一个监听函数调用了Event.preventDefault(),则返回值为false，否则为true
	+ 参数是一个Event对象的实例
	+ 可以判断一个事件是否被取消
	






