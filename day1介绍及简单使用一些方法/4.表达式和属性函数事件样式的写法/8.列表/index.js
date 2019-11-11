(function () {
    // 数据类型 此处老师为一个数组 名称可以根据个人爱好去不一定用Data
    var teachers = [{
            name: 'yao',
            id: 2
        }, {
            name: 'jin',
            id: 3
        }, {
            name: 'lin',
            id: 1
        }];
    // 列表的渲染要注意添加（key以便区别）
    var arr = [React.createElement("p", { key: "1" }, "1"), React.createElement("p", { key: "2" }, "2"), 3];
    // View
    var template = React.createElement("div", null,
        arr,
        React.createElement("ul", null, (function () {
            // return [<li>1</li>,<li>2</li>,<li>3</li>]  列表写法2
            var arr = [];
            for (var i = 0; i < teachers.length; i++) {
                // 给li提价key
                arr.push(React.createElement("li", { key: i },
                    teachers[i].id,
                    " : ",
                    teachers[i].name));
            }
            return arr;
        })()),
        React.createElement("ul", null, (function () {
            // 列表写法3（以上的区别遍历方式不一样）
            return teachers.map(function (item, index) {
                return React.createElement("li", { key: index },
                    item.id,
                    " : ",
                    item.name);
            });
        })()));
    var el = document.querySelector('#demo');
    ReactDOM.render(template, el);
})();
