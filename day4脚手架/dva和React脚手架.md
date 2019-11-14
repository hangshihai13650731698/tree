# React脚手架
* 创建项目（create-react-app）
```bash
# 这条等价与下面的指令
npx create-react-app +项目名称
# or
// 全局安装
npm install cretall create-react-app -g
# 创建项目
create-react-app my-app(项目名称)
cd my-app
npm start
# 检查安装是否成功
create-react-app -V
```
# dva脚手架
安装 dva-cli
```bash
cnpm i dva-cli -g
dva -v
```
* 创建项目
```bash
dva new +项目名称
cd +项目名称
npm start 启动服务器
```
* mock 模拟数据 里面放着空的json静态数据，写死的数据，用于测试
* public 模板文件
* src
*- assets 静态资源文件，图片，样式
- components 组件
- models redux仓库
- routes react-router路由，页面组件
- services api接口，封装接口，获取数据
* index.css 全局样式
* index.js 入口文件d
* 路由配置文件
# 注意修改node_modules文件夹下dva/lib/index.js第22行改为下面：
```js
var _createHashHistory = _interopRequireDefault(require("history").createHashHistory);
```
# 配置路由的注意点
配置路由<Route path="/wechat" exact component={Wechat} />当匹配到/wechat加载Wechat组件
```js
import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Wechat from './routes/Wechat/Wechat'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/wechat" exact component={Wechat} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
```
# 频繁切换路由时导致请求数据出现的问题解决方法（即组件进场上已组件遗留内存问题）
* 生命周期
> 解决方法1用sessionStorage做中间缓存
```js
    componentDidMount(){
        let news=window.sessionStorage.getItem('news')
        console.log(news)
        if (!news) {
            this.loadMore()
        }
        else{
            // 有缓存的情况下，从缓存拿数据
            this.setState({
                news: JSON.parse(window.sessionStorage.getItem('news'))
            })
        }
    }
    // 封装方法调用
   async loadMore(){
        console.log('发送请求')
        const data=await await axios.get('https://cnodejs.org/api/v1/topics')
        window.sessionStorage.setItem('news',JSON.stringify(data.data.data))
        this.setState({
            news:data.data.data
        })
}
```
> 解决方法2 利用生命周期的销毁周期做开关
```js
componentWillMount(){//创建前
            bool = true
}

  // React的生命周期返回ture或false
        shouldComponentUpdate(){
            if(bool){
                return true
            }else{
                return false
            }
      }
// 销毁时期
componentWillUnmount(){
            console.log('销毁');
            bool = false
 }
 ```




