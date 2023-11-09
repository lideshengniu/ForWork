# 1.let/const

**es6中新增的用来创建变量和常量的**

```js
let a = 12
a = 13
console.log(a) //13

const b = 12
b = 13 //uncaught typeerror:Assignment to constant variable:基于const创建变量，变量存储的值不能被修改(常量)
console.log(b)
```

# 2.let和var的区别

- let不存在变量提升（当前作用域中，不能在let声明前使用变量）
- 同一个作用域中，let不允许重复声明
- let 解决了typeof 的一个暂时性死区问题
- 全局作用域中，使用let声明的变量并没有给window加上对应的属性
- let会存在块作用域(除对象意外的大括号都可被看作块级私有作用域)

# 3.箭头函数及this问题

es6中新增了创建函数的方式：“箭头函数”

真实项目中是箭头函数和function这种普通函数混合使用

**箭头函数简化了创建函数的代码**

```js
// =》箭头函数的创建都是函数表达式方式(变量=函数)，这种模式下，不存在变量提升，函数只能在创建完成后被执行（也就是创建的代码之后执行）
const fn = ([形参]) = >{
    //函数（return）
}
fn([实参])
//=>形参只有一个，小括号可以不加
const fn = n=>{}
//=>函数体中只有一句话，并且是return xxx的，可以省略大括号和return等
const fn = n => n*10

function fn(n){
    return function(m){
        return m+(++n)
    }
}
const fn=n=>m=>m+(++n)
```

箭头函数中没有arguments，但是可以基于剩余运算符获取实参集合，而且es6中是支持给形参设置默认值的

```JS
let obj = {};
// arg 可以叫任何名字 没有影响 ...AA ...AAAA 都可以
let fn = (context = window, ...arg) => {
  //console.log(arguments) =>uncaught referencerror:arguments is not defined 箭头函数中没有arguments
    // ...args:剩余运算符（把除第一项外的，其他传递的实参信息都存储到args这个数组集合中）
};
fn(obj, 10, 20, 30); //=>context:obj  arg:[10,20,30]
fn(); //=>context:window arg:[]

```

箭头函数中没有自己的this 它里面用到的this 都是自己所处上下文中的this(真实项目中，一但涉及this问题，箭头函数慎用)

# 4.解构赋值

**让左侧出现和右侧值相同的结构，以此快速获取我们需要的内容**

真实项目中最常用的就是对数组和对象解构赋值



**...**的作用

- 拓展运算符(多用在解构赋值中)
- 展开运算符(多用在传递实参中)
- 剩余运算符(多用在接收实参中)

```js
// 拓展
let [n,...m] = [12,23,34]
n//12 
m//[23,34]

//展开
let ary = [12,23,13,24,10,25]
let min = ary.min(...ary) //min 10

//对象浅克隆
let obj = {name:"xx",age:10}
let cloneobj = {...obj,sex:"girl"}

//接收实参
let fn = (n,...ary)=>{
    // n:10
    // arg:[20,30]
}
fn(10,20,30)
```

# 5 class创建类

```js
//传统es3/es5中创建类的方法
function Fn(){
     this.x = 100
}
Fn.prototype.getX = function(){
    console.log(this.x)
}
var f1 = new Fn()
f1.getX()
//也可以把它当作普通函数执行
Fn()
//还可以把Fn当作普通的对象设置键值对
Fn.queryX = function(){}
Fn.queryX()
```

```js
// es6 中类的创建
class Fn{
    //等价于之前的构造函数体
    constructor(){
        this.x = 100
    }
    getX(){
        console.log(this.x)
    }
    // 给实例设置的私有属性
     y = 200
    
    //直接写的方法就是加在原型上的 === Fn.prototype.getX..
     //前面设置static的，把当前Fn当作普通对象设置的键值对
    static queryX(){}
    static x=100  
}
//也可以在外面单独这样写
Fn.prototype.y=200
Fn.z=300
Fn.prototype.getY = function(){}
let f = new Fn(10,20)
f.getX()
Fn.queryX()

Fn()//=>Uncaught TypeError class constructor Fn cannot be invoked without 'new' class创建的类只能new执行，不能当作普通函数执行
```

# 6.模板字符串

```js
let year = '2019',
    month = '08',
     day='09'
 // =>"你好，小伙伴。今天是2019年08月09日"
 let res = "你好，小伙伴。今天是"+year+"年"+month+"月"+day+"日"
 
 =====
     // 项目中会大量进行字符串拼接操作，传统的es3语法模式下字符串拼接是一个非常苦逼的任务
   let ID="box"
   let html='<ul class="list clear" id="'+ID+'">'
```

```js
let year = '2019',
    month = '08',
     day='09'
 // =>"你好，小伙伴。今天是2019年08月09日"

 let res =`你好，小伙伴。今天是${year}年${month}月${day}日`
```

# 7.this和面向对象的另外一种深入理解

```js
function myUnique(){
    //...
    //=>this :当前类的一个实例(也不一定)
}
Array.prototype.myUnique = myUnique
let ary = [12,13,12,13,23,13,12]
ary.myUnique()
Array.prototype.myUnique()//this:Array.prototype

Array.prototype.myPush=function(n){
    this[this.length] = n
}

Array.prototype.push.call(ary,30)
```

```JS
function sum(){
    //ARGUMENTS:内置的实参集合（箭头函数中没有），不是数组是类数组（它不是数组的实例，不能直接使用数组的方法）这样想真实数组是数组类的实例能使用数组原型上的方法 而arguments都不是数组的实例所以不能用数组上的方法
   let total = null
   for(let i = 0;i<arguments.length;i++){
       total+=arguments[i]
   }
    return total
}
let total = sum(10,20,30,40)
```

```js
let sum = (...arg)=> eval(arg.join('+'))
let total = sum(10,20,30,40)
```

**如果ARGUMENTS是一个数组就好了**

```js
~function(){
    function slice(){
        
    }
    Array.prototype.slice=slice
}()
let ary = [10,20,30,40]
let newAry = ary.slice(0) // 数组克隆
//=========================
  function sum(){
      //  把arguments转换为数组，借用数组原型上的slice方法，只要让slice的this指向arguments 就相当于把arguments转换为新数组
     let arg = Array.prototype.slice.call(arguments,0)
     
      //let arg =[]
    //  for(let i=0 ;i<arguments.length;i++){
    //      arg.push(arguments[i])
     // }
      // =>数组求和
      return eval(arg.join('+'))
  }  
let total = sum(10,20,30,40)
```

不仅仅是一个方法可以这样调用，很多数组的方法，类数组都能用

```js
function sum(){
    let total = null
    [].forEach.call(arguments,item=>{
        total+=item
    })
    return total
}
let total = sum(10,20,30,40)
```

