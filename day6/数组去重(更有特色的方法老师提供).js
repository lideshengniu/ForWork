let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];
ary.sort((a, b) => a - b);
// 让每一项的数字后都有一个@
let str = ary.join('@') + '@';
let reg = /(\d+@)\1*/g; //匹配数字加@ 如12@  多次比如字符串出现了多次的12@
arr = [];
str.replace(reg, (n, m) => {
  m = Number(m.slice(0, m.length - 1));
  arr.push(m);
});
console.log(arr);
//基于es6的set去重
let ar = [12, 23, 12, 15, 25, 23, 25, 14, 16];
ar = [...new Set(ar)];
