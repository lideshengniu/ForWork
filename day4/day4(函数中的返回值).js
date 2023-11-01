// 没有return  函数默认返回值是undefined
function sum(n, m) {
  let result = n + m;
}
let AA = sum(10, 20);
console.log(AA); //undefined
// console.log(1)  控制台显示 1     然后下一行undefined    因为console.log() 是一个函数执行 他没有返回值所以是undefined

// 匿名函数
// 把一个匿名函数本身作为值赋值给其他东西
document.body.onclick = function () {};
// (function(n){})() 立即执行函数
