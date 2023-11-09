function Fn() {
  this.x = 100;
  this.y = 200;
  this.say = function () {}; //不同实例对象开辟的方法堆是不同的
}
Fn.prototype.eat = function () {
  console.log(this.x + this.y);
};
Fn.prototype.say = function () {
  console.log(this.y);
};
Fn.prototype.write = function () {
  this.z = 1000;
};
let f1 = new Fn();
f1.__proto__.say(); // this:f1.__proto__

Fn.prototype.eat(); // this:Fn.prototype =>console.log(Fn.prototype.x + Fn.prototype.y) NaN
/* 
面向对象中有关私有/公有方法中的this问题
1.方法执行，看前面是否有点，点前面是谁this就是谁
2.把方法中的this进行替换
3.再基于原型链查找的方法确定结果即可

*/
f1.say(); //this
f1.write(); //this:f1 =>f1.z = 1000 =>给f1设置一个私有的属性z=1000
