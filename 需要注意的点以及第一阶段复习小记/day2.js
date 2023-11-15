//! 字符串的方法
/* 
1.charAt()/charCodeAt()  放入索引
 let char = "xxx"
 char.charAt(10000) 返回的是空字符
 char[10000]  //返回的是undefined 也能理解毕竟是类似属性查找

2.substring substr slice
  substr=>传入的第二个是个数
  substring 和 slice 第二个都是索引区别是slice可以传负值

3.indexOf(x,y)/lastIndexOf(x) y是可以设置查找索引的开始位置

4.toUpperCase / toLowerCase 是全部转 str.toUpperCase()
5.split 

6.replace 后面来详解

7.match 后面来详解

*/

//!! 获取元素
/* 
只有document才有的两种 document.getElementsByName(name)和document.getElementById(id) 这两个只有document才有因为他们只有document的原型链上才有  其他一般元素的原型链上没有这两个方法

1.querySelector
2.querySelectorAll
3.getElementsByTagName
4.getElementsByClassName
5.getElementsByName
6.getElementById
7.



*/
//!!节点和元素的关系
/* 
Node页面所有的东西都是节点
节点集合：NodeList
(getElementsByName/querySelectorAll) 获取都是节点集合
1.元素节点 
   noteType:1
   nodeName:大写的标签名
   nodeValue：null
2.文本节点
   noteType：3
   nodeName:"#text"
   nodeValue:文本内容
3.注释节点
   noteType:8
   nodeName:"#commen"
   nodeValue:注释内容
4.文档节点document
   noteType:9
   nodeName:"#document"
   nodeValue:null

   节点之间的关系
1.childNodes：获取所有的子节点
2.children:获取所有的元素子节点(子元素标签)
3.parent:获取父亲节点
4.firstChild:获取第一个子节点
5.lastChild:获取最后一个子节点
6.firstElementChild/
7.lastElementChild 获取第一个和最后一个元素子节点(不兼容ie6-8)
8.previousSibling:获取上一个哥哥节点
9.nextSibling：获取下一个弟弟节点
10.previousElementSibling/nextElementSibling:获取哥哥和弟弟元素节点(不兼容ie6-8)
*/

//!! 节点的动态操作
/* 
createElement 创建元素对象
createTextNode 创建文本对象
appendChild 把元素添加到容器的末尾
insertBefore 把元素添加到指定容器中指定元素的前面
cloneNode(true/false) 克隆元素或者节点
removeChild 移除容器中的某个元素
*/
//===================================================

//!!let 和 const不存在变量提升机制 只有var/function 才有变量提升机制
/* 
不带var 直接相当于给window 加属性 只在全局作用域下
   (function () {
        z = 13;
        console.log(z);
        console.log(window.z);//13
      })();
  只要不少use strice模式下 这样没有用var 和 let const 等声明就是给全局添加属性 而且这样的是不会变量提升的只能再赋值后使用



let 和 const不能重复声明
使用let/const就不行,浏览器会校验当前作用域中是否已经存在这个变量了,如果已经存在了.则再次基于let等重新声明就会报错
var a =12 
let a = 12 这也不行 在词法解析阶段就会报错报错，报错的地方是第二次声明的地方


!!! 注意这种错误是词法解析阶段发现的代码就不会执行 所以即使代码写在报错之前也不会触发
*/

//!!暂时性死区
/* 

暂时性死区的具体解释为：在代码块内，使用let和const命令声明变量之前，该变量都是不可用的，语法上被称为暂时性死区。
讲解的有些问题
*/

//!! 变量相关奇奇怪怪的问题
/*
var a = 12,
  b = 12;
function fn() {
  console.log(a, b);
  var a = (b = 13);  var=a=b=13结果一样
  console.log(a, b);
}
fn(); //13 13
console.log(a, b);//12 13 
理由你知道的 = 的赋值机制
 */

//!!变量提升遇到条件判断
/* 
但是新版本浏览器中,为了兼容es6严谨的语法规范,条件中的函数在变量提升阶段只能提前声明,不能提前定义function fn;
    console.log(fn); //undefined
      if (!('a' in window)) {
        fn(); //'哈哈'
        function fn() {
          console.log('哈哈');
        }
      }
      fn(); //哈哈
*/
//!!!太经典
/* 
f = function () {
  return true;
}; // =>window.f = ...
g = function () {
  return false;
};
(function () {
  
   函数执行会形成一个私有作用域
    1.变量提升 function g
    2.代码执行
  
    f = function () {
        return true;
      }; // =>window.f = ...
      g = function () {
        return false;
      };
      (function () {
        
         函数执行会形成一个私有作用域
          1.变量提升 function g
          2.代码执行
        
        if (g() && [] == ![]) {
          =>uncaught typeError :g is not a function
          f = function () {
            return false;
          };
          function g() {
            return true;
          }
        }
     })();

     记住if判断里面的是会提前声明的只是还不会定义函数的内容 所以 g()不会读外面全局的而是先读私有作用域中的g变量但是此时还未定义所以是在函数定义前调用所以报错

*/
//!!let 块级作用域体现
let foo = 1;

