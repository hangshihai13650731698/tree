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
