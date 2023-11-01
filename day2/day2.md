# 1.数组

数组是特殊对象

```js
let arr = [12, '哈哈', true, 13];
console.log(arr);
console.log(arr.length);
console.log(arr['length']);
//打印出来{0:12,1:'哈哈',2:true,3:13,length:4}
console.log(arr[1]); //所以就能理解为什么对象如果有属性名是数字就必须用[]
// 向数组末尾 追加内容
arr[arr.length] = 100; //就和给对象加属性一个道理
```



# 2.栈和堆的初

浏览器想要执行js代码：

1.从电脑内存中分配出一块内存，用来执行代码(栈内存=》Stack)  相当于有了一个饭店 但是人员还没有

2.浏览器分配一个主线程用来自上而下执行js代码 类似服务员需要去挨个点菜

基本类型数据操作

*et a = 12 分三步

## 2.1 针对基本类型数据

1.创建变量a 放到当前栈内存变量存储区域中

2.创建一个12 放到当前栈内存值区域中(简单的基本类型值是这样存储的，复杂的引用类型值不是这样做的)

3.=为赋值，其实赋值是让变量和值相互关联的过程

![image-20231029015845893](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20231029015845893.png)

！！ 注意 let a = 12 执行完就出栈了 这样下一行代码才能执行 联想出餐 你给 前一个的出完 才能给后一个出

## 2.2 复杂值(引用类型值)的存储，也分三步

1.在内存中分配出一块新内存，用来存储引用类型值(堆内存=>heap) =>内存有一个16进制地址

 2.把对象中的键值对（属性名：属性值）依次存储到堆内存中

 3.把堆内存地址和变量关联起来

![image-20231029020005853](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20231029020005853.png)

*基本类型：按值操作（直接操作的是值），所以也叫值类型*

  *引用类型：操作的是堆内存的地址（按引用地址操作的）*

```JS
let n = [10, 20];
let m = n;
let x = m;
m[0] = 100;
x = [30, 40];
x[0] = 200;
m = x;
m[1] = 300;
console.log(n, m, x); // [100,20] [200,300] [200,300]

// 阿里面试题
// !!!!!!!!!! a=b=3   意思是 a = 3 b =3 而不是 b=3 a =b 注意顺序 是先a 后 b
let a = {
  n: 1,
};
let b = a;
a.x = a = {
  n: 2,
};
console.log(a.x); undefined
console.log(b); {n:1,x:{n:2}}
//  *额外问题
// 拓展 除了console.log 还有那些 我记得console.warn 什么的
//<script></script> 标签放到页面头部和尾部的区别，以及解决办法。
```

# 3.类型识别

```js
 1 //number
NaN //number
'1' //字符串
true //boolean
[] //对象
/\d+/   //这是正则 表示正则对象也是对象
function fn() {} //function类型



```

*JS中的数据类型监测一共五种*

## 3.1 typeof

 对了 typeof是运算符不是方法, 1+1 加号就是运算符  而 sum(1,1) sum是方法 所以 typeof [val] 就是值 不用加小括号()

```JS
于typeof 检测出来的结果
  1.首先是一个字符串
  2.字符串中包含对应的类型
 局限性
  1.typeof null =>"object" 但是null并不是对象
  2.基于typeof无法细分出当前值是普通对象还是数组对象等，因为只要是对象数据类型，返回的结果都是“object”
  
  
 typeof '12'; //"string"
typeof true; //"boolean"
typeof null; // "object"  !!!这里注意null确实是基本数据类型 但是typeof 认为null 是指空对象 是空指针也算做object

题目
console.log(typeof typeof typeof []); // 从右到左
//=>typeof [] => "object"
//=>typeof "object" => "string"
// 因为typeof检测的结果都是字符串 如果出现了两次及以上的typeof 后面一定是返回"string" 注意是"string" 而不是 string
```

## 3.2 instanceof:用来检测当前实例是否是属于某个类

## 3.3constuctor:基于构造函数检测数据类型(也是基于类的方式)

## 3.4.Object.prototype.toString.call() 检测数据类型最好的办法

# 4.JS中的操作语句 ： 判断、循环

## 4.1 if/else

```js
if(条件){
    条件成立执行  条件可以多样性:等于、大于、小于的比较/一个值或者取反等 =》最后都是要计算出是TRUE还是FALSE
}else if(条件2){
    条件2成立执行
}
...
else{
    以上条件都不成立
}
```

## 4.2三元运算符:简单IF/ELSE的特殊处理方式

```JS
简单IF/ELSE的特殊处理方式
条件？条件成立处理的事情：不成立处理的事情
1、如果处理的事情比较多。我们用括号包起来，每一件事情用逗号分隔
2.如果不需要处理事情，可以使用null/undefined 占位

let a = 10;
if (a > 0 && a < 20) {
  a++;
  console.log(a);
} 等价于
a > 0 && a < 20 ? (a++, console.log(a)) : undefined;
```

## 4.3switch case

```JS
1.每一种case情况结束后最好都加上break
2.default等价于else,以上都不成立干的事情
3.每一种case情况的比较用的都是==="绝对相等"


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

如果你要达到一个效果就是1 或者 5 都是a+2
switch (a) {
  case 1:
  case 5:
    a += 2;
    break;
  default:
    a--;
}
```

### if 和 switch的区别

```js
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
```

## 4.4 == vs ===

```JS
==:相等(如果左右两边数据值类型不同，是默认先转换为相同的类型，然后比较) '5' == 5 =>TRUE

===:绝对相等(如果类型不一样，肯定不想等，不会默认转换数据类型)
'5' === 5 =>FALSE 项目推荐===而不是==
```

