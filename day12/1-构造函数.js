/* 
 类：函数数据类型
 实例：对象数据类型的
*/
function Fn() {
  /* NEW执行也会把类当作普通函数执行(当然也有类执行的一面) 
1.创建一个私有的栈内存
2.形参赋值and变量提升
3.浏览器创建一个对象出来(这个对象就是当前类的一个新实例)，并且让函数中的this指向这个实例对象=》"构造函数模式中，方法中的this是当前类的实例"
4.代码指向
5.在外面不设置return的情况下，浏览器会把创建的实例对象默认返回
 
*/
  this.x = 100;
  this.y = 200;
  this.say = function () {}; //不同实例对象开辟的方法堆是不同的
}
let f1 = new Fn();
let f2 = new Fn();
//基于内置类原型拓展方法
Object.prototype.hasPubProperty = function (property) {
  //=>验证传递的属性名合法性(一般只能是数字或字符串等基本值)
  let x = ['string', 'number', 'boolean'];
  y = typeof property;
  if (!x.includes(y)) return false;
  // 开始检验是否为公有的属性
  let n = property in this,
    m = this.hasOwnProperty(property);
  return n && !m;
};
console.log(Array.prototype.hasPubProperty('push')); //false
[1].hasPubProperty('push'); //true
