(function () {
    // v-if 此处为一个函数也叫一个组件
    var Vif = function () {
        var num = 9;
        return React.createElement("div", { style: {
                // 大于7则显示 小于则隐藏此处相当于v-show
                display: num > 7 ? 'block' : 'none'
            } }, "\u663E\u793A\u6216\u8005\u9690\u85CF");
    };
    // View 组件的两种调用方法 常用第二中<Vif>
    var template = React.createElement("div", null,
        Vif(),
        React.createElement(Vif, null));
    var el = document.querySelector('#demo');
    ReactDOM.render(template, el);
})();
