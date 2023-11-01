// **例题
/* 下面写法是否可以修改元素的样式，如果不可以是为什么
1.
let AA = box.style
AA.color = 'red'
2
let BB = box.style.color
BB ='red'
结论 1可以  2不可以


小技巧
let box =document.getElementById("box")
=》 通过方法获取的元素是对象数据类型的值
=》console.log(typeof) =>"object"
如果你想打印来看这个对象 用 console.log(box) 打印出来的是dom节点
用console.dir(box) 打印详细的对象信息
1.id: 操作元素的ID值
2.className：操作元素的class样式类的值
3.innerHTML：操作的元素的内容（可以识别标签）
4.innerText：和innerHTML的区别是不能识别标签
5.style：操作元素的行内样式
6.tagName：获取元素的标签名（一般大写）


原因：


*/
