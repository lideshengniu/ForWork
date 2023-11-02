// // 时间字符串的处理
// let time = '2019-7-24 12:6:23';
// //=>变成自己需要的格式 如："2019年07月24日 12时06分23秒"
// //"2019年07月24日"
// //"07/24 12:06"
// // 方案一：一路replace
// time =
//   time
//     .replace('-', '年')
//     .replace('-', '月')
//     .replace(' ', '日')
//     .replace(':', '时')
//     .replace(':', '分') + '秒';
// 方案二：获取到年月日小时分钟秒这几个值后，最后想拼成什么效果就拼什么效果
// 获取值的方法：基于indexOf获取指定符号索引，基于substring一点点截取
// let time = '2019-7-24 12:6:23';
// let n = time.indexOf('-');
// let m = time.lastIndexOf('-');
// let x = time.indexOf(' ');
// let y = time.indexOf(':');
// let z = time.lastIndexOf(':');
// let year = time.substring(0, n);
// let month = time.substring(n + 1, m);
// let day = time.substring(m + 1, x);
let addZero = (val) => {
  return val.length < 2 ? '0' + val : val;
};
let time = '2019-7-24 12:6:23';
let ary = time.split(/(?: |-|:)/g); // =>["2019","7","24","12","6","23"]
time = ary[0] + '年' + addZero(ary[1]) + '月' + addZero(ary[2]) + '日';
console.log(ary);

let a = 'hello world'.replace(/(?:hello) (world)/, 12);
console.log(a);
