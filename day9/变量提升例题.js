/* 
全局作用域(栈内存)
 1.词法解析
 2.变量提升
  var a 
 3.代码执行

*/

//!1
// console.log(a); //undefined
// var a = 12;
// a = 13;
// console.log(a); //13
//!2
/* 
全局作用域(栈内存)
 1.变量提升
 带var 和 function才提升 这里是let 所以没用
 2.代码执行

*/
// console.log(a);//报错  在js中上一行代码报错下面的代码都不会执行了
// let a = 12;
// a = 13;
// console.log(a);
//!3
/* 
全局作用域(栈内存)
 1.变量提升
 没提升
 2.代码执行

*/
console.log(a); //报错 uncaught referenceerror ： a is not defined
a = 13; // =>window.a = 13
console.log(a);

//!4
var n = 1;
function fn() {
  var n = 2;
  function f() {
    n--;
    console.log(n);
  }
  f(); //1
  return f;
}
var x = fn();
x(); //0
console.log(n); //1
