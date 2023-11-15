// var b = 10;
// (function b() { //给匿名函数起个名字 这个b相对是const b = function b(){} 后面赋值无效了
//   b = 20;
//   console.log(b); //函数  不过如果你var b = 20 这里打印出来就是20 因为他优先级比给匿名函数赋值高了
// })();
// console.log(b); //10
//!!!!奇奇怪怪
let fn = function AAA() {
  'use strict';
  AAA = 1000; //=>Uncaught TypeError:Assignment to constant variable
  console.log(AAA); //能答应出来且就是这个AAA函数身
};
AAA(); //=>Uncaught ReferenceError:AAA is not defined 本应1.匿名的函数如果设置了函数名，在外面还是无法调用，但是在函数里面是可以使用的
//2.而且类似于创建常量一样，这个名字存储的值不能被修改(非严格模式下不报错，但是不会有任何的效果，严格模式下直接报错，我们可以把AAA理解为是用const创建出来的)
