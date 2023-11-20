# 第一部分：客户端和服务器端交互及性能优化

## 客户端和服务器端的交互处理

> 客户端: 可以向服务器发请求，并接收返回的内容进行处理
>
> 服务器端：能够接收客户端请求，并且把相关资源信息返回给客户端的

```js
面试题：当用户再地址栏中输入网址，到最后看到页面，中间都经历了什么？
```

![image-20231118134812529](https://lailema.oss-cn-chengdu.aliyuncs.com/img/bjb202311181348708.png)

## 1.URL地址解析

### A:URI/URL/URN

> URL(Uniform Resource Locator) :统一资源定位符，根据这个地址能找到对应的资源
>
> URN(Uniform Resource Name):统一资源名称，一般指国际上通用的(标准的)一些名字（例如：国际统一发版的编号） 这个一般不常用很少用
>
> URI(Uniform Resource Identifier)：统一资源标识符，URL和URN是URI的子集，有时候说URI更多指的也是URL因为URN不怎么用

####  一个完整的URL所包含的内容

> http://www.zhufengpeixun.cn:80/stu/index.html?form=wx&lx=1#zhenyu
>
> 协议(http://) :传输协议就是把能够把客户端和服务器端的信息进行传输的工具(类似于快递小哥)
>
> + http 超文本传输协议，除了传递文本，还可以传递媒体资源文件(或者流文件)及XML格式数据
> + https更加安全的http，一般涉及支付的网站都要采用https协议(s:ssl 这个s就是加密传输的意思)
> + ftp 文件传输协议(一般应用于把本地资源上传到服务器端)
>
> 域名(www.zhufengpeixun.cn)：一个让用户方便记忆的名字（不通过域名，直接用服务器的外围IP也能访问到服务器，但是外围IP很难被记住）
>
>  + 顶级域名 qq.com     买域名的时候只用买顶级域名剩下这些域名不用买
> + 一级域名 www.qq.com
>
> + 二级域名 sports.qq.com

> + 三级域名 kbs.sports.qq.com
> + .com 国际域名
> + .cn 中文域名
> + .com.cn
> + .edu 教育
> + .gov 政府
> + .io 博客
> + .org 官方组织
> + .net 系统类
>
> -端口号(:80)：端口号的取值范围0-65535，用端口号来区分同一台服务器上的不同项目
>
> - http默认端口号：80
> - https默认端口号：443
> - ftp默认端口号：21
> - 如果我们项目采用的就是默认端口号，我们再书写地址的时候，不用加端口号，浏览器在发送请求的时候会帮我们默认给加上
>
> -请求资源路径名称(/stu/index.html)
>
> - 默认的路径或者名称(xxx.com/stu/ 不指定资源名，服务器会找默认的资源，一般默认资源名是default.html、index.html... 当然这些可以在服务器端自己配置)
>
> - 注意伪URL地址的处理(URL重写技术是为了增加SEO搜索引擎优化的，动态的网址一般不能被搜索引擎收录，所以我们要把动态网址静态化，此时需要的是重写URL)
>
>   https://item.jd.hk/2688449.html = > https://item.jd.hk/index.php?id=2688449
>
> -问号传参信息(?from=wx&lx=1)
>
> - 客户端想把信息传递给服务器，有很多的方式
>
> ​          URL地址问号传参
>
> ​          请求报文传输(请求体和请求主体)
>
> - 也可以不同页面之间的信息交互，例如：从列表到详情
>
> -HASH值(#zhenyu)
>
> - 也能充当信息传输的方式
> - 锚点定位
> - 基于HASH实现路由管控(不同的HASH值，展示不同的组件和模块)

```JS
给服务器通网后，会有两个ip地址
 内网IP：局域网内访问
 外网IP：外部用户可以基于外围IP访问到服务器
 
```

![image-20231118144705641](https://lailema.oss-cn-chengdu.aliyuncs.com/img/bjb202311181447931.png)

## 2.DNS服务器域名解析

> DNS服务器：域名解析服务器，在服务器上存储着 域名<=>服务器外网IP 的相关记录
>
> 而我们发送请求时候所谓的DNS解析，其实就是根据域名在DNS服务器上查找到对应服务器的外网IP
>
> 所以正常来说每一次请求都要去DNS服务器进行域名解析，对性能有影响

### 2.1 DNS预获取

```js

<meta http-equiv="x-dns-prefetch-control" content="on">//开启预获取
 <link rel="dns-prefetch" href="//static.360buying.com"> //这个就会预获取
```

### 2.2 DNS优化

- DNS缓存(一般浏览器会在第一次解析后，默认建立缓存，时间很短，只有一分钟左右)
- 减少DNS解析次数(一个网站中我们需要发送请求的域名和服务器尽可能少即可)
- DNS预获取(dns-prefetch):在页面加载开始的时候，就把当前页面中需要访问其他域名(服务器)的信息进行提前DNS解析，以后加载到具体内容部分可以不用解析了(下图就是开启预获取的方法)

![image-20231118164256154](https://lailema.oss-cn-chengdu.aliyuncs.com/img/bjb202311181642295.png)

![image-20231118164430960](https://lailema.oss-cn-chengdu.aliyuncs.com/img/bjb202311181644395.png)

## 3.建立TCP连接(三次握手)

```js
这样想
客户端开始 发送一个 SYN = 1   seq = J 这个J可以是其它数反正就是一个标识代表客户端
服务端 接受成功了  要告诉客户端 于是拿上客户端传来的SYN = 1 以及 ack = 客户端发送的标识加SYN  然后发送自己的标识 seq = K  以及直接的确认符 1  然后客户端接收到后表示来回已通即将传数据 并且告诉服务端 拿上ack = k + 1  以及 服务端传来的确认符 ACK  = 1
```



![image-20231118230554888](https://lailema.oss-cn-chengdu.aliyuncs.com/img/bjb202311182305831.png)

## 4.发送HTTP请求

快递员把客户端的东西传给服务端

- 请求报文：所有经过传输协议，客户端传递给服务器的内容，都被称为请求报文
- 响应报文：所有经过传输协议，服务器返回给客户端的内容，都被称为响应报文
- HTTP报文：请求报文+响应报文 

   f12=>Network(所有客户端和服务器端的交互信息在这里都可以看到) => 点击某一条信息，在右侧可以看到所有的HTTP报文信息

### A：HTTP请求报文

所有经过传输协议，客户端传递给服务器的内容，都被称为请求报文 

- 起始行
- 请求头(首部)
- 请求主体

### B：响应报文

所有经过传输协议，服务器返回给客户端的内容，都被称为响应报文

- HTTP状态码
- 响应头
- 响应主体
- 

## 5.服务器得到并处理请求

### A:WEB（图片)服务器和数据服务器

- Tomcat
- Nginx
- Apache
- IIS
- ...

下图是iis window配置一个站点

![image-20231119000222465](https://lailema.oss-cn-chengdu.aliyuncs.com/img/bjb202311190002820.png)

### B:HTTP响应报文

#### HTTP状态码

> 1-5开头，三位数字
>
> 200 ok:成功
>
> 201 created: 一般应用于告诉服务器创建一个新文件，最后服务器创建成功后返回的状态码
>
> 204 NO CONTENT: 对于某些请求（例如：PUT或者DELETE）,服务器不想处理，可以返回空内容，并且用204状态码告知
>
> 301 Moved Permanently ：永久重定向(永久转移)
>
> 302 Move Temporarily：临时转移，很早以前基本上用302来做，但是现在主要用307来处理这个事情，307的意思就是临时重定向Temporary Redirect => 主要用于：服务器的负载均衡、视频防盗等 
>
> 304 Not Modified: 设置HTTP的协商缓存
>
> 400 Bad Request: 传递给服务器的参数错误
>
> 401 Unauthorized：无权限访问
>
> 404 Not Found：请求地址错误
>
> 500 Internal Server Error: 未知服务器错误
>
> 503 Service Unavailable: 服务器超负荷 用307来解决 负载均衡

- 响应状态码
  - 200/201/204
  - 301/302/304/307
  - 400/401/404
  - 500/503
- 响应头(首部)
- 响应主体

![image-20231119003627269](https://lailema.oss-cn-chengdu.aliyuncs.com/img/bjb202311190036462.png)



### 浏览器是多线程的

遇到link/img/audio/video等是异步取加载资源信息(浏览器分配一个新的线程取加载，主线程继续向下渲染页面)，如果遇到的是script或者@import，则让主线程去加载资源信息(同步)，加载完成信息后，再去继续渲染页面.

但是js是单线程的因为浏览器只开一个线程来处理js所以才导致了回流这些问题

## 6.客户端渲染页面

![image-20231119202956636](https://lailema.oss-cn-chengdu.aliyuncs.com/img/bjb202311192029989.png)

A:浏览器渲染页面的步骤

- 解析HTML，生成DOM树，解析CSS，生成CSSOM树
- 将DOM树和CSSOM树结合，生成渲染树(Render Tree)
- Layout(回流)：根据生成的渲染树，计算他们在设备视口(viewport)内的确切位置和大小，这个阶段是回流
- Painting(重绘)：根据渲染树以及回流得到的几何信息，得到节点的绝对像素
- Display：将像素发送给GPU，展示在页面上

B:DOM的重绘和回流

- 重绘：元素样式的改变（但宽高、大小、位置等不变）
- 回流：元素的大小或者位置发生了变化（当页面布局和几何信息发生变化的时候），触发了重新布局，导致渲染树重新计算布局和渲染 当浏览器大小变化也会导致回流
- 注意：回流一定会触发重绘，而重绘不一定会回流

C：前端性能优化之：避免DOM的回流

- 放弃传统操作dom的时代，基于vue/react开始数据影响视图模式
- 分离读写操作（现代的浏览器都有渲染队列的机制）
- 样式集中改变

> 1.把样式全部放在一个类里面 然后直接给dom加一个类
>
> 2.box.style.cssText="margin:20px auto;width :100px ;height: 100px" 可以用cssText来一次性添加样式

- 缓存布局信息

> div.style.left=div.offsetLeft + 1 + 'px'; div.style.top = div.offsetTop+1+'px' 这个相当于读一次写一次 读一次写一次 两次回流
>
> 改为
>
> var curLeft = div.offsetLeft var curTop = div.offsetTop
>
> div.style.left = curLeft+1+'px'  div.style.top = curTop+1+'px'
>
> 读一次 写一次 回流一次 读写分离相当于

- 元素批量修改

```js
for(let i = 0;i<10;i++){
    let span = document.createElement('span')
    span.innerHTML = i
    box.appendChild(span)
} //这个改变了10次布局 触发十次回流
改成
let str = ``
for(let i = 0;i<10;i++){
    str + =`<span>${i}</span>`
}
box.innerHTML = str//触发一次  不过这种是用innerHTML是整体覆盖不是追加可以采用下面的
//文档碎片:存储文档的容器
let frg = document.createDocumentFragment()
for(let i =0;i<10;i++){
    let span = document.createElement('span')
    span.innerHTML = i
    frg.appendChild(span)
}
box.appendChild(frg)
```



- 动画效果应用到position属性为obsolute或fixed的元素上(脱离文档流)
- css3硬件加速(GPU加速)

```JS
比起考虑如何减少回流重绘，我们更期望的是，根本不要回流重绘；transform\opacity\filters...这些属性会触发硬件加速，不会引起回流和重绘...
可能会引起的坑：过多使用会占用大量内存，性能消耗严重、有时候会导致字体模糊等
```



- 牺牲平滑度换取速度
- 避免table布局和使用css的javascript表达式

## 7.断开连接(四次挥手)

![image-20231119214705383](https://lailema.oss-cn-chengdu.aliyuncs.com/img/bjb202311192147570.png)

- 第一次挥手：由浏览器发起，发送给服务器，我请求报文发送完了，你准备关闭吧
- 第二次挥手：由服务器发起，告诉浏览器，我接收完请求报文，我准备关闭，你也准备吧
- 第三次挥手：由服务器发起，告诉浏览器，我响应报文发送完毕，你准备关闭吧
- 第四次挥手：由浏览器发起，告诉服务器，我响应报文接收完毕，我准备关闭，你也准备吧

### Connection:Keep-Alive 保持TCP不中断  因为每次建立连接3次挥手 断开连接4次挥手很麻烦

![image-20231119215112113](https://lailema.oss-cn-chengdu.aliyuncs.com/img/bjb202311192151304.png)

# 2.前端性能优化汇总

## 1.减少HTTP的请求次数和传输报文的大小 

这几点来回答：合并压缩 延迟加载 新的文件格式代替传统的文件格式

下面技术一定要找东西练

- CSS SPRITE(雪碧图、图片精灵)技术

- 使用字体图标或者svg等矢量图

             - 减少HTTP请求次数或者减少请求内容的大小 因为字体图标是一起被请求到前端
             - 渲染更快：因为他们是基于代码渲染的就是他们本身就是代码，而对于位图(png/jpg/gif)是需要先把图片编码再渲染
             - 不容易失真变形
             - 也可以使用webp格式图片，这种格式要小一些(但是需要服务器端支持这种格式的请求处理)

- 图片懒加载(延迟加载)技术 

            - 第一次加载页面的时候不去请求真实的图片，提高第一次渲染页面的速度
            - 当页面加载完，把出现在用户视野区域中的图片做真实加载，没有出现的先不加载(节约流量，也能减少对服务器的请求压力)
            - 对于数据我们也尽可能分批加载(不要一次请求过多的数据，例如分页技术)

- 音视频文件取消预加载(preload='none'),这样可以增加第一次渲染页面的速度，当需要播放的时候在加载 默认打开就会加载这样肯定会消耗性能也会消耗流量

- 客户端和服务器端的数据传输尽可能基于JSON格式完成，XML格式比JSON格式要大一些（还可以基于二进制编码或者文件流格式，这种格式比文件传输好很多）

- 把页面中的css/JS等文件进行合并压缩

      - 合并：争取css和JS都只导入一个(webpack可以实现自动合并压缩)
      - 压缩：基于webpack可以压缩、对于图片自己找工具先压缩、还可以使用服务器的GZIP压缩

- 图片地图：对于多次调取使用的图片(尤其是背景图)，我们尽可能把它们提取成为公共的样式，而不是每一次重新设置background 意思就是把背景放在一个类里到时候直接加载这个类就可以

- 图片BASE64(用base64码代表图片，减少http请求，增加浏览器渲染的速度，所以真实项目中，如果图片加载缓慢，可能base64一下就好了；但是，base64会导致文件中的代码超级恶心，不利于维护和开发，所以很少使用；webpack中可以配置图片的base64)

  

## 2.设置各种缓存、预处理和长连接机制

网络缓存 和 本地缓存

- 把不经常更改的静态资源做缓存处理(一般做的是304或者ETAG等协商缓存)

- DNS缓存或者预处理(DNS PREFETCH)，减少DNS的查找

- 设置本地的离线存储(manifest)或者把一些不经常更改的数据做本地存储(webstorage、indexdb)等

- 有钱就做CDN（地域分布式服务器），还有一个财大气粗的方式：加服务器

- 建立 Connection:keep-alive TCP长连接

- 建立 Cache-Control 和 Expires HTTP的强缓存

- 使用HTTP2版本协议（现在用的一般都是HTTP1.1)

  - 可以多条tcp通道共存=>管道化链接
  - 思考题:HTTP VS HTTPS
  - 思考题：HTTP1 VS HTTP2

- 一个项目分为不同的域（不同的服务器）例如：资源web服务器、数据服务器、图片服务器、视频服务器等，这样合理利用服务器资源，但是导致过多的dns解析

  

  

  

## 3.代码方面的性能优化

- 减少对闭包的使用(因为过多使用闭包会产生很多不销毁的内存，处理不好的话，会导致内存溢出"栈溢出")，减少闭包的嵌套(减少使用域链的查找层级)

```JS
function func(){
    func()
}
func()
//=>解决方案
function func(){
    setTimemout(func,0)
}
func()

//=>相互引用:引用类型之间的相互调用，形成嵌套式内存(高程3)
let obj1 = {
    name:'OBJ1'
}
let obj2 = {
    name:'OBJ2',
    x:obj1
}
obj1.x = obj2
```

- 对于动画来说：能用css解决的不用js（能够用transform处理的，不用传统的css样式，因为transform开启硬件加速，不会引发回流，再或者使用定位的元素也会好很多，因为定位的元素脱离文档流，不会对其他元素的位置造成影响），能用requestAnimationFrame解决的不用定时器
       - requestAnimationFrame还有一个好处，当页面处于休眠五访问状态，动画会自己暂停，知道恢复访问才开始，而定时器是不论什么状态，只有页面不管，就一直处理
- 避免使用iframe(因为iframe会嵌入其他页面，这样父页面渲染的时候，还要同时把子页面也渲染了，渲染进度会变慢)
- 减少直接对dom的操作(原因是减少dom的回流和重绘)，当代项目基本上都是基于mvvm/mvc数据驱动试图渲染的，对dom的操作框本身完成，性能要好很多
- 低耦合高内聚(基于封装的方式：方法封装、插件、组件、框架、类库等封装，减少页面中的冗余代码，提供代码使用率)
- 尽可能使用事件委托(这样就减少了操作dom )把事件绑定给父元素然后子元素被点击后冒泡到父元素
- 避免出现死循环或者嵌套循环(嵌套循环会成倍增加循环的次数)
- 项目中尽可能使用异步编程来模拟出多线程的效果，避免主线程阻塞(异步操作基于promise设计模式来管理)
- js中不要使用with
- 避免使用css表达式 (在css中写一些类似js的代码的表达式 性能不好咯)
- 函数的防抖和节流
- 减少使用eval(主要原因是 防止压缩代码的时候，由于符号书写不合规，导致代码混乱)
- 减少filter滤镜的使用
- 尽可能减少选择器的层级（选择器是从右向左解析） .box a{} 和 a{}
- 尽可能减少table布局
- 手动回收堆栈内存(赋值为null)

​		

JS前端代码优化的108条建议

雅虎css代码优化的36条建议

### 事件委托

```JS
事件委托（Event Delegation）是一种常见的JavaScript事件处理模式，它利用了事件冒泡（event bubbling）的原理来在父级元素上统一处理子元素的事件。这种模式对于动态内容和提高性能尤其有用。

在传统的事件处理中，如果你有多个子元素需要相同的事件处理器，你可能会直接给每个子元素分别绑定事件。例如：

javascript
Copy code
document.querySelectorAll('button').forEach(button => {
  button.onclick = function(event) {
    // 处理点击事件
  };
});
这种方法的问题是，如果你有很多子元素，每个元素都需要单独绑定事件，这会导致大量的事件处理器被创建，消耗内存。而且，如果你动态地添加或删除子元素，你需要管理这些事件处理器的绑定和解绑。

事件委托通过在父元素上绑定一个事件处理器来解决这些问题。当子元素上的事件被触发并冒泡到父元素时，你可以检查事件的来源，并相应地处理。例如：

javascript
Copy code
document.getElementById('parent').onclick = function(event) {
  if (event.target.tagName === 'BUTTON') {
    // 处理点击事件
  }
};
在上面的例子中，所有的按钮点击事件都会冒泡到ID为 parent 的元素，而 parent 元素上的单个事件处理器可以处理所有按钮的点击事件。这样，无论你有多少按钮，或者是否动态地添加或删除按钮，你都只需要一个事件处理器。
```

