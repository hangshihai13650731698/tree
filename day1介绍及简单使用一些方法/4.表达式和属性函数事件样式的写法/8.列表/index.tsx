(() => {
    interface teachersType {
        name: string,
        id: number
    }
    // 数据类型 此处老师为一个数组 名称可以根据个人爱好去不一定用Data
    const teachers: teachersType[] = [{
        name: 'yao',
        id: 2
    }, {
        name: 'jin',
        id: 3
    }, {
        name: 'lin',
        id: 1
    }]
    // 列表的渲染要注意添加（key以便区别）
    const arr: number[] = [<p key="1">1</p>, <p key="2">2</p>, 3]
    // View
    const template = <div>
        {arr}

        <ul>
            {(() => {
                // return [<li>1</li>,<li>2</li>,<li>3</li>]  列表写法2
                let arr = []
                for (let i = 0; i < teachers.length; i++) {
                    // 给li提价key
                    arr.push(<li key={i}>
                        {teachers[i].id} : {teachers[i].name}
                    </li>)
                }
                return arr
            })()}
        </ul>
        <ul>

            {(() => {
                // 列表写法3（以上的区别遍历方式不一样）
                return teachers.map((item, index) => {
                    return <li key={index}>
                        {item.id} : {item.name}
                    </li>
                })
            })()}
        </ul>
    </div>
    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)
})();