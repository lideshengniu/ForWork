# 1.GIT版本控制系统

```js
常用的版本控制系统
   cvs/svn 集中式版本控制系统
   git 分布式版本控制系统
```

## 1.1 git的全局配置

```js
git config -l 查看配置信息
git config --global -l 查看全局配置信息

git status 红色表示工作区 绿色表示暂存区 没有表示都已经提交到历史区

git log 查看提交记录

git reflog 查看所有的历史纪录（包括历史区回滚后）

git reset --hard id 回滚版本

git remote -V

git remote add origin [git仓库地址] //让本地仓库和远程仓库新建一个链接 origin是随便起的一个连接名(可以改成自己想要的，只不过一般都用这个名字)

git remote rm origin //删除关联信息

git pull origin master //提交之前最好先拉取   
（pull下来如果有冲突需要纠正冲突重新提交到仓库然后push)

git push origin master //本本地代码提交到远程仓库
```

## 1.2 真实项目开发流程

```js
1.组长或者负责人创建中央仓库
2.小组成员基于git clone 把远程仓库及默认的内容克隆到本地一份(解决三件事：初始化一个本地仓库git init   和对应的远程仓库保持关联 git remote add     把远程仓库默认内容拉取到本地git pull)

```

## 1.3基于npm进行模块管理

```js
npm install xx 
npm install xxx -g 可以使用命令对任何的项目进行操作
npm i xxx@1.0.0 按照指定版本号的模块
npm view xxx versions > xxx.version.json 查看某个板块的版本信息(输出到指定json文件中)

npm init -y 初始化当前项目的配置依赖清单
npm i xxx --save 把模块保存在清单生产依赖中
npm i xxx --save-dev 开发依赖中
npm install 

npm init -y 初始化当前项目的配置依赖清单(项目文件加的名字中不能出现中文、大写字母和特殊符号)

什么情况下会把模块安装在全局？
  ->可以使用 命令对任何的项目进行操作
  ->npm root -g 查看全局安装模块的目录
  ->因为在安全目录下生成了 xxx.cmd的文件，所以我们能够使用xxx的命令进行操作
安装在本地项目中的模块
  ->可以在项目中导入进来使用
  ->但是默认不能基于命令来操作(因为没cmd文件)
  ->但是可以基于package.json中的scripts,配置一些npm可以执行命令，配置后通过$npm run xxx执行

>磁盘符：进入到指定磁盘
>cd xxx 进入指定的目录

安装less后用 lessc xx.less yy.min.css -X 可以把less转译成css


========== 开始认真一些
   npm init -y 初始化当前的项目的配置依赖清单
      =>创建成功后在当前项目中生成package.ison 的清单文件
      dependencies:生产依赖模块(开发和项目部署的时候都需要)
      devDependencies:开发依赖模块(只有开发的时候需要)
      scripts:配置本地可执行命令的
```

```JS
可以自己写一个scripts命令  如下   然后可以直接在命令行的本项目目录下 用 npm run less
```



![image-20231103163052487](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20231103163052487.png)

## 1.4 一个项目从零开始

```js
1.创建项目文件夹
2.把他作为一个新的仓库进行代码管理(可以基于$git clone 把远程仓库克隆下来即可)
3.初始化模块配置清单package.json:$npm init -y
4. 安装所需要的模块:$npm i jquery bootstrap@3 less
注意npm i xx@3  意思是按xx的第三代版本的最新版本
5.正常开发
6.开发中：可能需要在本地配置命令去完成一些功能（例如less文件编译，此时需要配置npm可执行的命令）
script{
    "zxt":"less css/index.less css/index.min.css -x",
     "xxx":"webpack"
}
7.开发中我们需要基于git把文件进行管理：生成对应的历史版本
提交到暂存区、历史区、远程仓库的时候，项目中很多文件是无需处理和提交的，例如：node_modules、.idea...,不需要提交的，我们生成一个.gitignore忽略文件
8.由于每次git
```

## 1.5yarn

```js
1.npm install yarn -g
yarn
  yarn init/yarn install
  yarn add xxx@x.xx.xx --dev
  yarn remove xxx
  yarn 不能安装全局模块 
```

## 1.6nrm

```js
npm install nrm -g
nrm ls 
nrm use xxx
接下来继续使用npm命令即可
```

