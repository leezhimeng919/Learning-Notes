## 面向对象的程序设计
###理解对象
- 属性类型：为了实现JavaScript引擎，在JavaScript中不能直接访问它们
    + 数据属性：包含一个数据值的位置，在这个位置可以读写值，有4个描述行为特性的描述符
        * `[[Configurable]]`表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性、能否把属性修改为访问器属性
            - 一旦把属性定义为不可配置的，就不能再把它变回可配置的了
        * `[[Enumerable]]`表示能否通过for——in循环返回属性
        * `[[writable]]`表示能否修改属性的值
        * `[[value]]`表示这个属性的数据值
        * Object.defineProperty():修改属性默认的特性
            - 接受三个参数：属性所在对象，属性名，一个描述符对象
            - 描述符对象的属性为：configurable、enumerable、writable、value
    + 访问器属性：不包含数据值，包含一对getter和setter函数(非必需)
        * `[[Configurable]]`同上
        * `[[Enumerable]]`同上
        * `[[Get]]`在读取属性时调用的函数。默认值undefined
        * `[[Set]]`在写入属性时调用的函数。默认值undefined
        * 使用方式同数据属性，使用访问器属性的常见方式是设置一个属性的值会导致其他属性发生变化。
- 定义多个属性：Object.defineProperties()
    + 接收两个参数:属性所在对象，属性名和描述符对象的键值对对象
    + 所有的属性都是在同一时间创建的
- 读取属性的特性:Object.getOwnPropertyDescriptor()
    + 接收两个参数：属性所在对象、要读取其描述符的属性名
    + 返回值是一个对象，对象的属性视数据属性和访问器属性而不同

### 创建对象
- 工厂模式
- 构造函数模式
    + 构造函数特点
        * 没有显示的创建对象 new Object()
        * 直接将属性和方法赋给了this对象
        * 构造函数没有return语句
    + 用new 构造函数创建实例，会经历4个步骤
        * 创建一个新对象
        * 将构造函数的作用域赋给新对象(为了this指向新对象)
        * 执行构造函数中的代码
        * 返回新对象
    + 实例名.constructor == 构造函数名      //true
    + 实例名 instanceof 构造函数名/Object   //true
    + 问题：每个方法都要在每个实例上重新创建一遍
        * person1.方法 == person2.方法      //false
        * 可以把方法的定义转移到构造函数外部，而在构造函数内部，将方法属性设置成等于这个全局方法(保存指向这个全局方法的指针)
            - 这样做多了就会使封装性减弱
- 原型模式


##Json
###语法
- 简单值
    + 使用与JavaScript相同的语法，可以在Json中表示字符串、数值、布尔值和null。
    + JSON不支持JavaScript中的特殊值undefined
- 对象
    + 对象作为一种复杂数据类型，表示的是一组无序的键值对儿。而每个键值对儿中的值可以是简单值，也可以是复杂数据类型的值
- 数组
    + 数组也是一种复杂数据类型，表示一组有序的值的列表，可以通过数值索引来访问其中的值。数组的值也可以是任意类型————简单值、对象或数组
    + JSON不支持变量、函数或对象实例，它就是一种表示结构化数据的格式，虽然与JavaScript中表示数据的某些语法相同，但它并不局限于JavaScript的范畴。

####简单值
- 数值：5
- 字符串："Hello world!"
    + JSON字符串必须使用双引号，单引号会导致语法错误
- 布尔值和null也是有效的JSON形式

####对象
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

####数组
- JavaScript中的数组字面量
    + var values = [25,"h1",true];
- JSON中
    + [25,"h1",true]

###解析与序列化
####JSON对象
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

####序列化选项
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

##Ajax与Comet
###XMLHttpRequest对象
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

####XHR的用法
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
