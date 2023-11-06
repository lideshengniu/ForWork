// console.log(a);//=>Uncaught ReferenceError a is not defined
console.log(typeof a); //==>"undefined"   正常应该是报错因为没有a  但是浏览器有bug (暂时性死区)
