/* 
for 循环
for in 循环
for of 循环
while 循环
do while 循环

*/
/* 
for 
1.创建循环初始值
2.设置（验证）循环执行的条件
3.条件成立执行循环体中的内容
4.当前循环结束执行步长累计操作

*/
for (var i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}
console.log(i); //5
// *** 题
for (var i = 10; i > 4; i -= 2) {
  if (i < 7) {
    i++;
  } else {
    i--;
  }
}
console.log(i); //4

// 循环体中的两个关键词
// continue :结束当前这轮循环(continue后面的代码不再执行),继续执行下一轮循环
//break :强制结束整个循环(break后面的代码也不再执行) 而且整个循环啥也不干直接结束

// *** 例题
for (var i = 0; i < 10; i++) {
  if (i >= 2) {
    i += 2;
    continue;
  }
  if (i >= 6) {
    i--;
    break;
  }
  i++;
  console.log(i);
}
console.log(i); //11  注意审题 除了第一次其余都在if 2 里循环值都大于2啊 所以根本走不到下面别粗心啊！！！！！！！！！！！！！！！！！！！！！！！！

// *** 例题 判断用户输入的数字，是正数还是负数
