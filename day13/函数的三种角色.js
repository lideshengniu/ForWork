(function (global, factory) {
  //=>global:window(浏览器下运行) or global(NODE下运行)
  //=>factory:function(window,noGlobal){...}
  'use strict';
  if (typeof module === 'object' && typeof module.exports === 'object') {
    // NODE 下运行
  } else {
    factory(global);
  }
})(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {
  //window:window
  //noGlobal:undefined
  var jQuery = function (selector, context) {
    return new jQuery.fn.init(selector, context);
    //new jQuery.prototype.init(selector,context)
  };
  var init;
  init = jQuery.fn.init = function (selector, context, root) {
    //...
  };
  init.prototype = jQuery.fn = jQuery.prototype;
  // init把自己的原型改成了jquery的原型也就相当于init成了jquery的实例
  if (!noGlobal) {
    window.jQuery = window.$ = jQuery;
  }
});
/* 
jQuery是一个构造函数 ：jQuery.prototype 上有很多供实例操作的方法,例如css...
$().css()

jQuery也是一个普通的对象，在它的堆空间中也存在很多的方法，例如ajax...
$.ajax()
*/
$(); //创建了jquery这个类的一个实例，可以调取jQuery.prototype(jQuery.fn)上的方法
