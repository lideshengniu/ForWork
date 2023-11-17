//!! 此组学习的方法，原来数组不会变
//1.Slice
/* 
slice:实现数组的查询
@params
  n,m都是数字，从索引n开始，找到索引为m的地方（不包括m这一项）
@return
  把找到的内容以一个新数组的形式返回

*/
// let ary = [10, 20, 30, 40, 50];
// let res = ary.slice(1, 3);
// console.log(res, ary); //[20,30] [10,20,30,40,50]

//  m不写是找到末尾
// res = ary.slice(1);
// console.log(res); //[20,30,40,50]
// 数组的克隆
// res = ary.slice(0);
// console.log(res); //[10,20,30,40,50]

//1.思考 1.如果n/m为负数会咋地，如果n>m了会咋地，如果是小数会咋地，如果是非有效数字会咋地，如果m或者n的值比最大索引都大会咋地？

res = ary.slice(3, -1);
console.log(res);

//!!2.concat
/* 
concat:数组的拼接
@params
 多个任意类型值
@return
  拼接后的新数组(原来数组不变)
*/
// let ary1 = [10, 20, 30];
// let ary2 = [40, 50, 60];
// let res = ary1.concat('珠峰培训');
//!! let res1 = ary1.concat('珠峰培训', ary2); //[10, 20, 30,"珠峰培训",40, 50, 60] 如果传入的数组也可以的
// console.log(res); // [10, 20, 30,"珠峰培训"]

//!!3. toString

/* 
toString:把数组转换为字符串
@params
@return
 转换后的字符串,每一项用逗号隔开(原来数组不变)
*/
// let ary = [10, 20, 30];
// let res = ary.toString();
// console.log(res); // "10,20,30"
// console.log([].toString()); // ""

//!!4. join
/* 
join:把数组转换为字符串
@params
 指定的分隔符(字符串格式)
@return
 转换后的字符串(原来数组不变)
*/
// let ary = [10, 20, 30];
// let res = ary.join(); //默认是,作为分隔符
// console.log(res); // "10,20,30"
// res = ary.join(''); //"102030"
// res = ary.join('|'); //"10|20|30"

// res = ary.join('+'); //"10+20+30"
// eval(res); // =>60   eval把字符串变为js表达式

// !!! 5 indexOf/lastIndexOf/includes 检测数组中的是否包含某一项
/* 
indexOf/lastIndexOf：检测当前项在数组中第一次或者最后一次出现的位置的索引值
索引值(在ie6-8中不兼容)
@params
  要检索的这一项内容
@return
  这一项出现的位置索引值(数字)，如果数组中没有这一项，返回的结果是 -1
  原来数组不变
*/
let ary = [10, 20, 30, 10, 20, 30];
console.log(ary.indexOf(20)); //1
console.log(ary.lastIndexOf(20)); //4

if (ary.indexOf('珠峰培训') === -1) {
  //不包含
}
//也可以直接用es6新提供的includes方法判断
if (ary.includes('珠峰培训')) {
  //包含：如果存在返回的是true
}
