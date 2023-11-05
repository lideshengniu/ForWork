/* 
全局作用域(scope)
全局执行上下文(context)
全局栈内存(stack)
三个都一样 全局栈内存

*/

console.log(a, b);
var a = 12,
  b = 12;
function fn() {
  console.log(a, b);
  var a = (b = 13);
  console.log(a, b);
}
fn();
console.log(a, b);
