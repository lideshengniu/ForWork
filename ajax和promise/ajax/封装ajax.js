/* 
 支持的配置项
  url
  method:'GET'
  data:null
  dataType:'json'
  async:true
  cache:true
  success:null
  error:null
  headers:null
  timeout:null

*/
~function () {
  function ajax(options) {
    // return new ajax.prototype.init(options);
    return new init(options);
  }
  /* ==AJAX处理的核心== */
  let regGET = /^(GET|DELETE|HEAD|OPTIONS)$/i;
  let defaults = {
    url: '',
    method: 'GET',
    data: null, //=>传递给服务器的信息：支持格式string和object，如果是object，我们需要把其处理为x-www-form-urlencoded格式 GET请求是把信息作为问号参数传递给服务器。POST请求是放到请求主体中传递给服务器
    dataType: 'JSON', //把服务器返回结果处理成为对应的格式 JSON/TEXT/XML
    async: true,
    cache: true,
    timeout: null,
    headers: null, //设置请求头信息(请求头信息不能是中文，所以我们需要为其编码)
    success: null,
    error: null,
  };

  function init(options = {}) {
    //=>参数初始化：把传递的配置项替换默认的配置项
    this.options = Object.assign(defaults, options);
    this.xhr = null;
    this.send();
  }
  ajax.prototype = {
    constructor: ajax,
    version: 1.0,
    //=>发送ajax请求
    send() {
      //   let xhr = new XMLHttpRequest();
      //   this.xhr = xhr;
      let xhr = null,
        {
          url,
          method,
          async,
          data,
          cache,
          timeout,
          dataType,
          headers,
          success,
          error,
        } = this.options;
      this.xhr = xhr = new XMLHttpRequest();
      //=>处理data：如果是get请求把处理后的data放在url末尾传递给服务器
      data = this.handleData();
      if (data !== null && regGET.test(method)) {
        url += `${this.checkASK(url)}${data}`;
        data = null;
      }
      //处理catch：如果是get并且cache是false需要清除缓存
      if (cache === false && regGET.test(method)) {
        url += `${this.checkASK(url)}_= ${Math.random()}`;
      }

      xhr.open(method.toLowerCase(), url, async);
      //=>超时处理
      timeout !== null ? (xhr.timeout = timeout) : null;
      // 设置请求头信息
      if (Object.prototype.toString.call(headers) === '[object Object]') {
        for (let key in headers) {
          if (!headers.hasOwnProperty(key)) break;
          xhr.setRequestHeader(key, encodeURIComponent(headers[key]));
        }
      }
      xhr.onreadystatechange = () => {
        //     let status = xhr.status,
        //       statusText = xhr.statusText,
        //       state = xhr.readyState;
        //   };
        let {
          status,
          statusText,
          readySate: state,
          responseText,
          responseXML,
        } = xhr;
        if (/^(2|3)\d{2}$/.test(status)) {
          //成功
          if (state === 4) {
            switch (dataType.toUpperCase()) {
              case 'JSON':
                responseText = JSON.parse(responseText);
                break;
              case 'XML':
                responseText = responseXML;
                break;
            }
            success && success(responseText, statusText, xhr);
          }
          return;
        }
        // 失败的
        typeof error === 'function' ? error(statusText, xhr) : null;
      };
      xhr.send(data);
    },
    //=>关于data参数的处理
    handleData() {
      let { data } = this.options;
      if (data === null || typeof data === 'string') return data;
      //=>只有data是一个对象，我们需要把它变为xxx = xxx & xxx=xxx 这种格式字符串
      for (let key in data) {
        if (!data.hasOwnProperty(key)) break;
        str += `${key}=${data[key]}&`;
      }
      str = str.substring(0, str.length - 1);
      return str;
    },
    //=>检测url中是否存在问号
    checkASK(url) {
      return url.indexOf('?') === -1 ? '?' : '&';
    },
  };
  //   ajax.prototype.init = function init(options) {};
  //   ajax.prototype.init.prototype = ajax.prototype;
  init.prototype = ajax.prototype;
  window._ajax = ajax;
};
