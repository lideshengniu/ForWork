//!!! 1
/* 如何把一个字符串的大小写取反(大写变小写，小写变大写)，例如'ABC'变成 'aBc' */
let str = 'zhufengPEIxun的周老师很帅!誉*100！HAHA';
str = str.replace(/[a-zA-Z]/g, (content) => {
  //=>content 每一次正则匹配的结果
  //验证是否为大写字母，把字母转换为大写后看和之前是否一样，如果一样之前也是大写的，在ascii表中找到大写字母的取值范围进行判断（65-90）
  return content.toUpperCase() === content
    ? content.toLowerCase()
    : content.toUpperCase();
});

//!!! 2
/* 
实现一个字符串匹配算法，从字符串s中，查找是否存在字符串T，若存在返回所在的位置，不存在返回-1 (如果不能基于indexOf/includes 等内置的方法，你会如何处理呢？)
*/
~(function () {
  function myIndexOf(T) {
    let lenT = T.length,
      lenS = this.length,
      res = -1;
    if (lenT > lenS) return -1;
    for (let i = 0; i <= lenS - lenT; i++) {
      if (this.substr(i, lenT) === T) {
        res = i;
        break;
      }
    }
    return res;
  }
  /* 
   正则处理
  */
  function myIndexOf(T) {
    let reg = new RegExp(T),
      res = reg.exec(this);
    return res === null ? -1 : res.index;
  }
  String.prototype.myIndexOf = myIndexOf;
})();
let S = 'zhufengpeixun',
  T = 'pei';

//!!3
/* 输出下面代码运行结果 */
/* 
var obj = {100:"珠峰培训"}
obj[100] =>"珠峰培训"
obj["100"]=>"珠峰培训"
====
var obj = {100:'珠峰培训0',"100":"哈哈哈"}=>obj {100:"哈哈哈"}
*/
//! example1
var a = {},
  b = '123',
  c = 123;
a[b] = 'b';
a[c] = 'c';
console.log(a[b]); //'c' 所以字符串"123" 123 为属性意思都一样会覆盖
//!example2
var a = {},
  b = Symbol('123'),
  c = Symbol('123');
a[b] = 'b';
a[c] = 'c';
console.log(a[b]); //'b'
//Symbol是es6中新增的数据类型 typeof Symbol('123') === "symbol"它创建出来的值是唯一值 Symbol("123") === Symbol('123') False
//!example 3
var a = {},
  b = { key: '123' },
  c = { key: '456' };
a[b] = 'b';
a[c] = 'c';
console.log(a[b]); //'c'    因为b c的toString结果都一样类型检测出来的[object Object]
//1.对象的属性名不能是一个对象（遇到对象属性名，会默认转换为字符串）
//obj ={}  arr=[12,23] obj[arr]='珠峰' obj=>{"12,23":"珠峰"}

//2.普通对象.tostring() 调取的是Object.prototype上的方法(这个方法是用来检测数据类型的)
//obj ={}   obj.toString()=>"[object Object]" object普通对象重写了toString方法
//obj[b] = 'b'   =>obj["[object Object]"]='b'

//!4
/* 在输入框中如何判断输入的是一个正确的网址，例如，用户输入一个字符串，验证是否符号url网址的格式 */
let str = 'http://www.zhufengpeixun.cn/?lx=1&from=wx#video';
let reg =
  /^((http|https|ftp):\/\/)?(([\w-]+\.)+[a-z0-9]+)((\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i;
//=>url协议
//1.协议：// http/https/ftp
//2.域名
//www.zhufengpeixun.cn
//fengpeixun.cn
//kbs.sports.qq.com
//kbs.sports.qq.com.cn
//3.请求路径
// /index.html
// /
// /stu/index.html
// /stu/
// 4.问号传参
// ?XXX=XXX&XXX=XXX
// 5.哈希值
// #xxx
