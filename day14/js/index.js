~(function () {
  /* 第一步：从服务器获取需要展示的数据，然后绑定在页面中 */
  //1.基于ajax获取服务器端数据，把数据存储到data中
  // 创建ajax的实例
  let DATA = null;
  let xhr = new XMLHttpRequest();
  xhr.open('GET', './js/json/product.json', false);
  xhr.onreadystatechange = function () {
    if (xhr.status === 200 && xhr.readyState === 4) {
      DATA = xhr.responseText;
    }
  };
  xhr.send();
  //   console.log(typeof DATA);
  DATA = JSON.parse(DATA);
  //   console.table(DATA);
  // 2.把获取的数据展示在页面中
  //根据获取的data：data当中有多少项，我就动态创建出多少个card盒子（项目中都是基于字符串拼接的方式，把需要创建的card拼出来——
  let htmlStr = ``;
  DATA.forEach((item) => {
    //item 是每一项(对象) 包含需要展示的每一个产品的详细信息：我们需要拿出每一项信息来展示到页面中（拼到模板字符串中）
    //基于解构赋值获取信息
    let { id, title, price, time, hot, img } = item;
    //把需要的数据绑定在元素card的自定义属性data-xxx上（后期需要这些数据，直接基于自定义属性获取即可）
    htmlStr += `<div class="card" 
      data-price="${price}" data-hot="${hot}" data-time="${time}">
   <img src="${img}" class="card-img-top" alt="...">
   <div class="card-body">
     <h6 class="card-title">${title}</h6>
     <p class="card-text">价格：￥${price}</p>
     <p class="card-text">好评：${hot}</p>
     <p class="card-text"><small class="text-muted">上架时间:${time}</small></p>
   </div>
 </div>`;
  });
  let cardDeck = document.querySelector('.card-deck');
  cardDeck.innerHTML = htmlStr;
  /* 第二步：点击价格/热度/上架时间，可以把内容按照升降序来排列 */
  //1.想要操作谁先获取谁（三个排序按钮）和所有的card产品内容
  let navList = document.querySelectorAll('.navbar-nav li'),
    cardList = cardDeck.querySelectorAll('.card');
  // 循环给所有的按钮绑定点击事件，点击的时候按照指定的规则排序
  for (let i = 0; i < navList.length; i++) {
    let item = navList[i];
    item['data-type'] = -1; //=>控制升降序
    item.onclick = function () {
      [].forEach.call(
        navList,
        (item) =>
          item === this ? (this['data-type'] *= -1) : (item['data-type'] = -1)
        // if (item === this) {
        //   this['data-type'] *= -1;
        // } else {
        //   item['data-type'] = -1;
        // }
      );
      //   this['data-type'] *= -1;
      cardList = [].slice.call(cardList, 0);
      cardList.sort((next, cur) => {
        //获取当前按钮记录的排序方法 data-time / data-price /data-hot
        let pai = this.getAttribute('data-pai');
        cur = cur.getAttribute(pai);
        next = next.getAttribute(pai);
        if (pai === 'data-time') {
          cur = cur.replace(/-/g, '');
          next = next.replace(/-/g, '');
        }
        return (next - cur) * this['data-type'];
      });
      cardList.forEach((item) => cardDeck.appendChild(item));
    };
  }

  //   //2.先实现按照价格的升序排序
  //   //设置data-type自定义属性记录排序的状态(1升序 -1降序)
  //   navList[1]['data-type'] = -1;
  //   //2.先实现按照价格的升降序排序
  //   navList[1].onclick = function () {
  //     this['data-type'] *= -1;
  //     //把类数组转换为数组，目的是为了使用sort进行排序
  //     //方法一
  //     // cardList = [...cardList];
  //     //方法二
  //     cardList = [].slice.call(cardList, 0);
  //     console.log(cardList);
  //     //进行排序（按照每个产品中的价格进行升序）
  //     cardList.sort((next, cur) => {
  //       //   console.log(next);
  //       cur = cur.getAttribute('data-price');
  //       next = next.getAttribute('data-price');
  //       return (next - cur) * this['data-type'];
  //     });
  //     // 以上只是让数据排好序 但是页面中的结构还没有改，我们需要按照当前的顺序，把每个card重新增加到容器中才可以
  //     cardList.forEach((item) => {
  //       cardDeck.appendChild(item);
  //     });
  //     console.log(cardList, '555');
  //     //   =>next/cur 存储的是每个元素对象(此时我们需要使用每个元素的价格：在数据绑定的时候，我们就把价格等信息绑定给当前元素的某个自定义属性，此时需要用的时候，直接基于自定义属性的方法获取到即可)
  //     //   return true;
  //     // });
  //   };

  //   //3.实现热度升降序排列
  //   navList[2]['data-hot'] = -1;
  //   navList[2].onclick = function () {
  //     this['data-hot'] *= -1;
  //     cardList = Array.prototype.slice.call(cardList, 0);
  //     cardList.sort((next, cur) => {
  //       next = next.getAttribute('data-hot');
  //       cur = cur.getAttribute('data-hot');
  //       return (next - cur) * this['data-hot'];
  //     });
  //     cardList.forEach((item) => {
  //       cardDeck.appendChild(item);
  //     });
  //   };
})();
//1.基于ajax获取服务器端数据，把数据存储到data中
//2创建ajax的实例
//3.打开一个请求的链接，基于get请求和同步编程完成
//4.监听服务器返回的状态信息(在http状态码为200，请求状态为4的时候能拿到数据)
//5.发送ajax请求
