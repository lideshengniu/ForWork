//!! 1
var i = 20;
function fn() {
  i -= 2;
  return function (n) {
    console.log(++i - n);
  };
}
var f = fn();
f(1); //18
f(2); //18
fn()(3); //16
fn()(4); //14
f(5); //14
console.log(i); //19
