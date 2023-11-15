/* 
 This 是函数执行的主体(谁执行的)
 this是谁和函数在哪儿创建的或者在哪儿执行的都没有必然的联系

 掌握几条分清执行的主体的规律
   1.给元素的某个事件绑定方法，当事件触发方法执行的时候，方法中的this是当前操作的元素
   2.方法执行，看方法前面是否有点，有点，点前面是谁this就是谁，没有点this是window(在严格模式下没有点this是undefined = >"use strict")
   3.在构造函数模式执行中，函数体中的this是当前类的实例
*/

/* 
function Fn(){
    =》this:f这个实例
    this.name = 'xx'
}
let f = new Fn()
console.log(f.name)
*/
//! 1
var fullName = 'language';
var obj = {
  fullName: 'javascript',
  prop: {
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName()); //"undefined"   =>this:obj.prop
var test = obj.prop.getFullName;
console.log(test()); //"language" this:window

//!2
var name = 'window';
var Tom = {
  name: 'Tom',
  show: function () {
    console.log(this.name);
  },
  wait: function () {
    var fun = this.show;
    fun();
  },
};
Tom.wait(); //"window"

//!3
window.val = 1;
var json = {
  val: 10,
  dbl: function () {
    this.val *= 2;
  },
};
json.dbl();
var dbl = json.dbl;
dbl();
json.dbl.call(window);
alert(window.val + json.val); //24

//!4  作用域只能是栈 上级作用域是上一个栈内存
(function () {
  var val = 1;
  var json = {
    val: 10,
    dbl: function () {
      //上级作用域(栈不是堆)，所以是全局作用域
      val *= 2;
    },
  };
  json.dbl();
  alert(json.val + val); //12
})();
//!5
var num = 10;
65;
var obj = { num: 20 };
30;
obj.fn = (function (num) {
  this.num = num * 3; //window 60
  num++; //21

  return function (n) {
    this.num += n;
    num++;
    23;
    console.log(num); //23
  };
})(obj.num);
var fn = obj.fn;
fn(5); //window.num 65 22
obj.fn(10);
console.log(num, obj.num); //65 30
