###GitHub
	-什么是github
  + GitHub公司与octocat
    	+ 并不只是Git仓库的托管服务
    		* github除提供git仓库的托管服务外，还为开发者或团队提供了一系列功能，帮助其高效率、高品质的进行代码编写。
    	+ github和git的区别
    		* 在git中，开发者将源代码存入名叫“Git仓库”的资料库中并加以使用。
    		* 而github则是在网络上提供git仓库的一项服务
    - 使用github会带来哪些变化
      + 协作形式变化
      	* 在开发者之间引发化学反应的Pull Request
      	* 对特定用户进行评论
      	* github flavored markdown(GFM)语法
      + 能看到更多其他团队的软件
      + 与开源软件相同的开发模式
    - 社会化编程 social coding
    - 为什么需要社会化编程
      + 不要闭目塞听，要接触不同的文化
      + 会写代码的程序员更受青睐
      + github最大的特征是"面向人"
    - github提供的主要功能
      + github仓库
      + organization
      + issue
      + wiki
      + pull request
      ###Git的导入
    - 诞生背景
      + Git属于分布式版本控制，是为版本管理而设计的软件
      + Linux的创始人Torvalds在2005年开发了Git的原型程序
    - 什么是版本管理
      + 集中型与分散型
      	* 集中型
      		** 以subversion为代表的集中型，将仓库几种存放在服务器之中，所以只存在一个仓库
      		** 集中型将所有数据几种存放在服务器当中，有便于管理的优点。但是一旦开发者所处的环境不能连接服务器，就无法获取最新的源代码，开发也就几乎无法进行。服务器宕机时也是同样的道理，而且万一服务器故障导致数据消失，恐怕开发者就再也见不到最近的源代码了。
      	* 分散型
      		** Git为代表的分散型，github将仓库fork给了每一个用户。fork就是将github的某个特定仓库复制到自己的账户下。fork出的仓库与原仓库是两个不同的仓库，开发者可以随意编辑
      	* 哪个更好
      		** 分散型更好。只要规则制定得当，分散型同样能像集中型那样进行管理。
    - 安装
      + Mac与Linux
      + Windows
      	* msysGit
      		组件的选择
      		设置环境变量
      		换行符的处理
      		Git Bash
    - 初始设置
      + 设置姓名和邮箱地址
      	`$ git config --global user.name "FName LName"`
      	`$ git config --global user.email "email@ex.com"`
      	“~/.gitconfig”
      + 提高命令输出的可读性
      	`$ git config --global color.ui auto`
      ###使用GitHub的前期准备
    - 使用前准备
      + 创建账户
      + 设置头像
      + 设置SSH Key
      	* `ssh-keygen -t rsa -C "email@ex.com"`
      		l542186530
      	* fingerprint值：SHA256:oMimD7XYLMRn1k/f0++fXcmbIlKO3OssGsTu5L6o0xs 
      	* id_rsa 文件是私有密钥，id_rsa.pub是公开密钥
      + 添加公开密钥
      	* 在GitHub中添加公开密钥，今后就可以用私有密钥进行认证了
      	* Account Setting->Add SHH Key
      	* `$ cat ~/.ssh/id_rsa.pub`
      		** ssh-rsa *** email@ex.com
      	* ssh -T git@github.com
      		** Enter passphrase for key '/c/Users/Apple/.ssh/id_rsa':
      			Hi leezhimeng919! You've successfully authenticated, but GitHub does not provide shell access.
      	* 使用社区功能
    - 实际动手使用
      + 创建仓库
      	* New repository
      		** repository name
      		** description
      		** public、private
      		** initialize this repository with a README
      		** Add .gitignore
      			++ 可以在初始化时自动生成.gitignore文件。这个设定会帮我们把不需要在Git仓库中进行版本管理的文件记录在.gitignore文件中，省去了每次根据框架进行设置的麻烦
      		** Add a license
      			++ 如果这个仓库中包含的代码已经确定了许可协议，那么请在这里进行选择。随后将自动生成包含许可协议内容的LICENSE文件，用来表明该仓库内容的许可协议。
      + 连接仓库
      	* README.md
      		** 人们一般会在这个文件中表明本仓库所包含的软件的概要、使用流程、许可协议等信息。如果使用markdown语法进行描述，还可以添加标记，提高可读性。
      	* GitHub Flavored Markdown
      		** 该语法是在markdown语法基础上扩充而来的，但一般情况下只要按照原本的markdown语法进行描述就可以了。
      + 公开代码
       	* clone已有仓库
      	 		`git clone URL`
       	* 编写代码
      	 		`git status`
       	* 提交
      		`git add 文件名`
      		`git log`
       	* 进行push
      	 		`git push`
      ###通过实际操作学习Git
    - 基本操作
      + git init——初始化仓库
        * 要使用Git进行版本管理，必须显初始化仓库。Git是使用git init命令进行初始化的
        * `mkdir git-tutorial`
        	`cd git -tutorial`
        	`git init`
      + git status——查看仓库的状态
        * 用于显示Git仓库的状态，工作树和仓库在被操作的过程中，状态会不断发生变化
        * 只要对Git的工作树或仓库进行操作，git status命令的显示结果就会发生变化
      + git add——向暂存区中添加文件
        * 如果只是用Git仓库的工作树创建了文件，那么该文件并不会被记入Git仓库的版本管理对象当中。因此我们用git status命令查看文件时，会显示在untracked files里
        * 要想让文件成为Git仓库里管理对象，就需要用git add命令将其加入暂存区(stage
        	或index)中。
        * 暂存区是提交之前的一个临时区域
      + git commit——保存仓库的历史记录
        git commit命令可以将当前暂存区中的文件实际保存到仓库的历史记录中去。通过这些记录，我们就可以再工作树中复原文件
        * 记述一行提交信息
        	 	* `git commit -m "First commit"`
        	   		-m参数后的"First commit"称作提交信息，是对这个提交的概述
         * 记述详细提交信息
        	 	* `git commit`
         * 中止提交
        	 	* 如果在编辑器启动后想中止提交，请将提交信息留空并直接关闭编辑器，随后提交就会被中止
         * 查看提交后的状态
        	 	* `git status`
        	   	On branch master
        	   	nothing to commit，working directory clean
      + git log——查看提交日志
        * commit 栏旁边显示的是指向这个提交的哈希值
        * Author 栏中显示我们给Git设置的用户名和邮箱地址
        * Date 栏中显示提交执行的日期和时候。
        * 提交信息
          * 只显示提交信息的第一行
            `git log --pretty=short`
          * 只显示指定目录、文件的日志
            `git log 文件名`
          * 显示文件的改动
            `git log -p`
      + git diff——查看更改前后的差别
        * git diff命令可以查看工作树、暂存区、最新提交之间的差别。
        `git diff`查看工作树和暂存区的差别
        `git diff HEAD`查看工作树和最新提交的差别
    - 分支的操作
      + 在进行多个并行作业时，我们会用到分支。在这类并行开发的过程中，往往同时存在多个最新代码状态。从master分支创建A分支和B分支后，每个分支中都拥有自己的最新代码。master分支是Git默认创建的分支，因此基本上所有开发都是以这个分支为中心进行的。不同分支中，可以同时进行完全不同的作业。等该分支的作业完成之后再和master分支合并
      + 分支相关操作
      	* git branch——显示分支一览表
      		** `git branch`
      			* master
      	* git checkout -b——创建、切换分支
      		** `git checkout -b` 以当前的master分支为基础创建新的分支
      		** 切换到feature-A分支并进行提交
      			`git checkout -b feature-A`
      		** 切换到master分支
      			`git checkout master`
      		** 切换回上一个分支
      			`git checkout -`
      + 特性分支
      	* Git与SVN等几种版本管理系统不同，创建分支时不需要连接中央仓库，所以能够相对轻松地创建分支。因此，当今大部分工作流程中都用到了特性(Topic)分支.
      	* 特性分支是集中实现单一特性(主题)，初次之外不进行任何作业的分支。在日常开发中，往往会创建数个特性分支，同时在此之外再保留一个随时可以发布软件的稳定分支。稳定分支的角色通常由master分支担当
      	* 基于特定主体的作业在特性分支中进行，主体完成后再与master分支合并。只要保持这样一个开发流程，就能保证master分支可以随时供人查看。这样一来，其他开发者也可以放心大胆的从master分支创建新的特性分支
      + 主干分支
      	* 主干分支是刚才我们讲解的特性分支的原点，同时也是合并的重点。通常人们会用master分支作为主干分支。主干分支中并没有开发到一半的代码，可以随时供他人查看
      	* 有时我们需要让这个主干分支总是配置在正式环境中，有时又需要用标签Tag等创建版本信息，同时管理多个版本发布。拥有多个版本发布时，主干分支也有多个。
      + git merge——合并分支
      	* 首先切换到master分支
      		`git checkout master`
      	  然后合并feature-A分支，为了在历史记录中明确记录下本次分支合并，我们需要创建合并提交。因此，在合并时加上 --no-ff参数
      	  	`git merge --no-ff feature-A`
      + git log --graph ——用图标形式查看分支
    - 更改提交的操作
      + git reset——回溯历史版本
      + 消除冲突
      	* 查看冲突部分并将其解决
      	* 提交解决后的结果
      + git commit --amend ——修改提交信息
      + git rebase -i ——压缩历史
    - 推送至远程仓库
      + git remote add	——添加远程仓库
      + git push	——推送至远程仓库
    - 从远程仓库获取
      + git clone	——获取远程仓库
      + git pull ——获取最新的远程仓库分支

##详细解说github的功能
### 键盘快捷键
- `shift + /`

###工具栏
- 关于UI
	+ Logo
		* 点击logo就会进入控制面板
	+ Notifications
		* 消息通知
	+ 搜索窗口
	+ Explore
		* 





