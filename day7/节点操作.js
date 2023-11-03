let box = document.getElementById('box');
// 标准浏览器（非IE6-8）中对把空格和换行当作文本节点处理
console.log(box.childNodes);

//只想要元素节点（但是ie6-8）使用children会把注释也当作元素节点
console.log(box.children);

/* 
children:获取指定上下文中，所有的元素子节点
   @params
    context[element object]指定的上下文元素信息
   @return
    [array]返回所有的元素子节点集合
*/
function children(context) {
  let res = [];
  nodeList = context.childNodes;
  for (var i = 0; i < nodeList.length; i++) {
    var item = nodeList[i];
    item.nodeType === 1 ? res.push(item) : null;
  }
  return res;
}
console.log(children(box));
console.log(box.firstElementChild);
var fangqi = document.getElementById('fangqi');
// console.log(fangqi.previousElementSibling);
// 获取上一个哥哥元素点
function prev(context) {
  var pre = context.previousSibling;
  while (pre.nodeType !== 1) {
    pre = pre.previousSibling;
  }
  return pre;
}
console.log(prev(fangqi));

//上面的方法就是jquery的源码
// jquery 中提供一些方法供我们获取元素：children pre next prevAll  nextAll sibling siblings index ...
