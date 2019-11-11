(() => {
    // v-if 此处为一个函数也叫一个组件
    const Vif = () => {
        let num: number = 9
        return <div style={{
            // 大于7则显示 小于则隐藏此处相当于v-show
            display: num > 7 ? 'block' : 'none'
        }}>显示或者隐藏</div>
    }
    // View 组件的两种调用方法 常用第二中<Vif>
    const template = <div>
        {Vif()}
        <Vif/>
    </div>
    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)
})();