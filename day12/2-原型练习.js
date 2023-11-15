//!1
function C1(name) {
  if (name) {
    this.name = name;
  }
}
function C2(name) {
  this.name = name;
}
function C3(name) {
  this.name = name || 'join';
}
C1.prototype.name = 'Tom';
C2.prototype.name = 'Tom';
C3.prototype.name = 'Tom';
alert(new C1().name + new C2().name + new C3().name); //tom undefined join

//!!2 ===
function Fn() {
  let a = 12;
}
let f = new Fn();
f.a; //undefined

//!!!!!!!!!!3
function Fn(num) {
  this.x = this.y = num;
}
Fn.prototype = {
  x: 20,
  sum: function () {
    console.log(this.x + this.y);
  },
};
let f = new Fn(10);
console.log(f.sum === Fn.prototype.sum); //true
f.sum(); //20
Fn.prototype.sum(); //NaN
console.log(f.constructor); //Object

//!!!!!4
function Fn() {
  let a = 1;
  this.a = a;
}
Fn.prototype.say = function () {
  this.a = 2;
};
Fn.prototype = new Fn();
let f1 = new Fn();
Fn.prototype.b = function () {
  this.a = 3;
};
console.log(f1.a); //1
console.log(f1.prototype); //Fn()
console.log(f1.b); //function
console.log(f1.hasOwnProperty('b')); //false
console.log(f1.constructor == Fn); //true

///! 5
~(function () {
  //=>x :需要加减的数字
  function checkX(x) {
    x = Number(x);
    return isNaN(x) ? 0 : x;
  }
  function plus(x) {
    x = checkX(x);
    // this = x+this//坚决一定不能这样
    return this + x;
  }
  function plus(x) {
    // this:我们要操作的原始数字(this =xxx 这样不行我们不能给this手动赋值)
    x = checkX(x);
    return this - x;
  }
  function minus(x) {
    x = checkX(x);
  }
  Number.prototype.plus = plus;
  Number.prototype.minus = minus;
})();
let n = 10;
let m = n.plus(10).minus(5);
console.log(m); //15

//思考题：重构数字的slice方法 基于原生js实现出和内置方法一模一样的效果
// N/M 的各种情况
