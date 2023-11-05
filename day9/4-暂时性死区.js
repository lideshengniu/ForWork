// // console.log(a);//=>Uncaught ReferenceError a is not defined
// console.log(typeof a); //==>"undefined"   正常应该是报错因为没有a  但是浏览器有bug (暂时性死区)

/* 
词法解析 
发现有let a  但是在赋值之前就使用了报错
let 解决了暂时性死区问题

*/
//但是如果是
console.log(typeof a); //ReferenceError: Cannot access 'a' before initialization
let a;
