// number
console.log(Number(0.2));
console.log(1);
console.log(isNaN(10));
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(' ')); // 0
console.log(Number('')); // 0
console.log(Number({ a: 1 })); // NaN
console.log(Number([])); // 0

console.log({}.toString(), '====');
console.log([].toString());
console.log([12].toString());
console.log(Number([12].toString()));
console.log(Number([12, 223].toString()));
/* parseInt 和 parseFloat  遇到非有效的就不找了
   parseInt/parseFloat([val],[进制]) 也是转换为数字的方法，对于字符串来说，它是从左到右依次查找有效数字字符，直到遇到非有效数字字符，停止查找（不管后面是不是数字字符“
*/
let str = '12.5px';
console.log(parseInt(str)); // 12
console.log(parseFloat(str)); //12.5
console.log(parseFloat('width:12.5px')); // NaN
/*  == 进行比较时候 可能也会出现把其他类转为数字 */
// Number 和 parseInt
// Number([val]) 走的是v8引擎最底层的方法
// parseInt(true) NaN   parseInt 拿到true 先把他转为'true' 然后从左向右开始判断      ||    Number(true) 1
// parseInt/parseFloat 走的 是把东西先转为字符串 然后再去判断 ？这里有个疑问变成字符串是用的toString吗
parseInt([]); //NaN 说明不是用的toString吧 后面讨论！！

// 字符
/* 所有单 */
// -把其他值转为字符串 / [val].toString();
// -字符串拼接;
