//!!!1 ==================================
// let obj = {};
// arg 可以叫任何名字 没有影响 ...AA ...AAAA 都可以
// let fn = (context = window, ...arg) => {
//console.log(arguments) =>uncaught referencerror:arguments is not defined 箭头函数中没有arguments
// };
// fn(obj, 10, 20, 30); //=>context:obj  arg:[10,20,30]
// fn(); //=>context:window arg:[]

//!!!2 ==================================
// window.name = 'WIN';
// let obj = {
//   name: 'OBJ',
// };
// let fn = (n) => {
//   console.log(this.name);
// };

//FN所处的执行上下文中的this是window
// fn(10); //"WIN"
// fn.call(obj, 10); //=>this:window
// document.body.onclick = fn; //this:window 不是我们预期的body
// obj.fn(10); //还是window
//!!!3 =============================
// let obj = {
//   name: 'OBJ',
//   fn: function () {
//     let f = () => {
//       console.log(this);
//     };
//     f();
//     return f;
//   },
// };
// obj.fn(); //obj
// let f = obj.fn();
// f(); //obj  向上找 上一个是创建它的地方 创建不是执行 创建是字符串那个执行是私有作用域

//!!!!4
let obj = {
  name: 'OBJ',
  fn: function () {
    // 需要1s 把OBJ中的name改为"珠峰" 这里没法实现用箭头函数就可以
    // setTimeout(function () {
    //   this.name = '珠峰';
    // }, 1000);

    setTimeout(() => {
      this.name = '珠峰';
    }, 1000);
  },
};
obj.fn();
let ary = [
  { id: 1, age: 25 },
  { id: 2, age: 32 },
  { id: 3, age: 23 },
];
ary.sort((a, b) => {
  return a.age - b.age;
});
console.log(ary);
