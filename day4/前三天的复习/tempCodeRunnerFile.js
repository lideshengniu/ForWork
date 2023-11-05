// 1
// let a = {
//   n: 1,
// };
// let b = a;
// a.x = a = {
//   n: 2,
// };
// // 这里说法a.x的
// console.log(a.x);
// console.log(b);
// // 一个思考
// /*
//  let a=12
//      a=13

//      13覆盖了12吗？ 当然不是   只是a指向了13的值 12依然在   
//      12 和 13 都依然在栈中的值区域内   js走的不是值拷贝     js走的是关联赋值

// */
// // 2
// var e = 'abc' + 123 + 456; //abc123456
// var c = '456' - 123; //333
// var d =
//   100 + true + 21.2 + null + undefined + 'tencent' + [] + null + 9 + false;
// // 100+1+21.2+0+NaN
// //NaNtencentnull9false
// console.log(e, c, d);
// // js中的加减乘除本应是数学运算(如果遇到的值不是数字类型，也需要基于Number()把他转为数字，再进行运算）但是js中加法有特殊情况，相加过程中遇到字符串直接变为字符串拼接
// //!!!!!!!!!!!!!!!!!!!!!!!又马虎又马虎了 122.2+undefined = NaN 别忘了啊 放了我不会放过你的

// //3
// var str = 'abc123';

// var num = parseInt(str);
// if (num == NaN) {
//   //!!!!!!!!!!!!!!!!!NaN 可 不等于NaN
//   alert(NaN);
// } else if (num == 123) {
//   alert(123);
// } else if (typeof num == 'number') {
//   alert('number');
// } else {
//   alert('str');
// }
