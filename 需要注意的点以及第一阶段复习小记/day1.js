//!!!数字 字母 下划线 $ 并且数字不能作为开头 命名规则

//!!!常用浏览器及其内核
/* 
chrome 手机浏览器 opera>=v14 webkit

firefox gecko

opera<14 presto

edge ie  triednet

*/
//!!!基本数据类型
/* 
Number
String
BigInt
Undefined
Null
Symbol
Boolean
*/
//!!!引用类型
/* 
object
    {}
    []
    /\\/
    日期
    Math对象



function

*/

//!!! number注意点
Number(''); //0
Number(' '); //0

/* 
如果是非对象值 都是直接一口得出他的值:
null-0,
undefined-NaN,
true-1,
false-0


引用值的话  
需要先用tostring 去转换然后在用Number()去
[].toString() => "" =>0



parseInt 函数用于将字符串转换为指定基数的整数。该函数的第一个参数是要转换的字符串，第二个参数是基数（进制数），也就是数值系统的基础。
所以，当你执行 parseInt(12, 8) 时，意味着你要把字符串 "12" 当作一个八进制数来解析，然后将其转换成十进制数。
parseInt() 和 parseFloat()
*/
console.log(Number(false)); //0
console.log(parseInt(12, 8));

//!!!字符串注意
/* 
12.toString() 会报错
let a = 12
12.toString()就可以   因为js当解释器看到 12. 时，它认为这是一个数字字面量的开始，并期待一个小数部分。当遇到 toString 时，它不再满足数字字面量的格式，因此会抛出一个语法错误
undefined 和 null 用toString打印出来就是他们本身套上字符串但是现在打印会报错
*/
//!!! 数字在做加法的时候如果遇到字符串一定会转换成字符串 比如 1+[] []会先转换成字符串 这时候就做加法了 变成了"1"

//!!! Boolean 为false的五种 null undefined NaN "" 0

//!!! object的属性是数字的时候只能用xxx[1] 获取并且 如果.想换成[]比如xx.a =>xx["a"]   删除对象的属性名用delete perosn.xx

//!!! 数组
/* 
如果你想给数组末尾追加一个你可以这样
arr[arr.length] = 100 //这和加属性一个道理

*/

//! 讲错的一道题
/* 
let a = {
  n: 1,
};
let b = a;
a.x = a = {
  n: 2,
};
这个是gpt的解释let a = { n: 1 }; 创建了一个新的对象，我们称之为对象1，并且 a 是对它的引用。
let b = a; 现在 b 也引用了对象1。
a.x = a = { n: 2 }; 这个赋值操作是从右到左进行的。但是，赋值运算符右边的 a = { n: 2 } 部分首先执行，创建了一个新的对象，我们称之为对象2，并把它赋值给 a。现在 a 引用了对象2。
重要的是，尽管 a 已经更新了，但是 a.x 的赋值操作是在原来 a 的值（即对象1）上进行的，因为点运算符.的优先级高于赋值运算符=。因此，对象1的 x 属性被设置为对象2的引用。
console.log(a.x); 打印出 a.x 的值。由于 a 现在是对对象2的引用，而对象2没有 x 属性，所以输出 undefined。
console.log(b); 打印出 b 的值。因为 b 依然引用对象1，对象1现在看起来是这样的 { n: 1, x: { n: 2 } }，因为我们给对象1的 x 属性赋值了对象2的引用。


*/
//!! typeof 无法坚持object的具体类型 一般用来处理基础数据类型 并且typeof null => "object"  它的返回值是string
//!! typeof typeof typeof [] 两个及以上一定是string

//!! switch
switch (1) {
  case 1:
    console.log(a);
    break;
}

//!switch 中的值一定是 === 是1 就是1 而不是"1"

//!元素的方法
/* 
id
className
innerHTML
inerText
style
tagName

*/

//!!script 经常放到body最后面，是为了保证页面结构加载完成才去做这些事情
//!! 或者也可也用window.onload=function(){} 把代码写到里面

//!! parseInt("") =>NaN    number("")=>0

//!!数组方法 不会改变 slice concat toString join indexOf/lastIndexOf includes
/* 
slice 是头拿尾不拿！记住了

toString 默认是逗号做分隔符

indexOf 找不到是返回 -1

includes 返回的是false
*/

//!!!数组改变 sort reverse push pop shift unshfit splice
/* 
splice 和 slice 都支持一个值代表到最后
splice返回的是被删除的
slice返回的也是被删除的


pop 返回删除的那一个
shfit 返回删除的哪一个

push和unshfit 返回改变后的长度 注意他们不只是能追加一个可以加很多
*/

//!!Math 方法
/* 
Math.abs("-1px")  =>NaN
Math.ceil(1.1) = >2
Math.floor(1.9) = >1
Math.round(1.5) =>2
Math.round(1.4)=>1
Math.max(1,2,3,4,5)
Math.min(1,2,3,4,5)
Math.sqrt(4) =>2
Math.sqrt(-1) =>NaN

!!!
Math.random() 0-1 之间的数
如果你要获取 n-m之间的随机整数
Math.round(Math.random()*(m-n)+n)
Math.round(Math.random()*(m-n)+n)
*/
