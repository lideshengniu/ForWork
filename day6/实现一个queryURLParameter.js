// https; //sports.qq.com/kbsweb/game.htm?mid=100008:100024498
// https; //sports.qq.com/kbsweb/game.htm?mid=100008:100024496

/* 
结果：{
    lx:1,
    name:'zhufeng',
    teacher:'aaa',
    HASH:'box'
}

*/
// let url =
//   'http://www.zhufengpeixun.cn/index.html?lx=1&name=zhufeng&teacher=aaa#box';
// let askIndex = url.indexOf('?');
// let wellIndex = url.indexOf('#');
// let askText = url.substring(askIndex + 1, wellIndex);
// let wellText = url.substring(wellIndex + 1, url.length);
// let result = {};
// let askAry = askText.split('&');
// askAry.forEach((item) => {
//   let n = item.split('=');
//   let key = n[0];
//   let value = n[1];
//   result[key] = value;
// });
// result['HASH'] = wellText;

// console.log(result);
// console.log(askText, wellText);
// let ar = url.split(/(?: |&|#|\?)/);
// console.log(ar);

/* 
queryURLParams:获取URL地址中问号传参的信息和哈希值
@params
  url[string] 要解析的URL字符串
@return
  [object] 包含参数和哈希值信息的对象

*/
function queryURLParams(url) {
  // 获取？和#后面的信息
  let askIn = url.indexOf('?'),
    wellIn = url.indexOf('#'),
    askText = '',
    wellText = '';
  // #可能不存在
  wellIn === -1 ? (wellIn = url.length) : null;
  askIn >= 0 ? (askText = url.substring(askIn + 1, wellIn)) : null;
  //   console.log(askText);
  wellText = url.substring(wellIn + 1);
  // 2.获取每一部分信息
  let result = {};
  wellText !== '' ? (result['HASH'] = wellText) : null;
  if (askText !== '') {
    // console.log(true);
    let ary = askText.split('&');
    ary.forEach((item) => {
      let itemAry = item.split('=');
      result[itemAry[0]] = itemAry[1];
    });
  }
  return result;
  //   if (askIn >= 0) {
  //     // ?存在
  //     askText = url.substring(askIn + 1, wellIn);
  //   }
}

let url =
  'http://www.zhufengpeixun.cn/index.html?lx=1&name=zhufeng&teacher=aaa#box';
let params = queryURLParams(url);
console.log(params);
