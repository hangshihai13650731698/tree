# 源生ajax怎么请求数据的步骤？
```js
  //1.告诉ajax你要什么？
 var xhr = new XMLHttpRequest();//1
 var data = 'name=' + texVal;
 xhr.open('post','api/03checkname.php?time='+ new Date(),true);//2

 //2.ajax帮你发送请求
  /*
     send()
         * 如果是get请求，参数写null
         * 如果是post请求，发送的数据写在参数里面
 */
//post方式需要设置发送头信息
 xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');//3
 xhr.send(data);//4

 //3.去做接口

 //4.接收数据，做渲染
 xhr.onreadystatechange = () => {
     if(xhr.readyState == 4 && xhr.status == 200) {//成功状态5
         //完成并成功了
         var str = xhr.responseText;
         if(str == 'yes') {
             inf.innerHTML = '该用户名可以注册';
             inf.style.color = '#58bc58';
         }else{
             inf.innerHTML = '该用户名太受欢迎啦，您换一个吧';
             inf.style.color = 'red';
         }
         console.log(str);
     }
 }
```
 # 兼容问题
 ```
1.清除浮动
2.*｛
margin：0
｝

 ```
 # 跨域问题
 * 同源策略：浏览器由于安全考虑，不允许不同域下面互相访问资源。
 所以在需要不同域之间共享数据，这时候要做跨域处理
协议、子域名、主域名、端口号任意一个不同，就是跨域
* 跨域的方法：
* jsop（script）
```js
// jsonp的原理：实现跨域
    // * 通过script的src获取外部的数据;1,2,3
     // * 准备一个全局的函数接收外部数据，该函数名可以自己决定，函数名接收参数一般是叫做：cb或callback
    // * 真正使用的时候：按需加载(需要用到数据的时候，再动态的创建节点)
    
    let script = null;//1.声明空的script标签
     
    function getData(data) {//2.全局函数的功能：接收数据做渲染
        let list = document.getElementById('list');
        console.log(data)
        let arr = data.s;
        let html = arr.map(item => {
            return `<li><a href="https://www.baidu.com/s?wd=${item}" target="_blank">${item}</a></li>`;
        }).join('');
        list.innerHTML = html;//渲染数据
        // console.log(data);//?
        //删除节点  父节点.removeChild(子节点)
        document.documentElement.removeChild(script);//用完就删除script节点
    }
    (function() {

        //找节点
        let word = document.getElementById('word');
        let list = document.getElementById('list');

        //百度搜索引擎：边敲边响应
        //百度接口：https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=getData&wd=html5
        //百度搜索结果页：https://www.baidu.com/s?wd=旅游景点
        /*
            bug修复：
                * 发送请求过多
                * script标签过多
        */
        var timer = null;
        word.onkeyup = () => {
            //按需加载：变敲关键字就边请求数据
            let val = word.value.trim();
            clearTimeout(timer);//h ht htm html html5
            if(val) {
                //非空
                timer = setTimeout(function() {
                    script = document.createElement('script');
                    // 按需加载，动态创建节点引入外部资源
                    script.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=getData&wd=' + val;
                    //父节点.appendChild(子节点)
                    document.documentElement.appendChild(script);
                },800);
            }
            // console.log(val);
            
        }

    })();

```
* CORS（即接口是别人给的那种）
```js
ajax2({
   type : 'get',
   url : 'http://localhost:1903/mydata/cors.php',//和传统的ajax使用没有太大区别，就是url是别人给的
   success : str => {
       console.log(str);
   }
 });

```
* 服务器代理（即用nodejs的express搭建一个服务器）

* 引入外部资源标签： src href

* 直接改浏览器安全的那道墙环境

  > 将浏览器的属性设置里面的模式转化为非安全模式--arge --disable-web-security --user-data-dir

