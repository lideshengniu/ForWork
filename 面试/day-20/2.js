//=>基于内置的new 关键词，我们可以创建Dog的一个实例sanmao，实例可以调取原型上的属性和方法，现在需求是：自己实现一个_new 方法，也能摸你出内置new后的结果 你别傻逼兮兮的说为什么下面传进去的Fn 不直接用new Fn 给 obj 都说了别用new 自己实现一个

function Dog(name) {
  this.name = name;
}
Dog.prototype.bark = function () {
  console.log('wangwang');
};
Dog.prototype.sayName = function () {
  console.log('my name is' + this.name);
};
// =>Fn当前要NEW 的类 =>Dog
// =>arg后期需要给构造函数传递的参数信息=》['三毛']
function _new(Fn, ...arg) {
  //=>创建一个空对象，让他的原型链指向Fn.prototype(作为Fn的一个实例)
  //=>Object.create([AA对象])：创建一个空对象obj，并且让空对象obj作为AA对象所属构造函数的实例(obj.__proto__=AA)
  //   let obj = {};
  //   obj.__proto__ = Fn.prototype;
  let obj = Object.create(Fn.prototype);
  Fn.call(obj, ...arg);
  return obj;
}
/* 
let sanmao = new Dog('三毛')
1.像普通函数执行一样，形成一个私有的作用域
   形参赋值
   变量提升
2.默认创建一个对象，让函数中的this执行这个对象，这个对象就是当前类的一个实例
3.代码执行
4.默认把创建的对象返回
*/

/* 
let sanmao = new Dog('三毛')
sanmao.sayName()
sanmao.bark()
*/
