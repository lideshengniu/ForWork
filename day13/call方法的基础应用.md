# this

每一个函数(普通函数/构造函数/内置类)都是Function这个内置类的实例，所以：函数.__proto__ === Function.prototype,函数可以直接调取Function原型上的方法

```JS
//Function.prototype => function anonymous(){}
/*
* call/apply/bind
* 原型上提供的三个公有属性方法
   每一个函数都可以调用这个方法执行
   这些方法都是用来改变函数中的this指向的
*/
function fn(){}
fn.call() //fn函数基于原型链找到Function.prototype上的call方法，并且让其执行(执行的是call方法，方法中的this是fn)

fn.call.call() // fn.call 就是Function.prototype上的call方法，也是一个函数，只要是函数就能用原型上的方法，所以可以继续调用call来执行
Function.prototype.call = function $1(){
    //...
}
fn.call => $1
fn.call => $1() this:fn
fn.call.call() => $1.call()=>继续让call[$1]执行，this:$1

实例.方法():都是找到原型上的内置方法，让内置方法先执行(只不过执行的时候做了一些事情会对实例产生改变，而这也是这些内置方法的作用)，内置方法中的this一般都是当前操作的实例
```

## call方法

语法：函数.call([context],[params1],.......)

函数基于原型链找到Function.prototype.call这个方法，并且把它执行，在call方法执行的时候完成了一些功能

- 让当前函数执行
- 把函数中的this指向改为第一个传递给call的实参
- 把传递给call其余的实参当作参数信息传递给当前函数

如果执行call一个实参都没有传递，非严格模式下是让函数中的this执行window，严格模式下指向的是undefined

```js
window.name="WINDOW"
let obj = {name:'OBJ'}
let fn = function(){
    console.log(this.name)
}
fn() //=>this:window //=>'WINDOW' 严格下是undefined
fn.call(obj) // =>this:obj //=>'OBJ'
fn.call()//this:window //=>"WINDOW" 严格下是undefined
fn.call(null) //=>this:window 严格下是null(第一个参数传递的是null/undefined/不传),非严格模式下this指向window,严格模式下传递的是谁this就是谁，不传this是undefined
Object.prototype.toString()//toString方法中的this:Object.prototype
Object.prototype.toString.call(100)//toString方法中的
this:100


function fn(n,m){
    console.log(this.name)
}
fn.call(obj) //=>this:obj n/m = undefined
fn.call(10,20) //=>this:10  n=20 m=undefined
```

## 手写的call方法

```js
~(function () {
  /* call:改变函数中的this指向
     @params
       context 可以不传递，传递必须是引用类型值(因为后面要给它加$fn的属性) 
     
    */

  function call(context) {
    // this:sum 也就是当前要操作的这个函数实
    context = context || window;
    let args = [], //除第一个参数外剩余传递的信息值
      result;
    for (let i = 1; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    // 这里arguments不能用slice来排除第一个参数因为 只是类数组没有slice方法 只能用for
    context.$fn = this;
    result = context.$fn(...args); //args=[10,20]...是ES6中的展开运算符，把数组中的每一项分别的展开传递给函数// context.$fn(10,20)
    delete context.$fn;
    return result;
  }
  //扩展到内置类的原型上  这样会覆盖原有的call方法
  Function.prototype.call = call;
})();
let obj = { name: 'OBJ' };
function sum(n, m) {
  console.log(this);
  return n + m;
}
sum.call(obj, 10, 20);
```

## apply方法

和call方法一样，都是把函数执行，并且改变里面的this关键字的，唯一的区别就是传递给函数参数的方式不同

- call就是一个个传参
- apply是按照数组传参

```js
let obj = {name:'OBJ'}
let fn = function(n,m){
    console.log(this.name)
}
//让fn方法执行，让方法中的this变为obj,并且传递10/20
fn.call(obj,10,20)
fn.apply(obj,[10,20])
```

## bind方法

和call/apply一样，也是用来改变函数中的this关键字的，只不过基于bind改变this,当前方法并没有被执行，类似于预先改变this

```js
let obj = {name:'OBJ'}
let fn = function(n,m){
    console.log(this.name)
}
document.body.onclick = fn //=>当事件触发，fn中的this:body
//=>点击BODY,让FN中的this指向OBJ
//document.body.onclick = fn.call(obj)//=>基于call/apply 这样处理，不是把fn绑定给事件，而是把fn执行后端结果绑定给事件
document.body.onclick = function(){
    //this:BODY
    fn.call(obj)
}

document.body.onclick = fn.bind(obj) //=>bind 的好处是:通过bind方法只是预先把fn中的this修改为obj，此时fn并没有执行呢，当点击事件触发才会执行fn(call/apply都是改变this的同时立即把方法执行)=>在IE6-8中不支持bind方法。预先做啥事情的思想被称为“柯里化函数”
```

