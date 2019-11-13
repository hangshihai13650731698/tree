var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var list = /** @class */ (function (_super) {
    __extends(list, _super);
    function list() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    list.prototype.render = function () {
        return (React.createElement("div", null, "\u7EC4\u4EF61"));
    };
    return list;
}(React.Component));
var HOC = function (props) {
    return function (Component) {
        return function (Component2) {
            return function () {
                return (React.createElement("div", null,
                    React.createElement(Component, __assign({}, props)),
                    React.createElement(Component2, __assign({}, props))));
            };
        };
    };
};
// props要传进去的对象数据 注意HOC（props）组合组件1（component）组合组件2（component）
var store = {
    skill: '123',
    ajax: function () { },
    getCookie: function () { }
};
// 新建组件的
var HOClist = HOC(store)(list)(list); //后则为一个时则是高阶组件，为多个时则为多层高阶
var template = React.createElement("ul", null,
    React.createElement(HOClist, null));
var el = document.querySelector('#demo');
ReactDOM.render(template, el);
