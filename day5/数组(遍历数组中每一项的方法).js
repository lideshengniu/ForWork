//!! 1.forEach
/* 
forEach:遍历数组中的每一项内容
@params
 回调函数
@return
 原来数组不变


*/
let ary = [12, 15, 9, 28, 10, 22];
ary.forEach((item, index) => {
  console.log('索引' + index + '内容' + item);
});
// Array.prototype 在控制台查看数组中所有提供的方法，可以基于mdn网站去查询方法的用法
