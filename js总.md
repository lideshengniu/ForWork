# 1 准备工作

## 1.服务器渲染模式

![image-20231026233036676](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20231026233036676.png)

```js
是指后端再请求到数据库数据后，直接在后端拼接成dom结构类似的页面再传回前端
```

### 1.1 存在的问题

![image-20231026234241263](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20231026234241263.png)

## 2.客户端渲染 主流

![image-20231027083805122](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20231027083805122.png)

### 1.2 优势

```js
1.减轻了服务端压力    客户端不再需要渲染所有来自客户端请求的渲染 把渲染留给客户端自己
2.能实现局部刷新       既然不会把整体页面返回每次进行了局部修改也就没有必要发起整个页面的请求 可以改哪儿取哪儿
3.配合方便：前后端分离  后端用什么语言都可以
```

## 3.快捷键设置

```js
ctrl+ / 单行
shift+alt+F 代码格式化
shift+alt+A 块注释
ctrl+k+O 代码收起
ctrl+k+J 代码展开
```

# 2.常用的浏览器

## 2.1 webkit 内核（v8 引擎）

谷歌 Chrome

safari

Opera >=V14

国产浏览器

手机浏览器

## 2.2Gecko 'geKou

火狐 Firefox

## 2.3Presto 音标 prestOU 乐段

Opera < V14

## 2.4Trident 三叉戟

IE IE EDGE 开始采用双内核 (包含 chrome 迷你)

## 2.5 浏览器常用

![image-20231027100509467](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20231027100509467.png)

# 3.JS

## 3.1 ECMAScript （变量、数据类型、操作语句等)

### 3.1.1 const let var

![image-20231027103142742](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20231027103142742.png)

```JS
创建函数相当于创建变量，创建类也相当于创建变量。
ES6 创建模块导入也可以创建变量
import B from './B.js'
Symbol 创建唯一值
A = Symbol(1)
B = Symbol(1)
A === B //false

```

### 3.1.2 js 命名规范

严格区分大小写

```JS
let Test = 100
console.log(test) //undefined
```

使用数字 字母 下划线 $ 并且数字不能作为开头

```JS
let $box
let _box
let 1box // false
```

### 3.1.3 驼峰命名

```js
1.首字母小写 其余每一个有意义单词的首字母都要大写（命名语义化,使用英文单词)
let delete  let studentInfo
//不正确
let xueshenginfo let xsxx
2.不能使用关键字和保留字
var let const function ...

```

### 3.1.4 数据类型

```js
1.基本数字类型
  1.数字number
   1.常规数字和NaN
      not a number:不是一个数，但它率属于数字类型
      NaN和任何值都不想等 包括它自己（NaN != NaN）
   2.isNaN 用来检测一个值是不是NaN，如果不是有效数字返回true 反之是有效数字返回false
      isNaN([val]) // 很多技术文档用中括号把值抱起来 意思是参数占位符不是说这里是一个数字的意思
      isNaN(10) //false
      isNaN('AA')// true
      isNaN("10") // false
     NaN首先检查是不是数字 如果不是先基于Number()这个方法 把值转换为数字类型
      流程：isNaN('AA') 第一步 Number('AA') => NaN  所以不是有效数字
      此时就有个问题了？那哪些可以转为数字呢？
      console.log(Number('12.5')) // 12.5
      console.log(Number('12.5px')) // NaN
      console.log(Number('12.5.5')) // NaN
      console.log(Number('')) // 0
      console.log(Number(' ')) // 0
      console.log(Number(true)) // 1
      console.log(Number(false))// 0
      console.log(isNaN(false)) // false
      console.log(Number(null)) // 0
      console.log(Number(undefined)) //NaN
       //!!!!!!!zho
      // 把引用数据类型转为数字，是先把他基于toString方法转换为字符串，然后在转换为数字
   //{xxx:'xx'}.toSring()=>"[object Object]" 返回的都是这种字符串
   // [].toString() => ""     [12].toString()=>"12"  [12,23].toString()  = > "12,23" 所以数组转数字不一定是NaN
===
      console.log(Number({a:1})) // NaN
      console.log(Number({})) //NaN
      console.log(Number([])) //0
      console.log(Number([12])) //12
      console.log(Number([12,10])) //NaN
   其他方法转为数字




 2.字符串string
  所有用单引号，双引号，反引号 包起来的都是字符串
  '{name:10}' //字符串
 3.布尔值boolean
  true/false
 4.空对象指针null
 5.未定义undefined
2.引用类型数据
 1.对象数据类型object
  {}普通对象
  特殊类型对象
  []数组对象
  /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/ 正则对象
   Math 数学函数对象
   日期对象
                         ...
 2.函数数据类型function

```

## 3.2 DOM 文档对象模型，提供一些 JS 的属性和方法，用来操作页面中的 DOM 元素

## 3.3 BOM 浏览器对象模型，提供一些 JS 的属性和方法，用来操作浏览器
