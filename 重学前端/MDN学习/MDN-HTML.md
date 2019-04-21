#HTML介绍

## html
- 元素：开始标记，加结束标记，加内容，等于元素
    + 嵌套元素：<p>My cat is <strong>very</strong> grumpy.</p>
    + 块级元素和内联元素
        * 块级元素：会相对其之前的内容出现在新的一行，其之后的内容也会被挤到下一行
         通常用于展示页面上结构化的内容，例如段落、列表、导航等等
         块级元素不会嵌套进内联元素中，但块级元素可以嵌套在其他块级元素
        * 内联元素：不会导致文本换行
    + 空元素：单元素 如<img>
- 属性
    + 布尔属性 disabled
    + 省略包围属性值的引号  __不建议__
        * <a href=https://www.mozilla.org/ title=The Mozilla homepage>
    + 单引号或者双引号？
- 分析HTML文档
    + <!doctype html>
    + <html></html>
    + <head></head>
    + <meta charset="utf-8">
    + <title></title>
    + <body></body>
    + 实体引用
        * '<' &lt; 
        * '>' &rt;
        * " &quot;
        * ' &apos;
        * & &amp; 
- 注释
    + <!-- -->

##head
- head里的内容，是不会再页面中显示出来的
- <title></title>
- 元数据：<meta>元素，描述数据的数据
    + 指定你的文档中字符的编码 <meta charset="utf-8">
    + ISO-8859-1：拉丁字母的字符集
    + 添加作者和描述 <meta name="author/description" content="lzm/...">
- 为站点增加自定义图标
    + <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
- css和JavaScript
- 为文档设定主语言
    + <html lang="en-US"></html>

##文本
- 基础：标题和段落
    + 结构层次
    + 结构化
    + 语义
- 列表Lists
    + 无序 ul>li
    + 有序 ol>li
    + 嵌套列表
- 重点强调
    + <em></em>  口语中的强调，重音。  斜体效果：<i></i>
    + <strong></strong>   文字中的强调。  加粗效果<b></b>
- 表象元素：出现在css不被完全接受的时代，不应该再被使用
    + <b></b>
    + <i></i>
    + <u></u>

##链接
- 链接的解析
    + title属性：链接悬停显示
- 块级链接
    + <a href=""><img src="" alt=""></a>
- URL与path
    + URL：统一资源定位器uniform resource locator。
        是一个文本字符串，它定义了资源在网络上的位置的
    + URL使用path查找文件
- 文档片段
    + href可以通过class或者id指向文档片段<a href="#Mailing_address">
- 绝对URL和相对URL
- 链接的最佳实践
    + 用清晰的链接措辞
    + 尽可能使用相对链接
    + 链接到非HTML资源要留下清晰的指示
        * PDF 10MB
        * requires Flash
    + 在下载连接时使用下载属性
        * download="...exe"
- 电子邮件链接
    + mailto:link

##高级文本
- 描述列表
    + dl:description list
    + dt:description term
    + dd:description description
    <dl>
        <dt></dt>
        <dd></dd>
    </dl>
- 引用
    + 块引用 <blockquote></blockquote>
    + 行内引用 <q></q>
    + 引文 <cite></cite>
- 缩略语
    + <abbr title="text"></abbr>
    + <acronym title="text">已被弃用</acronym>
- 标记联系方式
    + <address></address>
- 上标和下标
    + <sup></sup>
    + <sub></sub>
- 展示计算机代码
    + <code>用于标记计算机统一代码</code>
    + <pre>保留空格</pre>
    + <var>标记具体变量名</var>
    + <kbd>标记输入电脑的键盘</kbd>
    + <samp>计算机程序的输出</samp>
- 标记时间和日期
    + <time></time>

##文档与网站架构
- 文档的基本组成区段section
    + 标题栏
    + 导航栏
    + 主内容
    + 侧边栏
    + 页脚
