// Math：数学函数，但是他不是一个函数，他是一个对象，对象中存储了很多操作数字的属性方法，因此被称为数学函数
console.log(typeof Math); // "object"
console.dir(Math);
/* Math = {
     PI:3.141592653589793,
     abs:function(){[native code]}
     ceil:function(){[native code]}
   ...
    
} 

*/
// Math常用的属性和方法
//!1.Math.abs([number value])  获取绝对值(绝对值永远是正数或者零)
console.log(Math.abs(-12.5)); //12.5
console.log(Math.abs(12)); //12
console.log(Math.abs(0)); // 0
// 传递不是数字类型的值，先基于Number()转换为数字再处理
console.log(Math.abs('-1')); //1
console.log(Math.abs('-1px')); //NaN

//!!2.Math.ceil/floor([number value]) 把一个数向上取整和向下取整
console.log(Math.ceil(12)); //12
console.log(Math.ceil(12.1)); //13
console.log(Math.ceil(12.5)); //13
console.log(Math.ceil(-12.1)); //-12
console.log(Math.ceil(-12.9)); //-12

console.log(Math.floor(12)); //12
console.log(Math.floor(12.1)); //12
console.log(Math.floor(12.5)); //12
console.log(Math.floor(-12.1)); //-13
console.log(Math.floor(-12.9)); //-13

//!!3Math.round   四舍五入
console.log(Math.round(12)); //12
console.log(Math.round(12.1)); //12
console.log(Math.round(12.5)); //13
console.log(Math.round(-12.1)); //-12
console.log(Math.round(-12.5)); //-12 负数中.5表示舍!!
console.log(Math.round(-12.9)); //-13

//!!4 Math.max / min([val1],[val2],...)
console.log(Math.max(12, 5, 68, 23, 45, 3, 27)); //68
console.log(Math.min(12, 5, 68, 23, 45, 3, 27)); //3

Math.max([12, 5, 68, 23, 45, 3, 27]); //NaN 此处是只穿第一个值，是个数组，和内置的语法要求不符
//思考题，如何基于max/min 获取数组中的最大值和最小值

//!!5 Math.sqrt/pow() sqrt 给一个数开平发   pow 计算一个数的多少次幂
console.log(Math.sqrt(18)); //4.242640687119285
console.log(Math.sqrt(-9)); // 负数不能开平发  NaN
console.log(Math.pow(2, 10)); // 1024
//!6 Math.random() 获取0-1 之间的随机小数
//扩展 获取[n-m]之间的随机整数 假如获取1-10之间的随机整数
//Math.round(Math.random()*(m-n)+n)
// console.log(Math.ceil(Math.random() * 10));
for (let i = 0; i <= 100; i++) {
  console.log(Math.ceil(Math.random() * 10));
}