# 数据存储
```js
  1.把数据存在本地硬盘：weibo.json,操作本地文件比较麻烦

                2.把数据存在浏览器：cookie/localstorage,存储的容量比较小，登陆才能购买

                    * 本地存储：storage
                        * sessionStorage : 临时存储，会话级别
                            * window.sessionStorage.setItem(键名,键值)
                            * window.sessionStorage.getItem(键名)
                            * window.sessionStorage.removeItem(键名)
                            * window.sessionStorage.clear()
                        * localstorage ： 永久存储
                3.数据库：容量大，存储简单（sql语言），系统和网站中一般用得比较多;

```
# 原型链
```
每个对象都有一个__proto__（原型指针），它指向它的prototype原型对象，而prototype原型对象又具有一个自己的原型对象，就这样层层向上，直到一个对象的原型prototype（原型对象）为null，这个查询的路径就是原型链
```
# 闭包
```js
能够读取其他函数内部变量的函数叫闭包
//demo
for (var i = 0; i < 4; i++) {//js 执行的时候首先会先执行主线程,异步相关的会存到异步队列里,当主线程执行完毕开始执行异步队列
  setTimeout(function() {
    console.log(i);
  }, 300);
}
//结果都为4

如何修改使其正常打印:(使用闭包使其正常打印)
for (var i = 0; i < 4; i++) {//使用闭包后修正打印
  setTimeout(
    (function(i) {
      return function() {
        console.log(i);
      };
    })(i),
    300
  );
}

//面试题
 闭包，函数嵌套函数  闭包函数指的是里面那个函数 -->
    <!-- 不能释放内存，不经过垃圾回收机制，不会产生全局变量的时候，不会污染全局 -->
<script>
        // 值会保存
        function Foo(){
            var i = 0;
            return function(){
                // 函数可以读取外边的值
                console.log(i++)
            }
        }
        // 闭包函数被提权为全局变量
        // f1存着里面的那个函数，导致这个函数不能被回收，这个函数能读函数内部的值
        var f1 = Foo()
        f1() //0
        f1() //1
        var f2 = Foo()
        f2() //0
    </script>
```
# 异步处理方法
```
1. 回调函数
传说中的“callback hell”就是来自回调函数。而回调函数也是最基础最常用的处理js异步操作的办法

2. 事件发布/订阅
发布/订阅模式也是诸多设计模式当中的一种，恰好这种方式可以在es5下相当优雅地处理异步操作。什么是发布/订阅呢？以上一节的例子来说，fn1，fn2，fn3都可以视作一个事件的发布者，只要执行它，就会发布一个事件。

3. Promise
使用Promise的方式，就不需要额外地编写一个消息订阅者函数了，只需要异步函数返回一个Promise即可

4. generator
如果说Promise的使用能够化回调为链式，那么generator的办法则可以消灭那一大堆的Promise特征方法，比如一大堆的then()。
```
# 回调地狱
```js
function a(functionb(){//回调地狱是由于太多的回调函数
    c(function d(){
    
    })
})
解决异步回调地狱的三种方法（promise、async/await、generator）
1. promise
Promise有三种状态：pending/reslove/reject 。pending就是未决，resolve可以理解为成功，reject可以理解为拒绝。
同时Promise常用的三种方法 then 表示异步成功执行后的数据状态变为reslove catch 表示异步失败后执行的数据状态变为reject all表示把多个没有关系的Promise封装成一个Promise对象使用then返回一个数组数据。
  function f() {
      let promise = new Promise((resolve, reject) => {
          //模拟异步
          setTimeout(()=>{
             resolve('prom')
          },1000)
  
      })
      return promise;
  }

Generator（生成器）是一种有效利用内存的机制，一边循环一边计算生成数值的机制。通过配合Promise可以更加优雅的写异步代码
function f1() {
     let promise = new Promise((resolve, reject) => {
         setTimeout(function () {
             resolve("hello word")
         })
     })
     return promise;
 } 
//构建一个生成器
 function *f() {
      let x = yield f1();
      console.log("ni hao")
  }	
  //获取生成器的值
   var it = f();
    it.next().value.then(data=>{
   console.log(data)
  })
  console.log(123)
  it.next()
  console.log(it.next())

  当然生成器不是最完美的，它的语法让人难以理解，所以ES7推出了async/await (异步等待),多么贴切
   function f() {//封装好的异步请求
      return new Promise((resolve, reject) => {
           setTimeout(()=>{
             resolve("hello word")
           },1000)
        })
   }
    // 使用异步函数
    async function a(){
   var data = await f();
   return data;
   }
//获取值
var a = a()
 a.then(data=>{
     console.log(data)
 })
```
# DOM文档加载的步骤顺序为？

