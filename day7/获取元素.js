let tabBox = document.getElementById('tabBox');
// querySelector获取的是一个元素对象，哪怕页面中有多个符合的，也只获取第一个
// querySelectorAll获取的是一个集合，哪怕只有一个符合，也是一个集合，集合中只有一项
tabBox = document.querySelector('#tabBox');
// getElementsByTagName是获取指定上下文后代中所有的标签名为N的元素集合
tabBox = document.getElementsByClassName('tabBox')[0];
//获取指定下的而不是所有后代的
//1.获取tab 下面的li
let tab = tabBox.querySelector('.tab');
let navList = tab.getElementsByTagName('li');
//2.还是获取tab下面的li
navList = tabBox.querySelectorAll('.tab li');
navList = tabBox.getElementsByTagName('li');
// 获取tab下面的第二个li
navList = document.querySelectorAll('.tab li:nth-child(2)');
//获取指定范围的div
let divList = document.querySelectorAll('.tabBox>div');
console.log(divList);

var sexList = document.getElementsByName('sex');
//不考虑兼容可以这么做
sexList = document.querySelectorAll('[name = sex]');
var submit = document.querySelector('#submit');
submit.onclick = function () {
  var res = null;
  for (var i = 0; i < sexList.length; i++) {
    var item = sexList[i];
    if (item.checked) {
      res = item.value;
      break;
    }
  }
  alert(res);
};
console.log(sexList, submit);
