//! 1.
/* 全局作用域
    变量提升 var a;function fn(){....} 
    代码执行
  
*/
console.log(a); //undefined
var a = 12;
function fn() {
  /* 
    全新的私有作用域(私有的执行上下文)
      形参赋值 and 变量提升 var a；
      代码执行 
    */
  console.log(a); //undefined
  var a = 13;
}
fn();
console.log(a); //12

//!2.
console.log(a); //=>undefined
var a = 12;
function fn() {
  console.log(a); // =>12
  a = 13; // =>把全局的a赋值13
}
fn();
console.log(a); //=>undefined

//!3
/* 
 变量提升(全局)
   function fn(){...}
   在全局作用域下，带var/function 声明的全局变量相当于给window设置了对应的属性,如果使用的是let/const 声明的，只是全局变量，没用给window设置属性的
*/
console.log(a); // 报错 referenceError:a is not defined
a = 12;
function fn() {
  console.log(a);
  a = 13;
}
fn();
console.log(a);

//! 4
console.log(a); // uncaught referenceerror:cannot access 'a' before initialization

let a = 12;
function fn() {
  console.log(a);
  let a = 13;
}
fn();
console.log(a);
//!5
let a = 12;
function fn() {
  /* 
      词法解析
      已经知道了在当前私有栈中有一个“let A”此时的私有栈中出现的A都是私有的
     形参赋值&变量提升 没有
    */
  console.log(a); // uncaught referenceError：cannot access 'a' before initialization
  // 你又会有疑问那为什么报的不是词法解析的错呢？ 这样的 在词法解析的时候知道了你有a这个变量 但是在执行代码的时候才发现是在声明变量之前就调用了所以报的是执行时的错误 而不是词法解析时候如果是let a 又 let a 这就是词法解析时候的错误因为解析的时候发现你let了两次
  // 你会想为什么呢 为什么不是通过作用域链向外找 答案是有词法解析 词法解析发现了你有let 声明 且在声明之前调用
  let a = 13;
}
fn();
console.log(a);
//!6
let a = 12;
function fn() {
  /* 
      词法解析
      已经知道了在当前私有栈中有一个“let A”此时的私有栈中出现的A都是私有的
     形参赋值&变量提升 没有
    */
  console.log(a); // 12
  // 你会想为什么呢 为什么不是通过作用域链向外找 答案是有词法解析 词法解析发现了你有let 声明 且在声明之前调用
  //如果把let a = 13 去掉
}
fn();
console.log(a);
//当前作用域下(全局、私有、块作用域)如果创建变量使用的是let/const 等，一直不能在创建前使用这些变量，否则会报错：referenceError ：cannot access “a” before initialization

//!7
/* 
 let 所在的大括号是一个块作用域(私有作用域)
*/
if (1 === 1) {
  var a = 12;
  let b = 13;
}
console.log(a); //12
console.log(b); //报错 is not defined
