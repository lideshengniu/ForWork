var tabBox = document.getElementById('tabBox');
var tabList = tabBox.getElementsByTagName('div');
var navBox = document.getElementById('navBox');
var navList = navBox.getElementsByTagName('li');
console.dir(navBox, '****************');
for (var i = 0; i < navList.length; i++) {
  navList[i].onclick = function () {
    // 我想用的是点击这个LI的索引，但是I不是
    // changeTab(i);
    /* 
    只有js代码加载完成才能看到页面，只有看到页面用户才能点击
    加载到循环这个代码了 i = 0  i<3 i++
    i=0 navList[0].onclick = function(){...}绑定事件的时候方法没有执行，点击第一个LI的时候它才执行
     i=1 navList[1].onclick = function(){...} i++ =>2

      i=2 navList[2].onclick = function(){...} i++ =>3 
      3<3 不通过，循环结束此时i已经是3 

      循环结束看到了页面，用户去点击了某一个页卡，接下来开始执行绑定的方法，方法中遇到了一个I，但是此时I已经是循环结束后的3了
    
    */
    // 解决方法一：自定义属性解决办法
    navList[i].myIndex = i;
    navList[i].onclick = function () {
      changeTab(this.myIndex);
    };

    // 放法 2
    for (var i = 0; i < navList.length; i++) {
      navList[i].onclick = (function (i) {
        return function () {
          changeTab(i);
        };
      })(i);
    }
    // 方法 3
    for (let i = 0; i < navList.length; i++) {
      navList[i].onclick = function () {
        changeTab(i);
      };
    }
  };
}
function changeTab(clickIndex) {
  //1.先让所有的LI和DIV都没有选中的样式
  for (var i = 0; i < navList.length; i++) {
    navList[i].className = '';
    tabList[i].className = '';
  }
  navList[clickIndex].className = 'active';
  tabList[clickIndex].className = 'active';
}
