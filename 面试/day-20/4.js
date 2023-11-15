// =>定时器是异步编程：每一轮循环设置定时器，无需等定时器触发执行，继续下一轮循环 （定时器触发的时候，循环已经结束了）
/*for (var i = 0; i < 10; i++) {
  //=>LET存在块级作用域，每一次循环都会在当前块作用域中形成一个私有变量i存储0-9
  //当定时器执行的时候，所使用的i就是所处快作用域中的i
  setTimeout(() => {
    console.log(i);
  }, 1000);
}*/

//=>闭包解决
for (var i = 0; i < 10; i++) {
  ~function (i) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  };
}

for (var i = 0; i < 10; i++) {
  setTimeout(
    (() => {
      console.log(i);
    })(i),
    1000
  );
}

//=>可以基于bind的预先处理机制，在循环的时候就把每次执行函数需要输出的结果，预先传递给函数即可
var fn = function (i) {
  console.log(i);
};
for (var i = 0; i < 10; i++) {
  setTimeout(fn.bind(null, i), 1000);
}
