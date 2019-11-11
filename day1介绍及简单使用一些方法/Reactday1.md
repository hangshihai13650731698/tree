# 了解React
React是一个视图层的框架，起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。由于 React 的设计思想极其独特，属于革命性创新，性能出众，代码逻辑却非常简单。所以，越来越多的人开始关注和使用，认为它可能是将来 Web 开发的主流工具。

React官网地址：http://facebook.github.io/react/
# 特点
* 代码逻辑简单，性能出众，起源Eacebook
* 声明式设计
* 高性能
>React通过对DOM的模拟(Virtual DOM)，最大限度地减少与DOM的交互。
* 组件化开发
>通过 React 构建组件，使得代码更加容易得到复用，能够**高效率**的应用在大项目的开发中。
* 单向响应的数据流
> React 中的数据是单向自顶向下传递的，React之所以能胜任大型复杂前端项目的开发，是因为其 单向数据流 这一重要特性
* JSX扩展
>JSX 是 javaScript 语法的扩展。 React 开发不一定使用（会多点也好）
# React的安装和介绍和使用方法
* 一般引用与安装方法（script标签引入）
```js
* react.js          React 的核心库
* react-dom.js      提供与 DOM 相关的功能
* babel.js          React使用ES6语法和浏览器不支持的JSX语法，所以必须引用Babel进行
编译
> 在浏览器中使用Babel 来编译 JSX效率是非常低的
```
* ### 通过脚手架快速搭建React环境
>create-react-app 是来自于官方 Facebook的脚手架工具，通过该命令我们无需配置就能快速构建 React 开发环境
* 安装create-react-app
```bash
npm install -g create-react-app
```
* ### 通过手动搭建raect环境
> 通过webpack+es6来使用react，所以需要手动安装一下模块搭建环境

* react &react-dom
* babel-loader & @babel/core & @babel/preset-react
* webpack & webpack-cli & webpack-dev-server



# 使用方式
* 1引入两份js文件
<img src="img/dom.png" style="width:320px;">
<img src="img/virtualDOM.png" style="width:500px;">

>什么是虚拟DOM：结构类似于DOM树的 JavaScript 对象
* 创建虚拟节点：React.createElement(component, props, ...children)


```javascript
    //测试以下节点操作代码花费时间，并尝试优化它
    for(let i=0;i<10000;i++){
        let btn = document.querySelector('.btn');
        let num = btn.innerText;
        btn.innerText = ++num;
    }
```
### UI 渲染（上面前者是创建虚拟DOM ,现在是渲染DOM挂载在容器下）
  # 通过render渲染挂载
* ReactDOM.render(template,targetDOM)
    >是React的最基本方法，用于将模板转为HTML语言，并插入指定的DOM节点

   # - template：可以是HTML标签或 React 组件
   # - targetDOM：挂载点，必须为元素节点


   # JSX语法的介绍
   一种特殊的js语法，是ECMAScript的扩展，可以让我们在js代码中直接使用html标签，再通过编译器（Babel）转成标准的 JavaScript 后由浏览器执行。
   babel 解析规则：
   > 分清html标签.组件。js代码
   >注意：
* 因为Javascript代码与JSX代码并不兼容，凡是使用JSX的script标签都需要加上 type="text/babel"
* 在jsx代码中，同为js关键字的html属性不能直接使用
    * class -> className,
    * for -> htmlFor
# 属性使用驼峰
    * tabindex -> tabIndex
    * autofocus -> autoFocus
    * onkeydown -> onKeyDown
    * ......
* 必须结束标签（如：`<input type="text"/>`）
* style 属性的值接收一个对象，css 的属性必须为驼峰写法
>style={{"backgroundColor":"#f60"}}
* 花括号`{}`内为js表达式，不允许出现var,let,const等关键字
* 使用js语法注释（如{`/*注释内容*/`}，`//注释内容`）
```html
<div>{data.name}</div>
```
>PS: JSX不是必须的，它只是`React.createElement(type,[props],[...children])`的语法糖，在我们应用JSX进行开发的时候，其实它最终会转化成React.createElement…去创建元素。

# 使用小案例1
```html
<div id="demo"></div>
<!-- 提供React.createElement帮你构造虚拟DOM -->
<script src="react.js"></script>
<!-- 提供ReactDOM.render帮你虚拟DOM转化真实DOM -->
<script src="react-dom.js"></script>
<script>
    // react提供了全局变量window.React
    // react-dom提供了全局变量window.ReactDOM
    console.log(window)
    // 函数会执行，变成一个对象，这个对象其实是描述真实DOM的
    const data = {
            name: 'yao'
        }
        //搭建模拟DOM
    const template = React.createElement('div', null, data.name)
    const el = document.querySelector('#demo')
    console.log(template)
    // 通过render渲染和挂载在容器下
    ReactDOM.render(template, el)
</script>
```
# 注意
所以我们在页面可以使用`babel.js`帮我们转化，不过注意的是，在发布环境这份babel.js是不能引入的，jsx讲道理是一门预编译语言(地位相当于sass)，在实际项目中要把该处理放在`webpack`中去做处理，不应该把压力放在浏览器
```html
<div id="demo"></div>
<!-- 提供React.createElement帮你构造虚拟DOM -->
<script src="react.js"></script>
<!-- 提供ReactDOM.render帮你虚拟DOM转化真实DOM -->
<script src="react-dom.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    const data = {
        name: 'yao'
    }
    // JSX
    const template = <div>hello world</div>
    const el = document.querySelector('#demo')
    console.log(template)
    ReactDOM.render(template, el)
</script>
```