- 用于构建内容的HTML
    + <header>标题栏</header>
    + <nav>导航栏</nav>一般嵌套标题栏里
    + <main>主内容</main>
        * <article></article>
        * <section></section>
        * <div></div>
    + <aside>侧边栏</aside>
        * 经常嵌套在<main></main>中
        * 包含一些间接信息
    + <footer>页脚</footer>
- HTML布局元素细节
    + 无语义元素
        * <div>块级无语义元素</div>
        * <span>内联无语义元素</span>
    + 换行与水平分割线
        * <br>换行
        * <hr>水平分割线

#多媒体与嵌入

##HTML中的图片
- <img src="images/描述性的名字.jpg" alt="">
- 警告：大多数图片是有版权的。不要在你的网页上使用一张图片，除非：
    你是图片版权所有者
    你有图片版权所有者明确的、书面上的使用授权
    你有充分的证据证明这张图片是公共领域内的
    侵犯版权是违法并且不道德的。此外，在得到授权之前永远不要把你的src属性指向其他人网站上的图片。这被称为"盗链（hotlinking）"。同样，盗取其他人的带宽也是违法的。而且这会降低你的页面的加载速度，而且图片可能会在不受你控制的情况下被移走或用别的令人尴尬的东西替换掉。
- 可替换元素：img、video
- alt="备选文本"，用于在图片无法显示或不能被看到的情况
- <figure>
    可以是几张图片、一段代码、视频、方程、表格...
    <img src="" alt="">
    <figcaption>描述img</figcaption>
</figure>
- CSS背景图片
    + background-image:url("images/di.jpg")
    + 优点：可以更好的控制图片和设置图片的位置
    + 劣势：纯粹为了装饰，没有语义上的意义，不能被屏幕阅读器识别

##视频和音频内容
- Flash和Silverlight
- JavaScript的api
- <video src="" controls><p>后备内容</p></video>
    + controls：用户必须能够控制视频和音频的回放功能
    + 后备内容里防止对旧浏览器不兼容，一般提供指向这个视频文件的链接
- 多格式支持
    + 容器格式：MP3、MP4、WebM
        * WebM容器通常包括了Ogg Vorbis音频和VP8/VP9视频，主要在FX和Chrome
        * MP4容器常包括AAC以及MP3音频和H.265视频，主要在IE和Safari
        * 老式的Ogg容器支持OggVorbis音频和Ogg Theora视频，主要在FX和Chrome。已被WebM容器取代
        * 音频播放器将会直接播放音频文件，例如MP3和Ogg文件，不需要容器
- <source src="" type="">
    + type  video/mp4 video/webm
- <video controls width="400" height="400"
           autoplay loop muted
           poster="poster.png">
      <source src="rabbit320.mp4" type="video/mp4">
      <source src="rabbit320.webm" type="video/webm">
      <p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.mp4">link to the video</a> instead.</p>
 </video>
    + width和height控制视频尺寸，也可以用CSS来控制。视频会保持原始的`纵横比`,拉伸或者填充背景色
    + autoplay立即自动播放，不建议，用户比较反感。看不到poster的效果
    + loop循环播放，不建议
    + muted播放时静音
    + poster指向一个图像的URL，这个图像会在视频播放前显示
    + preload被用来缓冲较大的文件
        * none不缓冲
        * auto页面加载后缓存媒体文件
        * metadata仅缓冲文件的元数据
- <audio src="">用法与video几乎一样，不支持width、height、poster</audio>
- 显示音轨文本
    + WebVTT格式用来编写文本文件，这个文本文件包含了众多叫cues的字符串，字符串中带有元数据，可以根据不同的需求来显示不同的样式
        * subtitle：通过添加翻译字幕，来帮助那些听不懂外国语言的人们理解音频
        * captions：同步翻译或描述对白，来帮助那些不能听音频的人
        * timed description：将文字转音频，来帮助视觉障碍的人
    + WebVTT文件与HTML媒体一起显示，需要做如下工作
        * 以.vtt后缀名保存文件
        * <track></track>
            - 需要放在audio、video之中，所有source标签之后
            - 使用kind属性指明类型显示不同样式
                + subtitles：就是字幕了，不一定是翻译，也可能是补充性说明
                + 《重学前端》33.HTML替换型元素：为什么link一个CSS要用href，而引入js要用src呢
            - 使用srclang告诉浏览器用什么语言编写subtitles

