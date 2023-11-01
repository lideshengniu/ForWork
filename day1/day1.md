# 1.number 类型

```JS
1.常见Number()值
NaN 是number类型
Number(null) //0
Number(undefined) //NaN
Number(true)//1
Number(false)//0
Number(' ')//0
Number('')//0
Number('A') //NaN
Number({a:1})//NaN
Number([]) //0
Number('12.5') //12.5
Number('12.2.2') //NaN
Number('.2') //0.2
Number('12.4px') //NaN

Number({}) //NaN 因为对象的toString重写了返回的是[object Object] 所以是NaN
Number([1]) // 1  因为[1].toString() "1"=>1
Number([12,21]) // NaN  [12,21].toString() "12,21" =>NaN
  (1) 如果是null 返回 0
  (2) 如果是undefined 返回NaN
  (3) 如果是字符串 字符串如果是空或者只有空格 返回0
  (4) 如果是字符串 字符串只有数字以及一个小数点 返回对应number
  (5)如果是引用类型转为数字，是先把他基于toString方法转为字符串再转为对应的number
2.parseInt 和 parseFloat 遇到非有效的就不找了
   parseInt/parseFloat([val],[进制]) 也是转换为数字的方法，对于字符串来说，它是从左到右依次查找有效数字字符，直到遇到非有效数字字符，停止查找（不管后面是不是数字字符“
   let str = "12.5px"
   console.log(parseInt(str)) //12
   parseInt('width:12') //NaN
 // == 进行比较时候 可能也会出现把其他类转为数字
3.对比
 Number([val]) 走的是v8引擎最底层的方法
 parseInt(true) NaN   parseInt 拿到true 先把他转为'true' 然后从左向右开始判断 所以是NaN     但是    Number(true)  1   ===所以Number是根据了引用类型才用string的路


```

# 2.字符串

```js
1.toString()
小问 12.toString()  会报错
 但是 let a =12 a.toString() 就可以
/* 解决 js解析器会试图解析12.  为一个数字12.0 而后面跟随了toString就没有合法的解释了
let num = 12;
console.log(num.toString());  // "12"
console.log((12).toString());
console.log(12..toString());
console.log(12.5.toString());对于浮点数，一个点就足够了：



*/


console.log(NaN.toString()); //    'NaN'
console.log(null.toString); // null有这个方法 但是被禁止使用了
console.log(undefined.toString); // undefined有这个方法 但是被禁止使用了
// 虽然 null 和 undefined 被禁止使用tostring
// 但是他们的值 依然是"undefined" 和 "null"
console.log(true); // "true"
console.log([].toString); //""
console.log([12].toString); //"12"
console.log([12, 23].toString); //"12,23"
console.log(/^$/.toString()); // "/^$/"
// 普通对象.toString() 的结果是 "[object Object]"
console.log({ name: 'name' }.toString()); //"[object object]"  ?为什么普通对象的tostring 不是返回它本身 我想是重写了tostring 方法
// 跟我想的一样 object.prototype.toString 方法不是转换为字符串 而是用来检测数据类型的

2.字符串拼接
// 四则运算法则中，除加法之外，其余都是数学计算，只有加法可能存在字符串拼接
// 加法时一旦遇到字符串，则不是数学运算，而是字符串拼接
console.log('10' + 10); //1010
console.log('10' - 10); // 0
console.log('10px' - 10); //NaN  '10px'被Number('10px')等于NaN   NaN-10也是NaN
let a = 10 + null + true + [] + undefined + '珠峰' + null + [] + 10 + false;

11undefined'珠峰'null10false
/*
 10+null -> 10 + 0 > 10
 10+true ->10 + 1 >11
 11+[]-> 11+""   >"11" 遇到对象先转为字符串 因为 把引用数据类型转为数字，是先把他基于toString方法转换为字符串，然后在转换为数字
对了10+undefined = NaN  undefined不是对象 所以用toNumber 就是NaN  10+NaN=NaN



```

# 3.boolean 类型

```js
// boolean 布尔数据类型 只有两个值 true/false
// 只有0 NaN '' NULL  undefined  五个值为FALSE 其余都转换为true （没有任何特殊情况） 注意这里和Number不一样
console.log(Boolean(0)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean('')); //false
console.log(Boolean(' ')); //true
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean([])); //true
console.log(Boolean([12])); //true
console.log(Boolean(-1)); //true
2.取反
console.log(!1); // false
console.log(!!1); //true
// 如果条件只是一个值 不是==/ === / != />= 等这些比较，是要把这个值先转换为布尔类型。然后验证真假
if ('3px' + 3) {
  //'3px3'
  console.log('s');
}
if ('3px' - 3) {
  // NaN -3 =NaN
}
```

