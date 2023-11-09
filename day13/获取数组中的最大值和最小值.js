/* 获取数组中的最大值和最小值 */
let ary = [12, 24, 13, 8, 35, 15];
//!!!!解决方案一：先排序，第一项和最后一项就是我们需要的
// ary.sort(function (a, b) {
//   return a - b;
// });
// let min = ary[0];
// let max = ary[ary.length - 1];
// !!!解决方案二
//这样不行 因为Math.max/min要我我们传递的数据是一项项传递进来，获取一堆数中的最大最小，而不是获取一个数组中的最大最小
// let min = Math.min(ary); 这样不行
//1 基于es6的展开运算符
// let min = Math.min(...ary);
// console.log(min);
//2.利用apply来实现即可(this无所谓，主要利用apply给函数传参，需要写成一个数组的形式)
let min = Math.min.apply(null, ary);

//!!! 解决方案三：
let max = ary[0];
for (let i = 1; i < ary.length; i++) {
  let item = ary[i];
  item > max ? (max = item) : null;
}
//也可以
ary.slice(1).forEach((item) => {
  item > max ? (max = item) : null;
});
