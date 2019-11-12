(() => {
    // 函数组件，props实现更改状态，父传子方法
    // props的本质是函数从外界得到的参数
    // 也叫插槽
    // 组件的封装本质就是函数的封装
    // 组件接收不同的props的值，就会返回不同的视图
    // 封装的组件首字母必须是大写
    const Header = (props) => {
        console.log(props)
        return <header onClick={props.fn || null} style={{ backgroundColor: props.color ? props.color : 'red' }}>
            {props.title}{props.html || ''}</header>
    }
    // 两种组件的调用方式
    const template=<div>
        {Header({title:'微信'})}
        <Header title="支付宝" color='blue' fn={()=>{console.log(88)}} html={<span>你好</span>}/>
    </div>
    const el=document.querySelector("#demo")
    ReactDOM.render(template,el)
})()