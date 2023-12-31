//!!! 1.reverse
/* 
reverse:把数组倒过来排列
@params
@return 
排列后的新数组
原来数组改变 (地址不变内容改变)
*/
// let ary = [12, 15, 9, 28, 10, 22];
// ary.reverse();
// console.log(ary); // = >[22,10,28,9,15,12]

//!!! 2.sort
/* 
sort:实现数组的排序
@params
 可以没有，也可以是个函数
@return 
排列后的新数组
原来数组改变 (地址不变内容改变)
*/
let ary = [7, 8, 5, 2, 4, 6, 9];
ary.sort(); //[2,4,5,6,7,8,9]
// 有问题
ary = [12, 15, 9, 28, 10, 22];
// sort方法如果不传递参数，是无法处理10以上数字排序的(默认是按照每一项第一个字符来排，不是我们想要的效果)
ary.sort(); // 10 12 15 22 28 9
ary.sort((a, b) => {
  //a-b是由小到大   b-a是由大到小
  console.log(a, b, '===');
  return a - b;
});
console.log(ary);
