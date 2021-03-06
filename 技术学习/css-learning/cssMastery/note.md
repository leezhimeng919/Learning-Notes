# 基础知识
## 组织代码
- 可维护性
    + 为将来的修改做过优化
- HTML简史
    + CSS的初衷是把跟HTML混在一起的表现性标记提取出来，达到结构与表现层分离的目的
    + CSS给开发人员带来的好处
        * 专用于控制视觉样式和布局的语言
        * 同一网站中的样式有更高的复用率
        * 关注点分离得到良好的代码结构
            - 关注点分离：分成小块，松散结合。模块化
    + CSS版本
        * CSS1在1996年底成为W3C推荐标准，只包含字体、颜色、外边框等基本属性
        * CSS2在1998年成为推荐标准，增加了浮动和定位等高级特性，增加了子选择符、相邻选择符和通用选择符等新选择符
        * CSS2.1在2002年发布，对CSS规范做了一次清理，在2011年6月成为推荐标准，此时距离CSS3启动已经有10多年
        * 实际上不存在所谓的CSS3规范，因为CSS3泛指所有足够新的CSS规范模块，指一系列级别独立的模块，包括`CSS Backgrounds and Borders Level 3`、`Selecotr Level 4`、`CSS Grid Layout Level 1`等 这种模块化的方式让不同的规范有自己的演进速度。
    + HTML版本
        * HTML和XHTML，SGML和XML
            - HTML4.01在1999年成为推荐标准
            - XHTML1.0在2000年成为推荐标准，XHTML语法更为严格，无法在实践中落地，2009年被W3C完全放弃，最后的发行版本停留在XHTML1.1，最后的草案版本停留在2.0
            - HTML基于SGML(标准通用标记语言)，XHTML是基于XML(可拓展标记语言)，XML是SGML的一个子集
        * HTML5
            - 2004年，几家公司共同建立WHATWG(web超文本应用技术工作组)致力于开发新规范-
            - 2006年W3C肯定了他们工作的必要性，并加入该组
            - 2009年W3C正式接纳WHATWG制定的新标准，WHATWG和W3C基于新标准分别在编辑两份标准，前者的叫HTML后者的叫HTML5，两份标准文档相当接近，因此只讲HTML5没有问题
    + 使用哪个版本
        * 看浏览器对其中特性的支持程度
            - [CanIUse](https://www.caniuse.com/)
            - [W3C文档合集](https://webplatform.github.io/)
            - [Mozilla开发者文档-MDN](https://developer.mozilla.org/zh-CN/)
        * 为不支持某特性的浏览器准备好可以接受的后备代码
            - 平稳退化-向前兼容 graceful degradation
            - 渐进增强-向后兼容，未来友好

- 渐进增强 progressive enhancement
    + 关键：让我们放下对版本号和规范的担忧。符合渐进增强策略的代码几乎都支持平稳退化，
    + 实现方式：1.首先用各浏览器版本都兼容的特性填充样式和内容，2.然后再为支持新特性的浏览器添加更多交互优化。代码要分层，每一层增强代码都只会在响应特性被支持或被认为合适的情况下应用。HTML和CSS的实现已经部分内置了渐进增强的策略
        * `<input type='email'>`在不支持新类型的浏览器会退化成`type='text'`
        * `<!DOCTYPE html> `这样声明HTML文档类型
    + 厂商前缀
        * 浏览器厂商也基于渐进增强为自家浏览器引入试验性特性，在标准名称加上一个特殊字符串，只有他们自家的浏览器能够识别该特性，其他浏览器会忽略
        ```
        .myThing{
            -webkit-transform: translate(0, 10px);
            -moz-transform: translate(0, 10px);
            -ms-transform: translate(0, 10px);
            transform: translate(0, 10px);
        }
        //-webkit- 适用于基于webkit和blink的浏览器，safari、chrome、opera
        //-moz- 适用于火狐
        //-ms- 适用于IE
        //最后加一条不带特殊字符串的标准属性名称，平稳退化
        ```
        * 后来由于开发者会漏加最后一条标准属性兜底，有些浏览器厂商开始只是竞争对手引擎的特殊前缀，再后来为了避免混乱，多数浏览器厂商抛弃了厂商前缀。
    + 条件规则与检测脚本
        * `@supports` 条件规则代码块。根据浏览器是否支持某个特性来提供不同样式
        `@supports (display:grid) {/*在支持网格布局的浏览器中要应用的规则*/}`
        * Modernizr库
            - 通过js库检测支持情况
            - 原理是为HTML添加支持提示信息，然后根据这些信息来编写CSS
            - 在旧版中使用新元素
        

## 创建结构化、语义化富HTML
- 语义化标记
    + 就是在正确的地方使用正确的元素，得到有意义的文档
    + 语义指的就是使用符号想要表达的含义
- ID和class属性
    + ID
        * 一般用于在文档中 **标识元素**，比如区分多个div，添加JS交互和额外样式(在用class添加样式的基础上)
        * 推荐使用ID来表示特定模块的特定实例`id='primary-product-list' class='product-list'`
    + class
        * 一般用来 **添加样式**，能复用，易维护
        * 类名表示组件的类型,如`class='product-list'`表示创建了一个商品列表模块，给元素添加类名时，即使类名明确用于样式，也不要体现出其视觉效果在类名上，如不要`class='large-centerd-list'`
- 结构化元素
    + HTML5新增的结构化元素
        * section
        * header
        * footer
        * nav
        * article
        * aside
        * main
    + 最佳实践
        * 用结构化元素搭配class添加样式
- div和span
    + 无语义元素，在没有合适的语义元素情况下使用
    + 区别是div是块级，span是内联/行内/文本级
- 重新定义的表现性文本元素
    + 未被剔除的表现性文本元素<i></i>和<b></b>
    + 当初用于将文本标记为斜体和粗体，如今增加了语义，用来表示和周围内容不一样的内容。可以理解为非强调类的标识
    + i的语境：语言中的习语`你真<i>der</i>`,区分于<em>表示口语中的强调，重音</em>
    + b的语境：商品名等`<b>牛奶</b>`，区别于<strong>表示文本中的强调</strong>
- 扩展HTML语义
    + ARIA的role属性
        * ARIA：无障碍富英特网应用accessible rich internet app，是对HTML规范的补充
        * ARIA指定文档中的不同元素要包含什么内容，或提供什么功能
        * 用法：`role="navigation"`,声明元素具有导航的角色
            - banner
            - form
            - main
            - search
            - complementary
            - contentinfo
            - application
            - ...
    + 微格式
        * 目前最广泛的拓展语义的方式是微格式
        * 微格式是一组标准的命名约定和标记模式，可用于表示特定的数据类型
        * hCard格式、hCalendar格式就是一种微格式
            - 分别基于vCard和iCanlendar数据格式指定
            - vCard是欧美那边常用电子名片的格式标准
            - iCanlendar是苹果公司的日历数据交换的标准，允许用户通过邮件发送任务
        * 微格式支持的数据类型
            - 联系人
            - 活动
            - 菜谱
            - 博文
            - 简历
            - ...
    + 微数据
        * 微数据跟HTML5一起作为结构化数据的另一种方式而被推出
        * 相比微格式
            - 劣势：语法比微格式繁琐
            - 优势：可拓展性比微格式强，可以用来表示任意类型的数据，只定义了一些语法来表示数据结构，但自身并未定义任何词汇表。由使用者来定义特定格式
- 验证
    + [HTML验证](https://validator.w3.org/)
    + [CSS验证](http://jigsaw.w3.org/css-validator/)

# 添加样式
- CSS选择符
    + 基本选择符-4个
        * 适用于全面应用的基础样式
            - 类型选择符/元素选择符：选择特定类型的元素`ele`
            - 后代选择符：选择某个元素的后代，写法是两个元素中间加个空格` `
        * 更精准地选择目标元素
            - ID选择符：通过ID属性选择元素，写法`#`
            - 类选择符：通过class属性选择元素，写法`.`
    + 高级选择符
        * 子选择符：只选择某个元素的直接后代，孙子就不管了。写法`>`
        * 同辈选择符：同辈选择符连接的两个元素有相同的父辈元素。写法`+`
        * 一般同辈选择器：选择前者和所有同辈的后者。写法`~`
        * `>`和`+`和`~`被称为组合子。目前由于页面渲染性能的原因，只能向后选择同辈
    + 通用选择符
        * `*`
        ```
        * {
            padding: 0;
            margin: 0;
        }//删除所有元素默认的内外边距，由于会带来很多意想不到的后果，被摒弃
        //替代方案
        1.reset.css
            比较暴力，为了应对不同浏览器对元素默认样式的差异造成的差异
            源码和上述类似
        2.normalize.css 推荐
            bootstrap用的就是这个css重置样式库；保存有用的默认值
            设计思路：确保所有元素样式跨浏览器的一致性
        ```
        * 可以与组合子结合使用，选择某个特定的嵌套层次
    + 属性选择符
        * 数据属性data-*提供了一种在HTML属性中存储自定义数据的方法
        ```
         <li data-quantity="1kg" data-vegetable>Tomatoes</li>
         data-vegetable就是自定义属性，语义化
         命名符合xml标准，不能用大写，不用以xml开头，一般是小写字母
        ```
        * 存在和值属性选择器
            - a[attr]  a元素具有attr属性
            - a[attr="val"]  a元素具有attr属性且属性值刚好只为val
            - a[attr~="val"]  a元素具有attr属性且属性值包含val，空格隔开的属性值val
        * 子字符串属性选择器(伪正则选择器)
            - a[attr|="val"]  a元素具有attr属性且属性值以val或val-开头
            - a[attr^="val"]  a元素具有attr属性且属性值以val开头
            - a[attr$="val"]  a元素具有attr属性且属性值以val结尾
            - a[attr*="val"]  a元素具有attr属性且属性值含有子字符串val
    + 伪元素
        * what：一些特殊的css选择符
        * why：当想选择某元素之外的特定位置时，使用伪元素
            - 不想为了文本添加样式而额外的添加元素时，可以使用伪元素
        * 伪元素有哪些
            - ::after
            - ::before
            - ::first-letter
            - ::first-line
            - ::selection
            - ::backdrop
    + 伪类
        * 
    + 结构化伪类
    + 表单伪类
- 层叠
- 特殊性
- 继承
- 为文档应用样式


# 可见格式化模型
- 盒模型
  - 盒子的组成
    - 内边距padding：内容区周围的空间。给元素应用背景会作用于内容和padding，用于控制内容和边框的距离
    - 边框border：用于视觉上围住内容
    - 外边距margin：围绕盒子可见部分之外的透明区域，用于控制元素之间的距离
    - 轮廓线outline：贴着外边距的外侧，是整个盒模型的轮廓，不影响盒子的布局，常用于调试或演示布局
  - 盒子的大小
    - 默认盒模型：width和height是指内容盒子(content-box)，不包含2*(padding+border)
    - IE盒模型(即box-sizing: border-box)：width和height指盒子所有可见部分，包含内间距和边框
    - 比较与转换
      - 设置`box-sizing`属性，content-box是默认盒子，border-box是IE盒子
      - 从开发角度来说，IE盒子更方便
    - 比例
      - 用父元素的width比例的形式来表示子元素的width时，需要使用border-box，不然在添加内边距时会破坏布局
      - 上下左右方位的内外边距都基于包含块的宽度来计算，即父元素的width
  - 最大值和最小值
    - 在响应式布局中或者一些场景中，width和height不需要明确设定，因为内容会变法，导致可能设大可能设小，所以最好使用min-width/max-width，默认元素就可以默认自动填充父元素的宽度，但不会超出设定的范围。
- 可见格式化模型
  - 综述
    - CSS中的定位模型：浮动、绝对定位、相对定位
    - 可见格式化盒子：有些元素是块级元素，有些元素是行内元素，可以使用`display`改变生成盒子的类型,块级盒子或者行内盒子
      - `span { display: block;}`可以让span变得跟块级元素一样
      - `display: none;`让浏览器不为元素生成盒子,不生成盒子，元素及内容就不会显示出来，不会占用文档空间
    - 定位模型
      - position默认值static，即常规文档流中元素盒子的位置，由元素在HTML中的位置决定
        - 块级盒子
          - 沿垂直方向堆叠
          - 盒子在垂直方向的间距由上下方margin决定
        - 行内盒子
          - 沿文本流水平方向排列，随文本换行而换行
          - 盒子在水平方向的间距由左右方的margin+border+padding决定
          - 行内盒子的高度不受垂直方向的上下margin+border+padding影响
          - 给行内盒子设定高度和宽度不起作用
        - 行盒子 line box
          - 行盒子的高度由所包含的行内盒子决定
          - 修改行盒子大小唯一途径就是修改行高line-height，或者给行盒子内部的行内盒子设置水平方向的边框、内边距或外边距
          - 行盒子就是一行文本的占位容器，大小取决于行内盒子，想主动修改只能修改line-height，水平方向默认就是一整行，想修改可以通过修改行内盒子的宽度
  - 匿名盒子 
    - 不明确定义元素产生的盒子,如下列的`hello`
        ```html
        <section>hello<p>world</p></section>
        ```
    - 匿名块盒子anonymous block box
    - 匿名行盒子anonymous line box
    - 关键：你在页面上看到的一切内容都会属于某个盒子
  - 外边距折叠
    - 块盒子中的机制，垂直方向上两个外边距相遇时，会折叠成一个外边距，高度等于两者较大的
    - 触发
      - 上下方的同级元素
      - 没有padding和border隔开父子元素
      - 没有内容的空元素的上下margin
      - 存在多次折叠，即内部折叠之后与同级元素还会继续折叠
    - 应用场景：文档常规文本流中**块级盒子**的**垂直方向**，
  - 包含块
    - 包含块的用处：当为padding、margin、width、height设置百分比时，就是以这个元素的包含块为依据
    - 如何确定元素的包含块
      - 静态定位或相对定位：包含块的边界计算到一个最近的父元素，该元素的display必须提供类似块级的上下文
      - 绝对定位或固定定位：计算依据会发生变化
  - 相对定位
    - `position：relative`，仍然保持原位
    - top\right\left\bottom：开始平移
    - 无论是否位移，相对定位的元素仍然会在文档流中占用初始的空间，平移的元素会遮挡其他元素
  - 绝对定位
    - `position：absolute`，元素被拿出文档流，不会再占用原来的空间。文档流其他元素会重新定位，仿佛绝对定位的元素从来没出现过一样
    - 绝对定位元素的包含块：距离元素最近的定位祖先，也就是position值为static之外任意值的祖先元素（如果父元素的position不是static那就按父元素计算百分比），如果没有这个祖先，就相对于文档的根元素定位即起始包含块
    - 为了防止遮挡，设置`z-index`属性，属性值越大，元素越靠近用户的眼睛
    - 缺陷：由于脱离了常规文本流，很难自适应或者响应式布局，几乎没有人用了
  - 固定定位
    - `position:absolute`，固定定位元素的包含块是视口
    - 可以用这个技术让导航区始终保持可见
  - 浮动
    - `float: left`
    - 浮动盒子
      - 可以向左或向右移动，知道其外边沿接触包含块的外边沿或另一个浮动盒子的外边沿
      - 也会脱离常规文档流，其他块级盒子几乎会当浮动盒子不存在一样
        - 其他盒子会当浮动盒子不存在一样
        - 盒子内的文本内容会在排布时避开它，留出相应的空间
        - 术语：跟在浮动元素后面的行盒子会缩短，从而为浮动元素留空
      - 浮动正是为了在网页中实现文本环绕图片的效果而引入的一种布局模型
    - 行盒子和**清除**
      - 如果不想让行盒子环绕在浮动盒子外，给包含行盒子的元素使用`clear: left/right/both/none`属性,用于指定盒子的那一侧不应该紧挨浮动盒子，另起一行
      - clear的原理：浏览器在这个元素上方添加足够大的外边距，从而将元素的上边沿垂直向下推移到浮动元素的下方。因此如果给clear的元素添加外边距，除非超过浏览器的值，不然看不到效果
    - 利用浮动实现一个简单的布局
      - 照片左浮，描述右浮，相框元素使用clear属性
      - tips：当一个元素里的子元素全是浮动元素时，这个元素不会占用空间，也显示不出这个元素的样式，这时需要在元素结尾时加一个空元素添加clear属性能够显示出样式；如果不添加空元素，可以使用:after伪类/::after伪元素(css3写法)
        ```css
        .clear {
                clear: both;
                <!-- 需要在.media-block元素末尾新添一个空元素 -->
            }
        .media-block:after {
            content:'';
            display: block;
            <!-- 添加空内容为了不添加多余的元素，此时要把display设置成block -->
            clear: both;
        }
        ```
  - 格式化上下文
    - 行内格式化上下文
    - 块级格式化上下文
      - 规定页面必须自动包含突出的浮动元素，否则浮动元素的内容可能跑出滚动区域
      - 所有块级盒子的左边界默认与包含块的左边界对其(与文字顺序有关，默认从左往右)
      - 有些规则允许元素建立自己内部的块级格式化上下文
        - display为inline-block或table-cell
        - float不是none的元素
        - 绝对定位的元素
        - overflow不是visible的元素
          - 不用设置清楚规则
  - 内在大小与外在大小
    - 继承自周围上下文(外在大小)
    - 源于元素自身的内容(内在大小)
    - `min-height: contain-floats`
    - 代替以往使用的隐含值，使用明确长度，具体数值取决于浏览器
   
- 其他CSS布局模块
    + 弹性盒布局
      + Flexbox，css3新引入的一种布局模型
    + 网格布局
      + grid layout，最早最成熟的高层布局工具，目标取代浮动和定位元素
    + 多栏布局
      + MC layout 实现内容的多栏布局
    + Region
      + 实现内容在不同元素间灌文接排，把布局表现从内容结构中解耦出来

# 网页排版
- CSS的基本排版技术
  - 文本颜色
    - `color`
  - 字体族
    - `font-familys`
    - 字型和字体
      - 字型即字体族是字体不同样式的集合，宋体是字型，宋体分为宋体斜体、宋体常规、宋体粗体等字体
  - 字型大小和行高
    - `font-size`
    - 默认大小是16px
    - em是一个继承于父元素的缩放因子，可以用100%代替em
    - rem类似于em，始终基于根元素的em大小缩放，即默认1rem = 16px
      - 当em用于计算盒模型大小时，不再是继承于父元素的缩放因子，而是基于元素自身，例如margin：1.5em应用于h1\h2是不一样的，所以可以用margin：1.5rem。
      - 长度单位还有mm、cm、in、pt等绝对物理长度，网页设计不推荐，主要应用于打印样式
    - 基于比例缩放字型大小
      - 最佳实践：上级标签字体大小比下级标签字体大小大自身的0.25，即上/下=4/3,被称为纯四度
        ```css
        h1 {
            font-size: 1.33*1.33*1.33em; 约等于37px
        }
        h2 { 
            font-size: 1.33*1.33em; 约等于28px
        }
        h3 {
            font-size: 1.33em; 约等于21px
        }
        ```
  - 行间距、对齐及行盒子的构造
    - 行高
      - `line-height`
    - 垂直对齐
      - `vertical-align: super`
  - 文本粗细
    - `font-weight`
  - 字体样式
    - `font-style`
  - 大小写变换和小型大写变换
    - `text-transform: uppercase/lowercase/capitalize/none`
    - `font-variant: small-caps`
  - 控制字母和单词间距
    - `word-spacing: 0.1em`控制单词间距
    - `letter-spacing: 0.1em`字母间距
- 版心宽度、律动和毛边
- Web字体
- 高级排版特性
- 文本特效

# 漂亮的盒子
# 内容布局
# 页面布局与网格
# 响应式Web设计与CSS
# 表单与数据表
# 变换、过滤与动画
# 高级特效
# 品控和流程