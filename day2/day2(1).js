//数组是特殊的对象
let arr = [12, '哈哈', true, 13];
console.log(arr);
//打印出来{0:12,1:'哈哈',2:true,3:13,length:4}
console.log(arr.length);
console.log(arr['length']);
console.log(arr[1]); //所以就能理解为什么对象如果有属性名是数字就必须用[]

// 向数组末尾 追加内容
arr[arr.length] = 100; //就和给对象加属性一个道理
