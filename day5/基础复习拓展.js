!!'Number(undefined)'; //true
isNaN(parseInt(new Date())) + Number([1]) + typeof undefined; //2undefined
Boolean(Number('')) +
  !isNaN(Number(null)) +
  Boolean('parseInt([])') +
  typeof !null; //    2boolean
parseFloat('1.6px') + parseInt('1.2px') + typeof parseInt(null); //2.6number
isNaN(Number(!!Number(parseInt('0.8')))); //false
console.log(1 + '2' + '2'); //122
!typeof parseFloat('0'); //false
Number(''); //0
typeof 'parseInt(null)' + 12 + !!Number(NaN); //"string12false"
!typeof isNaN('') + parseInt(NaN); //NaN
typeof !parseInt(null) + !isNaN(null); //"booleantrue  "

//
var name = 10;
var obj = {
  name: '珠峰培训',
};
console.log(obj.name); //珠峰培训
console.log(obj['name']); //珠峰培训
// 一个对象的属性名只有两种格式：数字或者字符串(等基本类型)也就是c={null:1,undefined:2} 也可以，c.null  因为属性名被转成了字符串“null”
console.log(obj[name]); //并没有错误 这里就代表name变量 所以其实是obj[10] 所以是undefined
// 'age' 值=》代表本身
// age 变量=》代表他存储的这个值
//变量本身是没有任何意义 他的存在是指向某个值

var name = '珠峰培训';
var obj = {
  name: name, // =>name   es6语法 name：name    ===   name 属性名和属性值的变量同名时有效
};
console.log(obj.name);

// =>for in 循环：用来循环遍历对象中的键值对的(continue 和 break 同样适用)
var obj = {
  name: '春亮',
  age: 52,
  friends: '王鹏',
  1: 20,
  2: 149,
  3: 140,
};
//for(var 变量(key) in 对象)
//对象中有多少组键值对，循环就执行几次(除非break结束)
//for in 遍历有个特点 他不是顺序遍历 他优先遍历属性名是数字的而且由小到大
for (var key in obj) {
  console.log();
  // 获取属性值: obj[属性名]=>obj[key] obj.key/obj['key']
}
