 # fs模块
```js
里面有同步和异步的方法

如果你使用readFile方法，那就是异步，它需要接受一个回调函数，让1和2先执行，就不会在读文件时候花费时间等待，等到文件读完，再执行回调函数获取数据

读出来的数据是二进制，所以需要借助全局的buffer模块，把二进制转化为字符串

const fs = require('fs')

// 异步 async 默认支持异步

// fs.readFile()

// 同步 sync

// fs.readFileSync()

 

// 读取./input.txt文件的内容，由于读取需要时间，所以Node设计为异步

console.log(1)

// 读取的是特殊的流文件(视频，音频，图片

// 读取的数据都一般以二进制的形式给你展现

fs.readFile('./input.txt', (err, data) => {

    if (err) throw err;

    // 二进制数据 JSON字符串 buufer二进制转字符串

    console.log(data.toString());

});

// 导出的是一个fs对象

console.log(2)

同步读取

const fs = require('fs')

console.log(1)

// 如果数据量很大，会卡在这个地方

const data = fs.readFileSync('./input.txt')

console.log(data.toString())

console.log(2)

gulp 合并，压缩，转化，重命名

sass -> css 预编译

es6 -> es5 转换语法

less -> css 预编译

压缩html，css，js

gulp.src(引入).pipe(处理).dest(导出)

先把文件读取出来

// gulp.src

fs.readFile()

通过正则或者字符串的方法，然后处理代码(pipe)

// gulp.dest

fs.writeFile()

dist处理后的文件

src需要处理的源文件

gulp.js我们处理文件的逻辑

下面这些代码展示的就是Gulp的原理，Gulp依赖于Node，需要它的系统改写文件的权限

const {

    readFile,

    writeFile

} = require('fs')

// 读取这份源文件，读出来之后需要加工文件

const readCode = (path) => {

    return new Promise((resolve, reject) => {

        readFile(path, (err, data) => {

            err ? reject(err) : resolve(data.toString())

        })

    })

}

// 删除console.log('xxx')

const removeConsole = (code) => {

    let output = code.replace(/console.log([0-9a-z'[,\s]]+)/g, '')

    return output

}

const let2var = (code)=>{

    return code.replace(/let/g, 'var')

}

- // 写入代码
  const writeCode = (path, code) => {
    return new Promise((resolve, reject) => {
        writeFile(path, code, (err) => {
            err ? reject(err) : resolve()
        })
    })
  }
  ; (async () => {
    let code = await readCode('./src/index.js')
    code = removeConsole(code)
    code = let2var(code)
    await writeCode('./dist/index.js', code)
    // console.log(code)
  })()

```

# http模块

创建服务器

- 从浏览器里面输入 https://www.baidu.com/ 浏览器发送请求，默认是Get请求
- 浏览器会构造一个请求的信息(TCP/IP) 协议状态码 报文头报文体(post) post的内容可以比较多
- 百度的服务器 获取你的请求头和请求体，知道客户端的请求信息，然后构造响应头和响应体，发送给前端(四次挥手)

每一次请求，浏览器会把数据放在(请求头或者请求体)，后端获取你的请求信息，构造响应头(状态码，服务器的信息)响应体(真正获取的信息)信息

完整http请求(OSI模型)

客户端逻辑

