// 1
// for (var i = 0; i < 10; i++) {
//   console.log(i);
//   break;
// }
// console.log(i);  0 0
// 2
// for (var i = 0; i < 10; i++) {
//   continue;
//   console.log(i);
// }
// console.log(i);

//3
for (var i = 1; i < 10; i += 2) {
  if (i <= 5) {
    i++;
    continue;
  } else {
    i -= 2;
    break;
  }
  i--;
  console.log(i);
}
console.log(i);

//4   把下面的程序改写成三元运算符，并算出结果
// let a = 12;
// if (a >= 0 && a <= 20) {
//   if (a % 2 === 0) {
//     a += 2;
//   }
// } else {
//   a -= 2;
// }
// console.log(a);

//  a >= 0 && a <= 20 ? (a % 2 === 0 ? (a += 2) : null) : (a -= 2);
// console.log(a);

//5
let a = '10';
a == 10 ? a++ : a--;
console.log(a); //11
let b = '10';
switch (b) {
  case 10:
    b++;
    break;
  default:
    b--;
}
console.log(b); //9

// == vs ===
//=== 绝对相等，必须类型和值都相同才为true(switch判断中，每一种case值的笔记都是基于===来完成的)

/* 
switch(a){
    case a>10&&a<20  //这种是不支持的
}
let a='10'
 a = a+1 =>"10"+1=>"101"
 a+=1 =>'101'
 i++ => i =11 i++和以上两种不完全一样，他是纯粹的数学运算
*/

/*  i++ 和 ++i 都会是数学运算中的累加1，区别是计算的顺序
let i = 1
5+(i++) =>先算5+i =6  然后i再加1 i=2

i=1
5+(++i) =>先i累加1，然后拿累加后的结果去和5运算


题
let i = 3
console.log(5+(++i)+(i++)+3-2+(--i)+(i--)-2) //20

*/
