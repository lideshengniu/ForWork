// 引用数据类型
// object对象数据类型-普通对象
// {[key]:[value],...} 任何一个对象都是由零到多组键值对(属性名：属性值)组成的(并且属性名不能重复)
let person = {
  name: '易烊千玺', //也可以写成 "name":"易烊千玺"
  age: 40,
  height: '180kg',
  weight: '80kg',
  1: 100,
};
// 换取属性名对应的属性值
// =>对象.属性名
// =>对象[属性名] 属性名是数字或者字符串格式的
// =>如果当前属性名不存在，则不能使用点的方式获取属性值
// =>如果属性名是数字，则不能使用点的方式获取属性值 只能用[1] 来获取数字的值
person.age;
person['name'];
person.sex; // undefined
console.log(person[1]);
// console.log(person.1)  报错： =>SyntaxError ：语法错误

//设置属性名属性值
// => 属性名不能重复，如果属性名已经存在，不属于新增属于修改属性值
person.GF = '园园';
console.log(person['GF']);

//删除属性
// =>真删除：把属性彻底删除
delete person[1];
// =>假删除：属性还在，值为空
person.weight = null; // 这种能自己控制的就用null 不用undefined