##嵌入技术
- <iframe src="" width="" height=""  frameborder="1" allowfullscreen sandbox>备选内容</iframe>
    + allowfullscreen：全屏模式
    + frameborder：如果设置为1，则会告诉浏览器此框架和其他框架之间绘制边框。frameborder:0(不推荐)，因为CSS中border：none更好
    + width、htight、src、备选内容与video一样
    + __sandbox__：提高安全性设置，需要更现代的浏览器
    + 为了提高速度，在主内容完成加载后，用JavaScript设置iframe的src比较好。
- 安全隐患
    + 单击劫持
    + 只有在必要时嵌入：再小心也不为过
    + HTTPS：HTTP的加密版本
        * 减少了远程内容在传输过程中被篡改的机会
        * 防止嵌入式内容访问你的父文档中的内容，反之亦然
    + __始终使用sandbox属性__：强制执行所有可用的限制，也可以逐个添加
    + 配置CSP指令：CSP代表内容安全策略，提供一组HTTP表头，为了提高HTML文档的安全性
- <embed>和<object>
    + embed和object元素用来嵌入多种类型的外部内容的通用嵌入工具，包括插件技术
    + 不推荐

##向量(矢量)图
- 位图bitmap(光栅图raster images、点阵图、像素图)：使用像素网格来定义
    + 一个位图文件精确包含了每个像素的位置和它的色彩信息
    + 位图格式包括：Bitmap.bmp，PNG.png,JPEG.jpg,GIF.gif
- 矢量图vector images：使用算法来定义
    + 一个矢量图文件包含了图形和路径的定义
    + SVG格式
- SVG (scalable vector graphics)
    + 用于描述矢量图的xml语言 
    + 优点：图像中的文本可访问；可以很好的适应样式/脚本
    + 缺点：容易变复杂，文件会很大，复杂的SVG会占用浏览器很多处理时间；可能比位图更难创建；旧版本浏览器不支持SVG(IE9+)
    + 位图更适合照片那样复杂精密的图像
- SVG in HTML
    + 嵌入SVG快捷方式：<img>
        * 优点：快速，可将图片设置成超链接
        * 缺点：无法使用JavaScript操作图像；不能用CSS伪类来重设图像样式；SVG调用外部CSS不起作用
    + 兼容问题(IE8及更低，安卓2.3及更低不支持SVG)
        * src引PNG或JPG，srcset引SVG
         <img src="equilateral.png" alt="triangle with equal sides" srcset="equilateral.svg">
        * SVG用作CSS背景图
        `background: url("fallback.png") no-repeat center; `
        `background-image: url("image.svg");`
        `background-size: contain;`
    + 在HTML中引入SVG代码(内联SVG) <svg></svg>
        * 优点
            - 减少HTTP请求，减少加载时间
            - 可以为SVG元素分配class和id，并使用CSS修改样式，SVG有自己的一套外观属性
            - 内联SVG是唯一可以让你再SVG图像上使用CSS交互和CSS动画的方法
            - 可以将svg标签包在<a></a>中
        * 缺点
            - 只适合在一个地方使用SVG，多次使用会导致资源密集型维护
            - 额外的SVG代码会增加HTML文件的大小
            - 浏览器不能像缓存普通图片一样缓存内联SVG
            - 可能为了兼容问题，付出额外开销
    + 使用<iframe>嵌入SVG
        * 缺点：iframe回退机制，如果浏览器不支持iframe，则会显示回退
        * 除非SVG和你当前网页具有相同的origin，否则不能用JavaScript操纵SVG

##自适应图片
- 为什么要自适应
    + 艺术方向问题
    + 分辨率切换问题