function bar() {
  if (foo) {
    let foo = 10;
  }
  console.log(foo); //1
}
bar();

//!! ||和&&
/* 
 A || B 先验证A的真假，如果A为真，返回的是A的值，如果A为假返回的是B的值
 A&&B ： A为真返回B的值，A为假返回A的值

  let a = 0 || false
 console.log(a) //false

 a = 1 || false
 console.log(a) //1

  a=1 && 100
 console.log(a) // 100

 a = 0 && 100
 console.log(a) // 0

 a = 0 || 1 && 2||3 //先算1&&2
 console.log(a) //2
*/

//!!!
/* 

console.log(a); // 报错 referenceError:a is not defined
a = 12; 
这只是给window加属性可没有定义变量  
*/

//!! document.parentNode =>null   document.parentnode=>undefined
/* 
因为document已经是页面层了没有父了所以返回的是null
而document.parentnode 压根没有这个属性


*/
//!!! 这道题不错
/* 
var a = 1;
function fn(a) {

     形参赋值
     a = 1
     变量提升
      var a(无效)
      function a...;(声明无效，但是需要给a赋值为函数)
      a = function..
    
 
      console.log(a); // 函数
      var a = 2;
      function a() {}
      console.log(a); //2
    }
    fn(a);
*/
//!!!我日 好题
/* 
var a = 0,
  b = 0;
function A(a) {
   这里已经改变了A函数的指向
  A = function (b) {
    alert(a + b++);
  };
  alert(a++);
}
A(1); //1
A(2); //4


*/

//!!!!!!!!!!!!!!!!!!!!! JS里面的类
/* 
new CreatePerson() 执行和普通函数执行的联系
1.new 这种执行方式叫做”构造函数执行模式“，此时的CreatePerson 不仅仅是一个函数名，被称为’类‘，而返回的结果(赋值给person1的)是一个对象，我们称之为“实例”，而函数体中出现的this都是这个实例

//!!!! 构造函数的返回问题
function CreatePerson(name, age) {
  this.name = name;
  this.age = age;
  =>  return 100; //返回的还是实例
 =>    return {
      xxx:"xxx"
    } 如果手动return 的是一个基本值，对返回的实例无影响，如果手动return的是一个引用类型的值，会把默认返回的实例给替换掉(所以再构造函数模式执行下，我们一般都不要手动些return 防止把返回的实例给替换)
}


*/
//!! new Fn(2) = new Fn  都是调用构造函数声明实例只是一个传了参一个没有 并且从优先级来说 加括号的优先级更高
//!! 注意！！基本类型数据不是对象别搞错了 虽然字符串可以用属性和方法那也只是因为在 操作的时候js把它用new string的方式临时包装成了一个对象但是操作完以后立马变化基本数据类型

//!!! typeof in 和 instanceof
/* 
typeof 只能分别基础类型 剩下的引用都是object 并且null也是object

in 是判断对象是否有属性 不能区分是自己身上还是原型

instanceof 用来判断某个实例是否属于某个类

*/
//!!! 经典又来了咯
/* 
let ary = [12, 23];
console.log(ary instanceof Array); // true
console.log(ary instanceof RegExp); // false
console.log(ary instanceof Object); //true

知道为什么object也是吗 因为走到头就是指向object


let n = 10;
console.log(n.toFixed(2)); //10.00
console.log(typeof n); // "number"
 构造函数创建模式(创建出来的实例是对象类型的)
let m = new Number('10');
console.log(typeof m); //"object"
*/
//!!字面量和构造函数的小插曲
/* 

基本数据类型 分别可以用字面量创造 和 构造函数创造  字面量创造返回的是基本类型 而 构造函数返回的是对象 他们都可以用类的方法 但是后者是对象可以用instanceof 识别


*/
//!! 正则的字面量创建都是对象
/* 
let reg = /^$/;
let reg2 = new RegExp('');

*/

