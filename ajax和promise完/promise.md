# Promise

>  ES6语法规范中新增加的内置类,用来处理js中异步编程的，而我们所谓的promise设计模式，就是基于promise对异步操作进行管理

## 异步编程中的回调地狱

- AJAX的串行

  ```js
  $.ajax({url:'/baseInfo',
          method:'GET',
          data:{
             name:'zhanglu'}.
           aysnc:true,
           success:result=>{
           scoreId = result.scoreId
           $.ajax({url:'/scoreInfo',
                method:'GET',
                data:{
                id:scoreId}.
                 aysnc:true,
                 success:result=>{
          
         }}) 
         }})
  //=>AJAX串行，只有第一个请求成功才能执行第二个，第二个成功才能执行第三个。。。最后一个请求成功后拿到了每一次请求的所有数据
  ```

  

- AJAX的并行

  ```JS
  =>三个请求可以同时发送，但是需要等到所有请求都成功才会做一件事
    let chi=0,
        eng=12,
        math=52;
    let chiPai,
        engPai,
        mathPai;
    $.ajax({
        url:'/pai?chi='+chi,
        success:result=>chiPai=result
    })
    $.ajax({
        url:'/pai?eng='+eng,
        success:result=>engPai=result
    })
    $.ajax({
        url:'/pai?math='+math,
        success:result=>mathPai=result
    })
  ```