- 怎样创建自适应的图片
    + CSS是比HTML更好的响应式设计工具
    + 分辨率切换：不同的尺寸
        * img标签的两个新属性：srcset和sizes
            - srcset定义了我们允许浏览器选择的图像集，以及每个图像的大小。每个可能被用到的图像用字符串表示，它们用逗号隔开：
                + 一个图像的文件名(jimmy-480w.jpg)
                + 一个空格
                + 空格后跟图像的固有宽度(以像素为单位):480w,单位`w` 
                + 空格后或者一个像素密度描述符，是一个正浮点数，单位`x`，此时不用设置sizes属性，如果描述符没给出，默认是1x
                + 宽度描述符和密度描述符不能混用 
            - sizes定义了一组条件(例如屏幕宽度)，当这个条件为真时，什么样的尺寸是最佳选择：
                + 一个条件((max-width:480px)),当浏览器视窗宽度480px或更少时
                + 一个空格
                + 当条件为真时，图像填充的尺寸宽度(440px)，单位可以是px、em、vw不能是%
                + 最后一个slot的宽度是没有条件的，作为回调
            - 设置了srcset和sizes后，浏览器会：
                + 查看设备宽度
                + 检查sizes列表中哪个条件是一个为真的
                + 查看给予该media查询的槽大小
                + 加载srcset列表中引用的最接近所选的槽大小的图像
            - <meta name="viewport" content="width=device-width">
    + 分辨率切换：相同的尺寸，不同的分辨率
        * srcset和x语法结合
        * 不需要配置sizes属性
    + 艺术方向问题
        * <picture></picture>    
        * <picture>
              <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg">
              <source media="(min-width: 800px)" srcset="elva-800w.jpg">
              <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva">
          </picture>
        * media属性为了解决艺术方向问题
    + 现代图像格式
        * <picture>
              <source type="image/svg+xml" srcset="pyramid.svg">
              <source type="image/webp" srcset="pyramid.webp"> 
              <img src="pyramid.png" alt="regular pyramid built from four equilateral triangles">
         </picture>
        * type声明文件类型MIME
            - MIME类型：type/subtype

#HTML表格

##表格基础
- 不使用HTML表格的几个原因
    + 屏幕阅读器不好阅读
    + 会产生很多标签，导致代码变得更难与编写、维护、调试
    + 表格不能自动响应，需要额外获取表格布局样式
- 创建表格
    + <table></table>
    + <td>table data</td>
    + <tr>table row</tr>
    + <th>table header加粗、居中</th> 标题能突出你想要找的数据
- 单元格跨行跨列(行列合并)
    + colspan
    + rowspan
- 为表格中的列提供共同样式 
    + <colgroup>
        <col style="" span="">
    </colgroup>

##表格进阶
- <caption>为表格增加标题</caption>
    + 曾经summary属性用来为表格提供描述，后被H5规范移除
- <thead>、<tfoot>、<tbody>
    + 这些元素不会使表格易于访问，不会造成任何视觉上的改变。但是可以更好的让CSS应用上来
    + tbody总是包含在每个表中，如果没有在代码中指定，那么它就是隐式的
- 嵌套表格
    + 不推荐
- 为视力障碍用户做的表格
    + 使用<th></th>
    + scope属性，<th scope="col">区分标题是行还是列：col、row、colspan、rowspan</th>
    + id和标题属性
        * <th id=""></th>
        * <td headers="需要包含th的id">多个th元素用空格隔开</td>

#HTML表单

