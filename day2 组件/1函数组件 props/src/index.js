(function () {
    // 函数组件，props实现更改状态，父传子方法
    // props的本质是函数从外界得到的参数
    // 也叫插槽
    // 组件的封装本质就是函数的封装
    // 组件接收不同的props的值，就会返回不同的视图
    // 封装的组件首字母必须是大写
    var Header = function (props) {
        console.log(props);
        return React.createElement("header", { onClick: props.fn || null, style: { backgroundColor: props.color ? props.color : 'red' } },
            props.title,
            props.html || '');
    };
    // 两种组件的调用方式
    var template = React.createElement("div", null,
        Header({ title: '微信' }),
        React.createElement(Header, { title: "\u652F\u4ED8\u5B9D", color: 'blue', fn: function () { console.log(88); }, html: React.createElement("span", null, "\u4F60\u597D") }));
    var el = document.querySelector("#demo");
    ReactDOM.render(template, el);
})();
