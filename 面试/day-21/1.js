/* 
push 源码
Array.prototype.push = function(val){
    this[this.length] = val
    
    => this.length 在原来的基础上加1 this.length++
    return this.length
}
*/
let obj = {
  2: 3, //=>1
  3: 4, //=>2
  length: 2, //=>3/4
  push: Array.prototype.push,
};
obj.push(1); //=>@@(1) //=>this:obj //=>obj[obj.length]=1 =>obj[2] = 1  // obj.length = 3
obj.push(2); //=>this:obj  //=>obj[obj.length] = 2 //=>obj[3]// obj.length = 4
console.log(obj); //{2:1,3:2,length:4,push:f push()}