```js
setInterval(() => {
    var msgLength = document.querySelectorAll('.js_message_plain').length
    var msg = document.querySelectorAll('.js_message_plain')[msgLength - 1].innerText
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText)
        }
    }
    // 请求头
    // xhr.setRequestHeader
    xhr.open("GET", `http://localhost:3000?msg=${msg}`, true)
    // 请求体
    xhr.send(null)
}, 1000)
```

服务端的逻辑

```js
const {createServer} = require('http')
const fs = require('fs')
// 创建服务器的方法
// request 请求头和请求体 前端给后端的
// response响应头和响应体 后端给前端的
const server = createServer((request,response)=>{
    console.log(request.url)
    fs.appendFile('./msg.txt',request.url+'\n',()=>{
        console.log('写入成功')
    })
    // 编写响应头
    response.writeHead('202')
    // 编写响应体
    response.write('hello world123')
    // 后端完全写完了
    response.end()
})
// 提供一个端口给前端服务
server.listen(3000)
console.log('启动服务器')
```

下面就是前后端在系统上进行通信的实例

- Node 服务端
- 浏览器 客户端

<img src="D:/h51909/erjieduan/treejieduan/React/%E9%9D%A2%E8%AF%95%E9%A2%98/1.PNG"/>

如果前端往后端发送复杂POST请求，由于POST是把请求的数据放入请求体

请求体可以是图片，音频，视频等格式，我们称之为流格式

你需要用容器把流慢慢接受，然后在做转化

```js
let body = ''
request.on('data',(chunk)=>{
    body+=chunk
})
request.on('end',()=>{
    console.log(body)
})
```

# querystring

querystring 模块提供用于解析和格式化 URL 查询字符串的实用工具。 它可以使用以下方式访问：

我们可以用这个模块解析POST请求体的数据，转化为键值对

```js
const querystring = require('querystring');
```

# 完整处理POST请求的方法

```js
const { createServer } = require('http')
const fs = require('fs')
const querystring = require('querystring')
// 创建服务器的方法
// request 请求头和请求体 前端给后端的
// response响应头和响应体 后端给前端的
// wamp $_POST['xxx']

const parseBody = (request) => {
    return new Promise((resolve, reject) => {
        // 空的容器接受流
        let body = ''
        request.on('data', (chunk) => {
            body += chunk
        })
        request.on('end', () => {
            // 解码
            resolve(querystring.parse(body))

        })
        request.on('error', (err) => {
            reject(err)
        })
    })
}
const server = createServer(async (request, response) => {
    // GET url
    // console.log(request.url)
    // CORS 更改响应头，让浏览器放行
    response.setHeader('Access-Control-Allow-Origin', '*')
    const { username, password } = await parseBody(request)
    console.log(username, password)

    if (username === 'yao' && password === '123') {
        // 编写响应头
        response.writeHead('200')
        // 编写响应体
        response.write('success')

    } else {
        response.write('failure')
    }
    // 后端完全写完了
    response.end()
})
// 提供一个端口给前端服务
server.listen(3000)
console.log('启动服务器')
```

# cluster和os

集群和系统模块，最大化利用cpu的硬件性能，

```js
// 集群模块
const cluster = require('cluster');
// http模块 创建服务器
const http = require('http');
// 系统模块，可以获取CPU的信息
const numCPUs = require('os').cpus().length;

