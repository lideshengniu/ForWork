//!1
var foo = 1;
function bar() {
  /* 
     私有栈变量提升and形参赋值
     var foo (不管条件是否成立都有进行变量提升)
    
    */
  if (!foo) {
    var foo = 10;
  }
  console.log(foo); //10
}
bar();

//!2
let foo = 1;
function bar() {
  if (!foo) {
    /* 
     块作用域
      foo是块中私有的
    */

    let foo = 10;
  }
  // 不能使用块中私有的foo,找自己私有作用域中的(没有则往全局找)
  console.log(foo); //1
}
bar();
//!3
let foo = 1;
function bar() {
  if (foo) {
    let foo = 10;
  }
  console.log(foo); //1
}
bar();
// !4
let n = 12;
~(function () {
  if (1) {
    let n = 13;
  }
  console.log(n); //12
})();

//!5
let n = 12;
~(function () {
  if (1) {
    n = 13;
  }
  console.log(n); //13
})();
console.log(n); //12

//!6
var n = 0;
function a() {
  var n = 10;
  function b() {
    n++;
    console.log(n);
  }
  b();
  return b;
}
var c = a(); //11
c(); //12
console.log(n); //0
//!6
var a = 10,
  b = 11,
  c = 12;
function test(a) {
  a = 1;
  var b = 2;
  c = 3;
}
test(10);
console.log(a); //10
console.log(b); //11
console.log(c); //3

//!7
if (!('a' in window)) {
  var a = 1;
}
console.log(a); //undefined

//!8
/* 

箭头函数中没用arguments  不管是否定义了形参，也不管传递了多少实参，arguments中包含所有传递的实参信息(类数组集合)
*/
var a = 4;
function b(x, y, a) {
  /* 
    形参赋值
    x = 1
    y = 2
    a = 3
    在js非严格模式下，arguments和形参存在映射关系(一个改都会跟着变)
    */
  console.log(a); //3
  arguments[2] = 10; //形参a也跟着改为10   严格模式下改了形参也不会受影响
  console.log(a); //10
}
a = b(1, 2, 3);
console.log(a); //undefined

//!9
/* 
逻辑或 || 和 逻辑与 && 在赋值操作中的意义
 A || B 先验证A的真假，如果A为真，返回的是A的值，如果A为假返回的是B的值
 A&&B ： A为真返回B的值，A为假返回A的值
 &&的优先级高于||
 let a = 0 || false
 console.log(a) //false

 a = 1 || false
 console.log(a) //1

 a=1 && 100
 console.log(a) // 100

 a = 0 && 100
 console.log(a) // 0

 a = 0 || 1 && 2||3 //先算1&&2
 console.log(a) //2

 用途
 function fn(x,callback){
    //typeof x === 'undefined'? x= 0:null
    x=x||0
    // callback代表回调函数(传递的是个函数)：我们需要保证它是一个函数才能执行
    //typeof callback === “function'?callback():null
    callback && callback()
 }

 fn()
 fn(10)
 fn(10,function(){})
*/
var foo = 'hello';
(function (foo) {
  /* 
     形参赋值 & 变量提升
     foo = "hello"
    
    */
  console.log(foo); //'hello'
  var foo = foo || 'world';
  console.log(foo); //'hello'
})(foo);
console.log(foo); //'hello'

//!10
var a = 9;
function fn() {
  a = 0;
  return function (b) {
    return b + a++;
  };
}
var f = fn();
console.log(f(5)); //5
console.log(f()(5)); //5
console.log(f(5)); //6
console.log(a); //2
