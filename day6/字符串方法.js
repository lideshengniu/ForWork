// 所有用单引号 双引号 反引号包起来的都是字符串
// let str = 'zhufengpeixunyangfanqihang';
// //每一个字符串都是由零到多个字符组成的
// str.length; //字符串的长度
// str[0]; //获取索引为零字符
// str[str.length - 1]; // 获取最后一个字符
// str[10000]; // undefined 不存在这个索引
// for (let i = 0; i < str.length; i++) {
//   let char = str[i];
//   console.log(char);
// }
//!!! 1.charAt / charCodeAt
/* 
 charAt:根据索引获取指定位置的字符
 charCodeAt:获取指定字符的ASCII码值（Unicode编码值）
 @params
    n[number] 获取字符指定的索引
 @return
    返回查找到的字符(找不到返回的是空字符串不是undefined)或者对应的编码值
*/
// let str = 'zhufengpeixunyangfanqihang';
// console.log(str.charAt(0)); // "z"
// //! 他和直接str[0]的区别在于str[10000]=>undefined  str.chartAt[10000]=>""   遇到超过查询返回的charAt返回空字符 而 str[xx]是返回undefined
// str.charCodeAt(0); // 122 获取十进制的编码值
// String.fromCharCode(122); //"z"

//!!2 substr/substring/slice
/*substr/substring/slice
都是为了实现字符串的截取（在原来字符串中查找到自己想要的）
substr(n,m):从索引n开始截取m个字符，m不写截取到末尾（后面方法也是）
substring(n,m):从索引n开始找到索引为m处（不含m）
slice(n,m):和substring一样，都是找到索引为m处，但是slice可以支持负数作为索引，其余两个方法是不可以的 
*/
// let str = 'zhufengpeixunyangfanqihang';
// str.substr(3, 7); // 'fengpei'
// str.substring(3, 7); // feng
// str.substr(3); //'zhufengpeixunyangfanqihang'
// str.substring(3, 10000); //'zhufengpeixunyangfanqihang' 超过索引的也只截取到末尾
// str.substr(3, 7); // 'fengpei'
// str.slice(3, 7); // 'fengpei'

// str.substr(-7, -3); // '' substring不支持负数索引
// str.slice(-7, -3); // 'nqih'支持负数索引
//找：负数索引，我们可以按照str.length+负索引 的方式找 =》slice(26-7,26-3) =>slice(19,23)

//!!3 indexOf(x,y) lastIndexOf(x)
/* 
indexOf(x,y):获取x第一次出现位置的索引，y是控制查找的起始位置索引
lastIndexOf(x):最后一次出现位置的索引
=>没有这个字符，返回的结果是-1


*/
// let str = 'zhufengpeixunyangfanqihang';
// console.log(str.indexOf('n')); //5
// console.log(str.lastIndexOf('n')); //24
// str.indexOf('@'); //-1
// // 字符的indexOf 和 lastIndexOf 在任何浏览器都兼容 但是数组的IE678 不兼容
// str.indexOf('feng'); // 3 验证整体第一次出现的位置，返回的索引是第一个字符所在位置的索引值
// str.indexOf('peiy'); // -1

// str.indexOf('n', 7); //12 注意是索引7及以后

// str.includes('@'); //false

//!!4 toUpperCast/toLowerCase
/* 
字符串中字母的大小写转换
 toUpperCase():转大写
 toLowerCase():转小写
*/
// let str = 'zhufengpeixunyangfanqihang';
// str = str.toUpperCase(); //"ZHUFENGPEIXUNYANGFANQIHANG"
// console.log(str);
// str = str.toLowerCase(); //'zhufengpeixunyangfanqihang'

// str = str.substr(0, 1).toUpperCase() + str.substr(1); //首字母大写

//!!5 split
/* 
 split:把字符串按照指定的分隔符拆分成数组(和数组中join对应)
 支持正则表达式
*/
// 需求：把|分隔符变为,分隔符
// let str = 'xx|uu';
// let ary = str.split('|'); //["xx","uu"]
// str = ary.toString(); //"xx,uu"
// str = ary.join(','); //"xx,uu"

//!!6 replace
/* 
 replace(新字符,老字符):实现字符串的替换 经常伴随正则而用
 支持正则表达式
*/
let str = '珠峰@培训@杨帆@起航';
str = str.replace('@', '-'); //'珠峰-培训@杨帆@起航' 在不使用正则表达式的情况下执行一次只能替换一次

str = str.replace(/@/g, '-'); //'珠峰-培训-杨帆-起航'

///!! 7 includes
