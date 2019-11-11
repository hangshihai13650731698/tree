(() => {
    // 组件的本质是一个构造函数
    // 组件是一个独立的作用域
    //(切记) 只有函数才有私有作用域
    const Abc = ()=>{//声明一个组件（也叫函数）
        const data = {
            title: 'hello world'
        }
        const methods = {
            test(){
                console.log(1)
                return 1
            }
        }
        // 事件的调用与函数的调用       1被点击
        return <div onClick={methods.test}>{methods.test()}</div>
    } 
    // 组件的两种调用方式（其一 {Abc()}，其二 <Abc/> ）
    const template = <div>
        {Abc()}
        {Abc()}
        {Abc()}
        {Abc()}
        {Abc()}
        <Abc/>
        <Abc/>
        <Abc/>
        <Abc/>
    </div>
    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)
})();