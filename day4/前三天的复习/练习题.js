// 1
let a = {
  n: 1,
};
let b = a;
a.x = a = {
  n: 2,
};
console.log(a.x);
console.log(b);
// 一个思考
/*
 let a=12
     a=13

     13覆盖了12吗？ 当然不是   只是a指向了13的值 12依然在   
     12 和 13 都依然在栈中的值区域内   js走的不是值拷贝     js走的是关联赋值

*/
// 2
var e = 'abc' + 123 + 456; //abc123456
var c = '456' - 123; //333
var d =
  100 + true + 21.2 + null + undefined + 'tencent' + [] + null + 9 + false;
// 100+1+21.2+0+NaN
//NaNtencentnull9false
console.log(e, c, d);
// js中的加减乘除本应是数学运算(如果遇到的值不是数字类型，也需要基于Number()把他转为数字，再进行运算）但是js中加法有特殊情况，相加过程中遇到字符串直接变为字符串拼接
//!!!!!!!!!!!!!!!!!!!!!!!又马虎又马虎了 122.2+undefined = NaN 别忘了啊 放了我不会放过你的

//3
var str = 'abc123';

var num = parseInt(str);
if (num == NaN) {
  //!!!!!!!!!!!!!!!!!NaN 可 不等于NaN
  alert(NaN);
} else if (num == 123) {
  alert(123);
} else if (typeof num == 'number') {
  alert('number');
} else {
  alert('str');
}

//4 腾讯面试题
// var a = 0;
// var b = a;
// b++;
// alert(b);
// var o = {};
// o.a = 0;
// var b = o;
// b.a = 10;
// alert(o.a);

//5 !!!!!! 能输出"1"的有哪些  注意1是字符串
alert(1); // 可以
console.log(parseInt(1.3)); //不可以
console.log(1); //不可以
console.log(isNaN(1)); //不可以
console.log(parsentInt('1')); //不可以

alert(1); // 执行浏览器内置的alert方法，执行方法的时候弹出一个"1"(方法的功能),此方法没有返回值(默认返回值undefined)
console.log(alert(1)); // undefined

// 6 下面结果是"undefined"的是
/* 
Number()它是按照浏览器从底层机制，把其他数据类型转换为数字
  -字符串：看是否包含非有效数数字符，包含结果就是NaN;''->0
  -布尔：true->1 false->0
  -null: ->0
  -undefined: ->NaN
  -引用类型值都要先转换为字符串再转换为数字
  -{}/正则/函数等 ->NaN
  -[] ->'' ->0
  -['12']->'12' ->12
  -[12,23]->'12,23' ->NaN

parseInt/parseFloat([val]) 遵循按照字符串从左到右查找的机制找有效数字字符(所以传递的值一定是字符串，不是也要转换为字符串然后在查找)
— parseInt(undefined) ->parseInt('undefined') ->NaN
-parseInt('') -> NaN 从左到右查找有效数字字符 但是并没有一个有效的数字字符所以是 NaN 但是number('')却是0

*/
console.log(alert(1)); //不是 结果是undefined
typeof undefined; //是    "undefined"
console.log(parseInt(undefined)); //NaN
isNaN(undefined); // 结果是true

// 7下面结果是true的是
isNaN(null); //false
isNaN(parseInt(null)); //true
Number(null); //0
parseFloat(null); //NaN

//8
console.log(parseInt('')); //NaN
console.log(Number('')); //0
console.log(isNaN('')); //false
console.log(parseInt(null)); //NaN
console.log(Number(null)); //0
console.log(null); //null
console.log(parseInt('12px')); //12
console.log(Number('12px')); //NaN
console.log(isNaN('12px')); //true

// FALSE  undefined NaN null 0 ""
/* x == y
1.如果x非正常值(比如x本身会抛出错误)，则中断执行

    2.如果y非正常值(同上)，则中断执行

    3.如果x的数据类型和y的数据类型相同，则返回以严格运算符执行判断的结果，即x===y的结果

    4.如果x是null，y是undefined，返回true

    5.如果x是undefined，y是null，返回true

    6.如果x的数据类型是Number，y的数据类型是String，则将y转成Number，然后返回x==toNumber(y)的结果

    7.如果x的数据类型是String，y的数据类型是Number，则将x转成Number，然后返回toNumber(x)==y的结果

    8.如果x的数据类型是Boolean，则将x转成Number，然后返回toNumber(x)==y的结果

    9.如果y的数据类型是Boolean，则将y转成Number，然后返回x==toNumber(y)的结果

    10.如果x的数据类型是String、Number或者Symbol，y的数据类型是Object，则将y转成原始类型，然后返回x==toPrimitive(y)的结果

    11.如果x的数据类型是Object，y的数据类型是String、Number或者Symbol，则将x转成原始类型，然后返回toPrimitive(x)==y的结果

    12.返回false


*/
// 9
// == 会把两边转为相同类型 第一个是1==0
if (isNaN(NaN) == '') {
  console.log('珠峰');
} else {
  console.log('培训');
}

// 10
let x = [1, 2, 3];
let y = x;
let z = [4, 5, 6];
y[0] = 10;
y = z;

z[1] = 20;

x[2] = z = 30;

console.log(x, y, z); // [10,2,30] [4,20,6] 30