```js
  http事务：浏览器输入网址为什么就能看到网页？

            1.输入网址回车的一瞬间；
            2.域名解析：把域名解析成ip地址，就可以知道服务器地址；
            3.就可以根据ip地址给服务器发送请求(客户端)；
            4.三次握手或四次握手(确保通道安全可靠，真正传输报文)
            5.服务器根据你的请求发出响应(服务器)；
            6.服务器返回到客户端的数据一般是：html、css、js、外部资源(图片、音频视频)
                1.解析HTML结构。
                2.加载外部脚本和样式表文件。
                3.解析并执行部分脚本代码。
                4.DOM树构建完成。//DOMContentLoaded
                5.加载图片等外部文件。
                6.页面加载完毕。//window.onload

            DOM文档加载的步骤为:
                1.解析HTML结构。
                2.加载外部脚本和样式表文件。
                3.解析并执行脚本代码。
                4.DOM树构建完成。//DOMContentLoaded
                5.加载图片等外部文件。
                6.页面加载完毕。//window.onload

```

# HTML5的新特性

```html
cmara audio video contact canvas header footer
```

# 原形方法的挂载

```html
  <script>
        function A(){
            this.type = 'a'
        }
        function B(){}
        // 原形方法的挂载
        B.prototype = new A
        // console.log(new B)
    </script>
```



# promise的应用

```html
<script>
        var a = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(1)
                    resolve()
                }, 1000)
            })
        }
        var b = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(2)
                    resolve()
                }, 1000)
            })
        }
        var c = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(3)
                    resolve()
                }, 1000)
            })
        }
        a().then(b).then(c)//1 2 3
    </script>
```

# http的底层原理

```js
 <!-- OSI -->
    <!-- 应用层 -->
    <!-- 表示层 -->
    <!-- 会话层 -->
    <!-- 网络层 HTTP-->
    <!-- 传输层 TCP/IP--> 
    <!-- 数据链路层 -->
    <!-- 物理层 -->
```

# 事件的执行顺序

```js
  <!-- 2,6,1,3,4,5 -->
	//先处理同步，后处理异步
//异步事件：先微（then,awit,async）
		//后宏事件(定时器，ajax，fs)
    <script>
        // then微事件  定时宏事件
        // 先处理同步，再处理异步(先微(then,await,async)，宏(定时器，ajax，fs))
        setTimeout(() => {
            console.log(1)
        }, 0)
			//同步
        new Promise((resolve, reject) => {
            console.log(2)
            resolve(3)
            // setTimeout(() => {
            //     console.log(3)
            //     // 微
            //     resolve(4)
            // })
            //异步微事件
        }).then((val) => {
            console.log(val)
        })
        setTimeout(() => {
            console.log(5)
        }, 0)
		//同步
        console.log(6)
        // 2 6 3 1 5
    </script>
```

# 如何优化页面性能

```
 <!-- 1.性能优化 -->
    <!-- cookie 本地存储的优化 -->
    <!-- jsx虚拟DOM 空间换时间 -->
    <!-- keep-alive 内存 -->
    <!-- 减少ajax请求 -->
    <!-- 压缩图片 精灵图雪碧图 -->
    <!-- 懒加载 -->
    
```

# vue的原理解析

```js
 <!-- 2.vue的原理 -->
    <!-- Object.defineProperty (Vue1.x-2.x)  new Proxy() (Vue3.x) -->
    <!-- 依赖收集，观察者模式， data仓库(更改的值) methods v，vuex，会有一个仓库，把所有的数据依赖存起来 -->
    <!-- MVVM 把所有的数据放在 data   M层   V触发事件 -->
    <!-- 把所有的数据放入一个回调仓库里面存起来，在某一个合适的时候拿出来触发(v-on:,v-model) -->
```

# 用js实现路由

```js
// 1.定时器配合loaction对象
        setInterval(() => {
            console.log(location)
             switch(){}
         }, 1000);

        // 2.在全局里面有方法可以监听url上面的改变然后触发对应的回调
        window.onhashchange = ()=>{
            console.log(1)
        }
```

#  伪数组转数组（ES6方法）

```html
 <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    <script>
        console.log(document.querySelectorAll('li'))
        // 伪数组转数组
        console.log([...document.querySelectorAll('li')])
    </script>
```

# 数组的去重方法

