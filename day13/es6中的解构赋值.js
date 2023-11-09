//!!!!!!!!!!! 数组的解构赋值
// let ary = [10, 20, 30, 40, 50];
/* 数组的解构赋值 */

/* 
 ...x 拓展运算符：把剩下的内容存储到x中(x是个数组)，但是它只能出现在最后
*/
// let [n, m, ...x] = ary;
// console.log(n, m, x); // =>10 20 [30,40,50]
// let [n, , m, , , x = 0] = ary; //n=10  m = 30 x=0

// let ary = [10, [20, 30, [40, 50]]];
// let [n, [, , [, m]]] = ary; // n=10 m=50
//!!!!!!!!!!!!!!! 对象的解构赋值
// 创建的变量要和对象的属性名一致(默认)
let obj = {
  name: '王惠风',
  age: 79,
  sex: 'boy',
  friends: ['tang', 'guo', 'wang', 'guo'],
};
// =>多维对象获取
let {
  name,
  friends: [firstFriend],
} = obj;
console.log(name, firstFriend); //王惠风 tang
// let { name, sex, nianling } = obj;
console.log(name, sex, nianling); // "王惠风" "boy" undefined
// = > 冒号相当于给获取的结果设置了一个别名(变量名):创建了一个叫做nianling的变量存储于了obj.age 的值
// let { age: nianling } = obj;
// console.log(nianling); //79

// =>给获取的结果设置默认值(没有这个属性走的是默认值)
let { height = '180cm' } = obj;
