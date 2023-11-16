/* 给定两个数组，写一个方法来计算他们的交集 思考题：交差并补 */
let num1 = [1, 2, 2, 1];
let nums2 = [2, 2];
let arr = [];
// for (let i = 0; i < num1.length; i++) {
//   let item1 = nums1[i];
//   for (let k = 0; k < nums2.length; k++) {
//     let item2 = nums2[k];
//     if (item1 === item2) {
//       arr.push(item1);
//       break;
//     }
//   }
// }
//=>输出结果[2,2]
// nums1.forEach((item) => (nums2.includes(item) ? arr.push(item) : null));
nums1.forEach((item, index) => {
  //=>index是第一个数组当前项的索引
  //=>n当前项在第二个数组中找到相同那一项的索引
  let n = nums2.indexOf(item);
  if (n >= 0) {
    arr.push(item);
    nums1.splice(index, 1);
    nums2.splice(n, 1);
  }
});
