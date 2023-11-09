# Json格式的数据

我们基于ajax等其他方式从服务器获取的数据结果一般都是：json格式或者xml格式

- json格式的字符串
- json格式的对象

```js
// =>"普通对象"
let obj = {
    name:"珠峰"
}
//=>json格式对象
obj={
    "name":"珠峰"
}
//=>json格式的字符串
let srt = '{"name":"珠峰"}'
```

把json格式的字符串转为对象：window.JSON.parse

```js
let str = '{"name":"珠峰"}'
let obj = JSON.parse(str)
//=>{name:"珠峰"}
//=>IE低版本浏览器中，全局对象window中灭有json这个对象，也就没有所谓的parse等方法
obj = eval('('+str+')')
```

把对象转换为json格式字符串:JSON.stringify

```js
let obj = {
    name:"珠峰"
}
let str = JSON.stringify(obj)

geoke

let xhr = new XMLHttpRequest()
xhr.open("get",url,false)
xhr.onreadystatechange = function(){
    if(xhr.status === 200 && xhr.readystate===4){
        data = xhr.responseText
    }
}
xhr.send()
```

# 关于sort排序的

```js
let ary = [{id:1,age:25},{id:2,age:32},{id:3,age:23}]
ary.sort((a,b)=>{
    return a.age - b.age
})
//sort 传递一个函数，函数中有A/B
//A当前项的后一项
//B当前项
//如果当前函数返回的是一个小于零的值，让A和B的位置互换，如果返回的是大于等于零的值，位置保持不变


//按照NAME排序 //localCompare能够进行字符串比较(非数字比较)
ary.sort((a,b)=>{
    return a.name.localeCompare(b.name)
})
'周'.localeCompare("秦") //1
'秦'.localeCompare("周") //-1
'秦'.localeCompare("秦") //0
```