// 判断是否主进程
if (cluster.isMaster) {
    console.log(`主进程 ${process.pid} 正在运行`);

    // 衍生工作进程。
    for (let i = 0; i < numCPUs; i++) {
        //  拷贝8次
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`工作进程 ${worker.process.pid} 已退出`);
    });
}
// 工作进程 子进程
else {
    // 工作进程可以共享任何 TCP 连接。
    // 在本例子中，共享的是 HTTP 服务器。
    // 负载均衡
    http.createServer((req, res) => {
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.writeHead(200);
        res.end('你好世界\n');
    }).listen(8000);

    console.log(`工作进程 ${process.pid} 已启动`);
}
```

# path

path处理路径：

```js
const path = require('path');
// 路径合并处理
const result = path.resolve('/foo/bar', '../tmp/file/');
// 算出一个绝对路径
console.log(result);
console.log(__dirname);
// 路径模块
console.log(path.resolve(__dirname, './path.js'))
```



# 第三方模块

我们前几天所用的模块都叫内置模块(fs,http,os,cluster,querystring,path)

Node在牺牲DOM和BOM能力后，在系统曾拓张给你的额外功能

交给第三方的开发者去完善更多的功能，称这些功能为第三功能(模块)，开发者它基于Node的平台，用它内置的功能，封装一些第三方的功能,它存一般放于npm，一般使用到就要下载该模块。

微信(第三方)用了(相机，通讯录，wifi模块内置)

# NPM(模块&&应用商店)

比如下面这一句就是从npm(模块商店)下载gulp的模块到本地，让你本地拥有gulp这个第三方功能，node的大部分生态都是npm提供

```bash
npm install gulp -g
```

只要安装Node成功了，它内部是自带NPM命令

```bash
# 查看你的版本
npm -v
# 根据package.json的描述全部安装模块
npm install
npm i
# 安装 局部安装 把模块记录到dependencies
npm install 模块名字 --save
npm install 模块名字 --S
# 安装 局部安装 把模块记录到devDependencies
npm install 模块名字 --save-dev
npm install 模块名字 --D
# 安装 局部安装
npm install 模块名字
# 安装 全局安装
npm install 模块名字 -g
# 卸载 可以全局也可以是局部
npm uninstall 模块名字 -g
# 国内镜像 淘宝镜像
cnpm install xxx
# 初始化配置文件 初始化一个package.json的包模块文件
npm init
# 长执行的简写
npm run xxx
```

你可以在[npm官方网站](https://www.npmjs.com)搜索你需要用到的模块，我们使用过最多的模块是(jquery)，还有一个模块gulp

- jquery 前端模块，用在浏览器端
- gulp 后端模块 用在服务器端

只要你是JS写的模块，都可以发布上去，这个模块可以用在Node端，也可以用在浏览器端

由于有些前端模块在浏览器运行完美的，但是后端缺少一些DOM和BOM，那如果此时你想把它用在Node端，那就需要配合其他第三方模块去模拟DOM和BOM

```js
require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }
    var $ = require("jquery")(window);
});
```

局部安装会在命令指定那个位置生成node_modules的文件夹，里面就会有你需要安装的本地模块

而如果你选择全局安装，它会安装到一个node指定的全局位置，它会在这个位置安装一个`xxx.cmd`的命令，让你全局环境可以拥有这个命令

```bash
C:\Users\eno\AppData\Roaming\npm
```

如果这个模块是拥有全局命令的话，可以选择安装在全局，如果没有的话，一般安装在本地，全局安装完成后，在任何地方都可以执行该命令

```bash
# gulpfile.js
gulp
gulp xxx
```

如果需要寻找局部模块的命令，需要在本地的`node_modules/.bin`文件下去寻找



# 安装cnpm

中国镜像，网络某些条件下，npm下载会很慢或者失败

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

Facebook脸书，脸书提供的一个npm安装包

```bash
# 安装这个yarn
npm install yarn -g
yarn add xxx
```

# package.json

生产一份项目的描述文件

```js
{
  "name": "gulp-project",
  "version": "5.2.0",
  "description": "这是一个GULP的项目",
  "main": "index.js",
  "dependencies": {
    "gulp": "^4.0.2"
  },
  "devDependencies": {},
  "scripts": {
    "test": "node index"
  },
  "keywords": [
    "gulp",
    "打包"
  ],
  "author": "eno",
  "license": "ISC"
}
```

注意里面有两个关键的选项`dependencies`和`devDependencies`，如果你那一天把代码通过git托管之后，由于你本地可能安装大量的模块(第三模块)，`node_modules`里面包含了你本地的所有第三方模块，那它是不能传到服务器上的(这些模块很多，也很大)，你的队友从GIT把代码拉下来之后，是没有这些模块的，需要重新手动安装`npm install`

- dependencies 一般放前端模块 如果你直接`npm install xxx`它直接放到这里
- devDependencies  一般放后端模块

```
# .gitignore
node_modules
```

这里还可以把长命令，简写在里面，你就可以用`npm run test`代替`node index`

```js
"scripts": {
  "test": "node index",
  "start": "dir"
},
```

# 流下载数据（图片.内容等）

如果你用原生http模块下载，你可以这样写

```js
http.get('http://i1.zhiaigou.com/uploads/tu/201910/10165/7c465f4606_223.jpg', {
    headers: {
        // 请求体，必须在域名为i1.zhiaigou.com发送请求
        'Host': 'i1.zhiaigou.com'
    }
}, (res) => {
    // 读取流
    res.pipe(fs.createWriteStream('file.jpg'))
})
```

也可以使用第三方模块`request`，下载图片，request就是对http.get和http.request请求封装

```js
request({
    url: 'http://i1.zhiaigou.com/uploads/tu/201910/10165/7c465f4606_223.jpg',
    headers: {//反爬虫的一个步骤操作
        // 请求体，必须在域名为i1.zhiaigou.com发送请求
        'Host': 'i1.zhiaigou.com'
    }
}).pipe(fs.createWriteStream('doodle.png'))
```

# express

第一个框架(后端框架)，jquery库

- express 框架
- jquery 库

一般框架会配合很多的库去使用

在本地局部安装express模块

```bash
npm i express
```

在index.js里面输入以下代码

```js
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)
```

我们可以阅读[官方文档](http://www.expressjs.com.cn/)

express框架其实是对http创建服务方法的封装，那我们不需要写很多原生代码，就可以创建一个简单可用的服务器

```js
const express = require('express')
const http = require('http')
// 创建的app对象，express应用的逻辑会从这个对象开始
const app = express()
// request -> req
// response -> res
// app.get 如果前端发送的是get请求的话，那就会被我这个函数给拦截
app.get('/index', (req, res) => {
    res.send('hello world')
})
// module.export require
app.get('/home', (req, res) => {
    res.send('hello world')
})

