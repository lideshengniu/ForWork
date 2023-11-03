let time = new Date();
// console.log(time);
/* 
  获取当前客户端（本机电脑）本地的时间
  用户可以修改 所以不能作为重要的参考依据

  2023-11-02T02:20:07.393Z
  

标准日期对象提供了一些属性和方法供我们使用
   1.getFullYear()获取年
   2.getMonth()获取月 
   3.getDate()获取日
   4.getDay()获取星期 结果是0-6代表周日到周六
   5.getHours()获取时
   6.getMinutes()获取分
   7.getSeconds()获取秒
   8.getMilliseconds()获取毫秒
   9.getTime()获取当前日期距离1970/1/1 00:00:00这个日期之间的毫秒差
   10.toLocaleDateString()获取年月日（字符串）
   11.toLocaleString() 获取完整的日期字符串
   */
typeof Date(); // =>"object"
//
//!1.
