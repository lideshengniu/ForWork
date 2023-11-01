// boolean 布尔数据类型 只有两个值 true/false
// 只有0 NaN '' NULL  undefined  五个值为FALSE 其余都转换为true （没有任何特殊情况）

//  转为boolean  1.Boolean([val]) 2.! 或者 ！！ 3.条件判断
console.log(Boolean(0)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean('')); //false
console.log(Boolean(' ')); //true
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean([])); //true
console.log(Boolean([12])); //true
console.log(Boolean(-1)); //true

//  !取反 (先转为Boolean类型) 然后取反值
console.log(!1); // false
console.log(!!1); //true

// 如果条件只是一个值 不是==/ === / != />= 等这些比较，是要把这个值先转换为布尔类型。然后验证真假
if (1) {
  console.log('哈哈');
}
if ('3px' + 3) {
  //'3px3'
  console.log('s');
}
if ('3px' - 3) {
  // NaN -3 =NaN
}
