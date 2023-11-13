/* 
 图片完全显示出来的体哦阿健
  A：盒子底边距离body(页面最顶端)的距离：盒子的高度＋盒子距dody的上偏移
  B：浏览器底边距离body的距离：一屏幕的高度+卷去的高度
  A<=B:盒子就完全出现在用户的视野中
   让图片显示
 获取图片TRUE-IMG属性的值，赋值给src属性，当图片能正常加载出来后，让图片显示即可
*/
function offset(curEle) {
  let par = curEle.offsetParent,
    l = curEle.offsetLeft,
    t = curEle.offsetTop;
  //存在夫参照物，而且还没有找到body
  while (par && par.tagName !== 'BODY') {
    //在原有偏移的基础上累加：父参照物的边框，父参照物的偏移
    if (!/MSIE 8\.0/.test(navigator.userAgent)) {
      l += par.clientLeft;
      t += par.clientTop;
    }
    l += par.offsetLeft;
    t += par.offsetTop;
    //继续获取上级参照物
    par = par.offsetParent;
  }
  return {
    top: t,
    left: l,
  };
}
let imgBox = document.querySelector('.imgBox'),
  _img = imgBox.querySelector('img');
//=>显示图片
function lazyImg(curImg) {
  let trueImg = curImg.getAttribute('trueImg');
  curImg.src = trueImg;
  //校验图片是否能够正常加载出来：img.onload事件用来监听图片是否能加载
  curImg.onload = function () {
    curImg.style.display = 'block';
  };
  curImg.isLoad = true;
}
// 监听页面滚动事件(不论基于什么方式，只要页面滚动了，则触发事件)
window.onscroll = function () {
  if (_img.isLoad) return;
  let HTML = document.documentElement,
    B = HTML.clientHeight + HTML.scrollTop;
  A = imgBox.offsetHeight + offset(imgBox).top; //=>当前案例中，获取距离body的上偏移完全可以imgBox.offsetTop,因为父参照物就是body
  if (A < B) {
    lazyImg(_img);
    // =>符合图片显示的条件了
  }
};