# 4._null 和 undefined 的区别_

```js
// null 和 undefined 的区别
// null 和 undefined 都代表的是没有
// null 意料之中(一般都是开始不知道值，我们手动先手动设置为null，后期再给予赋值操作)
let num = null; // let num = 0 一般最好用null作为初始的空值，因为零不是空值，他在栈内存中有自己的存储空间(占了位置)
// ===?????那要他目的是什么 既然他当作是没有 那为什么一定要用它先来占位

let nums; //创建一个变量没赋值，默认值是undefined
// 理解 null 和 undefined   null是比如你妹妹暂时没男朋友 那你可以用null 因为你知道以后会有 可能没有 就是有那种概念    但是undefined就是 你妹妹男朋友是个女生
```

# 5._引用数据类型_（object -普通对象)

```JS
引用数据类型
 object对象数据类型-普通对象
// {[key]:[value],...} 任何一个对象都是由零到多组键值对(属性名：属性值)组成的(并且属性名不能重复)
let person = {
  name: '易烊千玺', //也可以写成 "name":"易烊千玺"
  age: 40,
  height: '180kg',
  weight: '80kg',
  1: 100,
};
1.如果属性是数字类型 只能用[1] 去获取属性
// 换取属性名对应的属性值
// =>对象.属性名
// =>对象[属性名] 属性名是数字或者字符串格式的
// =>如果当前属性名不存在，则不能使用点的方式获取属性值
// =>如果属性名是数字，则不能使用点的方式获取属性值 只能用[1] 来获取数字的值
2.删除分为 真删除和假删除
// =>真删除：把属性彻底删除
delete person[1];
// =>假删除：属性还在，值为空
person.weight = null; // 这种能自己控制的就用null 不用undefined

```

# 6.疑问

```js
疑问1 为什么null是0 而undefined是 NaN 是因为null
/* 您的问题涉及到JavaScript设计中的一些历史和决策。`null`和`undefined`在概念上都表示"无"或"缺失"的值，但在JavaScript中，它们的转换行为确实是有所不同的。

为什么`null`会被转换为`0`，而`undefined`转换为`NaN`，并没有一个公认的"官方"解释。但这些决策背后可能有一些考虑：

1. **历史原因**: JavaScript是在非常短的时间内被设计出来的，很多初期的设计决策可能并没有经过长时间的深思熟虑。这些初期的设计细节沿袭到了今天。

2. **区分二者**: 使`null`和`undefined`在数值转换时有不同的行为，可能是为了在某种程度上区分它们。即使它们在很多方面都表示"无"或"缺失"，在某些情境下可能需要区别对待。

3. **实际使用**: 在实际编程中，将`null`视为"无"或"0"可能在某些情况下更有意义。例如，在数学计算中，您可能想要把一个缺失的值（null）当作0来处理，而不是一个无法进行数学操作的`NaN`。

不过，不管背后的原因是什么，作为开发者，我们最重要的是要了解这些行为，并在编码时注意它们可能带来的影响。确实，很多开发者会认为这些行为是JavaScript的"怪癖"之一，并学会如何在日常开发中避免由此引发的问题。 */
疑问2 为什么Number("") 和 Number(" ")等于0  而Boolean("") 为false  Boolean(" ")为true 3
/* 为什么 Number("") 和 Number(" ") 等于 0？

当字符串转换为数字时，JavaScript首先会尝试去除字符串中的前导和尾部的空白（例如空格、制表符、换行符等）。如果处理后的结果是一个空字符串，它将被转换为数字0。

Number("")：这里直接是一个空字符串，转换为数字是0。
Number(" ")：这里的字符串只包含一个空格。当尝试转换为数字时，这个空格会被忽略，留下一个空字符串，它也转换为数字0。
为什么 Boolean("") 为 false 而 Boolean(" ") 为 true？

当转换为布尔值时，一些特定的值被认为是"假值"（falsy），它们包括：0, NaN, null, undefined, false, 和 ""（空字符串）。

Boolean("")：这里是一个空字符串，是一个明确的假值，所以结果是false。
Boolean(" ")：这是一个非空字符串。即使它只包含一个空格，它仍然被视为一个"真值"（truthy），所以结果是true。 */


疑问3 let a = null 和 let a 去占位的理解还是不能很清晰
```
