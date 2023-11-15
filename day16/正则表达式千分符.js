let num = '15628954'; //"15,628,954"千分符
function millimeter() {
  // ?= 正向预查：只匹配不捕获这里捕获不只是分组而是这个位置也不会被匹配到       反向预查：?!只要条件不符合 ?:不捕获分组
  return this.replace(/\d{1,3}(?=(\d{3})+$)/g, (content) => {
    return content + ',';
  });
}

num = num.split('').reverse().join('');
// num.length-1 是因为总不能给第一个数也加,号把  ,123,123
// 这里＋4的原因是 因为你加了逗号以后 肯定就多了一个字符啊
for (let i = 2; i < num.length - 1; i += 4) {
  let prev = num.substring(0, i + 1),
    next = num.substring(i + 1);
  num = prev + ',' + next;
}
num = num.split('').reverse().join('');
console.log(num);