```js
//1.  // 数组去重es6方法
        var arr = [1,2,5,5,6,6,7,9]
        console.log(new Set(arr))

        function noSame(arr){
            return new Set(arr)
        }
//双重for循环去重 
//原理 两两比较如果相等的话就删除第二个
function noRepeat1(arr){
        // 第一层for用来控制循环的次数
        for(var i=0; i<arr.length; i++){
            //第二层for 用于控制与第一层比较的元素
            for(var j=i+1; j<arr.length; j++){
                //如果相等
                if(arr[i] == arr[j]){
                    //删除后面的 即第 j个位置上的元素  删除个数 1 个
                    arr.splice(j,1);
                    // j--很关键的一步  如果删除 程序就会出错 
                    //j--的原因是 每次使用splice删除元素时 返回的是一个新的数组 
                    // 这意味这数组下次遍历是 比较市跳过了一个元素
                    /*
                        例如： 第一次删除后 返回的是 1 1 3 2 1 2 4
                     *  但是第二次遍历是 j的值为2  arr[2] = 3
                     *  相当于跳过一个元素 因此要 j--
                     * */
                    j--;
 
                }
 
            }
        } 
        return arr;
//3.单层for循环
    
function norepeat(arr){
                arr.sort();
                //先排序让大概相同的在一个位置，这里为什么说是大概相同 是因为sort排序是把元素当字符串排序的 它和可能排成 1 1 10 11 2 20 3 ... 不是我们想要的从小到大
                for(var i = 0; i < arr.length-1;i++){
        //还是两两比较 一样删除后面的
                    if(arr[i]==arr[i+1]){
                        arr.splice(i,1);
                        //i-- 和j--同理
                        i--;
                    }
                }
                return arr;
//4.利用 indexOf 属性 indexOf是返回某个指定的字符在字符串中出现的位置，如果没有就会返回-1 
    
function noRepeat2(arr){
        var newArr = [];
        for(var i = 0; i < arr.length; i++){
            if(newArr.indexOf(arr[i]) == -1){
                        newArr.push(arr[i]);
                }
        }
        return newArr;


```

# 深度拷贝

```js
//1.遍历数组，新增一个新数组，然后把重新每一项push进去
//2.es6方法
 var arr = [1, 2, 3]
        var arr2 = [...arr]
        arr2[1] = 4
        console.log(arr, arr2)
```

# sessionStorage 和cookie localstorage的区别

```js
  // 一般用于登录
        window.document.cookie = "a=1;"
        // 本地存储 sessionStorage localStorage，没有时效性，空间比较大
        // 设置，设置时间戳，在某些拿出来与你的本地时间，界面关闭就消失了
        window.sessionStorage.setItem('name','yao')
        window.sessionStorage.getItem('name')
        window.sessionStorage.removeItem('name')
        // 区别于localstorage，除非你自己调用js删除，或者卸载浏览器，它才消失
        window.localstorage.setItem('name')
```

# 写一个数组读取其子数组的函数方法

```html
    <ul>
        <li>abc</li>
        <li>
            <p>8</p>
            <p>8</p>
            <p>8</p>
            <p>8</p>
            <p>8</p>
            <p>8</p>
            <p>8</p>
            <p>8</p>
        </li>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
    </ul>
    <script>
        let childrenEle = []
        function findAllChildren(children){
            if(children.length>0){
                findAllChildren(children.children)
            }
        }
        findAllChildren(document.querySelector('url').children)
    </script>
```

# 函数连着函数的执行函数

```js
<script>
        // f(1)=1
        // f(1)(2)=2
        // f(1)(2)(3)=6
        function sum(x) {
            function f(y) {
                return sum(x + y);
            }
            // toString 一旦做了加法就会执行
            f.toString = function () {
                return x;
            };
            return f;
        }
        console.log(sum(1))
        console.log(sum(1)(2))
        console.log(sum(1)(2)(3))
    </script>
```

# jq绑定事件的方法

```js
 <script>
        $().on('click')
        $().click()
        $().bind()
        // 删除空格
        trim()
        // [0-9]{4}.+[A-Z0-9]{1}$
        // 4999999999999994
        // 499999999999999X
        // 499999999999zzzX
    </script>
```

# 赋予数组的新方法（挂载在数组的原形对象下）