##表单基础
- 表单越大，失去用户的风险就越大。保持简单，只要求必要的数据
- form in HTML
    + <form action="" method="">一个容器元素</form>
        * action属性定义了在提交表单时，应该把手机的数据送给谁(URL)去处理
        * method属性定义了发送数据的HTTP方式(get/post)
    + <label for="id"></label>
        * for属性引用相应的小部件的id
    + <input type="text" value="">
        * type属性定义input属性的行为方式
        * value属性用来定义input的默认值
    + <textarea name="" id="" cols="30" rows="10"></textarea>
        * 默认值定义在标签中间即可
    + <button type="submit"></button>
        * type属性接受三个值：submit，reset，button
            - submit：发送表单数据到form的action属性所指定URL
            - reset：将所有表单小部件重置默认值。__从UX角度来看，这是一种糟糕的做法__
            - button:没有特殊效果，用于JavaScript按钮定制
        * <input type="submit">也可以生成按钮
            - 只允许纯文本作为其标签
- 基本表单样式
- 向web服务器发送表单数据
    + <form action="/my-handling-form-page" method="post"></form>
    + name属性。为数据命名，收集特定的数据块。

##构建表单
- 注意：禁止嵌套表单
    + <form>外部的小部件没有特殊效果，需要JavaScript定制他们的行为
- <fieldset>和<legend>
    + fieldset控件组：方便用于创建具有相同目的的小部件组的方式，方便修改样式，且有语义
    + legend图例：用于描述fieldset的用途，包含在其中
    + 一组单选按钮时，应该嵌套在fieldset中
    + fieldset也可以对表单进行分段，长表单在多个页面拆分时，就用相应页面数量的fieldset放置不同的相关部件
- <label for=""></label>
    + 通过各自的 for属性和input的id属性，label标签和input标签相关联
    + input可以嵌label中，但不建议
    + 标签可以点击
    + 多个标签
        * 多个标签最好放在一个label里
- 用于表单的通用HTML结构
    + [payment-form.html](/payment-form.html)

##原生表单挂件
- 通用属性
    + autofocus，默认值false，使部件成为焦点。有唯一性
    + disabled，默认值false，不能交互，可继承
    + form，必须引用所属表单的id，用来form标签外部的部件与关联id的表单相关联
    + name，用于表单数据提交
    + value，初始值
- 文本输入域
    + 通用规范
        * readonly:用户不能修改输入值
        * disabled:输入值不会与表单数据的其余部分一起提交
        * placeholder：简略描述输入框的目的
        * size
    + 单行文本域
        * text是默认值：当你不提供type时，或提供的type浏览器不认识
        * HTML5为单行文本域增加的特殊值
            - E-mail地址域
                + <input type="email" id="email" name="email" multiple>
                + 客户端的错误验证，由浏览器执行
                + multiple：可以在一个框输入多个地址
            - 密码域
                + <input type="password" id="pwd" name="pwd">
                + 虽然模糊输入了，但其只是一个用户界面的特性，还是可能被截获。最安全的做法是在安全链接上托管含表单的页面，使得数据在发送之前就已加密
            - 搜索域
                + <input type="search" id="search" name="search">
                + 多一个×
                + 它们的值可以自动保存到同一站点上的多个页面上
            - 电话号码域
                + <input type="tel" id="tel" name="tel">
                + 没有任何限制，主要是语义上的差异
            - URL域
                + <input type="url" id="url" name="url">
                + 验证url是否有效
                + 只验证格式，并不验证是否是一个实际存在的位置
    + 多行文本域
        * <textarea name="" id="" cols="30" rows="10"></textarea>
        * 和单行文本字段的区别就是允许输入带按回车的文本
        * cols：默认值20，文本空间的可见宽度，平均字符宽度
        * rows: 控制可见文本行数
        * wrap：默认值soft，可选还有hard，控件如何包装文本
        * 两个关键点
            - 默认值写在两个标记之间
            - 只接收文本内容，任何HTML内容放入两个标记之中都呈现纯文本
