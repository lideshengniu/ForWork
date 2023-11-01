//JS中的操作语句 ： 判断、循环
// 判断

/* >条件成立做什么？不成立做什么
   - if/else if/else
   -switch case
   -三元运算符

*/
//1 if/else
/* if(条件){
    条件成立执行  条件可以多样性:等于、大于、小于的比较/一个值或者取反等 =》最后都是要计算出是TRUE还是FALSE
}else if(条件2){
    条件2成立执行
}
...
else{
    以上条件都不成立
}

*/

//2 三元运算符:简单IF/ELSE的特殊处理方式
//条件？条件成立处理的事情：不成立处理的事情
//1、如果处理的事情比较多。我们用括号包起来，每一件事情用逗号分隔
//2.如果不需要处理事情，可以使用null/undefined 占位
let a = 10;
/* if (a > 0 && a < 20) {
  a++;
  console.log(a);
} */
a > 0 && a < 20 ? (a++, console.log(a)) : undefined;
// *****题目
/* 
if(a>0){
    if(a<10){
        a++
    }else{
        a--
    }
}else{
    if(a>-10){
        a +=2;
    }
}
a>0?(a<10?a++:a--):(a>-10?a+=2:null)

*/
//3 ====switch case
//1.每一种case情况结束后最好都加上break
//2.default等价于else,以上都不成立干的事情
//3.每一种case情况的比较用的都是==="绝对相等"
let b = 10;
switch (b) {
  case 1:
    console.log('呵呵');
    break;
  case 5:
    console.log('haha');
    break;
  case 10:
    console.log('嘿嘿');
    break;
  default:
    console.log('嘻嘻');
}
// 如果不加break
let c = 1;
switch (c) {
  case 1:
    a++;
  case 5:
    a += 2;
    break;
  default:
    a--;
}
console.log(a); //4  如果不加break会顺序执行下去 直到遇到break （不加break可以实现变量在某些值的情况下做相同的事情) 或者遇到default

// 如果你要达到一个效果就是1 或者 5 都是a+2
switch (a) {
  case 1:
  case 5:
    a += 2;
    break;
  default:
    a--;
}

// if 和 switch的区别
let d = '5';
d == 5; // 相等 但如果是case 5则不成立
switch (d) {
  case 1:
    console.log('呵呵');
    break;
  case 5:
    console.log('haha');
    break;
  default:
    console.log('嘻嘻');
} //输出 嘻嘻而不是哈哈

// == VS ===
/* 
==:相等(如果左右两边数据值类型不同，是默认先转换为相同的类型，然后比较) '5' == 5 =>TRUE

===:绝对相等(如果类型不一样，肯定不想等，不会默认转换数据类型)
'5' === 5 =>FALSE 项目推荐===而不是==
*/
