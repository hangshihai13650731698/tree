(() => {
    class Tool extends React.Component {
        // M层
        // 相当于VUE里面的data
        // 写法1
        state: {
            name: string,
            skill: string[]
        } = {
                name: 'eno',
                skill: ['html', 'js']
            }
        constructor(props) {
            super(props)
            // 写法2
            // this.state={
            //     name:'yao'
            // }
        }
        test() {
            console.log(this.state)
            // v改变M通过事件和setState来实现
            this.setState({
                name: 'lin',
                skill: ['nba']
            })
        }
        render() {
            // 注意修正指向
            return (<div onClick={this.test.bind(this)} name={this.state.name} > {this.state.name}</div>)
        }
    }
    // 渲染真实DOM
    ReactDOM.render(
        <div>
            <Tool />
        </div>
        , document.querySelector('#demo')
    )
})()