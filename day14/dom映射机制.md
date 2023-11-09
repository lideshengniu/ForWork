```js
let xhr = new XMLHttpRequest()
xhr.open("get","url",false)
xhr.onreadystatechange=function(){
    if(xhr.status===200 && xhr.readyState === 4){
        Data = xhr.responseText
    }
}
xhr.send()
```

