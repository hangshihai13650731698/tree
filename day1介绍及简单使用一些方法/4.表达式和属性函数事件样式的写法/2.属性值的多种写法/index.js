(function () {
    var data = {
        name: 'eno',
        num: 88,
        //切记 样式（有两种写法这是其一）写成对象形式
        style: {
            fontSize: "50px",
            color: 'red'
        }
    };
    // 重点(构建虚拟DOM)
    var template = React.createElement("div", null,
        React.createElement("p", null, "1.React\u81EA\u5B9A\u4E49\u5C5E\u6027\u503C\u7684\u5404\u79CD\u5199\u6CD5"),
        React.createElement("p", { age: '18', kkk: data.num, name: 0 ? data.name : '假的' }, 0 ? data.name : '假的'),
        React.createElement("p", null, "2.\u5C5E\u6027\u503C class\u540D"),
        React.createElement("p", { "class": data.num < 0 ? 'abc' : 'cba' }, 0 ? data.name : '假的'),
        React.createElement("p", null, "3.\u5C5E\u6027\u503C style\uFF08\u5185\u8054\u6837\u5F0F\uFF09"),
        React.createElement("p", { style: {
                fontSize: data.num + "px",
                color: 'red'
            } }, 0 ? data.name : '假的'),
        React.createElement("p", null, "3.2\u8C03\u7528\u4E0A\u9762\u7684\u6837\u5F0F\u65B9\u6CD5"),
        React.createElement("p", { style: data.style }, 0 ? data.name : '假的'));
    var el = document.querySelector('#demo');
    ReactDOM.render(template, el);
})();
