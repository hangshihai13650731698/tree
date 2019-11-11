(() => {

    // 声明数据类型与下方的Data成对应关系
    interface Data {
        name: string,
        num: number,
        style: {
            fontSize: string,
            color: string
        }
    }
     // 声明数据类型与上方的Data成对应关系
    const data: Data = {
        name: 'yao',
        num: 50,
        // 给下方调用的样式
        style: {
            fontSize: `50px`,
            color: 'red'
        }
    }
    // 和vue的写法差不多，差别在于调用的方式不一样
    const methods = {
        test(){
            console.log(1)
        },
        // 函数必须有return值，它就会多一个独特的用法
        renderNum(){
            return 1
        }
    }
    // 构建虚拟DOM
    const template = <div>
        <p>事件的调用(注意点第三个字母要大写)</p>
        <button onClick={methods.test}>触发事件</button>
        
        <p>函数的调用比事件多个（）</p>
        <p>{methods.renderNum()}</p>
    </div>
    // 挂载在容器下，并把虚拟DOM 变成真实DOM
    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)
})();