```html
<script>
        // 赋予数组的新的去重方法
        Array.prototype.unique = function(){
            return new Set(this)
        }
        console.log([9,7,7,9,1,2].unique())
    </script>
```

# 防抖方法（用于下滑动时触发懒加载）

```html
  <div style="height: 2000px;overflow-y: auto;"></div>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script>
        // 性能优化
        // 防抖 定时器
        // 节流 减少触发次数的，可以用前后时间做对比，减少触发次数
        function debounce(fn, wait) {
            var timeout = null;
            return function () {
                // 如果已经存了一个定时器，则清空上一个定时器，重新存一个新的定时器
                if (timeout !== null) clearTimeout(timeout);
                timeout = setTimeout(fn, wait);
            }
        }
        // // 处理函数 普通函数->高阶的防抖函数
        function handle() {
            console.log(Math.random());
        }
        // 滚动事件
        // handle只能在一秒内触发一次
        window.addEventListener('scroll', debounce(handle, 1000));

        // window.addEventListener('scroll', ()=>{
        //     console.log('抖动')
        // });
    </script>
</body>
```

# this的指向问题

```js
1.在构造函数和普通函数里面（function =>）
构造函数里面时面（this指向实例化后的对象）
在普通函数里面（this指向调用它的对象）
=>this指向上下文
<button onclick='test(this)'/>//this指向该节点的对象
```

# xss攻击

```html
 <!-- XSS攻击  对输入数据进行正则检验 -->
    <div></div>
    <img src="    1.png"/><script>alert(1)</script><img src="1.png      " />
    <script>
        //v-html
        document.querySelector('div').innerHTML = '<p>alert(1)</p>'
    </script>
```

# 正向代理和反向代理

````
* 正向代理
  - 明确目标服务器，在客户端配置
* 反向代理
  - 不明确目标服务器，在服务端配置

````

# 设计模式

```
- 单例模式
- 装饰器模式
- 观察者模式
- 订阅者/发布者模式

```

# 如何写出高质量代码风格

```
* 代码风格
* 语义化标签
* 模块化处理
```

# SEO（Search Engine Optimization  搜索引擎优化）

前端优化方式

* 语义化标签（优化html标签）
* 关键分布布局（网站的结构布局）
* 服务器渲染
* 热搜(关键字的重要性)

第一：域名的选择与投资 （选择良好简短的域名）

网站建设之初必须选择合适良好的域名，域名的价值非常重要，在SEO过程中是不可忽视的环节。 域名在选择时一定要精短，让搜索用户能够从域名中感受其中含义最为重要，很多企业都会采用简短的拼音所代替，并且更多的人们愿意选择.com后缀，其原因 在于用户熟知度更高。其实为了能够及早展现新网站的价值，很多人更愿意去投资老域名，购买老域名时一定要考虑该域名的权重，之前是否被搜索引擎惩罚，同时 也可以直接性够购买权重较高的二级域名进行运用，老域名的价值在于各大搜索引擎对其的信任感。 

第二：关键词的挖掘 

关键词的挖掘是网站SEO规划 中最为重要的环节之一，对于关键词的挖掘一定要慎重考虑以及做出最佳的判断。关键词挖掘过程中一定要选取最有价值性的交易类型关键词，也就是所针对消费群 体进行选择，同时还必须把握竞争对手的情况，分析在关键词方面的优劣势，同时在结合自身企业的需求做出最佳的判断。作为一名优秀的SEOer在关键词挖掘 和利用过程中，必须遵循28定律，长尾关键词的流量才是重点，这类关键词的转化率极高 。

第三：良好的网站结构的布局 

网站的结构布局直接性影响 到搜索引擎和用户体验两方面，设计者如果在网站结构上设计不合理，不仅会影响到搜索引擎的抓取和爬行，而且还直接会影响到用户的阅读浏览行为。在网站结构设计过程中，必须从搜 索引擎体验和用户体验双重考虑，搜索引擎体验主要是做好网站的链接结构布局，网站基本功能(404页面的制作，错误链接/死链接的处 理，Sitemap.xml地图的制作以及Robots.txt文件的设置等)的完善。而用户体验则更是需要数据来研究用户的阅读点击行为，这有这样才能 够做到双重体验，当然若用户体验和搜索引擎体验相互矛盾时，不可避免时一定要把用户体验放在第一位。 

