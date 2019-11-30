## axios

Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

--特性

- 从浏览器中创建 [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- 从 node.js 创建 [http](http://nodejs.org/api/http.html) 请求
- 支持 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- 拦截请求和响应
- 转换请求数据和响应数据
- 取消请求
- 自动转换 JSON 数据
- 客户端支持防御 [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

安装方法

```js
$ npm install axios
```



## 执行get的请求

```js
// 为给定 ID 的 user 创建请求
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// 上面的请求也可以这样做
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```



##  执行post请求

```js
axios.post('/user', {//post传参数不用params直接传对象
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

## 执行多个请求时

```js
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // 两个请求现在都执行完成
  }));
```

## 响应结构

```js
{
  // `data` 由服务器提供的响应
  data: {},

  // `status` 来自服务器响应的 HTTP 状态码
  status: 200,

  // `statusText` 来自服务器响应的 HTTP 状态信息
  statusText: 'OK',

  // `headers` 服务器响应的头
  headers: {},

   // `config` 是为请求提供的配置信息
  config: {},
 // 'request'
  // `request` is the request that generated this response
  // It is the last ClientRequest instance in node.js (in redirects)
  // and an XMLHttpRequest instance the browser
  request: {}
}
```

## 使用then时接受到的响应

```js
axios.get('/user/12345')
  .then(function(response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
```

## 怎么取消请求，和监听请求的进度，拦截，封装

```html
<body>
    <!-- 请求拦截 -->
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script>
        // 闭包
        function http(options) {
            // 需要加工的值
            let token = 'xxxx'
            let url = 'https://cnodejs.org'
            options.url = url + options.url
            // 高阶函数帮助你把axios加工了一次
            // 让axios变为高阶函数
            // 为给定 ID 的 user 创建请求
            return new Promise((resolve, reject) => {
                return axios({
                    token,
                    ...options
                }).then((data)=>{
                    // 所有请求都需要经过处理
                    // 请求拦截
                    alert(1)
                    resolve(data)
                })
            })
        }
        const xhr1 = http({
            method: 'get',
            url: '/api/v1/topics',
            data: {
                firstName: 'Fred',
                lastName: 'Flintstone'
            }
        })
        xhr1.then((response) => {
            console.log(response)
        })
    </script>
</body>
<script>
    let xhr = new XMLHttpRequest()
    xhr.open()
    xhr.send()

    // 取消ajax
    xhr.abort()
    </script>
```

## http版本，三次握手四次挥手，加密证书里面有什么

```html
超文本传输协议
http+ssl
ssl特殊的token，特殊的令牌
证书里面有公司，序列号，类别信息
```

## axios的原理是什么？

```
基于Promise对Ajax原理 进行简单的封装
```

