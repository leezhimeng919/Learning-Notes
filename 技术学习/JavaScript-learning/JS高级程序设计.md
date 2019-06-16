<!-- MarkdownTOC -->

- [变量、作用域和内存问题](#变量、作用域和内存问题)
    - [基本类型和引用类型的值](#基本类型和引用类型的值)
    - [执行环境及作用域](#执行环境及作用域)
    - [垃圾收集](#垃圾收集)
- [面向对象的程序设计](#面向对象的程序设计)
    - [理解对象](#理解对象)
    - [创建对象](#创建对象)
    - [继承](#继承)
- [函数表达式](#函数表达式)
    - [递归](#递归)
    - [闭包](#闭包)
    - [模仿块级作用域](#模仿块级作用域)
    - [私有变量](#私有变量)
- [BOM](#bom)
    - [Window对象](#window对象)
    - [location对象](#location对象)
    - [navigator对象](#navigator对象)
    - [screen对象](#screen对象)
    - [history对象](#history对象)
- [DOM](#dom)
    - [节点层次](#节点层次)
    - [DOM操作技术](#dom操作技术)
    - [DOM拓展](#dom拓展)
- [Json](#json)
    - [语法](#语法)
        - [简单值](#简单值)
        - [对象](#对象)
        - [数组](#数组)
    - [解析与序列化](#解析与序列化)
        - [JSON对象](#json对象)
        - [序列化选项](#序列化选项)
- [Ajax与Comet](#ajax与comet)
    - [XMLHttpRequest对象](#xmlhttprequest对象)
        - [XHR的用法](#xhr的用法)

<!-- /MarkdownTOC -->

<a id="变量、作用域和内存问题"></a>

## 变量、作用域和内存问题

<a id="基本类型和引用类型的值"></a>

### 基本类型和引用类型的值

- 变量的访问
    + 基本类型 **按值访问**，可以操作保存在变量中的实际的值
    + 引用类型 **按引用访问**，实际的值是保存在内存中的对象，不能直接操作对象的内存空间。在为对象添加属性时，操作的是实际的对象，在复制保存着对象的某个变量时，操作的是对象的引用
- 动态的属性
    + 引用类型可以动态的操作属性
- 复制变量值
    + 基本类型复制的是值，两个值相同但互不相干
    + 引用类型复制的是指针，两个指针指向内存空间中同一个对象
- 传递参数
    + 无论传参是基本类型还是引用类型，**都是按值传递**
    + 参数实际上是函数的局部变量，用ES的概念说，是arguments对象中的一个元素
    + 在函数内部重写一个全局对象时，这个之前的全局对象会变成一个局部对象，局部对象会在函数执行完毕后立即销毁
- 检测类型
    + `typeof`方便检测基本类型
    + `instanceof`方便检测引用类型

<a id="执行环境及作用域"></a>

### 执行环境及作用域
- 产生：当某个函数被调用时，会创建一个执行环境及相应的作用域链，然后用arguments和其他命名参数的值来初始化活动对象
- 执行环境：`execution context`也叫执行上下文，定义了变量或函数有权访问的其他数据，决定了它们各自的行为
    + 变量对象：环境中定义的所有变量和函数都保存在这个对象中。解析器在处理数据时会在后台使用这个对象,编码过程中无法访问这个对象
    + 全局执行环境：最外围的一个执行环境，在web浏览器中，全局执行环境是window对象，因此所有的全局变量和函数都是作为window对象的属性和方法创建的
    + 环境的销毁：某个执行环境中所有代码执行完毕后，该环境被销毁，保存在其中的所有变量和属性定义也随之销毁。全局执行环境直到应用程序退出时才被销毁
    + 执行流：每个函数都有自己的执行环境，当执行流进入一个函数时，函数的环境被推入一个环境栈中。在函数执行之后，栈将其环境弹出，把控制权返回给之前的执行环境
- 作用域链：指向变量对象的指针列表，只引用但不实际包含变量对象。保证对执行环境有权访问的所有变量和函数的有序访问
    + 作用域链的前端：始终都是当前执行的代码所在环境的变量对象
        * 如果执行环境是函数，将其 **活动对象**作为变量对象。活动对象最开始只包含arguments对象一个变量
    + 作用域链的最后端：始终都是全局执行环境的变量对象
    + 中间：下一个变量对象来自下一个包含(外部)环境，直至延续到全局执行环境
    + 标识符解析：沿着作用域链一级一级地搜索标识符的过程
- 延长作用域链
    + try-catch语句
    + with语句

- 没有块级作用域
    + es6补充let、const关键字

<a id="垃圾收集"></a>

### 垃圾收集
- 标记清楚
- 引用计数
- 性能问题
- 管理内存

## 引用类型


### Array类型

<a id="面向对象的程序设计"></a>

## 面向对象的程序设计
<a id="理解对象"></a>

### 理解对象
- 属性类型：为了实现JavaScript引擎，在JavaScript中不能直接访问它们
    + 数据属性：包含一个数据值的位置，在这个位置可以读写值，有4个描述行为特性的描述符
        * `[[Configurable]]`表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性、能否把属性修改为访问器属性
            - 一旦把属性定义为不可配置的，就不能再把它变回可配置的了
        * `[[Enumerable]]`表示能否通过for——in循环返回属性
        * `[[writable]]`表示能否修改属性的值
        * `[[value]]`表示这个属性的数据值
    + 访问器属性：不包含数据值，包含一对getter和setter函数(非必需)
        * 不能直接定义，必须使用defineProperty来定义
        * `[[Configurable]]`同上
        * `[[Enumerable]]`同上
        * `[[Get]]`在读取属性时调用的函数。默认值undefined
        * `[[Set]]`在写入属性时调用的函数。默认值undefined
        * 使用方式同数据属性，使用访问器属性的常见方式是设置一个属性的值会导致其他属性发生变化。
    + `Object.defineProperty()`:修改一个属性默认的特性
        * 接受三个参数：属性所在对象，属性名，一个描述符对象
        * 描述符对象的属性为：configurable、enumerable、writable、value
- 定义多个属性：`Object.defineProperties()`
    + 接收两个参数:属性所在对象，属性名和描述符对象的键值对对象
    + 所有的属性都是在同一时间创建的
- 读取属性的特性:`Object.getOwnPropertyDescriptor()`
    + 接收两个参数：属性所在对象、要读取其描述符的属性名
    + 返回值是一个对象，对象的属性视数据属性和访问器属性而不同

<a id="创建对象"></a>
### 创建对象
- 工厂模式
    + 用简单的函数创建对象，为对象添加属性和方法，然后返回对象
    + 基本思路：抽象创建具体对象的过程，封装以特定接口创建对象的细节
- 构造函数模式
    + 创建自定义引用类型，像创建内置对象实例一样使用new操作符创建引用类型实例
    + 和工厂模式的区别
        * 没有显式的创建对象 `new Object()`
        * 直接将属性和方法赋给了`this`对象
        * 构造函数没有`return`语句
    + 用 `new` 构造函数创建实例，会经历4个步骤
        * 创建一个新对象
        * 将构造函数的作用域赋给新对象(为了this指向新对象)
        * 执行构造函数中的代码
        * 返回新对象
    + `实例名.constructor == 构造函数名      //true`
    + `实例名 instanceof 构造函数名/Object   //true`
    + 问题：每个方法都要在每个实例上重新创建一遍
        * `person1.方法 == person2.方法    //false`
        * 可以把方法的定义转移到构造函数外部，而在构造函数内部，将方法属性设置成等于这个全局方法(保存指向这个全局方法的指针)
            - 这样做多了就会使封装性减弱
- 原型模式
    + 基本思路：使用构造函数的`prototype`属性来指定哪些应该共享的属性和方法
        * 创建的每一个函数都有一个`prototype`属性，保存着指向一个对象的指针，这个对象的用途是包含所有实例 **可共享**的属性和方法。
        * `prototype`是通过调用构造函数而创建的那个实例的原型对象，可以不必在构造函数中定义对象实例的信息
    + **原型对象**
        * `Function.prototype`:每创建一个函数，就会创建一个prototype属性，该属性指向函数的原型对象
        * `Function.prototype.constructor`:所有的原型对象会自动获取一个constructor属性，指向prototype属性所在函数
            - `Person.prototype.constructor == Person`
        * `实例.__proto__`:当调用构造函数创建一个实例后，这个实例中会包含一个指向构造函数原型对象的指针`[[prototype]]`，在浏览器上是的体现是每个实例对象上有一个 `__proto__`属性
        * 总结：实例的属性中会有`__proto__`属性指向原型对象，构造函数中会有`prototype`属性指向原型对象，原型对象中会有`constructor`属性指向构造函数
        * `isPrototypeOf()`
            - Person.prototype.isPrototypeOf(person1) //true
        * `Object.getPrototypeOf()`
            - Object.getPrototypeOf(person1) == Person.prototype //true
        * 原型搜索机制
            - 原理：对象实例共享原型所保存的属性和方法
            - 当读取某个对象的某个属性时
                + 首先会搜索对象实例本身，如果找到给定的属性或方法名，则返回
                + 若没找到，则对对象实例的原型对象进行第二次搜索，如果找到，则返回
        * `hasOwnProperty()`：检测一个属性是在实例中还是在原型中。该方法继承自Object
            - person1.hasOwnProperty("name")    //false  表示属性在原型中
    + 原型与in操作符
        * `in`：无论是实例本身还是原型的属性，只要能访问就为true
            - "name" in person  //true
        * `for-in`:返回的是所有可通过对象访问的，enumerated的属性
            - 包括存在于实例的属性，也包括存在与原型的属性
            - 会屏蔽原型中不可枚举的属性(即[[enumerable]]设置为false的属性)，但实例属性覆盖该原型属性后是可以的
            - 所有开发人员定义的属性都是可枚举的 
        * `Object.keys(原型对象)`:返回一个所有可枚举属性的字符串数组
            - Object.keys(Person.prototype)     //name,age,job,sayName
        * `Object.getOwnPropertyNames(原型对象)`：返回所有属性的字符串数组
            - Object.getOwnPropertyNames(Person.prototype)  //constructor,name,age,job,sayName
    + 对象字面量方式重写原型对象
        * 重写原型就切断了现有实例与新原型的联系
        * 新原型的`constructor`不再指向`Person`,而是`Object`。因为重写了原型对象，这个原型就是Object的实例，它的constructor属性也就指向了最顶层Object
            - `person1 instanceof Person `//true
            - `person1.constructor == Person `//false
        * 解决方法
            - 对象字面量中加一条`constructor : Person,`。但是会产生一个新的问题：constructor变成可枚举的属性。
            - `Object.defineProperty`
            ```
            Object.defineProperty(Person.prototype, "constructor", {
                enumerable : fasle,
                value : Person
             });
            ```
    + 原型的动态性
        * 在通过构造函数创建实例之后修改原型对象
            - 对原型对象内部做任何修改都能够立即从实例上反映出来
            - 如果修改的是整个原型对象，则不具有动态性
                + 重写原型就切断了原本原型和构造函数之间的联系。
                + 此时构造函数的prototype属性指向重写后的原型。
                + 而先前创建的实例中的指针仅指向重写前的原型，而不指向重写后的原型
    + 原生对象的原型
        * 原生引用类型(Object、Array、String等)都在其构造函数的原型上定义了方法
        * 不推荐在原生对象的原型上定义新方法
    + 原型对象的问题
        * 在修改基本类型的属性时，问题不大，因为同名属性会直接覆盖
        * 在修改包含引用类型值的属性时，问题很大，所有实例中的属性都会做出修改
- 组合使用构造函数模式和原型模式
    + 构造函数模式用于定义实例属性，原型模式用于定义方法和共享属性
    + 优点：
        * 支持向构造函数传递参数
        * 每个实例都会有自己的一份实例属性副本
        * 共享着方法的引用，最大限度节省内存
- 动态原型模式
    + 把所有信息都封装在构造函数中，而仅在必要的情况下(第一次被调用时)通过在构造函数中初始化原型
    ```
    if (typeof this.sayName != "Function"){//语句检查可以是任何属性或方法
        Person.prototype.sayName = Function(){//不要用对象字面量方式重写原型对象
            return this.name;
        }
    }
    ```

- 寄生构造函数模式
    + 类似工厂模式：除了使用new操作符和把包装函数称之为构造函数之外和工厂模式一模一样
    + 优点 
        * 可以重写调用构造函数时return的值。普通构造函数只能返回新对象实例
        * 可以用来创建有额外方法的引用类型，如创建一个类似Array的构造函数
    + 缺点
        * 顾名思义，寄生。返回的对象与构造函数和构造函数的原型之间没有关系
    + 不推荐
- 稳妥构造函数模式
    + 稳妥对象：没有公共属性，其方法不引用this关键字
    + 适用于不允许使用this和new的安全环境中
    + 类似寄生构造函数模式;与寄生构造函数模式的区别：
        * 新创建对象的实例方法不引用this
        * 不使用new操作符调用构造函数

<a id="继承"></a>
### 继承
- 原型链:实现继承的主要方法
    + 基本思路：利用原型让一个引用类型继承另一个引用类型的属性和方法
    + 原型搜索机制拓展：搜索子对象实例->搜索子对象原型->搜索超对象原型直至找到为止
    + `Object.prototype`:默认的原型。原型链的最顶层
        * 所有引用类型默认都继承了Object
        * 所有函数的默认原型都是Object的实例 `Function.prototype = new Object()` 
    + `instanceof`：确定原型和实例的关系，子实例是原型链中任何一个类型的实例
    + `isPrototypeOf()`同`instanceof`
    + 给原型添加方法的代码一定要放在替换原型的语句之后
    + 通过原型链实现继承时，不能使用对象字面量创建原型方法，字面量添加新方法会破坏继承
    + 原型链的问题
        * 通过原型链来实现继承时，原型会变成另一个类型的实例。原先的实例属性就变成了原型属性，即会被共享
        * 创建子类型的实例时，不能向超类型的构造函数中单独传递参数
- 借用构造函数(伪造对象或经典继承)技术
    + 基本思路：在子类型构造函数内部调用超类型的构造函数
    + 实现：通过使用`apply`和`call`方法在将来新创建的对象上执行构造函数
    + 传递参数
        * `superType.call(this,arg1,arg2)`
        * `superType.apply(this,[arg1,arg2])`     
    + 借用构造函数的问题
        * 函数复用率低
- 组合继承(伪经典继承)：将原型链和借用构造函数的技术组合到一块
    + 基本思路：使用原型链实现对原型属性和方法的继承，通过借用构造函数来实现对实例属性的继承
    + 是JavaScript最常用的继承模式
    + 组合继承的问题：每次都会调用两次超类型的构造函数，继承两次实例属性
        * 一次是创建子类型原型时继承实例属性
        * 一次是在子类型构造函数内部继承实例属性
- 原型式继承
    + 基本思路：借助原型基于 **已有的对象**创建新对象(克隆)
    ```
    function object(o){
        function F(){}      //新建一个临时性的构造函数
        F.prototype = o;    //将传入的对象作为这个构造函数的原型对象，这里只是浅复制了传入对象o的指针。意思就是这个对象o是外部共享的
        return new F();     //返回这个构造函数的新实例
    }
    ```
    + `Object.create()`:ES5新增用来规范化原型式继承，接受两个参数
        * 用作新对象原型的对象
        * (可选)为新对象定义额外属性的对象
    + 使用场景：想让一个对象和另一个对象保持类似时
- 寄生式继承
    + 基本思路：和寄生构造函数和工厂模式类似，创建一个仅用于封装继承过程的函数
    ```
    function createAnother(origObj){
        var cloneObj = object(origObj);
        cloneObj.sayHi = function(){
            console.log("hi");
        };
        return cloneObj
    }
    ```
    + 使用场景：主要考虑的是对象而不是自定义类型和构造函数时
- 寄生组合式继承
    + 基本思路：通过借用构造函数来继承属性，通过原型链的混成形式来继承方法，直接将超类型的原型赋值给子类型的原型，而不是将超类型的实例赋值给子类型原型
    ```
    function inheirtPrototype(SubType, SuperType){
        var cloneSuperPrototype = create(SuperType.prototype);//创建对象
        cloneSuperPrototype.contructor = SubType;   //增强对象
        SubType.prototype = cloneSuperPrototype;    //指定对象
    }
    ```
    + 最理想的继承范式

<a id="函数表达式"></a>
## 函数表达式
- 定义函数
    + 函数声明
        * FSCO四大浏览器定义了name属性 `fun.name == 'fun'`
        * 函数声明提升：执行代码之前会先读取函数声明，可以把函数声明放在函数调用之后
    + 函数表达式
        * 创建一个匿名函数(拉姆达函数)赋值给一个变量，匿名函数的name为空字符串`''`
        * 和其他表达式一样，使用前必须先赋值，不存在变量提升
    + 命名函数表达式
        * 严格模式下，不能通过脚本访问arguments.callee时，可在递归函数中使用
        ```
        "use strict"
        var factorial = (
            function f(n){
                ...
                return n * f(n-1);
            }
        )
        ```
        * 将函数赋值给另一个变量，函数名字f仍然有效。在严格模式和非严格模式都可以
        * 此时name属性指向f而不是factorial

<a id="递归"></a>
### 递归
- 递归函数是一个通过名字调用自身的函数
- 通过名字递归的问题
    ```
    var anotherFactorial = factorial;   //factorial为递归方法实现的阶乘函数
    factorial = null;
    anotherFactorial(4);    //此时函数内部的facotorial(3)已经不再能执行了
    ```
- `arguments.callee`：一个指向正在执行的函数的指针
- 严格模式下，使用命名函数表示来达成相同的效果

<a id="闭包"></a>
### 闭包
- 作用域链：指向变量对象的指针列表，只引用但不实际包含变量对象。保证对执行环境有权访问的所有变量和函数的有序访问
    + 作用域链的前端：始终都是当前执行的代码所在环境的变量对象
        * 如果执行环境是函数，将其 **活动对象**作为变量对象。活动对象最开始只包含arguments对象一个变量
    + 作用域链的最后端：始终都是全局执行环境的变量对象
    + 中间：下一个变量对象来自下一个外部环境，直至延续到全局执行环境
    + 标识符解析：沿着作用域链一级一级地搜索标识符的过程
- 函数的生命周期
    + 创建函数时，会创建一个预先包含全局变量对象的 **作用域链**，这个作用域链被保存在内部的`[[scope]]`属性中
    + 调用函数时
        * 自动取得两个特殊变量`this`和`arguments`
        * 会为函数创建一个 **执行环境**，然后通过复制函数的`[[scope]]`属性中的对象构建起执行环境的作用域链。
        * 函数的活动对象被创建并被推入执行环境作用域链的前端
    + 访问函数中的变量时，从作用域链中搜索相应名字的变量
    + 函数执行完毕后，局部活动对象就会被销毁，内存中仅保存全局作用域(全局执行环境的变量对象)
- 闭包:指有权访问另一个函数作用域中的变量的函数(内部函数是其包含函数的闭包)
    + 闭包会携带包含函数的作用域(内存中存储包含函数的变量对象)和全局作用域，会比其他函数占用更多内存
    + 闭包的作用
        * 在JavaScript中模仿块级作用域
        * 用以在对象中创建私有变量(闭包实现能够访问包含作用于中变量的公有方法)
- 闭包与变量
    + 闭包只能取得包含函数中任何变量的最后一个值(在循环中的闭包要注意)
- this对象：基于函数运行时环境绑定的
    + 全局函数中，this等于window
    + 当函数作为对象的方法调用时，this等于那个对象
    + 匿名函数的this指向window，因为匿名函数是全局执行环境
    ```
    var name = "window"
    var obj = {
        name:'obj',
        getName:function() {    
            return this.name
        }
    }
    ```
    `obj.getName() `//obj
    `(obj.getName)() `//obj，因为obj.getName和(obj.getName)定义一样
    `(obj.getName = obj.getName)()`//window ,因为赋值表达式的值是匿名函数本身
- 内存泄露
    + 闭包作用域链中不要保存HTML元素，不然该元素无法被销毁
    + 闭包会引用包含函数的整个活动对象
    + 在用完一个变量后，把它设为null
     ```
     var element = document.getElementById("x");
     var id = element.id
     element.onclick = function(){
            alert(id)
     }
     element = null //解除对DOM对象的引用
     ```

<a id="模仿块级作用域"></a>
### 模仿块级作用域
- JavaScript没有块级作用域的概念
    + 变量提升
    ```
    var name = 'jimmy'
    function a(){
    console.log(name)
    if(false){
        var name = 'lzm'
    }
    }
    a() //undefined
    ```
    + for循环：
        * i在循环结束后还会存在，因为i定义在for循环的包含函数的活动对象中
        * 即使在循环结束后重新声明i(var i)也没用，因为前面的i还在，会无视后续的声明
- 匿名函数用作块级作用域(私有作用域)
    ```
    (function(){
        //这是块级作用域，ES6后被let\const取代
    })()//函数表达式之后才能跟圆括号，比如f()
    ```
    + 匿名函数放在圆括号里，表示是一个函数表达式；之后的圆括号表示会立刻调用这个函数
    + 这个匿名函数被用作块级作用域时会是一个闭包
    + 这种用法可以减少闭包占用的内存问题，因为没有指向匿名函数的引用

<a id="私有变量"></a>
### 私有变量
- 任何函数中定义的变量，都可以认为是私有变量。私有变量包含函数的参数、局部变量、函数内部定义的其他函数
- 公有方法：可以访问包含作用于中定义的变量的方法
- 特权方法：是闭包，有权访问私有变量和私有函数的公有方法
    + 在构造函数中定义特权方法
    + 静态私有变量：通过私有作用域中定义私有变量或函数创建特权方法
        * 函数声明只能创建局部函数
        * 非严格模式下，初始化未经声明的变量,总是会创建一个全局变量
    + 多查找作用域中的一个层次，就会在一定程度上影响查找速度。这正是使用闭包和私有变量的一个不足之处
- 模块模式
    + 单例特权方法
- 增强的模块模式

<a id="bom"></a>
## BOM
- ES是JavaScript的核心，BOM是web环境下JavaScript的核心
- BOM提供了很多对象，用于访问浏览器的功能。这些功能与页面内容无关

<a id="window对象"></a>
### Window对象
- 概念
    + window对象是BOM的核心对象,表示浏览器的实例
    + 两个角色：访问浏览器窗口的JSAPI;ES中的Global对象
- 全局作用域
    + window对象扮演中ES中Global对象的角色
    + `var a` 和 `window.a` 的区别
        * `var`语句声明的全局变量不能通过delete操作符删除。因为使用`var`语句添加的`winodw`属性有一个名为`[[configurable]]`的特性，这个特性值被设置为false
    + 尝试访问未声明的变量会抛错，这时可以通过`window.unknowValue`查看该变量是否存在,未声明则值为undefined.
- 窗口关系及框架
    + <frame>标签已被新标准废弃，使用<iframe></iframe>
    + 使用框架会使浏览器存在多个Global对象
    + `top`指向最高层的frame,即浏览器窗口window
    + `parent`指向当前frame的上层frame
    + `window == self`引入`self`是为了和`top`、`parent`对应起来
- 窗口位置
    + `screenLeft`/`screenTop`IE、Safari、Opera、Chrome
    + `screenX`/`screenY`FireFox、Safari、Chrome
    + 跨浏览器取的窗口位置
```
    var winPosLeft = (typeof window.screenLeft == 'number') ? 
                        window.screenLeft : window.screenX;
    var winPosTop = (typeof window.screenTop == 'number') ? 
                        window.screenTop : window.screenY;
```
    + `moveTo(0,100)`窗口移动到新位置的xy值
    + `moveBy(0,100)`窗口向水平和垂直方向移动的像素值
        * 默认被禁用，不适用于frame，只能对最外层window对象使用
- 窗口大小
    + 浏览器窗口内容区域宽高，包括水平/垂直滚动条(如果有的话)
        * `innerWidth`
        * `innerHeight`
    + 浏览器窗口的宽高
        * `onnerWidth`
        * `onnerHeight`
    + `document.documentElement.clientWidth`(后面补充)
    + `document.body.clientWidth`混杂模式
    + `resizeTo(0,100)`
    + `resizeBy(0,100)`
        * 使用方法同moveTo/moveBy
- 导航和打开窗口
    + `window.open()`导航到一个特定的URL或者打开一个新的浏览器窗口
        * 可以接收4个参数
            - 要加载的URL
            - 窗口目标
                + 自定义的窗口名或frame名
                + `_parent`
                + `_self`
                + `_top`
                + `_blank`
            - 一个特性字符串
                + 在不打开新窗口的情况下，会忽略这个参数
                + `fullscreen`是否最大化
                + `height`新窗口高度
                + `left`新窗口左坐标
                + `location`是否在浏览器窗口中显示地址栏
                + `menubar`是否在浏览器窗口中显示菜单栏
                + `resizable`是否可以通过拖动浏览器窗口的边框改变大小
                + `scrollbars`是否允许滚动
                + `status`是否显示状态栏
                + `toolbar`是否显示工具栏
                + `top`新窗口的上坐标
                + `width`新窗口的宽度
            - 一个表示新页面是否取代浏览器历史记录当中加载页面的布尔值
        * 返回值是一个指向新窗口的引用
    + `新窗口引用.close()`关闭新打开的窗口
    + `新窗口引用.closed`检测是否关闭//true
    + `新窗口引用.opener`保存着原始窗口对象
- 间歇调用和超时调用
    + `setTimeout()`指定时间后执行代码
        * 第一个参数是要执行的代码
            - 可以是一个包含JS代码的字符串，不建议
            - 可以是一个函数
        * 第二个参数是以毫秒表示的时间
        * 返回值是一个数值ID,表示这个超时调用，这个ID是这个计划执行代码的唯一标识符，后面可通过这个标识符用`clearTimeout(timeoutId)`取消超时调用
    + `setInterval()`指定周期执行代码，直至被取消或页面被卸载
        * 参数同`setTimeout`
        * `clearInterval(intervalId)`取消周期执行代码
- 系统对话框
    + `alert()`
    + `confirm()`返回值为{OK:True,Cancel:False}
    + `prompt()`
        * 第一个参数是显示给用户的文本提示
        * 第二个参数是文本输入框的默认值
        * 返回值是{OK：文本输入框的值,Cancel：null}
    + `window.print()`弹出打印对话框
    + `window.find()`弹出查找对话框

<a id="location对象"></a>
### location对象
- 概念
    + 最有用的BOM对象之一
    + 提供了当前窗口中加载文档的有关信息，还提供了一些导航功能
    + 即使window对象的属性也是document对象的属性
        * `window.location == document.location`
    + `hash`:`#content`
    + `host`:`www.xx.com:80`
    + `hostname`:`www.xx.com`
    + `pathname`:`/demo/`
    + `port`:`8080`
    + `protocol`:`http:`
    + `search`:`?a=1&b=2`
- 查询字符串参数
    + `location.search`返回从问号到URL末尾的所有内容
    + 想逐个访问每个查询字符串的参数，可自定义函数截取字符串
- 位置操作
    + `location.assign(URL)`立即打开新URL并在浏览器的历史记录中生成一条记录
        * `window.location = URL`
        * `location.href = URL`是最常用改变浏览器位置的操作
        * 这两行代码和显式调用assign()的效果一样
    + `location.replace(URL)`会导致浏览器位置改变，但不会再历史记录中生成新纪录
    + `location.reload()`从浏览器缓存中重新加载当前显示页面
        * `location.reload(true)`强制从服务器重新加载
        * 最好将reload放在代码最后一行

<a id="navigator对象"></a>
### navigator对象
- 用来识别客户端浏览器的事实标准，navigator对象的属性通常用于检测显示页面的浏览器类型
- 检测插件
    + `navigator.plugins[]`
- 注册处理程序

<a id="screen对象"></a>
### screen对象
- 用来表明客户端的能力
    + 浏览器窗口外部的显示器的信息

<a id="history对象"></a>
### history对象
- 保存着用户上网的历史记录,无法得知用户浏览过的URL
- `history.go()`
    + 负数表示向后跳转
    + 正数表示向前跳转
    + 字符串表示跳转到最近(前后都行)的包含这个字符串的历史记录
- `history.back()`后退一页
- `history.forward()`前进一页
- `hsitory.length`历史记录的数量

<a id="dom"></a>
## DOM

<a id="节点层次"></a>
### 节点层次
- Node类型
- Document类型
- Element类型
- Text类型
- Comment类型
- CDATASection类型
- DocumentType类型
- DocumentFragment类型
- Attr类型

<a id="dom操作技术"></a>
### DOM操作技术
- 动态脚本
- 动态样式
- 操作表格
- 使用NodeList

<a id="dom拓展"></a>
### DOM拓展

<a id="json"></a>
## Json
<a id="语法"></a>
### 语法
- 简单值
    + 使用与JavaScript相同的语法，可以在Json中表示字符串、数值、布尔值和null。
    + JSON不支持JavaScript中的特殊值undefined
- 对象
    + 对象作为一种复杂数据类型，表示的是一组无序的键值对儿。而每个键值对儿中的值可以是简单值，也可以是复杂数据类型的值
- 数组
    + 数组也是一种复杂数据类型，表示一组有序的值的列表，可以通过数值索引来访问其中的值。数组的值也可以是任意类型————简单值、对象或数组
    + JSON不支持变量、函数或对象实例，它就是一种表示结构化数据的格式，虽然与JavaScript中表示数据的某些语法相同，但它并不局限于JavaScript的范畴。

<a id="简单值"></a>
#### 简单值
- 数值：5
- 字符串："Hello world!"
    + JSON字符串必须使用双引号，单引号会导致语法错误
- 布尔值和null也是有效的JSON形式

<a id="对象"></a>
#### 对象
- Javascript中的对象字面量：
```Javascript
        var person = {
            name: "Nicholas",
            age: 29
        };
```
- JSON表示上述对象的方式如下
```JSON
        {
            "name": "Nicholas",
            "age": 29
        }
```
- 与Javascript的对象字面量相比，JSON对象有两个地方不一样
    + 首先，没有声明变量(JSON中没有变量的概念)
    + 其次，没有末尾的分号

<a id="数组"></a>
#### 数组
- JavaScript中的数组字面量
    + var values = [25,"h1",true];
- JSON中
    + [25,"h1",true]

<a id="解析与序列化"></a>
### 解析与序列化
<a id="json对象"></a>
#### JSON对象
- 早期的JSON解析器基本上就是使用JavaScript的eval()函数。由于JSON是JavaScript语法的子集，因此eval()函数可以解析、解释并返回JavaScript对象和数组
- JSON对象有两个方法
    + stringify()和parse()
    + 在最简单的情况下，这两个方法分别用于把JavaScript对象序列化为JSON字符串和JSON字符串解析为原生JavaScript值
```Javascript
        var book = {
            title: "Professional JavaScript",
            authors: [
                "Nicholas C. Zakas"
            ],
            edition: 3,
            year: 2011
        };

        var jsonText = JSON.stringify(book);
        var bookCopy = JSON.parse(jsonText);
```

<a id="序列化选项"></a>
#### 序列化选项
- JSON.stringify()除了要序列化的JavaScript对象外，还可以接收另外两个参数，这两个参数用于指定以不同的方式序列化JavaScript对象
    + 过滤器：可以是一个数组，也可以是一个函数
    + 选项：表示是否在JSON字符串中保留缩进。
- 过滤结果
    + 如果过滤器参数是数组，那么JSON.stringify()的结果中将只包含数组中列出的属性、
    ```Javascript
        var book = {
            title: "Professional JavaScript",
                authors: [
                    "Nicholas C. Zakas"
                ],
                edition: 3,
                year: 2011
        };

        var jsonText = JSON.stringify(book,["title, "edition])
    ```
    + 如果第二个参数是函数，传入的函数接收两个参数，属性名和属性值。根据属性名可以知道应该如何处理要序列化的对象中的属性。属性名只能是字符串，而在值并非键值对儿结构的值时，键名可以是空字符串。为了改变序列化对象的结果，函数返回的值就是相应键的值，不过要注意，如果函数返回了undefined，那么相应的属性会被忽略

    ```Javascript
        var book = {
            title: "Professional JavaScript",
                authors: [
                    "Nicholas C. Zakas"
                ],
                edition: 3,
                year: 2011
        };

        var jsonText = JSON.stringify(book,function(key, value){ 
             switch(key){ 
             case "authors": 
             return value.join(",") 
             case "year": 
             return 5000; 
             case "edition": 
             return undefined; 
             default: 
             return value; 
             } 
             });
    ```
- 字符串缩进
    + JSON.stringify()方法的第三个参数用于控制结果中的缩进和空白符。如果这个参数是一个数值，那它表示的是每个级别缩进的空格数
    + var jsonText = JSON.stringify(book, null, 4); 
    + 只要传入有效的控制缩进的参数值，结果字符串就会包含换行符。最大缩进空格为10，大于的会自动转换为10
- toJSON()方法
    + 原生对象有一个toJSON()方法，能够将JavaScript的date对象自动转换成ISO 8601日期字符串(与在Date对象上调用toISOString()的结果完全一样)
    ```Javascript
            var book = {
                title: "Professional JavaScript",
                authors: [
                    "Nicholas C. Zakas",
                    "sss"
                ],
                edition: 3,
                year: 2011,
                toJSON: function(){
                    return this.title;
                }
            };

            var jsonText = JSON.stringify(book);
    ```
    + toJSON()可以作为函数过滤器的补充，因此理解序列化的内部顺序十分重要
        * 如果存在toJSON()方法而且能通过它取得有效的值，则调用该方法。否则，返回对象本身。
        * 如果提供了第二个参数，应用这个函数过滤器。传入函数过滤器的值是上一步返回的值
        * 对上一步返回的每个值进行相应的序列化
        * 如果提供了第三个参数，执行相应的格式化
- 解析选项
    + JSON.parse()方法也可以接收另一个参数，该参数是一个函数，将在每个键值对儿上调用。为了区别JSON.stringify()接收的替换(过滤)函数(replacer)，这个函数被称为还原函数(reviver),但实际上这两个函数的签名是相同的————它们都接收两个参数，一个键一个值，而且都需要返回一个值。
    ```Javascript
                var book = {
                    "title": "Professional JavaScript",
                    "authors": [
                        "Nicholas C. Zakas",
                        "sss"
                    ],
                    edition: 3,
                    year: 2011,
                    releaseDate: new Date(2011,11,1)
                };

                var jsonText = JSON.stringify(book);
                
                var bookCopy = JSON.parse(jsonText, function(key,value){
                    if(key == "releaseDate"){
                        return new Date(value);
                    }else{
                        return value;
                    }
                    });

                console.log(bookCopy.releaseDate.getFullYear());
    ```

<a id="ajax与comet"></a>
## Ajax与Comet
<a id="xmlhttprequest对象"></a>
### XMLHttpRequest对象
    ```Javascript
    function createXHR(){
        if(typeof arguments.callee.activeXString != "string"){
            var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                            "MSXML2.XMLHttp"],
                            i,len;
            for(i=0, len=version.length; i<len; i++){
                try{
                    new ActiveXObject(version[i]);
                    arguments.callee.activeXString = version[i];
                    break;
                } catch (ex){

                }
            }
        }
        return new ActiveXObject(arguments.callee.activeXString);
    }
    ```

<a id="xhr的用法"></a>
#### XHR的用法
- open(),它接受3个参数
    + 要发送的请求的类型
    + 请求的URL:相对于执行代码的当前页面(也可以使用绝对路径)
    + 表示是否异步发送请求的布尔值
    + xhr.open("get", "example.php", false)
        * open()方法并不会真正发送请求，而只是启动一个请求以备发送。
        * 只能向同一个域中使用相同端口和协议的URL发送请求。如果URL与启动请求页面有任何差别，都会引发安全错误
    `
    xhr.open("get", "example.txt", false);
    xhr.send(null)
    `
- send()，接收一个参数，
   + 即要作为请求主题发送的数据。如果不需要通过请求主题发送数据，则必须传入null，因为这个参数对有些浏览器来说是必需的。调用send()之后，请求就会被分派到服务器。
   + 收到响应后，响应的数据会自动填充XHR对象的属性，相关的属性简介如下
       * responseText：作为响应主体被返回的文本
       * responseXML：如果响应的内容类型是"text/xml"或"application/xml",这个属性中将保存着响应数据的XML DOM 文档
       * status：响应的HTTP状态
       * statusText：HTTP状态的说明

`
`
