(function () {
    // 组件的本质是一个构造函数
    // 组件是一个独立的作用域
    //(切记) 只有函数才有私有作用域
    var Abc = function () {
        var data = {
            title: 'hello world'
        };
        var methods = {
            test: function () {
                console.log(1);
                return 1;
            }
        };
        // 事件的调用与函数的调用       1被点击
        return React.createElement("div", { onClick: methods.test }, methods.test());
    };
    // 组件的两种调用方式（其一 {Abc()}，其二 <Abc/> ）
    var template = React.createElement("div", null,
        Abc(),
        Abc(),
        Abc(),
        Abc(),
        Abc(),
        React.createElement(Abc, null),
        React.createElement(Abc, null),
        React.createElement(Abc, null),
        React.createElement(Abc, null));
    var el = document.querySelector('#demo');
    ReactDOM.render(template, el);
})();
