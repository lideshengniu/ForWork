/* 函数柯里化：预先处理的思想(利用闭包的机制) */
// bind就是一个非常典型的柯里化处理思想
function fn(x) {
  //=>预先在闭包中把x值存储起来
  return function (y) {
    return x + y;
  };
}
fn(100)(200)(function () {
  function myBind(context = window, ...outerArg) {
    //=>context:需要改变的this指向
    //=>arg：其余需要传递给函数的实参信息
    let _this = this;
    return function (...innerArg) {
      _this.call(context, ...outerArg.concat(innerArg));
      //   _this.apply(context, outerArg.concat(innerArg));
    };
  }
  Function.prototype.myBind = myBind;
})();
let obj = {
  name: 'OBJ',
};

function fn(...arg) {
  console.log(this, arg);
}
document.body.onclick = fn.myBind(obj, 100, 200);
//=>点击的时候FN中的this=>obj arg=>[100,200,事件对象]
// document.body.click = fn.bind(obj, 100, 200);//所以bind执行完成后返回了下面这种匿名函数 然后 下次调用的就是匿名函数
//=>下面这个就是bind原理
// document.body.onclick = function (ev) {
//   fn.call(obj, 100, 200);
// };
/* 
fn.call(obj,100,200)

*/
document.body.onclick = fn; //=>this:Body arg:[事件对象]
document.body.onclick = function (ev) {
  //=>ev事件对象：给元素的某个事件绑定方法，当事件触发会执行这个方法，并且会把当前事件的相关信息传递给这个函数"事件对象"
  //   console.log(ev)
};
//!!!上面讲的是什么是柯里化函数思想 下面是题

/* 请实现一个add函数，满足以下功能 */
// add(1); //1
// add(1)(2); //3
// add(1)(2)(3); //6
// add(1)(2, 3); //6
// add(1, 2, 3); //1
function additem(...args) {
  let sum = eval(args.join('+'));
  return sum;
}
sum = 0;
function add() {
  //   console.log(...arguments);
  sum += additem(...arguments);
  console.log(sum);
  //   console.log(sum);
  return function () {
    let args = arguments;
    // console.log(args);
    add(...args);
  };
}
console.log(add(1, 2)(3));

///! 提供的
function currying(fn, length) {
  length = length || fn.length;
  return function (...args) {
    if (args.length >= length) {
      return fn(...args);
    } else {
      return currying(fn.bind(null, ...args), length - args.length);
    }
  };
}
function add(n1, n2, n3, n4) {
  return n1 + n2 + n3 + n4;
}
add = currying(add, 4);
console.log(add(1)(2)(3)(4));
/* 
=>$add.bind(null,1).bind(null,2).bind(null,3)(4)
function anonymous1(...innerArg){$add.call(null,...[1,...innerArg])}
function anonymous2(...innerArg){$anonymous1.call(null,...[2,...innerArg])}
function anonymous3(...innerArg){$anonymous2.call(null,...[3,...innerArg])}
anonymous3(4)
往回推
anonymous2.call(null,3,4)
anonymous1.call(null,2,3,4)
$add.call(null,1,2,3,4)
*/
//最好的解答方式
function currying(fn, length) {
  length = length || fn.length;
  return function (...args) {
    if (args.length >= length) {
      return fn(...args);
    } else {
      return currying(fn.bind(null, ...args), length - args.length);
    }
  };
}
let add = currying((...arg) => eval(arg.join('+')), 5);

//固定个数
function add(...A) {
  return function (...B) {
    return function (...c) {
      return eval([...A, ...B, ...C].join('+'));
    };
  };
}
add(1)(2)(3);
