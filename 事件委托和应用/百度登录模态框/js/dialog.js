let $loginBtn = document.querySelector('#loginBtn'),
  $loginModal = document.querySelector('#loginModal'),
  $loginCloseBtn = document.querySelector('#loginCloseBtn'),
  $loginModalBack = document.querySelector('#loginModalBack'),
  $modalContent = document.querySelector('.modal-content');
$loginBtn.onclick = function () {
  //   console.dir($loginModal.style);
  $loginModal.style.opacity = 1;
  $loginModal.style.display = 'block';

  $loginModalBack.style.display = 'block';
  $loginModalBack.style.opacity = 1;
  //   setTimeout(() => {
  //   }, 100);
};
$loginCloseBtn.onclick = function () {
  $loginModal.style.opacity = 0;
  //   while ($loginModal.style.opacity == 0) {}
  $loginModal.style.display = 'none';
  $loginModalBack.style.display = 'none';
};
//=>实现拖拽
let $modalHeade = $loginModal.querySelector('.modal-header');
// $modalContent.onclick = function () {
//   console.log(1);
// };
//=>这样处理，当鼠标按下的时候，down方法中的this是modal-head，但是我们后期要操作整个盒子的样式，我们最好让this变为整个盒子(原生js对象)
$modalHeade.onclick = down.bind($modalContent);
function down(ev) {
  console.log(this.style.left);
  console.dir(this);
  this.startX = ev.pageX;
  console.log(this.offsetLeft);
  this.startY = ev.pageY;
  this.startL = parseFloat(this.style.left);
  this.startY = parseFloat(this.style.top);
  this._move = move.bind(this);
  this._up = up.bind(this);
  document.addEventListener('mousemove', this._move);
  document.addEventListener('mouseup', this._up);
}
// document.onmousemove('');
function move(ev) {
  console.log(1);
  let curL = ev.pageX - this.startX + this.startL,
    curT = ev.pageY - this.startY + this.startT;
  console.log(document.documentElement.clientWidth);
  let minL = 0,
    minT = 0,
    maxL = document.documentElement.clientWidth - this.clientWidth;
  maxT = document.documentElement.clientHeight - this.clientHeight;
  console.log(maxL, maxT);
  curL = curL < minL ? minL : curL > maxL ? maxL : curL;
  curT = curT < minT ? minT : curT > maxT ? maxT : curT;
  this.style.top = curT + 'px';
  this.style.left = curL + 'px';
  //   console.log(curT);
}
function up(ev) {
  document.removeEventListener('mousemove', this._move);
  document.removeEventListener('mouseup', this._up);
}
/* 
给元素设置自定义属性
  1.给内存空间中设置一个属性
     box.myIndex = 1;
     $box.myIndex = 1;
   2.把自定义属性设置在元素的行内属性上(设置的属性值最后都要变为字符串)
   =>我们在案例中，数据绑定阶段，把一些值存储到元素的行内上，以后要获取的时候只能基于attr/getAttribute获取
   box.setAttribute('myIndex',1)
   $box.attr('myIndex',1)
*/
