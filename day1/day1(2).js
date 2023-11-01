// 字符串------------

/* 12.toString()  会报错 
 但是 let a =12 a.toString() 就可以

*/
console.log(NaN.toString()); //    'NaN'
// console.log(null.toString); // null有这个方法 但是被禁止使用了
// console.log(undefined.toString); // undefined有这个方法 但是被禁止使用了
// 虽然 null 和 undefined 被禁止使用tostring
// 但是他们的值 依然是"undefined" 和 "null"
console.log(true); // "true"
console.log([].toString); //""
console.log([12].toString); //"12"
console.log([12, 23].toString); //"12,23"
console.log(/^$/.toString()); // "/^$/"
// 普通对象.toString() 的结果是 "[object Object]"
console.log({ name: 'name' }.toString()); //"[object object]"  ?为什么普通对象的tostring 不是返回它本身 我想是重写了tostring 方法
// 跟我想的一样 object.prototype.toString 方法不是转换为字符串 而是用来检测数据类型的
//  ===========字符串拼接
// 四则运算法则中，除加法之外，其余都是数学计算，只有加法可能存在字符串拼接
// 加法时一旦遇到字符串，则不是数学运算，而是字符串拼接
console.log('10' + 10); //1010
console.log('10' - 10); // 0
console.log('10px' - 10); //NaN  '10px'被Number('10px')等于NaN   NaN-10也是NaN
let a = 10 + null + true + [] + undefined + '珠峰' + null + [] + 10 + false;
console.log(a);
// 11undefined珠峰null10false
/* 
 10+null -> 10 + 0 > 10
 10+true ->10 + 1 >11
 11+[]-> 11+""   >"11" 遇到对象先转为字符串 因为 把引用数据类型转为数字，是先把他基于toString方法转换为字符串，然后在转换为数字
对了10+undefined = NaN  undefined不是对象 所以用toNumber 就是NaN  10+NaN=NaN

 */