http.createServer(app).listen(3000)
console.log('启动服务器')
```

当时我们写php，每一个php文件处理一个请求，上面这种做法可以模块化，我们只需要一个根文件配合其他模块就可以制作一个服务器了

# postman（测试接口）

- [postman](https://www.getpostman.com/downloads/)

测试请求的工具，前端发送post，你可以伪造前端的请求(POST，GET)，查看后端给我的结果

# express

在同域情况下，服务器可以使用响应头控制浏览器的一些信息

```js
// 设置缓存
res.append('cache-control', 'max-age=60')
// 设置cookie
res.append('Set-Cookie','name=yao')
// 防止爬虫
res.append('Host','yao.com')
// 全局处理
res.append('Access-Control-Allow-Origin', '*')
```

帮助你从服务器读取文件返回给前端

```js
// 全局设置静态文件夹
// app.use(express.static('public'))
fs.readFile('./public/index.txt',(err,data)=>{
    res.send(data.toString())
})
```

解析请求体，需要利用`bodyParser`全局中间函数处理

```js
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(express.json())
```

设置静态文件夹，可以根据路由去对应后端文件夹里面获取资源文件

```js
app.use(express.static('public'))
```

路由，我们可以把路由分在其他模块写，方便维护，代码解耦

路由

```js
const express = require('express')
// 实例化一个路由对象
const router = express.Router();
// 路由的模块化
router.post('/mine', (req, res) => {
    console.log(req.body)
    res.send('hi')
})
router.get('/mine', (req, res) => {
    res.send('hi')
})
router.get('/mine', (req, res) => {
    res.send('hi')
})
// 导出路由对象
module.exports = router
```

```js
const mineRouter = require('./router/mine')
// 全局配置
app.use('/abc', mineRouter)
```

一般我们会使用最快速的方法去搭建express的服务器，脚手架，框架一般可以有脚手架快速搭建工程

# @4 安装指定版本为4.00

npm install -g express-generator

# 查看是否安装成功

express -version

# 在当前目录下自动生成一个项目

express ./express-cli

# Or

express express-cli

# 更改目录

cd express-cli

# 安装依赖

npm install

# 启动项目

npm start && npm run start

# express 的用途在那里

# 预编译语言

```html
<header>123</header>
```

jade的写法，浏览器是不能识别jade语法，所以在编写完毕之后要转化为html语法，预编译

```jade
header 123
```

它会全局多一个jade命令

```bash
npm install jade -g
npm install node-sass -g
```

语义化，释义比较困难

```jade
p.abc(name=123) hello p world
    span 123
div#cba test
```

非主流转主流

- html jade pug
- css sass less
- js typescript

在express里面用这两句设置jade引擎

```js
app.set('views', path.join(__dirname, 'views'));
// 设置语法为jade
app.set('view engine', 'jade');
```

# 缓存

- 浏览器缓存
  必须后端控制，通过响应头控制，缓存文件，页面，图片

  

```js
res.append('cache-control', 'max-age=60')
```

- 本地存储和cookie
  缓存数据，ajax发送，把数据缓存
- 全局变量缓存
  全局作用域和局部作用域*(垃圾回收机制)，闭包才可以缓存局部变量