第四：更新高质量内容 

高质量内容无论是现目前还是将来都将被搜索引擎看成重点， 网页质量的好坏直接影响到用户需求是否得以解决。在更新高质量内容过程中必须遵守内容的相关性，内 容的及时性，内容的丰富性，内容的引导性，内容的广告植入性。只有通过高质量的内容才能够将产品信息充分的曝光在用户严重，更加能够吸引读者，从而产生购 买消费的欲望，最终达成转化，一步一步提高转化率。 

第五：建设高质量外链

高质量外链相对而言，需要注重相关性(平台与内容)，内容的高质量型，平台的权威性，外链建设多样化，外链建设集中性，外链建设平衡性，锚文本的准确性。 

总结：做好SEO可以从多方面进行，前端的话可以从语义化标签（优化html标签），网站的结构布局和服务器渲染等优化，另外也可以通过域名的选择，关键词的挖掘，良好的网站结构的布局，更新高质量内容，建设高质量外链来更好的优化SEO。 

# socket

- 特点与应用场景

- Socket心跳机制

  > 心跳机制的原理很简单：客户端每隔N秒向服务端发送一个心跳消息，服务端收到心跳消息后，回复同样的心跳消息给客户端。如果服务端或客户端在M秒（M>N）内都没有收到包括心跳消息在内的任何消息，即心跳超时，我们就认为目标TCP连接已经断开了。

  - 作用：了解客户端存活状态，以便释放资源
  - 处理方案
    - 服务端主动发送心跳包
    - 客户端主动发送心跳包

# 你有用过什么排序方法吗，sort的原理是什么。

```
冒泡排序，希尔排序，快速排序，插入排序，
sort的原理：（其根本就是用来冒泡排序的原理）
sort方法接受一个比较器，这个比较器比较传入的两个参数：a和b。a>b则返回正数，a<b返回负数，a==b返回0。然后sort调用内部实现的比较算法，配合这个比较器，就能排序了。
```

# 懒加载的实现原理是什么（利用异步加载）

```

　实现原理:先加载一部分数据，当触发某个条件时利用异步(async)加载剩余的数据，新得到的数据不会影响原有数据的显示，同时最大幅度的减少服务器端资源耗用。

目的：优化页面性能，服务器前端的优化，减少请求次数或者延迟请求数。

实现方式：
    1.第一种是纯粹的延迟加载，使用setTimeOut和setInterval进行加载延迟。
　　2.第二种是条件加载，符合某种条件，或是出发某些事件才开始异步加载。
　　3.第三种是可视区加载，仅记载用户的可视区域，这个主要监控滚动条来实现，一般会距用户看到某些图片前的一段距离时开始进行记载，这样就可保证用户拉下时正好可以看到加载完毕后的图片或是内容。
网址了解：https://blog.csdn.net/bury_/article/details/79516223
```

# 触发bfc的方法有哪些？

* 1.float的值不为none
* 2.overflow的值不为visible
* 3.display的值为table-cell、tabble-caption和inline-block之一
* 4.position的值不为static或则releative中的任何一个

# bfc的原理是什么

```
块儿级格式上下文。规定了内部的元素如何布局，并且与这个区域外部豪不相干。
```

# 作用域链

```
作用域链
函数在调用参数时会从函数内部到函数外部逐个”搜索“参数,一直找到参数为止,如果没有声明就返回null,声明了没有赋值就返回undefined,这个过程就是作用域链；
```

# 常见的http状态码

```
200:ok,表示请求成功
301:永久转移（永久重定向）应用场景：域名更改，访问原始域名重定向到新的域名
302：临时转移（临时重定向），应用场景：网站现在是基于HTTPS运作的，但是若访问的是带http协议，会基于307重定向到HTTPS协议上。还可以用作服务器负载均衡，一般在真实项目中，都是把图片存放在图片服务器上的，而并非主服务器，当用户访问主服务器准备获取图片时，这时就会把我们的请求转移到图片服务器。
304：设置数据缓存，一般是服务器端做
400：请求参数错误
401：无权限访问
404：找不到资源
413：和服务器交互的内容，上传的资源大小超过服务器的限制大小
500：服务器错误
503：服务器超负荷
```

