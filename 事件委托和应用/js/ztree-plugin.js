~(function ($) {
  function ztree(data, id) {
    let count = 0;
    let bindHTML = function (result) {
      let str = ``;
      result.forEach((item) => {
        count++;
        let { name, open, children } = item;
        console.log(open);
        str += `<li>
          <a href="" class="title">${name}</a>
          ${
            children
              ? ` <em class="icon ${open ? 'open' : ''}"></em>
              <ul class="level level${count}}" style="display:${
                  open ? 'block' : 'none'
                }">
                ${bindHTML(children)}
            </ul>`
              : ''
          }
          </li>`;
        count--;
      });
      return str;
    };
    let element = document.querySelector(id);
    console.log('');
    element.onclick = function (ev) {
      let target = ev.target;
      if (target.tagName === 'EM') {
        //=>加减号的切换

        if (/open/.test(target.className)) {
          target.className = target.className.replace('open', '');
          target.nextElementSibling.style.display = 'none';
          console.dir(target);
        } else {
          console.dir(target.className);
          target.nextElementSibling.style.display = 'block';
          target.className = target.className + ' open';
        }
      }
    };
    element.innerHTML = bindHTML(data);
  }
  window.extend = ztree;
})();
