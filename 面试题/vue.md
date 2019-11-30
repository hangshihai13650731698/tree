# vue
 # 1.什么是MVVM模式？
 ```bash
 MVVM是Model-View-ViewModel的缩写。MVVM是一种设计思想,即双向数据绑定，M变V变，V变M跟着变。
 ```
 # 2.mvvm和mvc区别？它和其它框架（jquery）的区别是什么？哪些场景适合？
 ```
 mvc和mvvm其实区别并不大。都是一种设计思想。主要就是mvc中Controller演变成mvvm中的viewModel。mvvm主要解决了mvc中大量的DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验。

区别：vue数据驱动视图，通过数据来显示视图层而不是节点操作。

场景：数据操作比较多的场景，更加便捷
 ```
# 3.vue的优点是什么？
```
3.1 低耦合。视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。

3.2 可重用性。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑。

3.3 独立开发。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计。

3.4 可测试。界面素来是比较难于测试的，而现在测试可以针对ViewModel来写。
vue两大特点：响应式编程、组件化
vue的优势：轻量级框架、简单易学、双向数据绑定、组件化、视图、数据和结构的分离、虚拟DOM、运行速度快.

```
# 4.组件间的传值？
```
> 父组件与子组件传值
> 父组件通过标签上面定义传值
> 子组件通过props方法接受数据
> 子组件向父组件传递数据
> 子组件通过$emit方法传递参数
```
# 5.路由间的跳转？
声明式（标签跳转）
```js
<router-link to="/myRegister">注册</router-link>
```
 编程式（ js跳转）常用
 ```js
this.$router.push('/myLogin');
 ```
# 6.vuex是什么？怎么使用？哪种功能场景使用它？
```
vue框架中的状态管理。在main.js引入store，注入。新建一个目录store，…… export 。应用场景如：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车
```
# 6.vuex有几种属性？
```
有五种，分别是 State、 Getter、Mutation 、Action、 Module.
主要两个特性
vuex的State特性

A、Vuex就是一个仓库，仓库里面放了很多对象。其中state就是数据源存放地，对应于一般Vue对象里面的data
B、state里面存放的数据是响应式的，Vue组件从store中读取数据，若是store中的数据发生改变，依赖这个数据的组件也会发生更新
C、它通过mapState把全局的 state 和 getters 映射到当前组件的 computed 计算属性中

vuex的Getter特性
A、getters 可以对State进行计算操作，它就是Store的计算属性
B、 虽然在组件内也可以做计算属性，但是getters 可以在多组件之间复用
C、 如果一个状态只在一个组件内使用，是可以不用getters

vuex的Mutation特性

Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态；Action 可以包含任意异步操作。
```
# 7.v-show与v-if的相同点与不同点
```
v-show指令是通过修改元素的display的CSS属性让其显示或者隐藏；

v-if指令是直接销毁和重建DOM达到让元素显示和隐藏的效果；

使用v-show会更加节省性能上的开销；当只需要一次显示或隐藏时，使用v-if更加合理。
```
# 8.请列举出3个Vue中常用的生命周期钩子函数
```
created: 实例已经创建完成之后调用,在这一步,实例已经完成数据观测, 属性和方法的运算, watch/event事件回调. 然而, 挂载阶段还没有开始, $el属性目前还不可见

mounted: el被新创建的 vm.el替换，并挂载到实例上去之后调用该钩子。如果root实例挂载了一个文档内元素，当mounted被调用时vm. el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.el替换，并挂载到实例上去之后调用该钩子。如果root实例挂载了一个文档内元素，当mounted被调用时vm.el 也在文档内。

activated: keep-alive组件激活时调用
```
# 9.vue-router有哪几种导航钩子？
```
三种，
第一种是全局导航钩子：router.beforeEach(to,from,next)，作用：跳转前进行判断拦截。
第二种：组件内的钩子；
第三种：单独路由独享组件
```
# 10.什么是vue的生命周期？
```
vue的生命周期:Vue 实例从创建到销毁的过程，就是生命周期。也就是从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。

> vue生命周期有那几个阶段？
总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后。

创建前/后： 在beforeCreate阶段，vue实例的挂载元素el和数据对象data都为undefined，还未初始化。在created阶段，vue实例的数据对象data有了，el还没有。

载入前/后：在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。在mounted阶段，vue实例挂载完成，data.message成功渲染。

更新前/后：当data变化时，会触发beforeUpdate和updated方法。

销毁前/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在

```
# 11.vue生命周期的作用是什么？
```
它的生命周期中有多个事件钩子，让我们在控制整个Vue实例的过程时更容易形成好的逻辑
```
# 12.生命周期钩子的一些使用方法
```
beforecreate : 可以在这加个loading事件，在加载实例时触发

created : 初始化完成时的事件写在这里，如在这结束loading事件，异步请求也适宜在这里调用

mounted : 挂载元素，获取到DOM节点

updated : 如果对数据统一处理，在这里写上相应函数

beforeDestroy : 可以做一个确认停止事件的确认框

nextTick : 更新数据后立即操作dom
```
# 13.scss是什么？在vue.cli中的安装使用步骤是？有哪几大特性？
```js
答：css的预编译。

使用步骤：

第一步：先装css-loader、node-loader、sass-loader等加载器模块

第二步：在build目录找到webpack.base.config.js，在那个extends属性中加一个拓展.scss

第三步：在同一个文件，配置一个module属性

第四步：然后在组件的style标签加上lang属性 ，例如：lang=”scss”

特性:
可以用变量，例如（$变量名称=值）；
可以用混合器，例如（）
可以嵌套
```
# 14.为什么使用key？
```
当有相同标签名的元素切换时，需要通过 key 特性设置唯一的值来标记以让 Vue 区分它们，否则 Vue 为了效率只会替换相同标签内部的内容。
```
# 15.VNode是什么？虚拟 DOM是什么？
```js
Vue在 页面上渲染的节点，及其子节点称为“虚拟节点 (Virtual Node)”，简写为“VNode”。“虚拟 DOM”是由 Vue 组件树建立起来的整个 VNode 树的称呼。
```
# 16.Vue实现数据双向绑定原理

