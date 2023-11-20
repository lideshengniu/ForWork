# 什么是AJAX

> async javascript and xml：异步的js和xml
>
> 此处的异步指的是：局部刷新(对应的是全局刷新)

## 这是服务器端渲染的缺陷 也是ajax存在的理由

![image-20231120151125625](https://lailema.oss-cn-chengdu.aliyuncs.com/img/bjb202311201511172.png)

## ajax的特点

![image-20231120151730022](https://lailema.oss-cn-chengdu.aliyuncs.com/img/bjb202311201517236.png)

## 现在项目的常用整体架构模式

![image-20231120153041845](https://lailema.oss-cn-chengdu.aliyuncs.com/img/bjb202311201530032.png)

## XML和JSON

### XML

> 可扩展的标记语言，用自己自定义的标签来存储数据的（在很早以前，我们基于AJAX和服务器进行交互的数据格式一般都已XML格式为主，因为它能清晰展示出对应的数据和结构层级；但是到后面，流行了一种新的数据格式JSON，它不仅比XML更清晰展示数据的结构，而且同样的数据存储，JSON更加轻量，也方便解析和相关的操作，所以现在前后端的数据交互都已JSON格式为主）

## AJAX的基础操作

```JS
1.创建ajax实例
let  xhr = new XMLHttpRequest() //=>IE低版本浏览器中用的是 new ActiveXObject()高程三中js惰性编程思想，关于XHR的兼容处理
2.打开url 
//第三个参数 ASYNC：设置同步或者异步 true是异步默认   false是同步
// USER-NAME:传递给服务器的用户名
// USER-PASS:传递给服务器的密码
xhr.open("get","xx",true)

3.监听AJAX状态，在状态为X的时候，获取服务器响应的内容
//ajax 状态码： 0 1 2 3 4 他们的含义需要理解
xhr.onreadstatechange=function(){
    if(/^2|3$/.test(xhr.status) && xhr.readyState === 4){
     data = xhr.responseText
    }
}
4.发送请求
// send 中放的是请求主体的内容
xhr.send(null)

=>AJAX任务(发送一个请求给服务器，从服务器获取到对应的内容)从send开始，到XHR.readyState===4的时候算任务结束
```

### ajax的状态码

> xhr.readyState 获取状态码
>
> - unsend 0 ：未发送(创建一个xhr，初始状态是0)
> - opened 1：已经打开（执行了xhr.open)
> - HEADERS_RECEIVED 2:响应头信息已经返回给客户端（发送请求后，服务器会依次返回响应头和响应主体的信息）
> - LOADING 3 :等待服务器返回响应内容
> - DONE 4：响应主体信息已经返回给客户端

- 

## HTTP请求方式的区别

- GET 系列请求

  + GET
  + DELETE 一般应用于告诉服务器，从服务器上删除点东西
  + HEAD 只想获取响应头内容，告诉服务器响应主体内容不要了
  + options 试探性请求，发个请求给服务器，看看服务器能不能接收到，能不能返回

- POST 系列请求

  - POST
  - PUT 和 DELETE对应，一般是想让服务器把我传递的信息存储到服务器上(一般应用于文件和大型数据内容)

  =>真实项目中用对应的请求方式会使请求变得更加明确(语义化)，不遵循这些方式也可以，最起码浏览器在语法上是允许的；但是这些是开发者们相互间约定俗成的规范；

> GET系列一般用于从服务器获取信息，POST系列一般用于给服务器推送信息，但是不论GET和POST都可以把信息传递给服务器，也能从服务器获取到结果，只不过是谁多谁少的问题
>
> - GET：给的少，拿的多
> - POST：给的多，拿的少
>
> 客户端怎么把信息传递给服务器？
>
> - 问号传参 xhr.open('GET','/getdata?xxx=xxx & xxx=xxx')
> - 设置请求头 xhr.setRequestHeader([key],[value])
> - 设置请求主体 xhr.send(请求主体信息)
>
> 服务器怎么把信息返回给客户端？
>
> - 通过响应头
> - 通过响应主体(大部分信息都是基于响应主体返回的)

## get系列和post系列的本质区别？

> GET系列传递给服务器信息的方式一般采用：问号传参
>
> POST系列传递给服务器信息的方式一般采用：设置请求体
>
> 1.GET传递给服务器的内容比POST少，因为URL有最长大小限制(IE浏览器一般限制2KB，其余浏览器一般限制4-8kb，超过长度的部分自动被浏览器截取了)
>
> 2.GET会产生缓存(缓存不是自己可控制的)：因为请求的地址（尤其是问号传递的信息是一样），浏览器有时候会认为你要和上次请求的数据一样，拿的是上一次信息；这种缓存我们不期望有，我们期望的缓存是可以自己控制的
>
> ```JS
> xhr.open('GET','/list?name=zhufeng')
> xhr.open('GET','/list?name=zhufeng')
> 连续发送两次 第二次触发的是缓存
> 
> 解决办法 设置随机数
>       xhr.open('GET','/list?name=zhufeng_='+Math.random())
>       xhr.open('GET','/list?name=zhufeng_='+Math.random())
> ```
>
> 3.GET相比较POST来说不安全：GET是基于问号传参传递给服务器内容，有一种技术叫做URL劫持，这样别人可以获取或者篡改传递的信息，而post基于请求主体传递信息，不容易被劫持

```JS


```

## 