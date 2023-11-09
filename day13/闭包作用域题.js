function fun(n, o) {
  console.log(o);
  return {
    fun: function (m) {
      return fun(m, n);
    },
  };
}
var c = fun(0).fun(1); //undefined 0
c.fun(2); //1
c.fun(3); //1
