(function () {
    // 声明数据类型与上方的Data成对应关系
    var data = {
        name: 'yao',
        num: 50,
        // 给下方调用的样式
        style: {
            fontSize: "50px",
            color: 'red'
        }
    };
    // 和vue的写法差不多，差别在于调用的方式不一样
    var methods = {
        test: function () {
            console.log(1);
        },
        // 函数必须有return值，它就会多一个独特的用法
        renderNum: function () {
            return 1;
        }
    };
    // 构建虚拟DOM
    var template = React.createElement("div", null,
        React.createElement("p", null, "\u4E8B\u4EF6\u7684\u8C03\u7528(\u6CE8\u610F\u70B9\u7B2C\u4E09\u4E2A\u5B57\u6BCD\u8981\u5927\u5199)"),
        React.createElement("button", { onClick: methods.test }, "\u89E6\u53D1\u4E8B\u4EF6"),
        React.createElement("p", null, "\u51FD\u6570\u7684\u8C03\u7528\u6BD4\u4E8B\u4EF6\u591A\u4E2A\uFF08\uFF09"),
        React.createElement("p", null, methods.renderNum()));
    // 挂载在容器下，并把虚拟DOM 变成真实DOM
    var el = document.querySelector('#demo');
    ReactDOM.render(template, el);
})();