//!!this的指向问题
/* 
 This 是函数执行的主体(谁执行的)
 this是谁和函数在哪儿创建的或者在哪儿执行的都没有必然的联系

 掌握几条分清执行的主体的规律
   1.给元素的某个事件绑定方法，当事件触发方法执行的时候，方法中的this是当前操作的元素
   2.方法执行，看方法前面是否有点，有点，点前面是谁this就是谁，没有点this是window(在严格模式下没有点this是undefined = >"use strict")
   3.在构造函数模式执行中，函数体中的this是当前类的实例


var fullName = 'language';
var obj = {
  fullName: 'javascript',
  prop: {
   getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName()); //"undefined"    =>this:obj.prop
var test = obj.prop.getFullName;
console.log(test()); //"language" this:window


var name = 'window';
var Tom = {
  name: 'Tom',
  show: function () {
    console.log(this.name);
  },
  wait: function () {
    var fun = this.show;
    fun();
  },
};
*/

//!!! 顺着作用域的查找  作用域只能是栈
/* 
(function () {
  var val = 1;
  var json = {
    val: 10,
    dbl: function () {
      上级作用域(栈不是堆)，所以是全局作用域
      val *= 2;
    },
  };
  json.dbl();
  alert(json.val + val); //12
})();

*/

//!!! 构造函数指向的一个很好的问题
/* 
function Fn() {
  let a = 1;
  this.a = a;
}
Fn.prototype.say = function () {
  this.a = 2;
};
Fn.prototype = new Fn();
let f1 = new Fn();
Fn.prototype.b = function () {
  this.a = 3;
};
console.log(f1.constructor == Fn); //true 
=>会这样找 f1没有找自己的原型对象 原型对象也没有 原型对象会找自己上面的原型对象 __proto__ 找到了

*/

//!! 函数有三个身份  1.普通函数 2.类 3.对象

//!!!push 和 unshif 后返回的是length

//!!!太经典
/* 
function Foo() {
  getName = function () {
    console.log(1);
  };
  return this;
}
Foo.getName = function () {
  console.log(2);
};
Foo.prototype.getName = function () {
  console.log(3);
};
var getName = function () {
  console.log(4);
};
function getName() {
  console.log(5);
}
Foo.getName(); //2
getName(); //4
Foo().getName(); //1
getName(); //1
new Foo.getName(); //2  =>运算顺序首先找到Foo.getName(AF2) 然后 new AF2() 别理解错了只是先找到Foo.getName函数 然后再new 这个函数()
new Foo().getName(); //3 Foo() Foo分别是有参和无参 有参优先级和.一样且从左往右 高于无参的优先级 所以这里是先new Foo()
new new Foo().getName(); //3  先执行new Foo()返回一个实例 然后new 实例.getName()    实例的new getName() 输出是3
*/
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 好好分析
/* 
    function fun(n, o) {
        console.log(o);
        return {
          fun: function (m) {
            return fun(m, n);
          },
        };
      }
      var c = fun(0).fun(1); //undefined 0
      c.fun(2); //1
      c.fun(3); //1 ！！！！！！！没有链式调用


*/
//!!!!!!!!!! 注意箭头函数的this是定义的时候的this  ！！！
/* 
window.name = 'WIN';
let obj = {
  name: 'OBJ',
};
let fn = (n) => {
  console.log(this.name);
};

FN所处的执行上下文中的this是window
fn(10); //"WIN"
fn.call(obj, 10); //=>this:window
document.body.onclick = fn; //this:window 不是我们预期的body
obj.fn(10); //还是window
*/

//!!! ES6的赋值语法
/* 
!! 数组的解构
let ary = [10,20,30,40,50]
let [n,m,...x] = ary
console.log(n,m,x) //  => 10,20,[30,40,50]
let [n,,m,,,x=0] //n=10 m=30 x=0

let ary = [10,[20,30,[40,50]]] 
let [n,[,,[,m]]]=ary //n=10 m=50


!! 对象的解构
 let obj = {
  name: '王惠风',
  age: 79,
  sex: 'boy',
  friends: ['tang', 'guo', 'wang', 'guo'],
};
let {name,friends:[firstFriend]} = obj
name => '王惠风' firstFrined = 'tang'
let {name,sex,nianliang} = obj
name => '王惠风' sex='boy' nianliang=undefriend


*/
//!!!
/* 
reg = /^\\d$/ //把特殊符号转为普通符号 如果想匹配字符串\d
console.log(reg.test("\\d") //true 字符串里面\d也是其他含义也需要用

!!!![]中括号中出现的字符一般都代表本身的含义
let reg = /^[@+]+$/  //中括号里面表示的就是+号不是一次或多次
console.log(reg.test("@@"))//true
console.log(reg.test("@+"))//true
 特殊
reg=/^[\d]$/ // =>\d在中括号中还是0-9
console.log(reg.test("d"))//false
console.log(reg.test("\\"))//false
console.log(reg.test("9")) // true
reg=/^[\\d]$/
reg.test("\\") //true
reg.test("d")//true
reg.test("9")//false
!!!! 中括号中不存在多位数
reg = /^[18]$/
reg.test("1") //true
reg.test("18")//false
reg=/^[10-29]/ //1或者0-2或者9
console.log(reg.test("1")) //true
console.log(reg.test("9")) //true
console.log(reg.test("0")) //true
console.log(reg.test("2")) //true
console.log(reg.test("10")) //false

*/
//!!! 正则遇上变量
/* 
let type = "zhufeng"
reg = /^@"+type+"@$/
console.log(reg.test("@zhufeng@")) // false
console.log(reg.test('@"""typeeeee"@')) // true
这种情况只能使用构造函数方法(因为它传递的规则是字符串，只有这样才能进行字符串拼接)

reg = new RegExp("^@"+type+"@$")
console.log(reg.test("@zhufeng@"))//true
*/

