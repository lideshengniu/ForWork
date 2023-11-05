//! 1
// var a = 12;
// var a = 13;
// console.log(a); //13

//!2
// let a = 12;
// let a = 13;
// console.log(a); //uncaught syntaxerror:identifier 'a' has already been declared

//!3
/* 
全局作用域(栈内存)
 1.变量提升
 2.代码执行

*/
// console.log(1);//这行代码已经就不会执行了
// let a = 12;
// console.log(a);
// let a = 13; //uncaught syntaxerror:identifier 'a' has already been declared 报错的是这一行
// console.log(a);
// 这个例题我们觉得是会先打印1 然后打印12 然后报错
//但是实际是 直接就报错任何都没打印
//!4 这里不是语法错误 所以不会提前就触发错误 syntaxerror才是语法错误
// console.log(1);
// 1;
// console.log(a); //uncaught ReferenceError: Cannot access 'a' before initialization
// let a = 12;

//!5 所谓重复是:不管之前通过什么办法,只要当前栈内存中存在了这个变量,我们使用let/const等重复再声明这个变量就是语法错误 所下先var了 再去let就是会语法错误!而var是可以重复声明为什么呢就是这样所以现在别用var了
console.log(a);
var a = 12;
let a = 13; // SyntaxError: Identifier 'a' has already been declared
console.log(a);
//!5.2 !!!!!是词法解析阶段发现的错误 不是代码执行 词法解析发现了两个 a
console.log(a);
let a = 13;
var a = 12; // SyntaxError: Identifier 'a' has already been declared

console.log(a);
