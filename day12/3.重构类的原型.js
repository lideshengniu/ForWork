/* 
 重构类的原型：让某个类的原型指向新的堆内存地址（重定向指向）
   问题：重定向后的空间中不一定有constructor属性(只有浏览器默认给prototype开辟的堆内存中才存在constructor) 这样导致类和原型机制不完整；所以需要我们手动再给新的原型空间设置constructor属性
   问题：在重新指向之前，我们需要确保原有原型的堆内存中没有设置属性和方法，因为重定向后，原有的属性和方法就没啥用了(如果需要克隆到新的原型堆内存中，我们还需要额外的处理)=>但是内置类的原型，由于担心这样的改变会让内置的方法都消失，所以禁止了我们给内置类原型的空间重定向，例如：
   Array.prototype={...}这样就没有用，如果想加方法 Array.prototype.xxx = function(){..}这样就可以处理
*/
function Fn() {
  // ...
}

// 批量给原型设置属性方法的时候 重构类的原型
Fn.prototype = {
  getA: function () {},
  getB: function () {},
};
//=>批量给原型设置属性方法的时候：设置别名
let proto = Fn.prototype;
proto.getA = function () {};
proto.getB = function () {};
proto.getC = function () {};
proto.getD = function () {};
