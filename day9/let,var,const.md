## 1.let 和 const 不存在变量提升机制

*创建变量的六种方式中：var/function 有变量提升，而let/const/class/import都不存在这个机制*

## 2var 允许重复声明,而let是不允许的

在相同的作用域中(或执行上下文中)

- 如果使用var/function关键词声明变量并且重复声明,是不会有影响的(声明第一次之后,之后再遇到就不再重复声明了)

- 但是使用let/const就不行,浏览器会校验当前作用域中是否已经存在这个变量了,如果已经存在了.则再次基于let等重新声明就会报错

  ```JS
  // =>在浏览器开辟栈内存供代码自上而下执行之前，不仅有变量提升的操作，还有很多其他的操作=》"词法解析"或者"词法检测"：就是检测当前即将要执行的代码是否会出现"语法错误"(syntaxerror)，如果出现错误，代码将不会再执行(第一行都不会执行)
  
  console.log(1); //=>这行代码就已经不会再被执行了
  let a = 12;
  console.log(a);
  let a = 13; //uncaught syntaxerror:identifier 'a' has already been declared 报错的是这一行
  console.log(a);
  // 这个例题我们觉得是会先打印1 然后打印12 然后报错
  //但是实际是 直接就报错任何都没打印
  
  
  syntaxerror才是语法错误
  ```

  