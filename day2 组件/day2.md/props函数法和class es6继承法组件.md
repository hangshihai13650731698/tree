# props(一般函数插槽方法)

如果你需要让组件呈现不同的状态，你可以考虑用props，这种是可以让组件(函数)获取外部的参数（主要是可以获取外部参数）

```js
// props或者插槽可以实现更改状态，父传子方法
// props的本质是函数从外界得到的参数
const Header = (props) => {
    console.log(props)
    return <header style={{
        backgroundColor: props.color ? props.color : 'red'
    }}>{props.title}</header>
}
// 父（及外界）
const template = <div>
                // props获取的参数
    {Header({ title: "微信" })}
             // props获取的参数
    <Header title="支付宝" color="blue" />
</div>
// 挂载的容器
const el = document.querySelector('#demo')
ReactDOM.render(template, el)
```
# 同时还可以传函数和数组对象等（但少传）
```jsx
    //通过props来取参数
   const Header = (props) => {
        console.log(props)
        return <header onClick={props.fn || null} style={{ backgroundColor: props.color ? props.color : 'red' }}>
            {props.title}{props.html || ''}</header>
    }
    // 父传参上去
<Header title="支付宝" color="blue" fn={() => { console.log(1) }} html={<span>你好</span>} />
```

# 函数 vs 组件vs 模块的区别和意义
* 1.组件的封装本质就是函数的封装，该函数接受不同的值，就会返回不同的结果，组件接受不同props，就会返回不同的视图
* 2.函数在js里面地位非常高
* 3.函数有一个JS里面的唯一特权
* 4.JS里面全局作用域和局部作用域(函数)，es6块级作用域
* 5.组件，模块化其实就是在用函数这个特权，如果函数没有特权，那么就没有我们所说的组件化和模块化

# 类组件（class extend类 es6语法常用开发）
```js
// 类组件，本质是一个构造函数，所以首字母必须大写
class Header extends React.Component {
    render() {
        return (<div>头部</div>)
    }
    test(){
        console.log(1)
    }
}
class Footer extends Header {
    render() {
        return (<div>底部</div>)
    }
}
ReactDOM.render(
    <div>
        <Header />
        <Footer />
    </div>
    , document.querySelector('#demo')
)
* 类组件，Header它继承`React.Component`，但是继承之后，后面的Footer组件可以继承Header，那Footer的方法可以根据原型链里面往下寻找
这种类可以继承`React.Component`拿到组件原本没有的一些新方法，该`React.Component`父组件帮你的组件写了很多内置的方法
```
# 常用到的 state和props结合使用

```js
state表明的是组件内部的私有数据，state是组件内部可以改变的，在组件内部使用`this.state.xx`获取，然后由于继承了`React.Component`，这个组件自带`setState`的方法，所以可以允许配合函数触发`setState`更改组件内部状态(数据)，从而更改视图，
- MVVM Model <-> View Vue   {{}}
- State View VS框架   State -> View      View--事件+setState-->Model--> View  {}

class Tool extends React.Component {
    // M
    // 相当于vue里面的data
    // 必须命名为state
    // 1.写法一
    state: {
        name: string,
        skill: string[]
    } = {
        name: 'yao',
        skill: ['ps', 'js']
    }
    constructor(props) {
        super(props)
        // 1.写法二
        // this.state = {
        //     name: 'yao'
        // }
    }
    test(){
        this.setState({
            name: 'lin',
            skill: ['abc']
        })
    }
    // V
    render() {
        return (<div onClick={this.test.bind(this)} name={this.state.skill[0]}>{this.state.name}</div>)
    }
}
ReactDOM.render(
    <div>
        <Tool />
    </div>
    , document.querySelector('#demo')
)
```