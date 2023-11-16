/* 
  ==进行比较的时候，如果左右两边数据类型不一样，则先转换为相同的数据类型，然后再进行比较
    1.{}=={} 两个对象进行比较，比较的是堆内存的地址
    2.null == undefined 相等的 / null === undefined 不相等
    3.NaN == NaN 不相等 NaN和谁都不相等
    4.[12]=="12" 对象和字符串比较，是把对象toString()转换为字符串后再进行比较的
    5.剩余所有情况在进行比较的时候，都是转换为数字(前提数据类型不一样)
        对象转数字：先转换为字符串，然后再转换为数字
        字符串转数字：只要出现一个非数字字符，结果就是NaN
        布尔转数字：true->1 false->0
        null转数字0
        undefined转数字NaN
    [12]==true =>Number([12].toString())==1  12 == 1  false
    [] == false  => 0 == 0 true
    [] == 1      => 0 == 1 false
    "1"==1       => 1 == 1 true
    true==2      => 1 == 2 false  
*/
//=>对象和数字比较，先把对象.toString()变为字符串，然后再转换为数字
var a = {
  n: 0,
  toString: function () {
    return ++this.n;
  },
};
a.toString(); //此时调取的不再是Object.prototype.toString了，调取的是自己私有的
var a = /\*/; //a在什么条件下能让下面的成立
if (a == 1 && a == 2 && a == 3) {
  console.log(1);
}
//!!! =>shift：删除数组第一项，把删除的内容返回，原有数组改变
// let a = [1, 2, 3];
// a.toString = a.shfit;
// if (a == 1 && a == 2 && a == 3) {
//   console.log(1);
// }

/* 
ES6 中新增加的一些方法
   String.fromCharCode([n]) <=>'z'.charCodeAt()
   Array.from()
   Array.isArray()
   Object.create([OBJ])
   Object.defineProperty()
*/
// let obj = {};
// Object.defineProperty(obj, 'name', {
//   value: '珠峰培训',
//   writable: false,

//   get: function () {
//     console.log('哈哈');
//     return this.value;
//   },
//   set: function () {
//     console.log('呵呵呵');
//     this.value = '呵呵呵';
//   },
// });
// console.log(obj.name);
let n = 0;
Object.defineProperty(window, 'a', {
  get: function () {
    this.value ? this.value++ : (this.value = 1);
    return this.value;
  },
});
if (a == 1 && a == 2 && a == 3) {
  console.log('ok');
}
