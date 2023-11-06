var tabBox = document.querySelector('#tabBox'),
  navList = document.querySelectorAll('#navBox li'),
  divList = tabBox.querySelectorAll('div');
// 实现选项卡切换
var changeTab = function (n) {
  for (var i = 0; i < navList.length; i++) {
    navList[i].className = '';
    divList[i].className = '';
  }
  navList[n].className = 'active';
  divList[n].className = 'active';
};
// 循环给每一个Li绑定点击事件
// for (var i = 0; i < navList.length; i++) {
//   navList[i].onclick = function () {
//     changeTab(i);
//   };
// }
/* 自定义属性解决 */
// for (var i = 0; i < navList.length; i++) {
//   navList[i].index = i;
//   navList[i].onclick = function () {
//     changeTab(this.index);
//   };
// }
/* 
*利用闭包解决
  1.闭包可以保存信息（栈内存不销毁即可），此处我们保存后续需要的索引信息即可
  2.执行事件绑定的小函数，遇到i，不让他忘全局找，找我们闭包中存储的索引即可（闭包是小函数的上级作用域，也就是小函数是在闭包中创建的）
*/
for (var i = 0; i < navList.length; i++) {
  //   navList[i].index = i;
  navList[i].onclick =
    (function (index) {
      return function () {
        changeTab(index);
      };
    },
    i);
}