- 下拉内容
    + HTML有两种类型的下拉内容：select box 和 autocomplete box
    + 选择框：<select name="" id=""></select>
        * <option value=""></option>
        * <option>的`selected`属性：设置默认值
        * <optgroup>创建视觉相关的选项组</optgroup>
        * <option>的`value`属性：如果设置了，发送value的值，没设置，使用option的内容
        * <optgroup>的`label`属性显示在组里值的最前面，不可选
    + 多选选择框
        * <option>的`multiple`属性，需要ctrl/cmd配合鼠标选择
    + 自动补全输入框
        * <datalist id="">为小部件提供建议自动完成的值</datalist>
        * <input>的`list`属性将数据列表绑定到一个文本域，list指定datalist的id
    + __数据列表支持和后备__
        * <datalist> IE10-和safari不支持
        * 支持<datalist>的浏览器将忽略所有不是<option>的元素，并按照预期工作
- 可选中项
    + 两种类型的可选中项：复选框和单选按钮
    + 建议在<fieldset><legend></legend></fieldset>中包围每个相关选项的列表，增大可用性和可访问性
    + value属性，使其具有意义，默认on。__value属性当type不是checkbox和radio时，是可选项表示控件的初始值，在可选框中表示提交时的值__
    + 复选框
        * <input type="checkbox" checked id="carrots" name="carrots" value="carrots">
    + 单选按钮
        * <input type="radio" checked id="soup" name="meal">
            - name共享相同的值表示同一组单选按钮
- 按钮
    + 三种类型按钮：submit、reset和button(默认值)
    + input和button的区别
        * button允许在标签中使用HTML内容，input只接受纯文本因为是用value属性
        * button可以设定不同于按钮标签的value值(__传递上去的是value__)
- 高级表单部件
    + 数字
        * <input type="number" name="age" id="age" min="1" max="10" step="2">
        * 只允许浮点数，并通常提供一些按钮来增加或减少
        * 通过`min`和`max`属性来约束值
        * 通过`step`属性来指定增减按钮更改的数量
        * IE10+
    + 滑块
        * <input type="range" name="beans" id="beans" min="0" max="500" step="10">
        * 滑块比文本字段更不易准确，被用来选择一个确切且不重要的数字
        * 不提供任何形式的视觉反馈，以了解当前的值，需要使用JavaScript来添加这一点
            - oninput事件：用户使用input时执行JavaScript
        * IE10+
    + 日期时间选择器
        * 本地时间：<input type="datetime-local" name="datetime" id="datetime">
            - 年月日时分
        * 月：<input type="month" name="month" id="month">
            - 年月
        * 时间：<input type="time" name="time" id="time">
            - 时分
        * 星期：<input type="week" name="week" id="week">
            - 年周
        * <input type="date" name="myDate" min="2013-06-01" max="2013-08-31" id="myDate">
            - min/max：yyyy-mm-dd
        * IE不支持，Firefox，safari不怎么支持
    + 拾色器
        * 表达颜色的方式：RGB、HSL、关键字
        * <input type="color" name="color" id="color">
        * IE、safari不支持
    + 其他小部件
        * 文本选择器
            - <input type="file" name="file" id="file" accept="image/*" multiple>
            - `accept`：约束上传文件类型
            - `multiple`：选择多个文件(需要借助键盘选中)
        * 隐藏内容
            - <input type="hidden" id="timestamp" name="timestamp" value="1286705410">
            - 需要设置`name`和`value`，否则无意义
        * 图像按钮
            - <input type="image" alt="Click me!" src="my-img.png" width="80" height="30" />
                + 如果用图像按钮来提交表单，不会提交value，会提交X\Y坐标(左上角是原点)
                + 发送两个键值对：name.x=x&name.y=y
        * 仪表和进度条
            - 数值的可视化表示
            - 进度条
                + <progress max="100" value="75">75/100</progress>
                + 不支持平稳退化
            - 仪表
                + <meter min="0" max="100" value="75" low="33" high="66" optimum="50">75</meter>
                + 仪表表示一个固定值，这个值由`min`和`max`所定
                    * `low`和`high`
                        - 该范围的较低部分是在`min`和`low`之间(不包含)
                        - 该范围的中间部分是在`low`和`high`之间(包含)
                        - 该范围的较高部分是在`high`和`max`值之间(不包含)
                    * `optimum`
                        - 定义了<meter>的最优值
                        - 如果optimum在较低范围内，则从低到高被认为是首选项、平均值、最坏的部分
                        - 如果optimum在中等部分，则从低到高被认为是平均值、首选项、平均值
                        - 如果optimum在较高范围内，则从低到高被认为是最坏的部分、平均值、首选项
                    * 浏览器通过这些值改变米尺颜色
                        - 如果value处在首选项部分，绿色
                        - 如果value处在平均部分，黄色
                        - 如果value处在最坏部分，红色
                + meter不支持平稳退化
                + IE不支持
    
