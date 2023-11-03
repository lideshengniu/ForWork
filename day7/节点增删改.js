/*  在js中动态增删改元素
createElement 创建元素对象
createTextNode 创建文本对象
appendChild 把元素添加到容器的末尾
insertBefore 把元素添加到指定容器中指定元素的前面 insertBefore([新增元素],[指定元素])
cloneNode(true/false) 克隆元素或者节点
removeChild 移除容器中的某个元素

*/
let box = document.createElement('div');
box.id = 'boxActive';
box.style.width = '200px';
box.style.height = '200px';
box.className = 'RED';

let haha = document.getElementById('haha');
let text = document.createTextNode('珠峰培训');
box.appendChild(text);
document.body.insertBefore(haha, box);
// document.body.insertBefore(haha);
