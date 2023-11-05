/* 
//!!! let/const.var 的区别
1.let 和 const 不存在变量提升机制
创建变量的六种方式中：var/function 有变量提升，而let/const/class/import都不存在这个机制
  带var和不带var的区别
  在全局作用域下的区别！！！！！！！！！！！！！！！！！！！！！注意var 会给window加属性是只在全局作用域下 
    1.不带var的：相当于给全局对象window设置了一个属性a   window.a = 13
   a = 13
   console.log(a) //window.a

   2.带var的
   为什么window下也有呢？
     首先 栈内存变量存储空间   b
      带var的：是在全局作用域下声明了一个变量b（全局变量），但是在全局下声明的变量也同样相当于给window增加了一个对应的属性（只有全局作用域具备这个特点）
   var b = 14 //=>创建变量b and 给window设置了属性b
   console.log(b) 14 这里优先是从栈内存变量存储空间指向的14拿到
   console.log(window.b) 14

2.var 允许重复声明,而let是不允许的
   (1)在相同的作用域中(或执行上下文中)如果使用var/function关键词声明变量并且重复声明,是不会有影响的(声明第一次之后,之后再遇到就不再重复声明了)
   (2)但是使用let/const就不行,浏览器会校验当前作用域中是否已经存在这个变量了,如果已经存在了.则再次基于let等重新声明就会报错
*/
