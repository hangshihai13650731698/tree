// 声明属性类型
interface state {
    isFocus: boolean,
    searchText: string
}
class Search extends React.Component {
    // 不写构造器的情况下，即没有super，写法1
    state: State = {
        isFocus: true,//自动聚焦的方法
        searchText: ''
    }
    // 点击时调用的方法
    toggle() {
        // this.isFocus = !this.isFocus
        this.setState({//原形链自带的一种方法
            isFocus: !this.state.isFocus
        })
        // 聚焦输入框（refs绑定元素）
        this.refs.input.focus()
    }
    // 获取输入框的值并联系M层修改的数据
    getInputValue(event) {//给表单添加onChange时调用的方法 onChange={this.getInputValue.bind(this)}
        console.log(event.target.value)
        this.setState({
            searchText: event.target.value
        })
    }
    // 点击×时通过setState来清除输入框的值
    clear() {
        console.log(this)
        this.setState({
            searchText: ''
        })
        // 清除后聚焦输入框
        this.refs.input.focus()
    }
    // 渲染的内容
    render() {
        let { isFocus } = this.state
        return (
            <div className={isFocus ? 'weui-search-bar' : 'weui-search-bar weui-search-bar_focusing'} id="searchBar">
                <form className="weui-search-bar__form">
                    <div className="weui-search-bar__box">
                        <i className="weui-icon-search"></i>
                        <input ref='input' value={this.state.searchText} onChange={this.getInputValue.bind(this)} type="search" className="weui-search-bar__input" id="searchInput" placeholder="搜索" required="" />
                        <a onClick={this.clear.bind(this)} className="weui-icon-clear" id="searchClear"></a>
                    </div>
                    <label onClick={this.toggle.bind(this)} className="weui-search-bar__label" id="searchText" style=
                        {{
                            transformOrigin: '0px 0px',
                            opacity: 1,
                            transform: 'scale(1, 1)'
                        }}>
                        <i className="weui-icon-search"></i>
                        <span>搜索</span>
                    </label>
                </form>
                <a onClick={this.toggle.bind(this)} className="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
            </div>
        )
    }
}