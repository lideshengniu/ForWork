//!1
var ary = [1, 2, 3, 4];
function fn(ary) {
  ary[0] = 0;
  ary = [0];
  ary[0] = 100;
  return ary;
}
var res = fn(ary);
console.log(ary); //[0,2,3,4]
console.log(res); //[100]

//!2
var test = (function (i) {
  return function () {
    alert((i *= 2));
  };
})(2);
test(5); //alert "4"  !!!!!!!!除了console其他都是输出字符串

//!3
var a = 1;
var obj = {
  name: 'tom',
};
function fn() {
  var a2 = a;
  obj2 = obj;
  a2 = a;
  obj2.name = 'jack';
}
fn();
console.log(a); // 1
console.log(obj); //{"name":"jack"}
//!4
var a = 1;
function fn(a) {
  /* 
     形参赋值
     a = 1
     变量提升
      var a(无效)
      function a...;(声明无效，但是需要给a赋值为函数)
      a = function..
    
    */
  console.log(a); // 函数
  var a = 2;
  function a() {}
  console.log(a); //2
}
fn(a);

//!5
fn(); //3
function fn() {
  console.log(1);
}
fn(); //3
function fn() {
  console.log(2);
}
fn(); //3
var fn = 10;
fn(); //fnisnot a function
function fn() {
  console.log(3);
}
fn();

//!6
var a = 0,
  b = 0;
function A(a) {
  A = function (b) {
    alert(a + b++);
  };
  alert(a++);
}
A(1); //1
A(2); //4
