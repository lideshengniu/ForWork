/* 
某公司1到12月份的销售额存在一个对象里面
如下:{
    1:222,
    2:123,
    5:888
}
请把数据处理为如下结构：[222,123,null,null,888,null,null,null,null,null,null,null]

*/
//!!! array.from 对象如果对象没有length 返回的是空数组 如果有length返回的是根据属性值的对象数组
/* 
!!! 方法1
console.log(
  Array.from({
    1: 222,
    2: 123,
    5: 888,

  })=>[]
 Array.from({
    1: 222,
    2: 123,
    5: 888,
   length:5
  })=>[undefiend,222,123,undefined,888]
Array.from({
    1: 222,
    2: 123,
    c: 888,
    length: 5,
  })=>[[ undefined, 222, 123, undefined, undefined ]]
如果属性是非数字返回的也是undefined3


);


*/
/*
!!! 方法1
let obj = { 1: 222, 2: 123, 5: 888 };
obj.length = 13;
let arr = Array.from(obj)
  .slice(1)
  .map((item) => {
    return typeof item === 'undefined' ? null : item;
  });
console.log(arr);
*/

let obj = { 1: 2, 2: 123, 5: 888 };
//=>Object.keys(obj):获取obj中所有的属性名，以数组的方式返回["1","2","5"]
let arr = Array.from(12); //[]
arr = new Array(12).fill(null);
Object.keys(obj).forEach((item) => {
  arr[item - 1] = obj[item];
});

//Array.prototype
//push/pop/shift/unshift/splice/slice/concat/join/toString/reverse/sort/indexOf/lastIndexOf/includes/forEach/map/some/find/flat/fill...
