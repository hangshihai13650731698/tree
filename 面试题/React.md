# 1.React有那些优缺点？
* 优点
```bash
1、React速度很快：它并不直接对DOM进行操作，引入了一个叫做虚拟DOM的概念，安插在javascript逻辑和实际的DOM之间，性能好。
2、跨浏览器兼容：虚拟DOM帮助我们解决了跨浏览器问题，它为我们提供了标准化的API，甚至在IE8中都是没问题的。
3、一切都是component：代码更加模块化，重用代码更容易，可维护性高。
4、单向数据流：Flux是一个用于在JavaScript应用中创建单向数据层的架构，它随着React视图库的开发而被Facebook概念化。
5、同构、纯粹的javascript：因为搜索引擎的爬虫程序依赖的是服务端响应而不是JavaScript的执行，预渲染你的应用有助于搜索引擎优化。
6、兼容性好：比如使用RequireJS来加载和打包，而Browserify和Webpack适用于构建大型应用。它们使得那些艰难的任务不再让人望而生畏。
```
* 缺点
```bash
    1、React本身只是一个V而已，并不是一个完整的框架，所以如果是大型项目想要一套完整的框架的话，基本都需要加上ReactRouter和Flux才能写大型应用。
```
# 2.Vue .React.angular有什么区别？
```bash
            开发者         数据绑定        依赖标准        渲染页面          模式
 vue         尤雨溪       双向数据绑定      ES5/ES6      模板+脚本+样式      MVVM
 react      FaceBook     单向数据绑定        ES6            JSX          不是完整的MVVM
 angular      谷歌        双向数据绑定     typescript       模板         MVC(1.0版本)/MVVM(2.0以后)

```
 # 3.(组件的)状态(state)和属性(props)之间有何不同?

```js
- state是一种数据结构，用于组件挂载时定义数据的默认值。修改state使用setState,会触发render函数执行，渲染页面。
- props是由父组件传递给子组件的。对于子组件而言，props是不可变的。

```





# 4. 类组件(Class component)和函数式组件(Functional component)之间有何不同?

```bash
函数组件无state和生命周期，传值需要用props，类组件有state和生命周期，传值需要this.props。
类组件不仅允许你使用更多额外的功能，如组件自身的状态和生命周期钩子，也能使组件直接访问 store 并维持状态。
当组件仅是接收 props，并将组件自身渲染到页面时，该组件就是一个 ‘无状态组件(stateless component)’，可以使用一个纯函数来创建这样的组件。这种组件也被称为哑组件(dumb components)或展示组件。
```
# 5.. 为什么建议传递给 setState 的参数是一个 callback 而不是一个对象?
```js
因为 this.props 和 this.state 的更新可能是异步的，不能依赖它们的值去计算下一个 state。
```
# 6. (在构造函数中)调用 super(props) 的目的是什么?
```bash
* 在super被调用之前，子类是不能使用this的，在ES5中，子类必须在constructor中调用super()。
* 传递props给super()的原因则是便于子类能在constructor中访问this.props。
```
# 7.  react 生命周期函数？
```js
初始化过程(Initialization)
在consructor()里面初始化Props和State属性。

挂载过程(Mounting)
componentWillMount()：在组件即将被挂载到页面的时刻自动执行。
render()：将组件挂载到页面。
componentDidMount()：组件被挂载到页面之后立即执行。

更新过程（Updating）
componentWillReceiveProps()（已经在16.4的版本中废弃，不推荐使用）： 一个组件要从父组件接收参数， 只要父组件的render()函数非首次（如果这个组件第一次存在与父组件中不会执行，如果已经存在于父组件中才会执行）执行了，子组件的这个生命周期函数就会被执行。如果组件没有Props属性则直接跳过。
shouldComponentUpdate()（已经在16.4的版本中废弃，不推荐使用） ：组件更行之前检查是否需要更新，注意这个函数要有一个布尔类型返回值，如果返回false，这一部分的生周期 函数将不会继续执行，即无论如何组件都不会更新。利用这个生命周期函数可以强制关闭不需要更新的子组件来提升渲染性能。
componentWillUpdate()： 组件更新之前。自动执行。但要在shouldComponentUpdate()执行并返回true之后执行。
render()： 将组件更新到页面。
componentDidUpdate(): 组件更新完成之后立即执行。

移除过程（Unmounting）
componentWillMount()： 当组件即将被页面剔除时执行。

注意事项
React中的render()也是生命周期函数，而constructor()并不是生命周期函数。
生命周期函数是针对组件来说的，并非只有父组件才有生命周期函数，是所有组件都有生命周期函数！
除了render()函数，其他的所有生命周期函数都可以不写，也不会报错，但是如果缺少render()函数程序就会报错，因为所有的生命周期函数除了render()函数都是继承自React中内置的。
AJAX请求一般放在componentDidMount()里面。
```

