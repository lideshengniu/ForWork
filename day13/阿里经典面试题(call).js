function fn1() {
  console.log(1);
}
function fn2() {
  console.log(2);
}
fn1.call(fn2); //1
fn1.call.call(fn2); //2
fn1.call.call.call(fn2);
Function.prototype.call(fn1); //没有输出
Function.prototype.call.call(fn1); //1

~(function () {
  function call(obj) {
    obj = obj || window;
    let args = [],
      result;
    for (let i = 1; i < arguments.length; i++) {
      args.push[i];
    }
    obj.$fn = this;
    obj.$fn(...args);
    delete obj.$fn;
  }
  Function.prototype.call = call;
})();
