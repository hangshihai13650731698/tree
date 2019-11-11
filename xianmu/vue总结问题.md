# vue中使用keepAlive组件缓存遇到的坑
 根据vue-router提供的守卫可在路由中启用afterEach路由守卫，在afterEach中进行判断是否第一次进入，非第一次进入页面情况强制刷新一次category页面。 
 # 针对用activated和created的问题
 ```js
 前者是用了keep-alive的情况下每重新进入一次页面都会活跃更新，后者只在创建时期促发，在已经创建好下是不会促发里面的请求了
 解决方法启用afterEach路由守卫
const reloadInterceptor=(to,from)=>{
    // 再次从index进入audiocategorre，刷新页面
    if(from,name=='index'&&to.name=='category'){
        let isRefresh=sessionStorage.get('isRefresh');
        if(isRefresh=='0'){
            sessionStorage.set('isRefresh',null);
            window.location.reload();
        }else{
            sessionStorage.set('isRefresh',0);
        }
    }
    else if(from.name=='categorty'&&to.name=='index'){
        sessionStorage.set('isRefresh',0);
    }
}
```
# 常用的几个生命周期选项的用法和一些选项的用法

```js
// 常用的生命周期
    1. beforeCrete(){
        // 创建前，没用M数据层，也没有V视图层
    }
    2. created(){
        // 创建后（常用）
    }
    3. beforeMount(){
        // 挂载前 没M没有V(虚拟DOM真实DOM) 读取了模板，但是没更新上去，编译模板
    }
    4. mounted(){
        // 挂载后，v和M都更新完毕了，所以一般把DOM的操作放在这里
    }
    5. beforeUpdate(){
        // 更新前操作
    }
    6. updated(){
        // 更新后
    }
    7. activated(){
        // 活跃前，在keep-alive激活下使用（常用）
    }
    8. deactivated({
        // 活跃后，在keep-alive停用下使用
    })
    9. beforeDestroy(){//销毁前
        // 创建前 没M没有V(虚拟DOM真实DOM)
         // 清楚滚动事件
                window.onscroll = null
                // 清除定时器
                window.clearInterval(this.timer)
                // 删除全局变量 释放内存
                // 手动垃圾回收
                window.aname = null
    }
    10. destroyed(){//销毁后，一些原本有的东西被销毁
        用法在方法里面用该方法
        methods: {
                destroy() {
                    console.log(this.timer)
                    this.$destroy()
                }
            }
    }
```

 # 常用的其它选项
 ```js
  1. data(){
       return{
        //放数据和属性之类
       }
   }
    2.methods:{
        // 放一些方法之类的选项
    }

    // 用法（常用）
    3. wach:{
        // 监听属性
      handler: function() {
      //  window.console.log();
      }

    }
      computed: {
    search() {//(常用)
      if (this.$store.getters.getzhuangTai) {
         return this.$store.getters.getzhuangTai;
      }
      else return 0
      // return this.$store.getters.getzhuangTai;
    }
    // num:this.search.num
  }
  4. computed:{
    //   计算属性(常用)
  }
  ```