/* 
 基于内置类的原型扩展方法
    在内置类原型上的方法，类所对应的实例可以直接调取使用，例如：实例.方法() ary.push()
    如果我们也把自己写的方法放到原型上,那么当前类的实例也可也直接这样调取使用了，很方便 
 但是也有需要注意的地方
   1.自己扩展的方法不能影响原有内置的方法(我们自己设置的方法最好加前缀：my)
   2.扩展方法中的this一般都是当前类的实例(也就是要操作的值) 实例.方法()
*/
~(function () {
  function myUnique() {
    let obj = {};
    for (let i = 0; i < this.length; i++) {
      let item = this[i];
      if (typeof obj[item] !== 'undefined') {
        this[i] = this[ary.length - 1];
        this.length--;
        i--;
        continue;
      }
      obj[item] = item;
    }
    obj = null;
    // 保证当前方法执行完返回的结果依然是array类的一个实例
    return this;
  }
  // =>扩展到内置类的原型上
  Array.prototype.myUnique = myUnique;
})();
function unique(ary) {
  let obj = {};
  for (let i = 0; i < ary.length; i++) {
    let item = ary[i];
    if (typeof obj[item] !== 'undefined') {
      ary[i] = ary[ary.length - 1];
      ary.length--;
      i--;
      continue;
    }
    obj[item] = item;
  }
  obj = null;
  return ary;
}
let ary = [12, 23, 13, 12, 23, 24, 34];
//ary.myUnique()
//ary.sort((a,b)=>a-b)
// =>链式写法(保证返回值依然是当前类的实例 一般都会return this)
ary
  .myUnique()
  .sort((a, b) => a - b)
  .slice(2)
  .push('珠峰')
  .concat(12); //报错.concat is not a function 因为push后返回的是一个数字不是数字没有数字的concat方法

console.log(ary);
