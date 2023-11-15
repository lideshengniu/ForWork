let $imgBox = $('.imgBox'),
  $img = $imgBox.children('img'),
  $window = $('window');

//=>jq中的事件绑定支持多事件绑定 ：window.onload & window.onscroll 两个事件触发的时候执行相同的事情
$window.on('load scroll', function () {
  if ($img.attr('isLoad') === 'true') {
    return;
  }
  let $A = $imgBox.outerHeight() + $imgBox.offset().top,
    $B = $window.outerHeight() + $window.scrollTop();
  if ($A <= $B) {
    $img.attr('src', $img.attr('data-img'));
    $img.on('load', function () {
      //   $img.css('display', 'block');
      $img.stop().fadeIn();
    });
    $img.attr('isLoad', true);
  }
});
// 多组img
let $container = $('.$container'),
  $imgBoxs = null,
  $window = $(window);
let str = '';
new Array(20).fill(null).forEach((item) => {
  str += `<div class="imgBox">
<img
  src="https://img2.baidu.com/it/u=2694083387,3251960947&fm=253&fmt=auto&app=120&f=JPEG?w=684&h=361"
  alt=""
  data-img="https://img2.baidu.com/it/u=2694083387,3251960947&fm=253&fmt=auto&app=120&f=JPEG?w=684&h=361"
/>
</div>`;
});
$container.html(str);
$imgBoxs = $container.children('.imgBox');
//=>多张图片延迟加载
$window.on('load scroll', function () {
  let $B = $window.outerHeight() + $window.scrollTop();
  //循环每一个图片区域，根据自己区域距离body的距离，计算出里面的图片是否加载
  $imgBoxs.each((index, item) => {
    let $item = $(item),
      $itemA = $item.outerHeight() + $item.offset().top,
      isLoad = $item.attr('isLoad');
    if ($item <= $B && isLoad !== 'true') {
      let $img = $item.children('img');
      $img.attr('src', $img.attr('data-img'));
      $img.on('load', function () {
        //   $img.css('display', 'block');
        $img.stop().fadeIn();
      });
    }
  });
});
