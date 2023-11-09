~(function () {
  /* call:改变函数中的this指向
     @params
       context 可以不传递，传递必须是引用类型值(因为后面要给它加$fn的属性) 
     
    */

  function call(context) {
    // this:sum 也就是当前要操作的这个函数实
    context = context || window;
    let args = [], //除第一个参数外剩余传递的信息值
      result;
    for (let i = 1; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    // 这里arguments不能用slice来排除第一个参数因为 只是类数组没有slice方法 只能用for
    context.$fn = this;
    result = context.$fn(...args); //args=[10,20]...是ES6中的展开运算符，把数组中的每一项分别的展开传递给函数// context.$fn(10,20)
    delete context.$fn;
    return result;
  }
  //扩展到内置类的原型上  这样会覆盖原有的call方法
  Function.prototype.call = call;
})();
let obj = { name: 'OBJ' };
function sum(n, m) {
  console.log(this);
  return n + m;
}
sum.call(obj, 10, 20);
/* 
   我知道你会遇到的一个疑问
   虽然基本数据类型（如数字、字符串和布尔值）在访问它们的属性或方法时会被临时包装为对象，但是这个包装对象是临时的，它并不持久化任何属性或方法的添加。这意味着你不能给基本数据类型添加属性，如你所示的a.b = 5。

当你执行类似a.b = 5的操作时，这里发生的事情是：

数字12被临时包装成一个Number对象。
给这个临时Number对象的b属性赋值5。
这个临时对象随即被丢弃，所以b属性也随之消失。
下次再访问a.b时，步骤1和2会再次发生，但是由于每次都是一个新的临时对象，之前设置的属性不会被保留。
   */
