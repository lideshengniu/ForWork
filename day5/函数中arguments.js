/* 函数中 任意数求和(执行函数的时候，不知道n到底有多少个有哪些)
   1.传递实参的个数不定
   2.传递的值是否为有效数字不定
   =》把传递的有效数字进行相加求和
  arguments: 函数内置的实参集合
    1.类数组集合，集合中存储着所有函数执行时，传递的实参信息
    2.不论是否设置形参，arguments都存在
    3.不论是否传递实参，arguments也都存在
arguments.callee:存储的是当前函数本身(一般不用的，js严格模式下禁止使用这些属性)

*/

function sum() {
  let total = null;
  for (let i = 0; i < arguments.length; i++) {
    let item = Number(arguments[i]);
    if (isNaN(item)) {
      continue;
    }
    total += item;
  }
  return total;
}
let total = sum(10, 20, 30, 40);
console.log(total);

total = sum(10, 20);
console.log(total);

total = sum(10, 20, '30');
console.log(total);

total = sum(10, 'AA');
console.log(total);
