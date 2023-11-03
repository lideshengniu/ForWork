/* 
DOM:document object model 文档对象模型 提供一些属性和方法供我们操作页面中的元素
1.document.getElementById() 指定在文档中基于ID或者这个元素对象
2.[context].getElementsByTagName() 在指定上下文（容器）中，通过标签名获取一组元素集合
3.[context].getElementsByClassName()在指定上下文中，通过样式类名获取一组元素集合（不兼容ie6-8）
4.document.getElementsByName()在整个文档中，通过标签的NAME属性值获取一组元素集合（ie中只有表单元素的name才能识别，所以我们一般应用在表单元素的处理）
5.document.head/document.body/document.documentElement 获取页面中的HEAD/BODY/HTML三个元素
6.[context].querySelector([selector])在指定上下文中，通过选择器获取到指定的元素对象
7.[context].querySelectorAll([selector])在指定上下文中，通过选择器获取到指定的元素集合
querySelector / querySelectorAll 不兼容 ie6-8

*/
let box = document.querySelector('#box');
let links = box.querySelectorAll('a');
// links = document.querySelectorAll("#box a")
let aas = document.querySelectorAll('.aa');
