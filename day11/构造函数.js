function CreatePerson(name, age) {
  this.name = name;
  this.age = age;
}
CreatePerson('张三', 25); // this:window
CreatePerson('李四', 26); // this:window

let person1 = new CreatePerson('和冉', 18);
/* 
new CreatePerson() 执行和普通函数执行的联系
1.new 这种执行方式叫做”构造函数执行模式“，此时的CreatePerson 不仅仅是一个函数名，被称为’类‘，而返回的结果(赋值给person1的)是一个对象，我们称之为“实例”，而函数体中出现的this都是这个实例

*/
function CreatePerson(name, age) {
  this.name = name;
  this.age = age;
  //   return 100; //返回的还是实例
  //   return {
  //     xxx:"xxx"
  //   } 如果手动return 的是一个基本值，对返回的实例无影响，如果手动return的是一个引用类型的值，会把默认返回的实例给替换掉(所以再构造函数模式执行下，我们一般都不要手动些return 防止把返回的实例给替换)
}
//==========
//构造函数执行，因为也具备普通函数执行的特点
//1.和实例有关系的操作一定是 this.xxx = xxx 因为this是当前类创造出来的实例
// 2.私有变量和实例没有必然的联系
function Fn(n) {
  let m = 10;
  this.total = n + m;
  this.say = function () {
    console.log(this.total);
  };
}
let f1 = new Fn(10);
let f2 = new Fn(20);
let f3 = new Fn(); //new Fn 就是new Fn() new的时候不论是否加小括号，都相当于把Fn执行了，也创建了对应的实例，只不过不加小括号是不能传递实参的(当前案例中的形参n=undefined)
console.log(f1.m); //undefined
console.log(f2.n); //undefined
console.log(f1.total); //20
console.log(f2.say()); //30
console.log(f1 === f2); //false
