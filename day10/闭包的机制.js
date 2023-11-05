//!1.
var i = 5;
function fn(i) {
  return function (n) {
    console.log(n + ++i);
  };
}
var f = fn(1);
f(2); //4
fn(3)(4); //8
fn(5)(6); //12
f(7); //10
console.log(i); //5
