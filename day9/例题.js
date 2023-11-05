// !1
fn(); //5
function fn() {
  console.log(1);
}
fn(); //5
function fn() {
  console.log(2);
}
fn(); //5
var fn = function () {
  console.log(3);
};
fn(); //3
function fn() {
  console.log(4);
}
fn(); //3
function fn() {
  console.log(5);
}
fn(); //3

//! 2
/* 
 全局作用域
  1.变量提升
    不管条件是否成立都要进行变量提升
     var a =>创建一个全局变量a => window.a
     但是做函数的有特殊性,在老版本浏览器中,确实不论条件是否成立,函数也是提前声明或者定义的,但是新版本浏览器中,为了兼容es6严谨的语法规范,条件中的函数在变量提升阶段只能提前声明,不能提前定义
     function fn;
  2.代码执行
*/
console.log(a); //undefined
if (!('a' in window)) {
  // a=>'a' in window =>true
  var a = 13;
}
console.log(a); //undefined

console.log(fn); //undefined
// fn(); // Uncaught TypeError:fn is not a function
if (!('a' in window)) {
  //条件成立,进来后的第一件事是给FN赋值,然后在代码执行
  fn(); //抽象的是这样也能执行
  function fn() {
    console.log('哈哈');
  }
}
fn(); //哈哈

//!3
f = function () {
  return true;
}; // =>window.f = ...
g = (function () {
  return false;
})(function () {
  /* 
   函数执行会形成一个私有作用域
    1.变量提升 function g
    2.代码执行
  */
  if (g() && [] == ![]) {
    //=>uncaught typeError :g is not a function
    f = function () {
      return false;
    };
    function g() {
      return true;
    }
  }
})();
//也可也
/* 
~function(){
    if(g()&&[]==![]){
        f = function (){return false}
        function g(){return true}
    }
}() 这样也可也
==>自执行函数本身不进行变量提升(没名字)
自执行函数:前面加()或者!  - ~ + 只有一个目的,让语法符合而已
~function(){}() 
-function(){}() 
+function(){}() 
!function(){}() 
*/
console.log(f());
console.log(g());

//!3
console.log(a, b); // undefined undefined
var a = 12,
  b = 12;
function fn() {
  console.log(a, b); // undefined 12
  var a = (b = 13);
  console.log(a, b); // 13 13
}
fn();
console.log(a, b); // 12,13
// !4
console.log(a, b, c); // undefined undefined undefined
var a = 12,
  b = 13,
  c = 14;
function fn(a) {
  console.log(a, b, c); //10 13 14
  a = 100;
  c = 200;
  console.log(a, b, c); // 100 13 200
}
b = fn(10); //b = undefined
console.log(a, b, c); // 12 undefined 200

//!
function sum(a) {
  console.log(a);
  let a = 100; //uncaught syntaxerror:identifier 'a' has already been declared
  console.log(a);
}
sum(200);

//!2
