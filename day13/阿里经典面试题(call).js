function fn1() {
  console.log(1);
}
function fn1() {
  console.log(2);
}
fn1.call(fn2); //1
fn1.call.call(fn2); //2
Function.prototype.call(fn1); //没有输出
Function.prototype.call.call(fn1); //1
