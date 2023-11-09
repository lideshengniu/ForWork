window.name = 'WINDOW';
let obj = { name: 'OBJ' };
let fn = function () {
  console.log(this.name);
};
fn(); //=>this:window =>   "WINDOW"
fn.call(obj); //=>this:obj //=>'OBJ'
fn.call(); //this:window //=>'WINDOW'

//=>我们的需求是想让FN执行的时候，方法中的THIS指向OBJ
//obj.fn() //=>uncaught TypeError:obj.fn is not a function  因为此时 obj中并没有fn这个属性

// ---------------解决办法----------
obj.fn = fn;
obj.fn();
delete obj.fn;
console.log(obj);
