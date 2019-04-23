## 面向对象的程序设计
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

### 创建对象
- 工厂模式
    + 抽象创建具体对象的过程，封装以特定接口创建对象的细节
- 构造函数模式
    + 构造函数特点
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
    + 原型模式的特点
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
        * 新原型的`constructor`不再指向`Person`,而是`Object`。因为重写了原型对象，它的constructor属性也就变成了新对象的构造函数Object
            - person1 instanceof Person //true
            - person1.constructor == Person //false
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
    + 构造函数模式用于定义实例属性
    + 原型模式用于定义方法和共享属性
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

### 继承
- 原型链:实现继承的主要方法
    + 基本思想：利用原型让一个引用类型继承另一个引用类型的属性和方法
    + 原型搜索机制拓展：搜索子对象实例->搜索子对象原型->搜索父对象原型直至找到为止
    + `Object.prototype`:默认的原型。原型链的最顶层
        * 所有引用类型默认都继承了Object
        * 所有函数的默认原型都是Object的实例 `Function.prototype = new Object()` 
    + `instanceof`：确定原型和实例的关系，子实例是原型链中任何一个类型的实例
    + `isPrototypeOf()`同`instanceof`
    + 给原型添加方法的代码一定要放在替换原型的语句之后
    + 通过原型链实现继承时，不能使用对象字面量创建原型方法，字面量添加新方法会破坏继承
    

## Json
### 语法
- 简单值
    + 使用与JavaScript相同的语法，可以在Json中表示字符串、数值、布尔值和null。
    + JSON不支持JavaScript中的特殊值undefined
- 对象
    + 对象作为一种复杂数据类型，表示的是一组无序的键值对儿。而每个键值对儿中的值可以是简单值，也可以是复杂数据类型的值
- 数组
    + 数组也是一种复杂数据类型，表示一组有序的值的列表，可以通过数值索引来访问其中的值。数组的值也可以是任意类型————简单值、对象或数组
    + JSON不支持变量、函数或对象实例，它就是一种表示结构化数据的格式，虽然与JavaScript中表示数据的某些语法相同，但它并不局限于JavaScript的范畴。

#### 简单值
- 数值：5
- 字符串："Hello world!"
    + JSON字符串必须使用双引号，单引号会导致语法错误
- 布尔值和null也是有效的JSON形式

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

#### 数组
- JavaScript中的数组字面量
    + var values = [25,"h1",true];
- JSON中
    + [25,"h1",true]

### 解析与序列化
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

## Ajax与Comet
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
