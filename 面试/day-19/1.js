//!!1
/* 1.call 和 apply的区别是什么，哪个性能更好一些？ */
fn.call(obj, 10, 20, 30);
fn.apply(obj, [10, 20, 30]);
//=>call的性能要不apply好那么一些，(尤其是传递给函数的参数超过三个的时候),所以后期开发的时候，可以使用call多一点
let arr = [10, 20, 30];
function fn(x, y, z) {}
fn.apply(obj, arr); //=>x=10 y=20 z=30
fn.call(obj, arr); //=>x=[10,20,30] y=z=undefined
fn.call(obj, ...arr); //=>基于es6的展开运算符也可以实现把数组中的每一项依次传递给函数
//=>自己实现性能测试（只供参考） 任何的代码性能测试都是和测试的环境有关系的，如CPU、内存、GPU等电脑当前性能不会有什么相同的情况，不同的浏览器也会导致性能上的不同
//console.time可以测试出一段程序执行的时间
console.time('A');
for (let i = 0; i < 100000; i++) {}
console.timeEnd('A');
//!!2
/* 实现(5).add(3).minus(2),使其输出结果为：6 */
(function () {
  //优化 容错
  function check(n) {
    // n = Number(n);
    // return isNaN ? 0 : n;
    return isNaN(n) ? 0 : Number(n);
  }
  function add(val) {
    val = check(val);
    // 绝对不能改变this  this +=n this -=n 这种要改变this值的不允许
    return this + val;
  }
  function minus(val) {
    val = check(val);
    return this - val;
  }
  ['add', 'minus'].forEach((item) => {
    Number.prototype[item] = eval(item);
  });
  //   Number.prototype.add = add;
  //   Number.prototype.minus = minus;
})();
console.log((12).add('n'));

//!!3
/* 箭头函数与普通函数(function)的区别是什么？构造函数(function)可以使用new 生成实例，那么箭头函数可以吗？为什么？ */
/* 
 *箭头函数和普通函数的区别
   1.箭头函数语法上比普通函数更加简洁(ES6中每一种函数都可以使用形参赋默认值和剩余运算符)
   2.箭头函数没有自己的this，它里面出现的this是继承函数所处上下文中的this(使用call/apply 等任何方式都无法改变this的指向)
   3.箭头函数中没有arguments(类数组),只能基于...arg 获取传递的参数集合(数组)
   4.箭头函数不能被new执行（因为：箭头函数没有this也没有prototype)
*/
// function Fn() {
//   this.x = 100;
// }
// Fn.prototype.getX = function () {};
// let f = new Fn();
let Fn = () => {
  this.x = 200;
};
let f = new Fn(); //uncaught typeError:Fn is not a constructor

function fn(x) {
  return function (y) {
    return x + y;
  };
}
let fn = (x) => (y) => x + y;
document.body.onclick = () => {
  //=>this ：window 不是body
};
document.body.onclick = function () {
  //=>this:body
  //   arr.sort(function (a, b) {
  //     //=>this:window 回调函数中的this一般都是window
  //     //=>回调函数：给一个方法传入的参数是一个函数 函数当前不会立即执行 当方法执行的时候函数就会执行
  //     return a - b;
  //   });
  arr.sort((a, b) => {
    //=>this:body
    return a - b;
  });
};
//=>回调函数：把一个函数B作为实参传递给另外一个函数A，函数A在执行的时候，可以把传递进来的函数B去执行（执行n次,可传值，可改this）
function each(arr, callBack) {
  //=>callBack:function
  for (let i = 0; i < arr.length; i++) {
    let irem = arr[i],
      index = i;
    // callBack(item, index);
    let flag = callBack.call(arr, arr[i], i);
    //=>接受回调函数返回的结果，如果是false，我们结束循环
    if (flag === false) {
      break;
    }
  }
}
each([10, 20, 30, 40], function (item, index) {
  // this:原始操作数组
  if (index > 1) {
    return false;
  }
});
/* 思考题 */
//1.each
let arr = [10, 20, 30, 'AA', 40],
  obj = {};
arr = arr.each(function (item, index) {
  //=>this：obj （each第二个参数不传，this是window即可）
  if (isNaN(item)) {
    return false; //如果return的是false 则结束当前数组的循环
  }

  return item * 10; //=>返回的结果是啥，就把数组中当前项替换成啥
}, obj);
// arr = [100,200,300,'AA',40]
/* 1.解答
let arr = [10, 20, 30, 'AA', 40],
  obj = {};
~(function () {
  function each(fnc, obj = window) {
    for (let i = 0; i < this.length; i++) {
      // if()
      let result = fnc.call(obj, this[i], i);

      if (result === false) {
        break;
      } else {
        this[i] = result;
      }
    }
    return this;
  }

  Array.prototype.each = each;
})();
let a = arr.each(function (item, index) {
  if (isNaN(item)) {
    return false;
  }
  return item * 10;
}, obj);
console.log(a);

*/
// 2.重写replace  实现和内置一模一样的效果(只需要考虑replace([REG],[CALLBACK])这种传参格式的处理)*/
/*
let str = "zhufeng2019zhufeng2029"
str = str.replace(/zhufeng/g,function(...arg){
    =>ARG中存储了每一次大正则匹配的信息和小分组匹配的信息
    return"@" =>返回的是啥 把当前正则匹配的内容替换成啥
})
*/
