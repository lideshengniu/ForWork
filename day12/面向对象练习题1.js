function Fn() {
  this.x = 100;
  this.y = 200;
  this.getX = function () {
    console.log(this.x);
  };
}
Fn.prototype.getX = function () {
  console.log(this.x);
};
Fn.prototype.getY = function () {
  console.log(this.y);
};
let f1 = new Fn();
let f2 = new Fn();
console.log(f1.getX === f2.getX); //false
console.log(f1.getY === f2.getY); //true
console.log(f1.__proto__.getY === Fn.prototype.getY); //true
console.log(f1.__proto__.getX === Fn.prototype.getX); //true
console.log(f1.getX === Fn.prototype.getX); //false
console.log(f1.constructor); //Fn
console.log(Fn.prototype.__proto__.constructor); //Object

//基于constructor 实现数据类型检测就是这样来玩的
// 但是这种方法有很大的弊端 因为用户可以去随意修改对应的constructor值或者是手动给ary增加一个私有的constructor属性等
let ary = [];
ary.constructor;
console.log(ary.constructor === Array); //true

f1.__proto__.getX(); //找的是公有方法
//this:f1.__proto__ === Fn.prototype
//console.log(f1.__proto__.x)
//undefined

f2.getY();
// 找的是公有方法
//this:f2
// console.log(f2.y);//200
