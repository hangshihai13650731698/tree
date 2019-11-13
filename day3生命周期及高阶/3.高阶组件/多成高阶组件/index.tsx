class list extends React.Component {

    render() {
        return (
            <div>组件1</div>
        )
    }
}
const HOC = (props) => {
    return (Component) => {
        return (Component2) => {
            return () => {
                return (
                    <div><Component {...props} />
                    <Component2 {...props} />
                    </div>
                )
            }
        }
    }
}

// props要传进去的对象数据 注意HOC（props）组合组件1（component）组合组件2（component）

const store = {
    skill: '123',
    ajax() { },
    getCookie() { }
}

// 新建组件的
const HOClist=HOC(store)(list)(list)//后则为一个时则是高阶组件，为多个时则为多层高阶

const template=<ul>
    <HOClist/>
</ul>
const el=document.querySelector('#demo')
ReactDOM.render(template,el)