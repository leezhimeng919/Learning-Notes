<!-- MarkdownTOC -->

- [CSS](#css)
    - [CSS如何工作](#css如何工作)
    - [CSS语法](#css语法)
    - [选择器介绍](#选择器介绍)
    - [简单选择器](#简单选择器)
    - [属性选择器](#属性选择器)
    - [伪类](#伪类)
    - [组合器和多重选择器](#组合器和多重选择器)
    - [CSS值和单位](#css值和单位)
    - [层叠和继承](#层叠和继承)
    - [盒模型](#盒模型)
- [样式化文字](#样式化文字)
    - [基本文字和字体样式化](#基本文字和字体样式化)
    - [样式化列表](#样式化列表)
    - [样式化链接](#样式化链接)
    - [Web字体](#web字体)
- [样式化区块](#样式化区块)
- [CSS排版](#css排版)

<!-- /MarkdownTOC -->

<a id="css"></a>
#CSS

<a id="css如何工作"></a>
##CSS如何工作
- CSS如何影响HTML
    + 一组属性，属性的值更新了HTML的内容的显示方式
    + 一个选择器，选择元素
- CSS实际上如何工作
    + 当浏览器显示文档时，必须将文档的内容与其样式信息结合。分两个阶段处理文档：
        * 浏览器将HTML和CSS转化成DOM
        * 浏览器显示DOM的内容
- DOM
- CSS in HTML
    + **外部样式表**
    + 内部样式表
    + 内联样式

<a id="css语法"></a>
##CSS语法
- 属性property和属性值value
- CSS声明——属性:值;
    + 使用未知属性，或者给属性赋予无效值，该声明会被浏览器CSS引擎无视
    + 使用美式拼写作为单词的标准写法，color而不是colour
- CSS声明块——{属性:值;属性:值;}
    + 块有时可以嵌套，也允许为空
- CSS选择器和规则
    + 选择器selector：放在声明块前，告诉它哪些元素时声明块需要应用的
    + 规则集ruleset：选择器加上声明块，简称规则
- 层叠算法cascade algorithm
- CSS语句 css statements
    + @-规则 At-rules
        * 传递元数据、条件信息或其它描述性信息
        * @charset和@import(元数据)
        * @media和@document(条件信息，或称为嵌套语句)
        * @font-face(描述性信息)
    + 嵌套语句
        * @media，只有在运行浏览器的设备匹配其表达条件才会应用
            @media (min-width: 801px) {
                  body {
                    margin: 0 auto;
                    width: 800px;
                  }
                } 
        * @supports，只有浏览器确实支持被测功能才会应用
        * @document，只有当前页面匹配一些条件时才会应用
    + 任何不规则集或@-规则或嵌套语句的CSS语句都是无效的，会被浏览器忽略
- 语法之外：使CSS更具可读性
    + 空格
    + 注释 /* */
    + 简写

<a id="选择器介绍"></a>
##选择器介绍
- 选择器分类
    + 简单选择器
        * 元素类型
        * class
        * id
    + 属性选择器
        * 通过属性/属性值
    + 伪类
        * 匹配处于确定状态的元素
        * 鼠标指针悬停
        * 被选中或未选中
        * DOM树中父子节点
    + 伪元素
        * 匹配相关的确定位置的元素
    + 组合器
        * 组合两个或更多选择器用于非常特定的选择元素方法
    + 多重选择器
        * 将多个选择器用，隔开放在一个规则中

<a id="简单选择器"></a>
##简单选择器
- 元素选择器
- 类选择器`.`
- ID选择器`#`
- 通用选择器`*`

<a id="属性选择器"></a>
##属性选择器
- 存在和值属性选择器
    + [attr]  具有attr属性
    + [attr="val"]  具有attr属性且属性值刚好只为val
    + [attr~="val"]   具有attr属性且属性值包含val
    + __补充__：自定义数据属性data-*： *不能以xml开头，不能包含大写字母，不能包含分好
- 子字符串属性选择器(伪正则选择器)
    + [attr|="val"]  val或val-
    + [attr^="val"]  val开头
    + 
    + [attr$="val"]  val结尾
    + [attr*="val"]  子字符串val

<a id="伪类"></a>
##伪类
- 伪类：是以一个冒号作为前缀，放在选择器后面表示某确定`状态`才呈现到制定元素的关键字
- 伪元素：两个冒号(::)作为前缀，放在选择器后面表示某确定`位置`才呈现到制定元素的关键字

<a id="组合器和多重选择器"></a>
##组合器和多重选择器
- 多重选择器A,B
    + 应用同一规则的选择器组A和B
- 后代选择器A B
    + 应用B
- 子选择器A>B
    + 应用B
- 相邻兄弟选择器A+B
    + 应用B
- 通用兄弟选择器A~B
    + 应用B

<a id="css值和单位"></a>
##CSS值和单位
- 数值    
    + 长度和尺寸
        * 绝对单位[无论其他相关设备怎么变化，像素指定的值不会变化]
            + __px__像素，除了px之外，其他可能都不怎么用到
            + mm毫米，cm厘米，in英寸
            + pt点(72分之1英寸)，pc十二点活字(12点)
        * 相对单位[相对于当前元素的字号，或者viewport的尺寸]
            + __em__：1em与当前元素的字体大小相同，一个大写M的宽度。1em的计算值默认为16px,因为浏览器给网页设置的 __默认基础字体__大小是16px。em会继承父元素的字体大小。em是web开发中最常用的相对单位.
            + ex,ch：分别是小写x的高度和数字0的宽度。这并不想em那样被普遍使用或很好地被支持。
            + __rem__：REM(root em)和em以同样的方式工作，但总是等于 __默认基础字体__大小的尺寸；继承的字体大小不起作用，听上去是一个比em更好的选择，但旧版本IE不支持。
            + vw,vh：分别是viewportwidth的百分之一和viewportheight的百分之一,不如rem那样被广泛支持。
        * 相对单位非常实用，可以相对于你的字体或视口大小来调整
    + 无单位的值
        * 0
        * 无单位的行高
            - line-height:1.5;
            - 意思是font-size的1.5倍，默认是1.5*16px=24px
        * 动画的数值
            - @keyframe
            - 次数
- 百分比
    * 动态布局(流体布局) 100%=1em=16px：应用在不同大小的移动设备屏幕
    * 固定宽度布局：应用来保持在线地图的大小相同
- 颜色
    * 关键字：red
    * 十六进制：#ff0000
    * RGB：rgb(255,0,0)
    * HSL:hsl(0,100%,50%) 
        - hue色调0-360，表示色轮的角度
        - saturability饱和度0-100%灰色-全彩色240
        - lightness亮度0-100%黑色-白色240
    * RGBA和HSLA
    * 不透明度
- 函数
    * rgb()
    * hsl()
    * rotate()

<a id="层叠和继承"></a>
##层叠和继承
- 层叠cascade
    + 什么选择器在层叠中胜出取决于三个因素(__前面的会否决后面的__)
        * 重要性importance
        * 专用性specificity
        * 源代码次序source order
    + 重要性
        * ！important
        * 重载！important的方法
            - 后面的源码中！important
            - 一个更高专用性的源码包含！important
        * __不建议使用__,调试会非常困难
        * 互相冲突的声明将按下列顺序适用，后一种将覆盖先前的声明
            - 用户代理样式表的声明(例如浏览器的默认样式)
            - 用户样式表中的普通声明(用户设置的自定义样式,可操作界面的修改)
            - 作者样式表中的普通声明(web开发人员设置的样式)
            - 作者样式表中的重要声明
            - 用户样式表中的重要声明
    + __专用性__
        * 一个选择器具有的专用性的量是用四种不同的值来衡量
            - 千位：没有选择器，规则在一个元素的`style`属性中，1000或0
            - 百位：选择器中包含ID选择器，百位加1
            - 十位：类选择器、属性选择器、伪类，每包含一个十位加1
            - 个位，元素选择器、伪元素，每包含一个个位加1
    + 源代码次序
        * 前两个性质相同的话，次序靠后的覆盖靠前的
    + 关于规则混合的一点注记
        * 所有的层叠覆盖都发生在规则中的属性上，是某个属性覆盖了其他属性，
        * 当多个CSS规则匹配上了相同的属性时，这时这个相互冲突的属性才会被评估，来确定哪个风格会战胜其他的显示出来
- 继承inherit
    + 控制继承
        * CSS为处理继承提供了四种特殊的通用属性值
            - inherit：该值将应用到选定元素的属性值设置为与其 _父元素_一样
            - initial：该值将应用到选定元素的属性值设置为 _浏览器默认样式表中_该元素设置的值一样。如果没有默认值，并且该属性是自然继承，则被设置为inherit
            - unset复位：该值将属性重置为其自然值，如果该属性是自然继承的，则inherit，否则表现的像initial
            - revert回滚：如果当前的节点没有应用任何样式，则将该属性恢复到它所拥有的值。属性值被设置成自定义样式所定义的属性（如果被设置），否则属性值被设置成用户代理的默认样式。
            - initial和unset不被IE支持
            - 自然继承：例如color设置在body上，body所有的子元素都会有相同的颜色
    + 重新设置所有的属性值
        * all：CSS速写属性，能够被应用到每一个继承属性，一次性应用所有的继承属性。它的值可以使继承属性中的任何一个

<a id="盒模型"></a>
##盒模型
- 盒属性
    + width和height设置内容框的宽度和高度
        * min-width、max-width、min-height、max-height：设置大小约束而不是绝对的大小
    + padding内边距
    + border边界
        * border-top、right、bottom、left
        * border-width、style、color
        * border-top-width...等等
    + margin外边距
        * 外边距塌陷margin collapsing
        * 当两个盒子彼此接触时，它们的兼具将去两个相邻外边距的最大值，而非总和
- 提示
    + 默认情况下background-color/background-image延伸到border的外边缘，可用background-clip属性来改变
    + overflow属性控制窗口移除
    + 盒子高度不遵守百分比的长度，盒子高度总是采用盒子内容的高度，除非指定一个绝对高度
    + border忽略百分比宽度设置
    + box-sizing：border-box将改成IE盒子模型
- 高级的盒子操作
    + 溢流overflow
        * auto：当内容过多，溢流的内容被隐藏，然后出现滚动条来让我们滚动查看所有内容
        * hidden：当内容过多，溢流的内容被隐藏
        * visible(默认)：当内容过多，溢流的内容被显示在盒子的外边
    + 背景裁剪background-clip
        * border-box默认，延伸到border外沿
        * padding-box延伸到padding外沿
        * content-box延伸到content外沿
    + 轮廓outline
        * border之外，margin之内
        * 轮廓不占空间，被描绘与内容之上
        * 轮廓可以是非矩形
        * 必要时使用，例如被选中时高亮，但确保不要让其看起来像是超链接而让用户迷惑
- __CSS盒类型__
    + display属性来设定元素的盒子类型
        * block块状盒
            - 定义为堆放在其他盒子上的盒子，能够设置宽高
        * inline行内盒
            - 随着文档的文字流动
        * inline-block行内块状盒
            - 不会重新另起一行，能够设置宽高
        * 默认情况下
            - 块级元素 display：block
            - 内联元素 display:inline

<a id="样式化文字"></a>
#样式化文字

<a id="基本文字和字体样式化"></a>
##基本文字和字体样式化
- 字体
    + 颜色 `color`
        - 通常指文本的颜色，有时候也指text-decoration属性放置在文本上下方的线
    + 字体种类 `font-family`
        - 如果指定的字体不可用，会用浏览器默认的字体default font代替
        - 网络安全字体
            + 可以应用到所有系统
            + Arial英文黑体，属于sans-serif，通常将Helvetica替代Arial
            + courier new等宽字体
            + georgia，属于serif
            + Times New Roman，属于serif，有些OS上有Times替代TNR
            + Trebuchet MS  sans-serif
            + Verdana sans-serif
        - 默认字体
            + CSS定义了5个常用的字体名称
                * serif有衬线，强调字母笔画开始和结束，有前后连续性
                * sans-serif无衬线，圆润，醒目
                * monospace等宽字体，打字机字体，代码列表
                * cursive模拟笔记动画，具有流动的连接笔画
                * fantasy用来装饰的字体
        - 字体栈font stack
            + 在字体栈的最后提供一个合适的通用的字体名，如果没提供则默认是TNR
            + p {
                  color: red;
                  font-family: Helvetica, Arial, sans-serif;
                }
    + 字体大小
        * px
        * em受父元素影响(例如，父元素是1.5em，则当前是1.5em的基础上做计算)
        * rem，1rem总是等于16px
        * 在调整文本大小时，将document的基础font-size设置成10px是个不错的主意
    + 字体样式、字体粗细、文本转换、文本装饰
        * font-style
            - normal：关闭斜体
            - italic：开启斜体，不过斜体版本不可用，会利用oblique模拟italics
            - oblique ：将普通文本倾斜来模拟斜体
        * font-weight
            - normal，bold：普通或者加粗的字体粗细
            - lighter，bolder：比父元素更细或更粗
            - 100-900的权重值
        * text-transform
            - none：防止任何转型
            - uppercase：将所有文本转为大写
            - lowercase：将所有文本转为小写
            - capitalize：将所有单词首字母转为大写
            - full-width：将所有字形转换为固定宽度的正方形，类似于等宽字体
        * text-decoration
            - none：取消已经存在的任何文本装饰
            - underline：下划线
            - overline：上划线
            - line-through：中划线
            - 可拆成-line/-style/-color
    + 文字阴影
        * text-shadow: 4px 4px 5px red;
            - 第一个值：阴影与原始文本的水平偏移，单位px最适合，不可为空
            - 第二个值：阴影与原始文本的垂直偏移，不可为空
            - 第三个值：模糊半径，更高的值意味着阴影分散得更广泛，更模糊，默认值为0
            - 第四个值，阴影的基础颜色，默认值为black
            - 左负右正
        * 多种阴影
            - 逗号隔开，可将多个阴影应用于同一文本
- 文本布局
    + 文本对齐
        * left
        * right
        * center
        * justify：是文本展开，改变单词之间的差距，使所有文本行的宽度相同
    + 行高
        * 可接受大多数单位，不过推荐无单位，作为乘数乘上font-size的值
        * 推荐行高大约是1.5-2
    + 字母和单词间距
        * letter-spacing
        * word-spacing
    + 字体样式
        * font-variant：在小型大写字母和普通文本选项之间切换
        * font-kerning：开启或关闭字体间距选项
        * font-feature-setting
        * font-variant: 在小型大写字母和普通文本选项之间切换。
        * font-kerning: 开启或关闭字体间距选项。
        * font-feature-settings: 开启或关闭不同的 OpenType 字体特性。
        * font-variant-alternates: 控制给定的自定义字体的替代字形的使用。
        * font-variant-caps: 控制大写字母替代字形的使用。
        * font-variant-east-asian: 控制东亚文字替代字形的使用, 像日语和汉语。
        * font-variant-ligatures: 控制文本中使用的连写和上下文形式。
        * font-variant-numeric: 控制数字，分式和序标的替代字形的使用。
        * font-variant-position: 控制位于上标或下标处，字号更小的替代字形的使用。
        * font-size-adjust: 独立于字体的实际大小尺寸，调整其可视大小尺寸。
        * font-stretch: 在给定字体的可选拉伸版本中切换。
        * text-underline-position: 指定下划线的排版位置，通过使用text-decoration-line 属性的underline 值。
        * text-rendering: 尝试执行一些文本渲染优化
    + 文本布局样式
        * text-indent: 指定文本内容的第一行前面应该留出多少的水平空间。
        * text-overflow: 定义如何向用户表示存在被隐藏的溢出内容。
        * white-space: 定义如何处理元素内部的空白和换行。
        * word-break: 指定是否能在单词内部换行。
        * direction: 定义文本的方向 (这取决于语言，并且通常最好让HTML来处理这部分，因为它是和文本内容相关联的。)
        * hyphens: 为支持的语言开启或关闭连字符。
        * line-break: 对东亚语言采用更强或更弱的换行规则。
        * text-align-last: 定义一个块或行的最后一行，恰好位于一个强制换行前时，如何对齐。
        * text-orientation: 定义行内文本的方向。
        * word-wrap: 指定浏览器是否可以在单词内换行以避免超出范围。
        * writing-mode: 定义文本行布局为水平还是垂直，以及后继文本流的方向。
- Font简写
    + 除了font-size，font-family是一定要指定，其他的都可以简写font

<a id="样式化列表"></a>
##样式化列表
- 


<a id="样式化链接"></a>
##样式化链接

<a id="web字体"></a>
##Web字体

<a id="样式化区块"></a>
#样式化区块

<a id="css排版"></a>
#CSS排版
