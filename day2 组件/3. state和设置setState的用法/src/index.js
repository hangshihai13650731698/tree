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
(function () {
    var Tool = /** @class */ (function (_super) {
        __extends(Tool, _super);
        function Tool(props) {
            var _this = _super.call(this, props) || this;
            // M层
            // 相当于VUE里面的data
            // 写法1
            _this.state = {
                name: 'eno',
                skill: ['html', 'js']
            };
            return _this;
            // 写法2
            // this.state={
            //     name:'yao'
            // }
        }
        Tool.prototype.test = function () {
            console.log(this.state);
            // v改变M通过事件和setState来实现
            this.setState({
                name: 'lin',
                skill: ['nba']
            });
        };
        Tool.prototype.render = function () {
            // 注意修正指向
            return (React.createElement("div", { onClick: this.test.bind(this), name: this.state.name },
                " ",
                this.state.name));
        };
        return Tool;
    }(React.Component));
    // 渲染真实DOM
    ReactDOM.render(React.createElement("div", null,
        React.createElement(Tool, null)), document.querySelector('#demo'));
})();
