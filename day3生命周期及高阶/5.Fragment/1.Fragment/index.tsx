
class List extends React.Component {
    render() {
        return (
            // 返回多个兄弟节点时可以使用<React.Rragment>
            <React.Fragment>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </React.Fragment>
        )
    }
}

class List2 extends React.Component {
    render() {
        return (
            <>
                <li>a</li>
                <li>b</li>
                <li>c</li>
                <li>d</li>
            </>
        )
    }
}

const template = <ul>
    <List />
    <List2/>
</ul>
const el = document.querySelector('#demo')
ReactDOM.render(template, el)