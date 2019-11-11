(() => {
    interface Data {
        name: string,
        num: number,
        // 样式属性的类型写在这里的时候要写成对象的形式
        style: {
            fontSize: string,
            color: string
        }
    }
    const data: Data = {
        name: 'eno',
        num: 88,
        //切记 样式（有两种写法这是其一）写成对象形式
        style: {
            fontSize: `50px`,
            color: 'red'
        }
    }
    
    // 重点(构建虚拟DOM)
    const template = <div>
        <p>1.React自定义属性值的各种写法</p>
        <p age='18' kkk={data.num} name={0 ? data.name : '假的'}>{0 ? data.name : '假的'}</p>
        <p>2.属性值 class名</p>
        <p class={
            data.num < 0 ? 'abc' : 'cba'
        }>
            {0 ? data.name : '假的'}
        </p>
        <p>3.属性值 style（内联样式）</p>
        <p style={{
            fontSize: `${data.num}px`,
            color: 'red'
        }}>
            {0 ? data.name : '假的'}
        </p>
        <p>3.2调用上面的样式方法</p>
        <p style={data.style}>
            {0 ? data.name : '假的'}
        </p>
    </div>
    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)
})()