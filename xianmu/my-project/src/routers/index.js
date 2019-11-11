// 3.引入页面组件
import Home from '../pages/home.vue'
import Recover from '../pages/cover.vue'
import my from '../pages/my.vue'
import shezhi from '../pages/shezhi.vue'
import page from '../pages/page.vue'
import main from '../pages/main.vue'
import login from '../pages/login.vue'
import zhuce from '../pages/zhuce.vue'
import more from '../components/more.vue'
import yinxi from '../pages/yinxi.vue'
import jiesuan from '../pages/jiesuan.vue'
import dingdan from '../components/dingdan.vue'
import quit from '../pages/quit.vue'
import Vue from 'vue';
// 使用VueRouter步骤
// 1.引入vue-router
import VueRouter from 'vue-router';

// 2.使用(安装)vue-router（VueRouter是作为插件增强Vue的功能）
Vue.use(VueRouter);

// 4配置路由规则和参数
const routes = [{
        // 路径
        path: '/main',
        component: main,
        name: 'main',
        //路由的嵌套，main里面嵌套，嵌套后路径不用加/
        children: [{
                path: 'home',
                component: Home,
                name: 'home'
            },
            {
                path: 'cover',
                component: Recover,
                name: 'Recover'
            }, {
                path: 'my',
                component: my,
                name: 'my'
            }, {
                path: 'shezhi',
                component: shezhi,
                name: 'shezhi'
            },
        ]
    },
    // 一开始进入到页面时要显示的主页主键
    { //重定向不用放在嵌套里面
        path: '/', //当浏览器地址为/home时，显示Home组件的内容
        redirect: '/main/home'
    },
    //  {
    //     path: '/cover',
    //     component: Recover,
    //     name:'Recover'
    // }, {
    //     path: '/my',
    //     component: my,
    //     name:'my'
    // }, {
    //     path: '/shezhi',
    //     component: shezhi,
    //     name:'shezhi'
    // },
    // 详情页不用嵌套
    {       //动态路由传参数类似列表页传id跳到详情页
        path: '/page/:id',
        component: page,
        name: 'page'
    },
    {       //动态路由传参数类似列表页传id跳到登录页
        path: '/login',
        component: login,
        name: 'login'
    },
    {     
        path: '/zhuce',
        component: zhuce,
        name: 'zhuce'
    },
    {       //动态路由传参数类似列表页传id跳到更多
        path: '/more',
        component: more,
        name: 'more'
    }
    ,{
        path:'/yinxi',
        component:yinxi,
        name:'yinxi'
    }
    ,{
        path:'/jiesuan',
        component:jiesuan,
        name:'jiesuan'
    },
    {
        path:'/dingdan',
        component:dingdan,
        name:'dingdan'
    },{
        path:'/quit',
        component:quit,
        name:quit
    }
    // // 一开始进入到页面时要显示的主页主键
    // {
    //     path: '/', //当浏览器地址为/home时，显示Home组件的内容
    //     redirect: '/home'
    // }
    // 路由守卫监听
    
]
// router.beforeEach((to, from, next) => {
//     // ...
//    })

// const router = new VueRouter({ ... })
 

const router = new VueRouter({
    routes
});
router.beforeEach((to,from,next) => {
    window.console.log('beforeEach',to);
        next()
   });
//    router.afterEach(function(to,from){
    // const reloadInterceptor=(to,from)=>{
    //     // 再次从index进入audiocategorre，刷新页面
    //     if(from,name=='index'&&to.name=='category'){
    //         let isRefresh=sessionStorage.get('isRefresh');
    //         if(isRefresh=='0'){
    //             sessionStorage.set('isRefresh',null);
    //             window.location.reload();
    //         }else{
    //             sessionStorage.set('isRefresh',0);
    //         }
    //     }
    //     else if(from.name=='categorty'&&to.name=='index'){
    //         sessionStorage.set('isRefresh',0);
    //     }
    //     window.console.log(reloadInterceptor)
    // }

// })
export default router


// 路由守卫
// 登录
//page怎么插到数据裤
// 点击事件遇到覆盖问题
// 购物车数量改变时如何去替换数据裤数量