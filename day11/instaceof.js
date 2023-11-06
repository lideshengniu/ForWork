function CreatePerson(name, age) {
  this.name = name;
  this.age = age;
  //   return 100; //返回的还是实例
  //   return {
  //     xxx:"xxx"
  //   } 如果手动return 的是一个基本值，对返回的实例无影响，如果手动return的是一个引用类型的值，会把默认返回的实例给替换掉(所以再构造函数模式执行下，我们一般都不要手动些return 防止把返回的实例给替换)
}
let person1 = new CreatePerson('和冉', 18);
/*
 instanceof:用来检测某个实例是否属于这个类
    实例 instanceof 类 属于返回true 不属于返回false
【局限性】
   1.要求检测的实例必须是对象数据类型的，基本数据类型的实例是无法基于它检测出来的
 */
console.log(person1 instanceof CreatePerson);
let ary = [12, 23];
console.log(ary instanceof Array); // true
console.log(ary instanceof RegExp); // false
console.log(ary instanceof Object); //true
/* 
 基本数据类型在JS中的特殊性
   1.一定是自己所属类的实例
   2.但是不一定是对象数据类型的

*/
//字面量创建方式(也是Number类的实例，也可以调取内置的公有方法)
let n = 10;
console.log(n.toFixed(2)); //10.00
console.log(typeof n); // "number"
// 构造函数创建模式(创建出来的实例是对象类型的)
let m = new Number('10');
console.log(typeof m); //"object"
console.log(m.toFixed(2)); //10.00
console.log(m instanceof Number); // true

//基本数据类型 分别可以用字面量创造 和 构造函数创造  字面量创造返回的是基本类型 而 构造函数返回的是对象 他们都可以用类的方法 但是后者是对象可以用instanceof 识别

console.log(m);
console.log(1 instanceof Number); //false

//正则这两种方式都是对象
let reg = /^$/;
let reg2 = new RegExp('');
