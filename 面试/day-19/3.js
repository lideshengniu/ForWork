//!!!!!! 1
function Foo() {
  Foo.a = function () {
    console.log(1);
  };
  this.a = function () {
    console.log(2);
  };
}
Foo.prototype.a = function () {
  console.log(3);
};
Foo.a = function () {
  console.log(4);
};
Foo.a(); //4
let obj = new Foo();
obj.a(); //2
Foo.a(); //1
//!!!!2
/* 
编写代码实现图片的懒加载 */

//!!!3
/* 编写一条正则，用来验证此规则：一个6-16位的字符串，必须同时包含有大写字母和数字*/
let regexp =
  /(?!^[a-zA-Z]+$)(?!^[a-z0-9]+$)(?!^[A-Z0-9]+$)(?!^[0-9]+$)^[a-zA-Z0-9]{6,16}$/;

//!!4
/* 
  实现一个$attr(name,value)遍历
  属性为name
  值为value的元素集合

  例如下面示例
  */
let ary = $attr('class', 'box'); //=>获取页面中所有class为box的元素
function $attr(property, value) {
  //获取当前页面中所有的标签
  let elements = document.getElementsByTagName('*'),
    arr = [];
  elements = Array.from(elements);
  elements.forEach((item) => {
    // =>存储的是当前元素property对应的属性值
    let itemValue = item.getAttribute(property);
    if (property === 'class') {
      //=>样式类属性名要特殊的处理
      new RegExp('\\b' + value + '\\b').test(itemValue) ? arr.push(item) : null;
      return;
    }
    if (itemValue === value) {
      //=>获取的值和传递的值校验成功：当前就是我们想要的
      arr.push(item);
    }
  });
  return arr;
}
//!5
/* 
 英文字母汉字组成的字符串，用正则给英文单词前后加空格
*/
let str = 'no作no死，你能你can，不能no哔哔';
let regexps = /\b[a-zA-Z]+\b/g;
str = str.replace(regexps, (item) => {
  console.log(item);
  return ` ${item} `;
});
console.log(str);
