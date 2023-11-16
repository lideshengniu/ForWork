/* 
旋转数组
给定一个数组，将数组中的元素向右移动k个位置，其中k是非负数
输入：[1,2,3,4,5,6,7] 和 k=3
输出: [5,6,7,1,2,3,4]
解释：
向右旋转1步：[7,1,2,3,4,5,6]
向右旋转2步：[6,7,1,2,3,4,5]
向右旋转3步：[6,5,7,1,2,3,4]

输入：[-1,-100,3,99] 和 k=2
输出: [3,99,-1,-100]
解释：
向右旋转1步：[99,-1,-100,3]
向右旋转2步: [3,99,-1,-100]


*/
function rotate(k) {
  //=>参数处理
  if (k < 0 || k === 0 || k === this.length) return this;
  if (k > this.length) k = k % this.length;
  //=>旋转数组
  //   return this.slice(-k).concat(this.slice(0, this.length - k)
  //   );
  //  return this.splice(this.length - k).concat(this);
  //   return [...this.splice(this.length - k), ...this];
  //   for (let i = 0; i < k; i++) {
  //     this.unshfit(this.pop());
  //   }
  new Array(k).forEach(() => this.unshift(this.pop()));
  return this;
}
Array.prototype.rotate = rotate;
