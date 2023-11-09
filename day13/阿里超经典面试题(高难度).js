function Foo() {
  getName = function () {
    console.log(1);
  };
  return this;
}
Foo.getName = function () {
  console.log(2);
};
Foo.prototype.getName = function () {
  console.log(3);
};
var getName = function () {
  console.log(4);
};
function getName() {
  console.log(5);
}
Foo.getName(); //2
getName(); //4
Foo().getName(); //1
getName(); //1
new Foo.getName(); //2  =>运算顺序首先找到Foo.getName(AF2) 然后 new AF2() 别理解错了只是先找到Foo.getName函数 然后再new 这个函数()
new Foo().getName(); //3 Foo() Foo分别是有参和无参 有参优先级和.一样且从左往右 高于无参的优先级 所以这里是先new Foo()
new new Foo().getName(); //3  先执行new Foo()返回一个实例 然后new 实例.getName()    实例的new getName() 输出是3
