# refs
某些情况，数据驱动完成不了的事情，可能要交给节点去做，那么你可以使用ref

先需要在jsx对应的节点上面放一个ref属性，如果你直接原生去拿document.querySelector('input')，ref可以帮助你完成对虚拟DOM和真实DOM的节点同步获取和更新
```js
<input ref="input" />
然后在方法或者生命周期里面使用下面这个方法获取节点
this.refs.input.focus()
```
* 另一用法
```js
class App extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
    componentDidMount() {//一开始就聚焦在输入框
        this.textInput.current.focus();
    }
    render() {
        return (
            <input ref={this.textInput} />
        );
    }
}
const template = <div>
    <App />
</div>
const el = document.querySelector('#demo')
ReactDOM.render(template, el)
```