1. Vue实现数据双向绑定的原理：Object.defineProperty（）
2. vue实现数据双向绑定主要步骤：
（1)需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter和getter。
这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化。
（2)compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图。
（3)Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是:
①在自身实例化时往属性订阅器(dep)里面添加自己
②自身必须有一个update()方法
③待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。
（4)MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果。
3. js实现简单的双向绑定
```html
<body>
    <div id="app">
    <input type="text" id="txt">
    <p id="show"></p>
</div>
</body>
<script type="text/javascript">
    var obj = {}
    Object.defineProperty(obj, 'txt', {
        get: function () {
            console.log(1)
            return obj
        },
        set: function (newValue) {
            console.log(2)
            document.getElementById('txt').value = newValue
            document.getElementById('show').innerHTML = newValue
        }
    })
    obj.txt
    obj.txt=2
    document.addEventListener('keyup', function (e) {
        obj.txt = e.target.value
    })
    // 总得来说，采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter,getter，在数据变动时发布消息给订阅者，触发相应的监听回调。
</script>
```
# 17.Vue组件间的参数传递、vue通信
```
1.父组件与子组件传值
父组件传给子组件：子组件通过props方法接受数据;
子组件传给父组件：$emit 方法传递参数
2.非父子组件间的数据传递，兄弟组件传值eventBus，就是创建一个事件中心，相当于中转站，可以用它来传递事件和接收事件。$emit 传值，$on() 接收值。项目比较小时，用这个比较合适。
3.整个状态存储：vuex
```
# 18vue路由
```js
Vue的路由实现：hash模式 和 history模式
hash模式（常用）：在浏览器中符号“#”，#以及#后面的字符称之为hash，用window.location.hash读取；
特点：hash虽然在URL中，但不被包括在HTTP请求中；用来指导浏览器动作，对服务端安全无害，hash不会重新加载页面。
hash 模式下，仅 hash 符号之前的内容会被包含在请求中，如 http://www.xxx.com，因此对于后端来说，即使没有做到对路由的全覆盖，也不会返回 404 错误。
history模式(少用)：history采用HTML5的新特性；且提供了两个新方法：pushState（），replaceState（）可以对浏览器历史记录栈进行修改，以及popState事件的监听到状态变更。
history 模式下，前端的 URL 必须和实际向后端发起请求的 URL 一致，如 http://www.xxx.com/items/id。后端如果缺少对 /items/id 的路由处理，将返回 404 错误。

```
# 19.全局导航钩子：
```js
（1）前置守卫：跳转前进行拦截。
router.beforeEach(to, from, next)
（2）后置钩子
router.afterEach((to, from) => {})
2、组件内的钩子
beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave
3、单独路由独享组件。
beforeEnter: (to, from ,next)
```

# 20.做项目遇到的难点，问题

```
1.兼容问题
2.性能优化
3.组件间的通信
```

# 21.vue的路由拦截结合路由守卫

```js
   //页面权限控制
    router.beforeEach((to, from, next)=>{
        if(to.meta.requireAuth){
            // 判断是否登录
            if(sessionStorage.getItem('token')){
            // if(store.state.token){
                next();
            }else{
                next({
                    path:'/login'
                })
            }
        }else{
            next();
        }
    });

```

