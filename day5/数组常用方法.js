// 数组是对象数据类型，他属于特殊的对象
/* 
数字作为索引(key 属性名)
1.方法的作用和含义
2.方法的实参（类型和含义）
3.方法的返回值
4.原来的数组是否会发生改变
*/
//!! 1.实现数组增删改的方法  这一部分方法都会改变原有的数组
//!! 1 push
/* 
push 向数组末尾增加内容        
@params (表示参数的类型即可以有多个参数切类型任意的意思)
多个任意类型

@return  代表返回的参数的意思
新增后数组的长度
   
*/
// let ary = [10, 20];
// let res = ary.push(30, 'AA', {
//   name: '珠峰培训',
// });
// console.log(res, ary); //5 [10,20,30,'AA',{name:"珠峰培训"}]
// 当然新增也可以直接赋值到末尾后一个
// ary[ary.length] = 40;

//!! 2. unshift
/* 
unshift:向数组头部增加内容
@params
  多个任意类型
@return 
  新增后数组的长度
*/
// let ary = [10, 20];
// let res = ary.unshift(30, 'AA');
// console.log(res, ary);
// ary = [100, ...ary];
//!!!! 对了你可以arr[-1] = 2  但是这样是没什么用的 length长度也不会增加
//!! 3. shift
/* 
shift:删除数组中的第一项
@params
@return 
  删除的那一项
*/
// let ary = [10, 20, 30, 40];
// let res = ary.shift();
// console.log(res, ary); // 4 [20,30,40]
// 基于原生JS中的DELETE 把数组当做普通的对象，确实可以删除掉某一项内容，但是不会影响数组本身的结构特点(length长度不会跟着修改),真实项目中杜绝这样的删除使用
// delete ary[0];
// console.log(ary); //{1:30,2:40,length:3}

//!! 4. pop 删除数组中的最后一项
/* 
pop:删除数组中的最后一项
@params
@return 
删除的那一项
*/
// let ary = [10, 20, 30, 40];
// let res = ary.pop();
// console.log(res, ary); // =>40 [10,20,30]

// 另一种删除最后一个的方法
// 基于原生js让数组长度干掉一位，默认干掉的就是最后一项
// ary.length--; // =>ary.length = ary.length-1
// console.log(ary);

//!! 5. splice 实现数组的增加、删除、修改
/* 
splice:实现数组的增加、删除、修改
@params
 n,m都是数字 从索引n开始删除m个元素(m不写，是删除到末尾)
@return 
删除的部分用新数组存储起来返回
*/
// let ary = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// let res = ary.splice(2, 4);
// console.log(res, ary); // =>[30,40,50,60] [10,20,70,80,90]
// 基于这种方法可以清空一个数组，把原始数组中的内容以新数组存储起来(有点类似数组的克隆：把原来数组克隆一份一模一样的给新数组)
// res = ary.splice(0);
// console.log(res, ary); //[10,20,70,80,90][]

// 删除最后一项和第一项
// ary.splice(ary.length - 1);
// ary.splice(0, 1);
//!! 5. splice 实现数组的增加
/* 
splice:实现数组的增加、删除、修改
@params
 n,m,x都是数字 从索引n开始删除m个元素(m不写，是删除到末尾)用x占用删除的部分
 n,0,x 从索引n开始，一个都不删，把x放到索引n的前面
@return 
删除的部分用新数组存储起来返回
*/
let ary = [10, 20, 30, 40, 50];
let res = ary.splice(1, 2, '珠峰培训', '哈哈');
console.log(res, ary); //=>[20,30]   [10,'珠峰培训','哈哈'，40,50]
// 实现增加
ary.splice(3, 0, '呵呵呵');
console.log(ary); //[10,'珠峰培训', '哈哈','呵呵呵',40,50]
//!!! 注意实现增加是再需要加的坐标处添加      比如我要在索引为2的数后面加一个那就需要再索引为3的地方开始加 而不是从索引为2开始 要再哪儿加索引就从那儿开始，比如要再末尾加也就是在原来的末尾后一个加一个数那就是在索引为length的地方加
// 数组末尾追加
ary.splice(ary.length, 0, 'AAA');
//数组开始追加
ary.splice(0, 0, 'BBB');

let arry = [1, 2, 3];
arry.splice(1, 0, 3);
console.log(arry);
// 注意你很容易犯错的一个地方 就是增加 比如你要从索引 为1的地方放入新加的 那你就直接把第一值设置为该索引   如果你是要在索引为1的之后增加那你就把第一个值设置为索引+1
