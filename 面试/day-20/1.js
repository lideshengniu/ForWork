/* 编写一个程序，将数组扁平化，并去除其中重复部分数据，最终得到一个升序且不重复的数组 */
let arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
// arr = arr.toString();
// arr = arr.split(',');
// console.log(arr);
/* 
! 1.flat  [params] 展开的深度
 arr.flat(Infinity)  [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
! 2. new Set(arr) 去重
   (1) [...new Set(arr)]
  (2)arr = Array.from(new Set(arr)).sort((a,b)=>a-b)
! 3.展开加去重 去扁平
    arr = Array.from(new Set(arr.flat(Infinity))).sort((a,b)=>a-b)
*/
//!!!!!!!!!!   1 去扁平
//=>把数组直接变为字符串即可(数字toString之后，不管你有多少级，最后都会变为逗号分隔的字符串,没有中括号和所谓的层级了)相当于直接的扁平化了
arr = arr
  .toString()
  .split(',')
  .map((item) => {
    return Number(item);
  });
//arr.join('|').split(/(?:,|\|)/g)

//JSON.stringify(arr).replace(/(\[|\])/g,'')
//JSON.stringify(arr) 会变成"[[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];"

//!!!!!
//=>基于数组的some方法进行判断检测 验证数组中的某一项有没有符号函数中提供的规则的 没有找到就返回false
var A = [2, 3, 4, 5];
var B = A.some((item) => {
  return item > 6;
}); // B = FALSE     如果函数里有一个return true 循环终止 B=true

//基于数组的find方法进行判断检测：验证数组中的某一项有没有符合函数中提供的规则 如果有就返回符合的那一项 并且循环中止.没找到就返回undefined
//Array.isArray([val]):检测某个值是否为数组类型 很准确   你用instanceof Array 如果你把你的类数组的prototype改成数组的 就能骗过他 es6的方法
var A = [2, 3, 4, 5];
var B = A.find((item) => {
  return item < 6;
}); //B = 2

arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
let flag = arr.some((item) => {
  return Array.isArray(item);
});
//!! 去扁平
while (arr.some((item) => Array.isArray(item))) {
  arr = [].concat(...arr);
}

//!!去扁平递归
~(function () {
  function myFlat() {
    let result = [],
      _this = this;
    //=>循环arr中的每一项，把不是数组的存储到新数组中
    let fn = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (Array.isArray(item)) {
          fn(item);
          continue;
        }
        result.push(item);
      }
    };
    fn(_this);
    return result;
  }

  Array.prototype.myFlat = myFlat;
})();
// arr = arr.myFlat();

// function go(arr) {
//   let arrs = [];
//   arr.forEach((item) => {
//     if (Array.isArray(item)) {
//       goes(arrs, item);
//     } else {
//       arrs.push(item);
//     }
//   });
//   return arrs;
//   s;
// }
// function goes(arr, item) {
//   if (Array.isArray(item)) {
//     item.forEach((item) => {
//       goes(arr, item);
//     });
//   } else {
//     arr.push(item);
//   }
// }
// console.log(
//   go([[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10])
// );
