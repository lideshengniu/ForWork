function sum(n, m) {
  return n + m;
}
let sum = (n, m) => {
  return n + m;
};
// 如果函数体中只有一行return 可以省略return 和 括号，一行搞定
// 如果只有一个形参括号也可也不要
let sum = (n, m) => n + m;
console.log(sum(10, 20));

function fn(n) {
  return function (m) {
    return n + m;
  };
}
let fn = (n) => (m) => n + m;

///=============
function sum(n, m) {
  if (typeof n === 'undefined') {
    n = 0;
  }
  if (typeof m === 'undefined') {
    m = 0;
  }
  return n + m;
}
//上面等价于下面   额不传值的时候就是undefined 所以你想问为什么不考虑null 所以为什么考虑呢
// 形参赋值默认值：当没有给形参传递实参的时候，执行默认值
let sum = (n = 0, m = 0) => n + m;
//!!!!!!!!!!!!!!!!!!!!!!!!箭头函数中没有arguments
let sum = () => {
  console.log(arguments); //=>Uncaught ReferenceError:arguments is not defined 箭头函数中没有arguments
};
sum(1, 2, 3, 4);
//!!!!!!!但是有别的方法
// 但是我们可以使用剩余运算符获取到传递的实参集合(它是数组,比arguments更好玩)
let sum = (...args) => eval(args.join('+'));
