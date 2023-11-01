// 函数
/* 
 函数就是一个方法或者一个功能体 函数就是把实现某个功能的代码放到一起进行封装，需要这个实现这个功能，执行这个函数就ok ;减少页面中的冗余代码，提高代码重复使用率(低耦合高内聚)
- 创建函数
    形参
    返回值
- 执行函数
    实参
- arguments
- 函数底层运行机制
- ...
*/

// 创建函数
/* 
=》ES5 老方式
 function[函数名]([形参变量1],...){
    =》函数体：基于js完成需要实现的功能
    return [处理后的结果]
 }

 [函数名]([实参1],...)
 


*/
// ...形参的细节
// 创建函数的时候设置了形参，如果执行的时候并没有给传递对应的实参值，那么形参变量默认的值是 undefined
function sum(n, m) {
  // 形参默认值处理，如果没有传递形参值，给予一个默认值 因为undefined 会转换为NaN 最好值都是NaN 很不舒服
  // 注意这里不能用 ==  因为 null == undefined 也是true 所以n可能不是undefined
  if (n === undefined) {
    n = 0;
  }
  // 或者
  if (typeof m === 'undefined') {
    m = 0;
  }
  let result = n + m;
  result *= 10;
  result /= 2;
  console.log(result);
}
sum(); //NaN
sum(10); //NaN
sum(10, 20);
sum(10, 20, 30);

// !!!!! null == undefined 返回 true，是因为这是 JavaScript 语言规定的特例，而不是因为进行了类型转换。当使用双等号 (==) 进行比较时，如果其中一方是 null 而另一方是 undefined，则它们被认为是相等的。