//!!详细讲解test 和 exec
/* 
let str = "zhufeng2019yangfan2020qihang2021"
let reg = /^\d+$/
console.log(reg.test(str)) // false
console.log(reg.exec(str)) // null 
!!!!!!!exec
 捕获到的结果是null或者一个数组
      第一项：本次捕获到的内容
      其余项：对应小分组本次单独捕获的内容
      index:当前捕获内容在字符串中的起始索引
      input:原始字符串
      1.懒惰性
      意思就是如果我们遇到一个满足正则的就捕获了但是不能把所有满足的匹配
      (我们在用exec的时候每次执行完后的都能从正则对象上获取一个属性分别是lastIndex，这表示匹配到的字符串的下一位的索引，如果不解决懒惰性每次捕获的都是第一个这个lastIndex就不会有变化)
       !解决懒惰性 加g /^\d+$/g
       然后每次调用reg.exec(str) 就会往后走了
        console.log(reg.exec(str)); //=>["2019"...]
        console.log(reg.lastIndex); //=>11 设置全局匹配修饰符g后，第一次匹配完，lastIndex会自己修改
        console.log(reg.exec(str)); //["2020"...]
        console.log(reg.lastIndex); //22
        这样我们可以写个函数 当exec捕获的结果等于null的时候就到捕获的最后一个了

*/

//!!! 正则的分组捕获()
/* 
let str ="130828199012040112"
let reg = /^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}(\d)(\d|x)$/;
console.log(reg.exec(str));
['130828199012040112', '130828', '1990', '12', '04', '1', '2', index: 0, input: '130828199012040112', groups: undefined]
 =>第一项：大正则匹配的结果
 =>其余项：每一个小分组单独匹配捕获的结果
=>如果设置了分组(改变优先级)，但是捕获的时候不需要单独捕获，可以基于?:来处理
*/
//!! match
/* 
let str = "{0}年{1}月{2}日"
let reg = /\{\d+\}/
不设置g的话match和exec的结果是差不多的

设置reg = /\{\d+\}/
str.match(reg) =>["{0}","{1}","{2}"] 多次匹配只能获取大范围的不能获取分组
解决就是用封装的方法不断用exec去捕获 然后循环到exec 返回null
let aryBig = [],
let arySmall = [],
    res = reg.exec(str)
while(res){
    let [big,small] = res
    aryBig.push(big)
    arySmall.push(small)
    res = res.exec(str)
}
console.log(aryBig) ["{0}","{1}","{2}"]
console.log(arySmall)["0","1","2"]
*/