# 8.shouldComponentUpdate 是做什么的？
```bash
* 判断数据是否需要重新渲染一个钩子函数(及是否需要再渲染多一次)，返回一个布尔值。
* 默认的返回值是true，需要重新render()。若如果返回值是false，则不触发渲染,利用这个生命周期函数可以强制关闭不需要更新的子组件来提升渲染性能。
* 这个方法用来判断是否需要调用 render 方法重新描绘 dom。
```
# 9.为什么虚拟DOM会提高性能？
```js
* 虚拟 dom 相当于在 js 和真实 dom 中间加了一个缓存，利用 dom diff 算法避免了没有必要的 dom 操作，从而提高性能。
* 真实DOM的操作，一般都会对某块元素的整体重新渲染。采用虚拟DOM的话，当数据变化的时候，只需要局部刷新变化的位置就好了。
```

# 10. 在React 中，refs 的作用是什么？
```
Refs 是 React 提供给我们的安全访问 DOM 元素或者某个组件实例的句柄。我们可以为元素添加 ref 属性然后在回调函数中接受该元素在 DOM 树中的句柄，该值会作为回调函数的第一个参数返回。 用于对 render() 返回的特定元素或组件的引用。当需要进行 DOM 测量或向组件添加方法时，它们会派上用场。
```
# 11. react的编程式导航
```js
this.props.history.push(’/n’);
this.props.history.replace(’/a’)     ///替代
this.props.history.go(-1)           //返回上一层
如果一个组件没有参与路由，这个时候要使用this.props.history.push 会报错：push没有定义。 这时用withRouter解决，
```
# 12.当你调用setState的时候，发生了什么事？
```js
* 代码中调用 setState 函数之后，React 会将传入的参数对象与组件当前的状态合并，然后触发所谓的调和过程（Reconciliation）
* 经过调和过程，React 会以相对高效的方式根据新的状态构建 React 元素树并且着手重新渲染整个 UI 界面；
* 在 React 得到元素树之后，React 会自动计算出新的树与老树的节点差异，然后根据差异对界面进行最小化重渲染；

>* 在差异计算算法中，React 能够相对精确地知道哪些位置发生了改变以及应该如何改变，这就保证了按需更新，而不是全部重新渲染
```
# 13.React中路由有哪些常用组件？说明它们的作用？
```js
* BrowserRouter，在需要使用路由的页面中引入(浏览器路由);
* HashRouter，在需要使用路由的页面中引入(哈希路由);
* Switch，路由选择器(一次只能选择一个路由);
* Route，路由配置规则;
* Redirect，路由重定向;
* Link，路由导航;
* NavLink，带activeClass的路由导航（少见）;
```
# 14.React 中 key 的作用是什么(不可忽视)？
```js
1. Key 是 React 用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识。
2. 在开发过程中，我们需要保证某个元素的 key 在其同级元素中具有唯一性。
3. 在React Diff 算法中React 会借助元素的 Key值来判断该元素是新近创建的还是被移动而来的元素从而减少不必要的元素重渲染。
4. 此外，React 还需要借助 Key 值来判断元素与本地状态的关联关系，因此我们绝不可忽视转换函数中 Key 的重要性。
```
# 15.谈谈你对redux的理解？
```js
* Redux是JavaScript状态容器(相当于vuex仓库)，提供可预测化的状态管理.
特点
   1.单一数据源
       整个应用状态，都应该被存储在单一store的对象树中。
   2.只读状态
       唯一可以修改状态的方式,就是发送（dispatch）一个动作（Action），通俗来讲，就是说只有getter，没有setter。
   3.使用纯函数去修改状态，
   4.redux 是一个应用数据流框架，主要是解决了组件间状态共享的问题，原理是集中式管理，主要有三个核心方法，action，store，reducer。

缺点
   1. 一个组件所需要的数据，必须由父组件传过来，而不能像 flux 中直接从 store 取。
   2.当一个组件相关数据更新时，即使父组件不需要用到这个组件，父组件还是会重新 render，可能会有效率影响，或者需要写复杂的 shouldComponentUpdate 进行判断要不要更新。
```
# React的原理
React开发时所有的DOM构造都是通过虚拟DOM进行，每当组件的状态发生变化时，React都会重新构建整个DOM数据，然后将当前的整个DOM树和上一次的DOM树进行对比，得出DOM结构变化的部分(Patchs)，然后将这些Patchs 再更新到真实DOM中。整个过程都是在内存中进行，因此是非常高效的

![描述](http://dl2.iteye.com/upload/attachment/0127/5899/cf7ae1fc-8757-346a-87be-7d218b1ef390.png)

# 16.对小程序的理解，几个人开发？时间多长，用什么方式？

```bash
1-2个人开发，一般来说比较简单，一两周，有翻阅过
```



# 17. 有没有封装组件给别人用？说一下你封装过的组件，单文件组件也行 

```html
组件本质是函数，而函数是对html,css和js的封装

​```vue
<template> html
<script> js
<style> css
​```

vue-loader vue文件转化为js
```

# 18.接下来的职责规划怎样？学习哪些技术？ 

```
angular，vue3，希望可以多学点后端，能成为全栈的工程师

前端局限性有点大，我对后端也有兴趣，因为经常调用别人的接口，不知道服务器接口怎么开发，那就是不大完美，自己有去了解过php和node，希望以后能精通
```

# 19.js怎么中断请求

```html
xhr.abort()
```

