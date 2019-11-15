import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './pages/Home/Home'
import Mine from './pages/Mine/Mine'
import Detail from './pages/Detail/Detail'
// 子组件名称
import Childa from './pages/Home/Childa/Childa'
import Childb from './pages/Home/Childb/Childb'

// 引入路由的一些方法
import {
    HashRouter as R,//用R来代替哈希路由
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom'
// 封装路由起来
const router = [
    {
        path: '/home',
        component: <Home />,
        children: [{
            path: '/home/a',
            component: <Childa />
        }, {
            path: '/home/b',
            component: <Childb />
        }]
    },
    {
        path: '/mine',
        component: <Mine />
    },
    {
        path: '/detail',
        // 路由组件
        component: <Detail />
    }
]

// 路由的跳转方法例如下面
//  <Link to="/home">首页</Link> | <Link to="/mine">我的</Link> | <Link to="/detail">详情页</Link>
// 本质通过link和Route跳转
// 路由守卫等
ReactDOM.render(
    <R>
        <Link to="/home">首页</Link> | <Link to="/mine">我的</Link> | <Link to="/detail">详情页</Link>
        {(() => {
            if (window.sessionStorage.getItem('login')*1) {
                return <><Switch>{router.map((item, index) => {
                    return <Route key={index} path={item.path}>
                        {item.component}
                        {
                            item.children ? (item.children.map((item2, index2) => {
                                return <Route key={`${index}-${index2}`} path={item2.path}>
                                    {item2.component}
                                </Route>
                            })) : ''
                        }
                    </Route>
                })}</Switch><Redirect to="/home" /></>
            } else {
                // 路由重定向Redirect
                return <div>返回登录页面</div>
            }
        })()}
    </R>
    , document.getElementById('root'));
serviceWorker.unregister();
