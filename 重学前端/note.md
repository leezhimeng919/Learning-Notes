# 语义类标签

- section、nav、p、article 
- 只靠div、span走天下？
- 用对比不用好，不用比用错好
- 分类
  - 作为自然语义延伸的语义类标签
  - 作为标题摘要的语义类标签
  - 作为整体结构的语义类标签


# JavaScript类型

- Undefined
    + Q1：有些编程规范要求用void 0 代替undefined？
        * undefined类型表示未定义，它的类型只有一个值，就是undefined，任何变量在赋值之前是undefined类型，值为undefined(用全局变量undefined这个变量来表达这个值，或者用Void运算把任意一个表达式变成undefined值)
        * undefined是一个 **变量**不是一个关键字，为了避免无意中被篡改，建议使用`void 0`来获取undefined值
        * 补充一下void运算符作用
            - 返回undefined
            - 防止不必要的行为，放在a标签href，防止跳转，或放在image标签src，防止向服务器发出垃圾请求
- Null
    + null表示 **定义了但是为空**，只有一个值就是null，null是关键字
- Boolean
- String
    + Q2:字符串是否有最大长度
        * 2^53-1
            - 为什么是53？
                + JS所有Number都用IEEE754双精度浮点数存储，总共64，符号1位，指数11位，有效数字52位，而这52位全部是1就是最大长度2^53-1
        * String的意义并非所谓“字符串”，而是字符串的UTF16编码，所以字符串的最大长度是受字符串的编码长度影响的
        * 补充UTF16相关的知识
            - **ascii**：7个bit(2^7=128)表示一个字符，一个字节8bit，共128个字符。后由IBM拓展了一倍，用一个字节表示一个字符。
            - **unicode和UCS**：不同的字符集交互起来就产生冲突了，于是Unicode和ISO组织统一制定了标准，任何字符只能对应一个数字，ISO(international organization for standardization国际标准化组织)组织制定了UCS(universal character set通用字符集),Unicode组织制定了unicode码。最终目的就是为了适应全球化发展，便于不同语言的兼容交互。
            - **unicode**：unicode的第一个版本是用两个字节16bit来表示所有字符
                + 第一步定义一个规范，给所有的字符指定一个唯一对应的数字，与计算机无关
                + 第二步把字符对应的数字保存在计算机中，与计算机有关
            - **UTF-8和UTF-16**：英文多用utf-8，中文多用utf-16，出于对空间的节约
                + utf-8：EF BB BF(类似于霍夫曼树)
                    * 0XXXXXXX:同于ASCII,一个字节做一个码点识别。2^7=128
                    * 110XXXXX 10XXXXXX:两个字节做一个码点识别。2^5*2^6=2^11=2048
                    * 1110XXXX 10XXXXXX 10XXXXXX:3-1码点。2^4*2^6*2^6=2^16=65536
                    * Big-Endian：从左到右识别
                    * Little-Endian：从右到左识别
                + utf-16：FE FF
                    * 直接用两个字节当成一个码点识别，容错能力强
            - **unicode2**
                + 举一反三
                + 文本开头标志判断
                    * UTF-8  EF BB BF
                    * UTF-16/UCS-2,Little-Endian FE FF
                    * UTF-16/UCS-2,Big-Endian FF FE
                    * UTF-32/UCS-4,Big-Endian FF FE 00 00
                    * UTF-32/UCS-4,Little-Endian 00 00 FE FF
                    * 关于这些标志的含义据说的BOM规则，后面再一探究
        * BMP(Basic multilingual plane基本多语言平面)也称为基本字符区域，包含了世界上最常用的字符。表示0-65536(U+0000 - U+FFFF)的码点
    + 字符串是永远无法变更的
- Number
    + 0.1 + 0.2 = 0.3？
        * JS中的Number类型有2^64-2^53+3个值
            - NaN占2^53-2,表示一群值
            - Infinity，无穷大
            - -Infinity，负无穷大
            - Number.EPSILON:ES6在Number对象上新增的极小常量，它表示1与大于1的最小浮点数之间的差，等于2^-52.实质上是表可以接受的最小误差范围
        * 正确比较方法
        ```
            //检查等式两边的差值的绝对值是否小于最小精，才是正确的浮点数比较方法
            console.log(Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON);
        ```
- Symbol
    + ES6新加入的Symbol是啥？
        * 一切非字符串的对象key的集合，在ES6规范中，整个对象系统被用Symbol重塑
        * 创建Symbol的方式是使用全局的Symbol函数
        ```
            var mySymbol = Symbol("my symbol");
        ```
- Object
    + 为什么给对象添加的方法能用到基本类型上？
        * 对象的定义是属性的集合，包括数据属性和访问器属性，两者都是K-V结构，key可以是字符串也可以是Symbol类型
        * 类：JavaScript中的类仅仅是运行时对象的一个私有属性
        * Number、String、Boolean、Symbol对象类型中的基本类型亲戚：
            - Number、String、Boolean
                + 当跟new搭配，产生对象
                + 直接调用，强制类型转换
            - Symbol
                + 直接用new会抛错，但仍然是Symbol类型的构造器
        * 答案：运算符提供了装箱操作，它会根据基础类型构造一个临时的对象，使得我们能在基础类型上调用对应对象的方法
- 类型转换
    + StringtoNumber
        * parseInt()和parseFloat()
            - parseInt()：将字符串转为整数，要么返回一个十进制整数，要么NaN
                + 字符串头部有空格，空格会被自动去除
                + 参数不是字符串，则先转为字符串再转换
                + 一个一个字符一次转换，如果遇到不能转为数字的字符，就不再进行下去，返回已经转好的部分
                + 如果字符串第一个字符不能转为数字(后跟数字的正负号除外+1-1)，返回NaN
                + 如果字符串`0x\0X`开头，则按16进制解析，以`0`开头，则按十进制解析
                + 科学计数法会被转为字符串，会被输出有效数字
                + 接收第二个参数(2-36之间)，表示被解析的值的进制，不在范围内是`NaN`，`0、undefined、null`则被忽略
                + 若包含无意义的字符，例如指定二进制却出现大于2的字符，则从最高位开始，只返回可以转换的数值
            - parseFloat()：将字符串转为浮点数
                + 如果字符串符合科学计数法，则会进行相应转换
                + 如果参数不是字符串，或者字符串的第一个字符不能转换成浮点数，则NaN
        * Number()
            - Number是比前面两者更好的选择
            - Number底层
                + 先调用valueOf()，若返回原始类型值，则Number()
                + 若返回对象，则toString(),若返回原始类型值，则Number()
                + 若返回对象，则报错
                + valueOf方法先于toString方法执行
    + NumbertoString
        * toString()
            -  String底层
                + 先调用toString()，若返回原始类型值，则String()
                + 若返回对象，则valueOf(),若返回原始类型值，则String()
                + 若返回对象，则报错
                + toString方法先于valueOf方法执行

# 浏览器是如何工作的？
- 浏览器首先使用HTTP协议或者HTTPS协议，向服务端请求页面
- 把请求回来的HTML代码经过解析，构成DOM树
- 计算DOM树上的CSS属性
- 最后根据CSS属性对元素逐个进行渲染，得到内存中的位图
- 对位图进行合成，极大地增加后续绘制的速度(可选步骤)
- 合成之后，再绘制到页面