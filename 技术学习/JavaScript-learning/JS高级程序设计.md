- [1.JavaScript简介](#1JavaScript%E7%AE%80%E4%BB%8B)
  - [JavaScript简史](#JavaScript%E7%AE%80%E5%8F%B2)
  - [JavaScript实现](#JavaScript%E5%AE%9E%E7%8E%B0)
  - [JavaScript版本](#JavaScript%E7%89%88%E6%9C%AC)
- [2.在HTML中使用JavaScript](#2%E5%9C%A8HTML%E4%B8%AD%E4%BD%BF%E7%94%A8JavaScript)
  - [script元素](#script%E5%85%83%E7%B4%A0)
  - [嵌入代码与外部文件](#%E5%B5%8C%E5%85%A5%E4%BB%A3%E7%A0%81%E4%B8%8E%E5%A4%96%E9%83%A8%E6%96%87%E4%BB%B6)
  - [文档模式](#%E6%96%87%E6%A1%A3%E6%A8%A1%E5%BC%8F)
  - [noscript元素](#noscript%E5%85%83%E7%B4%A0)
- [3.基础概念](#3%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5)
  - [语法](#%E8%AF%AD%E6%B3%95)
  - [关键字和保留字](#%E5%85%B3%E9%94%AE%E5%AD%97%E5%92%8C%E4%BF%9D%E7%95%99%E5%AD%97)
  - [变量](#%E5%8F%98%E9%87%8F)
  - [数据类型](#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
  - [操作符](#%E6%93%8D%E4%BD%9C%E7%AC%A6)
  - [语句](#%E8%AF%AD%E5%8F%A5)
  - [函数](#%E5%87%BD%E6%95%B0)
- [4.变量、作用域和内存问题](#4%E5%8F%98%E9%87%8F%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%92%8C%E5%86%85%E5%AD%98%E9%97%AE%E9%A2%98)
  - [基本类型和引用类型的值](#%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B%E5%92%8C%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%80%BC)
  - [执行环境及作用域](#%E6%89%A7%E8%A1%8C%E7%8E%AF%E5%A2%83%E5%8F%8A%E4%BD%9C%E7%94%A8%E5%9F%9F)
  - [垃圾收集](#%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86)
- [5.引用类型](#5%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B)
  - [Object类型](#Object%E7%B1%BB%E5%9E%8B)
  - [Array类型](#Array%E7%B1%BB%E5%9E%8B)
  - [Date类型](#Date%E7%B1%BB%E5%9E%8B)
  - [RegExp类型](#RegExp%E7%B1%BB%E5%9E%8B)
  - [Function类型](#Function%E7%B1%BB%E5%9E%8B)
  - [基本包装类型](#%E5%9F%BA%E6%9C%AC%E5%8C%85%E8%A3%85%E7%B1%BB%E5%9E%8B)
  - [单体内置对象](#%E5%8D%95%E4%BD%93%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1)
- [6.面向对象的程序设计](#6%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%9A%84%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1)
  - [理解对象](#%E7%90%86%E8%A7%A3%E5%AF%B9%E8%B1%A1)
  - [创建对象](#%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1)
  - [继承](#%E7%BB%A7%E6%89%BF)
- [7.函数表达式](#7%E5%87%BD%E6%95%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F)
  - [递归](#%E9%80%92%E5%BD%92)
  - [闭包](#%E9%97%AD%E5%8C%85)
  - [模仿块级作用域](#%E6%A8%A1%E4%BB%BF%E5%9D%97%E7%BA%A7%E4%BD%9C%E7%94%A8%E5%9F%9F)
  - [私有变量](#%E7%A7%81%E6%9C%89%E5%8F%98%E9%87%8F)
- [8.BOM](#8BOM)
  - [Window对象](#Window%E5%AF%B9%E8%B1%A1)
  - [location对象](#location%E5%AF%B9%E8%B1%A1)
  - [navigator对象](#navigator%E5%AF%B9%E8%B1%A1)
  - [screen对象](#screen%E5%AF%B9%E8%B1%A1)
  - [history对象](#history%E5%AF%B9%E8%B1%A1)
- [9.客户端检测(检测是啥浏览器)](#9%E5%AE%A2%E6%88%B7%E7%AB%AF%E6%A3%80%E6%B5%8B%E6%A3%80%E6%B5%8B%E6%98%AF%E5%95%A5%E6%B5%8F%E8%A7%88%E5%99%A8)
  - [能力监测](#%E8%83%BD%E5%8A%9B%E7%9B%91%E6%B5%8B)
  - [怪癖检测](#%E6%80%AA%E7%99%96%E6%A3%80%E6%B5%8B)
  - [用户代理检测](#%E7%94%A8%E6%88%B7%E4%BB%A3%E7%90%86%E6%A3%80%E6%B5%8B)
- [10.DOM](#10DOM)
  - [节点层次](#%E8%8A%82%E7%82%B9%E5%B1%82%E6%AC%A1)
  - [DOM操作技术](#DOM%E6%93%8D%E4%BD%9C%E6%8A%80%E6%9C%AF)
- [11.DOM拓展](#11DOM%E6%8B%93%E5%B1%95)
  - [选择符API](#%E9%80%89%E6%8B%A9%E7%AC%A6API)
  - [元素遍历](#%E5%85%83%E7%B4%A0%E9%81%8D%E5%8E%86)
  - [HTML5](#HTML5)
  - [专有扩展](#%E4%B8%93%E6%9C%89%E6%89%A9%E5%B1%95)
- [12.DOM2和DOM3](#12DOM2%E5%92%8CDOM3)
  - [DOM变化](#DOM%E5%8F%98%E5%8C%96)
  - [样式](#%E6%A0%B7%E5%BC%8F)
  - [遍历](#%E9%81%8D%E5%8E%86)
  - [范围](#%E8%8C%83%E5%9B%B4)
- [13.事件](#13%E4%BA%8B%E4%BB%B6)
  - [事件流](#%E4%BA%8B%E4%BB%B6%E6%B5%81)
  - [事件处理程序](#%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E7%A8%8B%E5%BA%8F)
  - [事件对象](#%E4%BA%8B%E4%BB%B6%E5%AF%B9%E8%B1%A1)
  - [事件类型](#%E4%BA%8B%E4%BB%B6%E7%B1%BB%E5%9E%8B)
  - [内存和性能](#%E5%86%85%E5%AD%98%E5%92%8C%E6%80%A7%E8%83%BD)
  - [模拟事件](#%E6%A8%A1%E6%8B%9F%E4%BA%8B%E4%BB%B6)
- [20.Json](#20Json)
  - [语法](#%E8%AF%AD%E6%B3%95-1)
    - [简单值](#%E7%AE%80%E5%8D%95%E5%80%BC)
    - [对象](#%E5%AF%B9%E8%B1%A1)
    - [数组](#%E6%95%B0%E7%BB%84)
  - [解析与序列化](#%E8%A7%A3%E6%9E%90%E4%B8%8E%E5%BA%8F%E5%88%97%E5%8C%96)
    - [JSON对象](#JSON%E5%AF%B9%E8%B1%A1)
    - [序列化选项](#%E5%BA%8F%E5%88%97%E5%8C%96%E9%80%89%E9%A1%B9)
- [21.Ajax与Comet](#21Ajax%E4%B8%8EComet)
  - [XMLHttpRequest对象](#XMLHttpRequest%E5%AF%B9%E8%B1%A1)
  - [XMLHttpRequest 2级](#XMLHttpRequest-2%E7%BA%A7)
  - [进度事件](#%E8%BF%9B%E5%BA%A6%E4%BA%8B%E4%BB%B6)
  - [跨域资源共享](#%E8%B7%A8%E5%9F%9F%E8%B5%84%E6%BA%90%E5%85%B1%E4%BA%AB)
  - [其他跨域技术](#%E5%85%B6%E4%BB%96%E8%B7%A8%E5%9F%9F%E6%8A%80%E6%9C%AF)
  - [安全](#%E5%AE%89%E5%85%A8)
- [22.高级技巧](#22%E9%AB%98%E7%BA%A7%E6%8A%80%E5%B7%A7)
  - [高级函数](#%E9%AB%98%E7%BA%A7%E5%87%BD%E6%95%B0)
  - [防篡改对象](#%E9%98%B2%E7%AF%A1%E6%94%B9%E5%AF%B9%E8%B1%A1)
  - [高级定时器](#%E9%AB%98%E7%BA%A7%E5%AE%9A%E6%97%B6%E5%99%A8)
  - [自定义事件](#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6)
  - [拖放](#%E6%8B%96%E6%94%BE)
- [23.离线应用与客户端存储](#23%E7%A6%BB%E7%BA%BF%E5%BA%94%E7%94%A8%E4%B8%8E%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%AD%98%E5%82%A8)
  - [离线监测](#%E7%A6%BB%E7%BA%BF%E7%9B%91%E6%B5%8B)
  - [应用缓存](#%E5%BA%94%E7%94%A8%E7%BC%93%E5%AD%98)
  - [数据存储](#%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8)
- [24.最佳实践](#24%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5)
  - [可维护性](#%E5%8F%AF%E7%BB%B4%E6%8A%A4%E6%80%A7)
  - [性能](#%E6%80%A7%E8%83%BD)
  - [部署](#%E9%83%A8%E7%BD%B2)

## 1.JavaScript简介
### JavaScript简史
### JavaScript实现
- ES
- DOM
- BOM
### JavaScript版本

## 2.在HTML中使用JavaScript
### script元素
- 标签的位置
- 延迟脚本
- 异步脚本
- 在XHTML中的用法
- 不推荐使用的语法
### 嵌入代码与外部文件
### 文档模式
### noscript元素

## 3.基础概念
### 语法
- 区分大小写
- 标识符
- 注释
- 严格模式
- 语句
### 关键字和保留字
### 变量
### 数据类型
- typeof操作符
- undefined
- null
- boolean
- number
- string
- object
### 操作符
>主要分四大类：算数运算符、位运算符、关系操作符、相等操作符
<br>ES中的操作符不同之处在于能够适用于多种类型的值，在应用对象时，会调用对象的valueOf或toString

- 一元操作符：只能操作一个值的操作符
  - 递增和递减操作符
    - `a++\++a`
    - `a--\--a`
  - 一元加和一元减操作符
    - `+num`
    - `-num`
- 位操作符
  - 按位非(NOT) `~`
  - 按位与(AND) `&`
  - 按位或(OR) `|`
  - 按位异或(XOR) `^`
  - 左移 `<<`
  - 有符号的右移 `>>`
  - 无符号的右移 `>>>`
- 布尔操作符
  - 逻辑非 `!`
  - 逻辑与 `&&`
  - 逻辑或 `||`
- 乘性操作符
  - 乘法 `*`
  - 除法 `/`
  - 求模 `%`
- 加性操作符
  - 加法 `+`
  - 减法 `-`
- 关系操作符
  - 小于 `<`
  - 大于 `>`
  - 小于等于 `<=`
  - 大于等于 `>=`
- 相等操作符
  - 相等 `==`
  - 不相等 `!=`
  - 全等 `===`
  - 不全等 `!==`
- 条件操作符
  - 问号 `a?b:c`
- 赋值操作符
  - 等号 `=`
- 逗号操作符
  - 用于赋值 `var a = (5, 1, 4)`，用于赋值时，逗号操作符会返回表达式中的最后一项
  - 用于声明 `var a = 1, b = 2`
### 语句
- if语句
- do-while语句
- while语句
- for语句
- for-in语句
- label语句
- break和continue语句
- with语句
- switch语句
### 函数
- 理解函数
- 没有重载

## 4.变量、作用域和内存问题
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


### 垃圾收集
- 标记清除
- 引用计数
- 性能问题
- 管理内存


## 5.引用类型
- 引用类型是一种数据结构，用于将数据和功能组织到一起。比如Array.push()，Array是数组，push是为数组增加元素的功能。
- 引用类型也是一种对象定义，描述一类对象所具有的的属性和方法
- 引用类型和类不是相同的概念，对象是引用类型的实例

### Object类型

### Array类型
### Date类型
### RegExp类型
### Function类型
### 基本包装类型
### 单体内置对象

## 6.面向对象的程序设计

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
            - `Person.prototype.isPrototypeOf(person1) //true`
        * `Object.getPrototypeOf()`
            - `Object.getPrototypeOf(person1) == Person.prototype //true`
        * 原型搜索机制
            - 原理：对象实例共享原型所保存的属性和方法
            - 当读取某个对象的某个属性时
                + 首先会搜索对象实例本身，如果找到给定的属性或方法名，则返回
                + 若没找到，则对对象实例的原型对象进行第二次搜索，如果找到，则返回
        * `hasOwnProperty()`：检测一个属性是在实例中还是在原型中。该方法继承自Object
            - `person1.hasOwnProperty("name")    //false  表示属性在原型中`
    + 原型与in操作符
        * `in`：无论是实例本身还是原型的属性，只要能访问就为true
            - `"name" in person  //true`
        * `for-in`:返回的是所有可通过对象访问的，enumerated的属性
            - 包括存在于实例的属性，也包括存在与原型的属性
            - 会屏蔽原型中不可枚举的属性(即[[enumerable]]设置为false的属性)，但实例属性覆盖该原型属性后是可以的
            - 所有开发人员定义的属性都是可枚举的 
        * `Object.keys(原型对象)`:返回一个所有可枚举属性的字符串数组
            - `Object.keys(Person.prototype)     //name,age,job,sayName`
        * `Object.getOwnPropertyNames(原型对象)`：返回所有属性的字符串数组
            - `Object.getOwnPropertyNames(Person.prototype)  //constructor,name,age,job,sayName`
    + 对象字面量方式重写原型对象
        * 重写原型就切断了现有实例与新原型的联系
        * 新原型的`constructor`不再指向`Person`,而是`Object`。因为重写了原型对象，这个原型就是Object的实例，它的constructor属性也就指向了最顶层Object
            - `person1 instanceof Person `//true
            - `person1.constructor == Person `//false
        * 解决方法
            - 对象字面量中加一条`constructor : Person,`。但是会产生一个新的问题：constructor变成可枚举的属性。
            - `Object.defineProperty`
            ```javascript
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
    ```javascript
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
    ```JavaScript
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
    ```JavaScript
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
    ```JavaScript
    function inheirtPrototype(SubType, SuperType){
        var cloneSuperPrototype = create(SuperType.prototype);//创建对象
        cloneSuperPrototype.contructor = SubType;   //增强对象
        SubType.prototype = cloneSuperPrototype;    //指定对象
    }
    ```
    + 最理想的继承范式

## 7.函数表达式
- 定义函数
    + 函数声明
        * FSCO四大浏览器定义了name属性 `fun.name == 'fun'`
        * 函数声明提升：执行代码之前会先读取函数声明，可以把函数声明放在函数调用之后
    + 函数表达式
        * 创建一个匿名函数(拉姆达函数)赋值给一个变量，匿名函数的name为空字符串`''`
        * 和其他表达式一样，使用前必须先赋值，不存在变量提升
    + 命名函数表达式
        * 严格模式下，不能通过脚本访问arguments.callee时，可在递归函数中使用
        ```JavaScript
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

### 递归
- 递归函数是一个通过名字调用自身的函数
- 通过名字递归的问题
    ```JavaScript
    var anotherFactorial = factorial;   //factorial为递归方法实现的阶乘函数
    factorial = null;
    anotherFactorial(4);    //此时函数内部的facotorial(3)已经不再能执行了
    ```
- `arguments.callee`：一个指向正在执行的函数的指针
- 严格模式下，使用命名函数表示来达成相同的效果

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
    ```JavaScript
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
     ```JavaScript
     var element = document.getElementById("x");
     var id = element.id
     element.onclick = function(){
            alert(id)
     }
     element = null //解除对DOM对象的引用
     ```

### 模仿块级作用域
- JavaScript没有块级作用域的概念
    + 变量提升
    ```JavaScript
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
    ```JavaScript
    (function(){
        //这是块级作用域，ES6后被let\const取代
    })()//函数表达式之后才能跟圆括号，比如f()
    ```
    + 匿名函数放在圆括号里，表示是一个函数表达式；之后的圆括号表示会立刻调用这个函数
    + 这个匿名函数被用作块级作用域时会是一个闭包
    + 这种用法可以减少闭包占用的内存问题，因为没有指向匿名函数的引用

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

## 8.BOM
- ES是JavaScript的核心，BOM是web环境下JavaScript的核心
- BOM提供了很多对象，用于访问浏览器的功能。这些功能与页面内容无关

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
    + `<frame>`标签已被新标准废弃，使用 `<iframe>`
    + 使用框架会使浏览器存在多个Global对象
    + `top`指向最高层的frame,即浏览器窗口window
    + `parent`指向当前frame的上层frame
    + `window == self`引入`self`是为了和`top`、`parent`对应起来
- 窗口位置
    + `screenLeft`/`screenTop`IE、Safari、Opera、Chrome
    + `screenX`/`screenY`FireFox、Safari、Chrome
    + 跨浏览器取的窗口位置
    ```javascript
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

### navigator对象
- 用来识别客户端浏览器的事实标准，navigator对象的属性通常用于检测显示页面的浏览器类型
- 检测插件
    + `navigator.plugins[]`
- 注册处理程序

### screen对象
- 用来表明客户端的能力
    + 浏览器窗口外部的显示器的信息

### history对象
- 保存着用户上网的历史记录,无法得知用户浏览过的URL
- `history.go()`
    + 负数表示向后跳转
    + 正数表示向前跳转
    + 字符串表示跳转到最近(前后都行)的包含这个字符串的历史记录
- `history.back()`后退一页
- `history.forward()`前进一页
- `hsitory.length`历史记录的数量

## 9.客户端检测(检测是啥浏览器)
### 能力监测
### 怪癖检测
### 用户代理检测

## 10.DOM
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

### DOM操作技术
- 动态脚本
- 动态样式
- 操作表格
- 使用NodeList

## 11.DOM拓展
### 选择符API
### 元素遍历
### HTML5
### 专有扩展

## 12.DOM2和DOM3
### DOM变化
### 样式
### 遍历
### 范围

## 13.事件
### 事件流
- 事件冒泡
- 事件捕获
- DOM事件流
### 事件处理程序
- HTML事件处理程序
- DOM0级事件处理程序
- DOM2级事件处理程序
- IE事件处理程序
- 跨浏览器的事件处理程序
### 事件对象
- DOM中的事件对象
- IE中的事件对象
- 跨浏览器的事件对象
### 事件类型
- UI事件
- 焦点事件
- 鼠标与滚轮事件
- 键盘与文本事件
- 复合事件
- 变动事件
- HTML5事件
- 设备事件
- 触摸与手势事件
### 内存和性能
- 事件委托
- 移除事件处理程序
### 模拟事件
- DOM中的事件模拟
- IE中的事件模拟

## 20.Json
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

## 21.Ajax与Comet
### XMLHttpRequest对象

```javascript
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
- XHR的用法
  - open(),它接受3个参数
      + 要发送的请求的类型
      + 请求的URL:相对于执行代码的当前页面(也可以使用绝对路径)
      + 表示是否异步发送请求的布尔值
      + `xhr.open("get", "example.php", false)`
          * open()方法并不会真正发送请求，而只是启动一个请求以备发送。
          * 只能向同一个域中使用相同端口和协议的URL发送请求。如果URL与启动请求页面有任何差别，都会引发安全错误
      ```
      xhr.open("get", "example.txt", false);
      xhr.send(null)
      ```
  - send()，接收一个参数，
     + 即要作为请求主题发送的数据。如果不需要通过请求主题发送数据，则必须传入null，因为这个参数对有些浏览器来说是必需的。调用send()之后，请求就会被分派到服务器。
     + 收到响应后，响应的数据会自动填充XHR对象的属性，相关的属性简介如下
         * `responseText`：作为响应主体被返回的文本
         * `responseXML`：如果响应的内容类型是"text/xml"或"application/xml",这个属性中将保存着响应数据的XML DOM 文档
         * `status`：响应的HTTP状态
         * `statusText`：HTTP状态的说明

- HTTP头部信息
- GET请求
- POST请求
### XMLHttpRequest 2级
- FormData
- 超时设定
- overrideMimeType()方法
### 进度事件
- load事件
- progress事件
### 跨域资源共享
- IE对CORS的实现
- 其他浏览器对CORS的实现
- Preflighted Requests
- 带凭据的请求
- 跨浏览器的CORS
### 其他跨域技术
- 图像Ping
- JSONP
- Comet
- 服务器发送事件
- Web Sockets
- SSE与Web Sockets
### 安全

## 22.高级技巧
### 高级函数
### 防篡改对象
### 高级定时器
### 自定义事件
### 拖放

## 23.离线应用与客户端存储
### 离线监测
### 应用缓存
### 数据存储
- Cookie
- IE用户数据
- Web存储机制
- IndexedDB
## 24.最佳实践
### 可维护性
### 性能
### 部署