/* 
节点：Node(页面中所有的东西都是节点 )
节点集合：NodeList(getElementsByName / querySelectorAll)获取的都是节点集合
1.元素节点
   nodeType:1
   nodeName:大写的标签名
   nodeValue:null
2.文本节点
   nodeType:3
   nodeName:"#text"
   nodeValue:文本内容
3.注释节点
   nodeType:8
   nodeName:"#commen"
   nodeValue:注释内容
4.文档节点document
   nodeType:9
   nodeName:"#document"
   nodeValue:null

描述这些节点之间关系的属性
 childNodes：获取所有的子节点
 children:获取所有的元素子节点(子元素标签)
 parent:获取父亲节点
 firstChild:获取第一个子节点
 lastChild:获取最后一个子节点
 firstElementChild/lastElementChild 获取第一个和最后一个元素子节点(不兼容ie6-8)
 previousSibling:获取上一个哥哥节点
 nextSibling:获取下一个弟弟节点
 previousElementSibling/nextElementSibling:获取哥哥和弟弟元素节点(不兼容ie6-8)
*/
