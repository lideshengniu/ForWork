// let ary = [1, 2, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3];
/* 
 方案一：
   循环原有的数组，每拿到一项都往新数组中添加，添加之前验证新数组中是否存在这一项，不存在再增加

*/
// let newAry = [];
// for (let i = 0; i < ary.length; i++) {
//   let item = ary[i];
//   if (newAry.includes(item)) {
//     continue;
//   }
//   newAry.push(item);
// }
/*
方案2：
  先分别拿出数组中的每一项A
     用这一项A和”它后面的每项“依次进行比较，如果遇到和当前项A相同的，则在原来数组中把这一项移除掉。 
 
     不用includes/indexOf (这样保证兼容性)
*/
// let ary = [1, 2, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3];
// for (var i = 0; i < ary.length; i++) {
//   var item = ary[i];
//   //   var itemBack = ary.slice(i + 1); //不写第二项就是从第一个值到最后
//   for (var j = i + 1; j < ary.length; j++) {
//     var compare = ary[j];
//     if (compare === item) {
//       //   j = i + 1;
//       ary.splice(j, 1);
//       // 如果不减一   j后面的每一项索引都提前了一位，下一次要比较的应该还是j这个索引的内容
//       j--;
//     }
//   }
// }
// console.log(ary);
/* 数组塌陷问题

*/
// 方法3
// let ary = [1, 2, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3];
// let obj = {};
// for (let i = 0; i < ary.length; i++) {
//   let item = ary[i];
//   // 3 每一次存储之前进行判断，验证obj中是否存在这一项
//   if (obj[item] !== undefined) {
//     ary.splice(i, 1);
//     i--;
//     continue;
//   }
//   obj[item] = item;
// }
// console.log(ary);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 其实用这些性能不好 因为用了splice 如果当前项后面有50万个那我用splice是不是后面每一项都往前移动了一次
//!更好的办法 把当前要删除的项和最后一个进行对换然后把最后一位删除
// 方法4  方法3改后
let ary = [1, 2, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3];
let obj = {};
for (let i = 0; i < ary.length; i++) {
  let item = ary[i];
  // 3 每一次存储之前进行判断，验证obj中是否存在这一项
  if (obj[item] !== undefined) {
    ary[i] = ary[ary.length - 1];
    // 也可以直接用ary.length--  会自动把最后一项删除
    ary.splice(ary.length - 1, 1);
    // ary.splice(i, 1);
    i--;
    continue;
  }
  obj[item] = item;
}
console.log(ary);

//封装成方法
/* 
@params 
ary[Array] 要去重的数组
@return 
 [Array]去重后的数组

*/
function unique(ary) {
  let obj = {};

  for (let i = 0; i < ary.length; i++) {
    let item = ary[i];
    // 3 每一次存储之前进行判断，验证obj中是否存在这一项
    if (obj[item] !== undefined) {
      ary[i] = ary[ary.length - 1];
      // 也可以直接用 ary.splice(ary.length - 1, 1)
      // ary.length--会自动把最后一项删除
      ary.length--;
      // ary.splice(i, 1);
      i--;
      continue;
    }
    obj[item] = item;
  }
  return ary;
}
