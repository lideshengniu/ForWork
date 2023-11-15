// let time = '2019-7-24 12:6:23';
// // time = time.split(' ');
// // let time1 = time[0].split('-'),
// //   time2 = time[1].split(':');
// // console.log(time1[0] + '年'time1[1] + '月' + time1[2] + '日');
// let i = 0;
// let ary = ['年', '月', '日', '时', '分', '秒'];
// time = time.replace(/([- :]+)/g, (...args) => {
//   let [, $1] = args;
//   return ary[i++];
// });
// console.log(time);
// let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];
// ary.sort();
// arr = [];
// ary = ary.join('@') + '@';
// console.log(ary);
// ary.replace(/(\d+@)\1*/g, (n, m) => {
//   arr.push(m.substring(0, m.length - 1));
//   //   return ;
// });
// console.log(arr);
// (function () {
//   a = 13;
//   console.log(a);
//   console.log(Window);
// })();
// console.log(1);

// console.log(a); //uncaught ReferenceError: Cannot access 'a' before initialization
// let a = 12;
// var n = 1;
// function fn() {
//   var n = 2;
//   function f() {
//     n--;
//     console.log(n);
//   }
//   f(); //1
//   return f;
// }
// var x = fn();
// x(); //0
// console.log(n); //1
// Object.prototype.hasPubProperty = function (property) {
//   let somes = ['string', 'number', 'boolean'];
//   let y = typeof property;
//   if (!somes.includes(y)) {
//     return false;
//   }
//   let n = property in this,
//     b = this.hasOwnProperty(property);
//   return n && !b;
// };

// (function () {
//   function myUnique() {
//     let obj = {};
//     let arr = [];
//     for (let i = 0; i < this.length; i++) {
//       this[i] in obj
//         ? ((this[i] = this[this.length - 1]),
//           this.length--,
//           this.splice(i, 1),
//           i--)
//         : (obj[this[i]] = this[i]);
//     }
//     return this;
//   }
//   Array.prototype.myUnique = myUnique;
// })();
// console.log([1, 3, 3, 4, 5, 2, 3, 4, 2].myUnique().sort().push(22));
//slice
// ~(function () {
//   function splice(a, b) {
//     let j = a + b;
//     let length = this.length;
//     for (let i = a; i < b + a || j < length; i++) {
//       //   if (i < b + a) {
//       this[i] = this[j++];
//       //   }
//     }
//     for (let i = 0; i < b; i++) {
//       this.length--;
//     }
//     return this;
//   }
//   Array.prototype.splice = splice;
// })();
// let a = [1, 2, 3, 4, 5];
// // a[0] =;
// console.log(a.splice(2, 3));
// let reg = /^[-+]?((\.\d+)|((\d|([1-9]\d+))(\.\d*)?))$/;
// let reg = /^\w{6,16}$/;
// console.log(reg.test('0255'));
// let reg =
//   /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+([.-][A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
// console.log(reg.test('asd.com@qq-as.com'));
// /^\w+((-\w+)|(\.\w+))*@[a-zA-Z-0-9]+([.-][A-Za-z0-9]+)*\.[a-zA-Z0-9]+$/;
// let str = 'zhufeng2019yangfan2020qihang2021';
// let reg = /\d+/;
// console.log(reg.exec(str));
// let str = 'book';
// let reg = /([a-zA-z])\1/g;
// let res = [];
// console.log(str.match(reg));
// (function () {
//   //优化 容错
//   function check(n) {
//     // n = Number(n);
//     // return isNaN ? 0 : n;
//     return isNaN(n) ? 0 : Number(n);
//   }
//   function add(val) {
//     val = check(val);
//     // 绝对不能改变this  this +=n this -=n 这种要改变this值的不允许
//     return this + val;
//   }
//   function minus(val) {
//     val = check(val);
//     return this - val;
//   }
//   ['add', 'minus'].forEach((item) => {
//     Number.prototype[item] = eval(item);
//   });
//   //   Number.prototype.add = add;
//   //   Number.prototype.minus = minus;
// })();
// console.log((12).add('1212'));
let arr = [10, 20, 30, 'AA', 40],
  obj = {};
~(function () {
  function each(fnc, obj = window) {
    for (let i = 0; i < this.length; i++) {
      // if()
      let result = fnc.call(obj, this[i], i);

      if (result === false) {
        break;
      } else {
        this[i] = result;
      }
    }
    return this;
  }

  Array.prototype.each = each;
})();
let a = arr.each(function (item, index) {
  if (isNaN(item)) {
    return false;
  }
  return item * 10;
}, obj);
console.log(a);