//!!分组引用  \1
/* 
let str = 'book'
let reg = /^[a-zA-Z([A-Za-z])\1[a-zA-Z]/
=>分组引用就是通过"\数字"让其代表和对应分组出现一模一样的内容 但是不会多次分组也就是这里捕获也只是捕获一次[0]
console.log(reg.test('book')); //true
console.log(reg.test('some')); // false
*/
//!!!正则捕获的贪婪性 取消贪婪性?
/* 
let str = '珠峰2019@2020培训';
=>正则捕获的贪婪性：默认情况下，正则捕获的时候，是按照当前正则所匹配的最长结果来获取的 就是为什么匹配的不是201 20 而是2019
reg = /\d+?/g; //这就是取消贪婪性
console.log(str.match(reg)); //=>["2","0","1","9","2","0","2","0"]

*/
//!!!问号的五大作用
/* 
- 问号左边是非量词元字符:本身代表量词元字符，出现零到一次
- 问号左边是量词元字符：取消捕获时候的贪婪性
- (?:)只匹配不捕获
- (?=)正向预查 //匹配的时候要算 但是不会被匹配到大字符串里 
- (?!)负向预查

*/
//!!! test(也能匹配)
/* 
console.log(reg.test(str)); //true
console.log(RegExp.$1); //=>"0"

console.log(reg.test(str)); //true
console.log(RegExp.$1); //=>"1"

console.log(reg.test(str)); //true
console.log(RegExp.$1); //=>"2"

console.log(reg.test(str)); //false
console.log(RegExp.$1); //=>"2" 存储的是上一次捕获的结果

=>RegExp.$1~RegExp.$9 :获取当前本次正则匹配后，第一个到第九个分组的信息
上面例子只有一个(\d+) 所以一共就一个分组

*/
//!!replace
/* 
let time = '2019-08-13';
=>变为 "2019年08月13日"
let reg = /^(\d{4})-(\d{1,2})-(\d{1,2})/;
let s = reg.exec(time);
console.log(`${s[1]}年${s[2]}月${s[3]}日`);



2 方法
let time = '2019-08-13';
let reg = /^(\d{4})-(\d{1,2})-(\d{1,2})/;
time = time.replace(reg, '$1年$2月$3日'); //2019年08月13日

3.函数 后面如果是函数的话 每匹配到一次就会执行一次 return的会替换匹配到的
time = time.replace(reg, (...arg) => {
  let [, $1, $2, $3] = arg;
  $2.length < 2 ? ($2 = '0' + $2) : null;
  $3.length < 2 ? ($3 = '0' + $3) : null;
  return $1 + '年' + $2 + '月' + $3 + '日';
});
*/
//!!!  验证一个字符串中哪个字母出现的次数最多，多少次
/* 
let str = "zhufengpeixunzhoulaoshi"
let ary = str.split("").sort((a,b)=>a.localeCompare(b))
=>aeefghhhiilnnoopsuuuxzz
let reg = /([a-zA-Z])\1+/g
   ary = str.match(reg)
   ary.sort((a,b)=>b.length - a.length)
   let max = ary[0].length,
    res = [ary[0].substr(0,1)]
for(let i = 1;i<ary.length;i++){
    let item = ary[i]
    if(item.length <max){
        break
    }
    res.push(item.substr(0,1))
}
*/

//!! 两种给dom加属性方法的区别
/* 
[ELEMENT].XXX = XXX 这种是放在堆内存中的


[ELEMENT].setAttribute("xxx",xxx)
[ELEMENT].getAttribute('xxx')
[ELEMENT].removeAttribute("xxx")
*/

//!! 获取元素样式
/* 1.[element].style.width 
   2.window.getComputedStyle([element],null) =>第一个传入操作的元素，第二个参数是元素的伪类:after/:before
在IE6-8浏览器中不兼容，需要基于currentStyle来获取
!!!!!!注意
clientWidth
clientHeight 这些返回的都是不加px 计算的时候需要自己拼接px
*/

//!!! h盒子模型
/* - client
  - width
  - height
  - top
  - left
- offset
  - width/height
  - top/left
  - parent
- scroll
  - width/height
  - top/left


!!client 开头的
=>获取盒子可视区域的宽高(内容宽带+左右padding)
 clientWidth 和 clientHeight


=>获取盒子左边框和上边框的大小
box.clientLeft 和 box.clientTop

!!scroll
scrollWidth 和 scrollHeight 
=>在没有内容溢出的情况下，获取的结果和client是一样的
=>在有内容溢出的情况下，获取的结果约等于真实内容的宽高(上/左padding+真实内容的高度/宽度) 比如有滚动 是要算是滚动的
1.不同浏览器获取的结果不尽相同
2.设置overflow属性值对最后的结果也会产生不一定的影响
box.scrollWidth
box.scrollHeight

!!scrollTop和scrollLeft  计算
min = 0
max = 整个的高度scrollHeight - 一屏幕高度clientHeight

!!!!=>13个盒子模型属性，只有这两个是”可读写“的属性(既可以获取也可以设置对应的值)，其余的都是“只读”属性（不能设置值，只能获取）
box.scrollTop=0 //回到顶部功能



!!offset

=>offsetParent:获取它的父参照物(不一定是父元素)
 物体外边框到他父参照物的内边框距离
父参照物和它的父元素没有必然的联系，它参照物查找：同一个平面中，最外层元素是所有后代元素的父参照物，而基于
posittion:relative/absolut/fixed可以让元素脱离文档流(一个新的平面),从而改变元素的父参照物
document.body.offsetParent === null
=>offsetTop:距离其父参照物的上偏移
=>offsetLeft:距离其父参照物的左偏移（当前元素的外边框到父参照物的里边框)
```
*/
