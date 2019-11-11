(function () {
    // v-if（在React中表示为Vif）
    var Vif = function () {
        var num = 3;
        // 既可以用switch也可以用if，还可以用三元表达式
        switch (num) {
            case 1:
            case 2:
            case 3:
                return 1;
            case 7:
            case 8:
                return 8;
        }
    };
    // View 条件渲染if
    var template = React.createElement("div", null,
        (function () {
            var num = 8;
            // 写法1
            if (num > 7) {
                return React.createElement("div", null, "\u771F\u7684");
            }
            else {
                return React.createElement("div", null, "\u5047\u7684");
            }
        })(),
        React.createElement("p", null, "\u5199\u6CD52\u76F4\u63A5\u8C03\u7528\u6CD5"),
        Vif(),
        React.createElement(Vif, null));
    var el = document.querySelector('#demo');
    ReactDOM.render(template, el);
})();
