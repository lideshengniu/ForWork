# 1.this

函数执行的主题（不是上下文）：意思是谁把函数执行的，那么执行主体就是谁

THIS非常的不好理解，以后遇到THIS，想一句话:"你以为你以为的就是你以为的"

1.给元素的某个事件绑定方法，当事件触发方法执行的时候，方法中的this是当前操作的元素本身

2.如何确定执行主体(this)是谁？当方法执行时候，我们看方法前面是否有点，没有点this是window或undefined 有点，点前面是谁this就是谁

```JS
var name = '珠峰培训'
function fn(){
    console.log(this)
}
var obj = {
    name:"你好",
    fn:function fn(){
        console.log(this)
    }
}
obj.fn() // =>this:obj
fn()//=>window(非严格模式，严格模式下是undefined)
window.fn()把window.省略了 严格模式下如果省略了就是undefined


(function(){
    //自执行函数中的this是window或undefined
})()
```

思考？

```js
//=>hasOwnProperty 方法中的this:ary._proto_._proto_
ary._proto_.proto_.hasOwnProperty()
let obj = {
    fn:(function(n){})(10)
    //this:window
    return function(){
        //this:obj
    }
}
obj.fn()

====
    function fn(){
    // this:window
    console.log(this)
}
document.body.onclick = function(){
    // this:body
    fn()
}
```

