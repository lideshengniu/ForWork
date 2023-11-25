class phone {
  //静态属性  就是直接放在phone对象上的方法
  static name = '手机';
  static change() {
    console.log('a');
  }
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }
  //方法必须使用该语法，不能使用es5的对象完整形式
  //是在原型上
  call() {
    console.log('我可以打电话！');
  }
}
let onePlus = new phone('1', 1999);
//===============================================
// 继承
function Phone(brand, price) {
  this.brand = brand;
  this.price = price;
}
Phone.prototype.call = function () {
  console.log('我可以打电话');
};
function SmartPhone(brand, price, color, size) {
  Phone.call(this, brand, price);
  this.color = color;
  this.size = size;
}
SmartPhone.prototype = new Phone();
SmartPhone.prototype.constructor = SmartPhone;

class Phone {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }
  //父类的成员属性
  call() {
    console.log('电话');
  }
}
class SmartPhone extends Phone {
  //构造方法
  constructor(brand, price, color, size) {
    super(brand, price); //Phone.call(this,brand,price)
    this.color = color;
    this.size = size;
  }
  photo() {
    console.log('photo');
  }
  call() {
    //只能重写父类方法 不能调用父类方法也就是不能用 super() 调用父类方法 只能完全重写
    console.log('hh');
  }
}

//===================
//可以用setter和getter
class Phone {
  get price() {
    console.log('属性价格被改了');
    return 'iloveyou';
  }
  set price(c) {
    console.log('价格属性被改了' + c);
  }
}
let c = new Phone();
console.log(s.price);
//!!!!!!!!!!!!!!!!!!!!!!!!!!========

ES6 引入了 class 语法，这是一个语法糖，它在现有的基于原型的继承上提供了更清晰、更面向对象的语法。下面是一些关于ES6类的关键点：

定义类
使用 class 关键字可以定义一个类。

javascript

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
//继承
//使用 extends 关键字可以创建一个类的子类，从而实现继承。

javascript

class Student extends Person {
  constructor(name, level) {
    super(name);
    this.level = level;
  }

  study() {
    console.log(`${this.name} is studying at ${this.level}`);
  }
}
//继承次数
//在JavaScript中，类可以被多次继承。你可以创建一个继承链，子类可以继承父类，孙类可以继承子类，以此类推。

javascript
class GraduateStudent extends Student {
  constructor(name, level, course) {
    super(name, level);
    this.course = course;
  }

  research() {
    console.log(`${this.name} is researching in ${this.course}`);
  }
}
//静态方法
//可以在类上定义静态方法，这些方法不是类的实例上的，而是类本身的。

javascript

class Helper {
  static logTwice(message) {
    console.log(message);
    console.log(message);
  }
}

Helper.logTwice('Logged!');
//抽象类
//虽然JavaScript没有原生的抽象类（Abstract Classes）的概念，但你可以通过抛出错误来模拟一个类是“抽象的”，不能被实例化。

javascript

class AbstractClass {
  constructor() {
    if (new.target === AbstractClass) {
      throw new TypeError("Cannot construct Abstract instances directly");
    }
  }
}
接口
//JavaScript也没有原生的接口（Interfaces）的概念。不过，你可以通过注释或者使用TypeScript这样的超集来模拟接口。