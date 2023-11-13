let time = '2019-8-13 16:51:3';
//=>服务器获取的
// "2019/8/13 16:51:3"
// "2019-8-13 16:51:3"
//=>想要转变为的格式
//=>"08月13日 16时51分"
//=>”2019年08月13日"
~function () {
  /* 
  queryURLParams :获取URL地址问号和面的参数信息(可能也包含hash值)
    @params
    @return 
       [object]把所有问号参数信息以键值对的方式存储起来并返回
 */
  function queryURLParams() {
    let obj = {};
    this.replace(/([^?=&#]+)=([^?=&#]+)/g, (...[, $1, $2]) => (obj[$1] = $2));
    this.replace(/#([^?=&#])/g, (...[, $1]) => (obj['HASH'] = $1));
    return obj;
  }

  /* 
      formatTime:时间字符串的格式化处理
      @params
       templete:[string]模板
       模板规则:{0}->年 {1-5}=》月日时分秒
       @return
        [string]格式化后的时间字符串
    */
  function formatTime(templete = '{0}年{1}月{2}日 {3}时{4}分{5}秒') {
    let timeAry = this.match(/\d+/g);
    //["2019","8","13"]
    // let templete = '{0}年{1}月{2}日 {3}时{4}分{5}秒';
    templete = templete.replace(/\{(\d+)\}/g, (content, $1) => {
      //=>content:当前本次大正则匹配的信息 $1:本次小分组单独匹配的信息
      //以$1的值作为索引，到time-ary中找到对应的时间(如果没有则用00补)
      let time = timeAry[$1] || '00';
      time.length < 2 ? (time = '0' + time) : null;
      return time;
    });
    return templete;
  }
  ['formatTime', 'queryURLParams'].forEach((item) => {
    String.prototype[item] = eval(item);
  });
};
let ary = [1, 2];
let url = 'http://www.zhufengpeixun.cn/?lx=1&from=wx#video';
console.log(ary[3]); //undefined