##发送表单数据
- 数据去哪了？
    + 客户端/服务器体系架构
        * web基于基本的客户端/服务器体系：客户端(通常web浏览器)向服务器发送请求(apache、nginx、IIS、tomcat等server)使用HTTP协议。服务器使用相同的协议来回答它。
        * 在客户端，HTML表单是一种方便的用户友好方式，可以配置HTTP请求将数据发送到服务器。HTML表单使用户能够提供在HTTP请求中传递的信息。
    + 在客户端：定义如何发送数据
        * `action`
            - <form action="http://foo.com"> 数据被发送到绝对URL
            - <form action="/somewhere_else">数据被发送到服务器上的不同URL
            - <form>数据被发送到表单出现的相同页面上
            - <form action="#">之前需要#号来表示发送到表单当前页面上，现在不再需要。
            - 可以指定HTTPS协议的URL。即时表单本身托管在HTTP访问的不安全页面上，数据也会与请求的其余部分一起加密
            - 如果表单在HTTPS上托管，而action指定一个HTTP URL，所有的浏览器都会在每次尝试发送数据时向用户显示一个安全警告，数据不会被加密
        * `method`
            - HTTP协议提供了几种执行请求的方法，最常见的是GET和POST
            - HTTP请求由两部分组成
                + 一个数据头，包含关于浏览器功能的全局元数据集
                + 一个主体，包含服务器处理特定请求所需信息
            - GET方法
                + 是浏览器使用的方法，请求服务器返回给定的资源。浏览器发送一个空的主体，因此发送到服务器的数据被追加到URL
                + GET /?say=Hi&to=Mom HTTP/1.1
                  Host: foo.com
            - POST方法
                + 是浏览器在请求响应时使用的方法，需要考虑HTTP请求体中提供的数据，该方法会将数据追加到HTTP请求的主体中
                + POST / HTTP/1.1
                  Host：foo.com
                  Content-Type: application/x-www-form-urlencoded
                  Content-Length: 13

                  say=Hi&to=Mom
        * 查看HTTP请求
            - F12->Network->All->Name->Headers
            - 如果需要发送密码以及其他敏感数据，用post
            - 如果需要发送大量数据，用post，浏览器限制URL的长度
    + 在服务端：检索数据
        * 无论选择哪种HTTP方法，服务器都会接受一个字符串并解析获取键值对序列的数据
- 特殊案例：发送文件
    + enctype属性：指定在提交表单时所生成的请求中Content-Type的HTTP数据头的值
        * 默认情况是application/x-www-form-urlencoded;已编码为URL参数的表单数据
        * 发送文件需要三个额外步骤
            - method："post"，因为文件内容放不进URL
            - enctype="multipart/form-data",因为数据将被分成多个部分，每个文件分别对应一个文件以及表单正文中包含的文本数据
            - 包含一个或多个File picker小部件，允许用户选择将要上传的文件
    + 为了防止滥用，许多服务器配置了文件和HTTP请求的大小限制
- 常见的安全问题
    + XSS和CSRF
        * 跨站脚本和跨站点请求伪造
    + SQL注入
    + HTTP数据头注入和电子邮件注入
    + 偏执：永远不要相信你的用户
        * 有潜在危险的字符转义
        * 限制输入的数据量，只允许有必要的数据
        * 沙盒上传文件，将文件存储在不同的服务器上，只允许通过不同的子域访问文件，或者通过完全不同的域名访问文件

##表单校验





