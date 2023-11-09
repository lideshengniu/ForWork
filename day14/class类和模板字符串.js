let year = '2019',
  month = '08',
  day = '09';
// =>"你好，小伙伴。今天是2019年08月09日"
let res = '你好，小伙伴。今天是' + year + '年' + month + '月' + day + '日';

//  =====
// 项目中会大量进行字符串拼接操作，传统的es3语法模式下字符串拼接是一个非常苦逼的任务
let ID = 'box';
let html = '<ul class="list clear" id="' + ID + '">';
console.log(html);
