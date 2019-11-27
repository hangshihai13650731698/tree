# 安装步骤
```js
1.先安装脚手架再创建项目
vue create my-project
2.npm安装vant
npm i vant -S
3.安装插件
npm i babel-plugin-import -D
```
# 方式一. 自动按需引入组件 (推荐)
babel-plugin-import 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式
# 按需引入组件(在局部组件)
```js
import Vue from "vue";
import { Search } from "vant";
Vue.use(Search);
```

# 仓库的合理使用
```js
// 存进仓库
 methods: {
    onSearch() {
      // 传到仓库里面去
      this.$store.dispatch("setText", {
        value: this.value//传个形参过去
      });
      window.console.log(this.value);
    }
  }


//取出来用
 computed: {
    search() {
      return this.$store.getters.getText;
    },
    // 上面取值出来this.search.value取出来有的话就执行下面查询
    restaurantsComputed() {
      if (this.search.value) {
        //   过滤赛选
        window.console.log(this.search.value)
        return this.restaurants.filter(item => {
                                // 根据这些取到的值查找原对象有则返回无则原来
          if (item.name.indexOf(this.search.value) >= 0) {
            return item;
          }
        });
      } else {
        return this.restaurants;
      }
    }
  }
```


# 路由的配置和使用
1.安装
```js
npm install vue-router
2.使用(安装)vue-router（VueRouter是作为插件增强Vue的功能）
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 3.引入页面组件
import Home from '../pages/home.vue'
import Recover from '../pages/cover.vue'
import my from '../pages/my.vue'
4.// 4配置路由规则和参数
const routes = [{
    // 路径
    path: '/home',
    component: Home
}, {
    path: '/cover',
    component: Recover
},{
    path:'./my',
    component:my
},{
    path:'./shezhi',
    component:shezhi
}
]
const router = new VueRouter({
    routes
})
export default router
```