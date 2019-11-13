class Header extends React.Component {
    state = {
        inputValue: ''
    }
    getInputValue(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.inputValue}</p>
                <input value={this.state.inputValue} onChange={this.getInputValue.bind(this)} />
            </div>
        )
    }
    // react独有生命周期，用于性能的优化更新状态
    shouldComponentUpdate() {//返回一个布尔值
        if (this.state.inputValue.length > 9) {
            // 停止更新（即不可以输入操作了）
            return false
        } else {
            return true
        }

    }
}
const template = <div>
    <Header />
</div>
const el = document.querySelector('#demo')
ReactDOM.render(template, el)