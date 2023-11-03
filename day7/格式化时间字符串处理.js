// new Date()除了获取本机时间，还可以把一个时间格式字符串转换为标准的时间格式
console.log(new Date('2019/7/26')); //2019-07-25T16:00:00.000Z
console.log(new Date('2019-7-26 10:20:20')); //2019-07-26T02:20:20.000Z

/* 
支持的格式
   yyyy/mm/dd
   yyyy/mm/dd hh:mm:ss
   yyyy-mm-dd 这种ie下不支持 trident


*/
// 基于日期对象
let time = '2019-7-26 10:20:20';
function formatTime2(time) {
  time = time.replace(/-/g, '/');
  time = new Date(time);
  let year = time.getFullYear(),
    month = addZero(time.getMonth() + 1),
    day = addZero(time.getDate()),
    hours = addZero(time.getHours()),
    minutes = addZero(time.getMinutes()),
    seconds = addZero(time.getSeconds());
}
function formatTime() {
  let ary = time.spilit(' ');
  aryLeft = ary[0].split('-');
  aryRight = ary[1].split(':');
  ary = aryLeft.concat(aryRight);
  let result = ary[0] + '年' + addZero(ary[1]) + '月' + addZero(ary[2]) + '日';
  result +=
    ' ' + addZero(ary[3]) + ':' + addZero(ary[4]) + ':' + addZero(ary[5]);
  return result;
  //加起来等于 time.split(/(?: |-|:)/g)
}
//!!!!!!!!!好活当赏
//封装一套公共的时间字符串格式化处理的方式
String.prototype.formatTime = function formatTime(template) {
  typeof template === 'undefined'
    ? (template = '{0}年{1}月{2}日 {3}:{4}:{5}')
    : null;
  // this 我们要处理的字符串
  // 获取日期字符串中的数字信息
  /* repalce方法如果后面是一个函数 函数的三个参数
  arguments[0]是匹配到的子字符串
arguments[1]是匹配到的子串的索引位置
arguments[2]是源字符串本身

  */
  let matchAry = this.match(/\d+/g);
  template = template.replace(/\{(\d+)\}/g, (x, y) => {
    let val = matchAry[y] || '00';
    val.length < 2 ? (val = '0' + val) : null;
    return val;
  });
  return template;
};
console.log(time.formatTime());
