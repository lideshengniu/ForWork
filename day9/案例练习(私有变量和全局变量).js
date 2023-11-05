//! 1
var ary = [12, 23];
function fn(ary) {
  console.log(ary); //[12,23]
  ary[0] = 100; // 这里形参虽然也叫ary但是是私有变量虽然指向和外边ary指向一样但是 外边的是全局变量
  ary = [100]; //所以这里也是把私有变量的值改变了而不是 全局的
  ary[0] = 0;
  console.log(ary); //[0]
}
fn(ary);
console.log(ary); //[100,23]
