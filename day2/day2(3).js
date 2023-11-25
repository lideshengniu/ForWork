// 类型识别
/*  1 //number
NaN //number
'1' //字符串
true //boolean
[] //对象
/\d+/   //这是正则 表示正则对象也是对象
*/
function fn() {} //function类型

// JS中的数据类型监测一共五种

// 1. typeof  对了 一个小采取typeof是运算符不是方法 1+1 加号就是运算符  而 sum(1,1) sum是方法 所以 typeof [val] 就是值 不用加小括号()
/* 
基于typeof 检测出来的结果
  1.首先是一个字符串
  2.字符串中包含对应的类型
 局限性
  1.typeof null =>"object" 但是null并不是对象
  2.基于typeof无法细分出当前值是普通对象还是数组对象等，因为只要是对象数据类型，返回的结果都是“object”
  3. typeof ()=>{} //"function"
*/
console.log(typeof 1);
let a = NaN;
console.log(typeof a); //!!!!!!!!!!!!!!!!! 注意字符串在控制台是黑色 数字是蓝色 或者其他色
console.log(1);
typeof '12'; //"string"
typeof true; //"boolean"
typeof null; // "object"  !!!这里注意null确实是基本数据类型 但是typeof 认为null 是指空对象 是空指针也算做object
// *
console.log(typeof typeof typeof []); // 从右到左
//=>typeof [] => "object"
//=>typeof "object" => "string"
// 因为typeof检测的结果都是字符串 如果出现了两次及以上的typeof 后面一定是返回"string" 注意是"string" 而不是 string

// 2.instanceof:用来检测当前实例是否是属于某个类

//3.constuctor:基于构造函数检测数据类型(也是基于类的方式)

//4.Object.prototype.toString.call() 检测数据类型最好的办法
