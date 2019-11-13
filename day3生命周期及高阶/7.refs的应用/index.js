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
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.textInput = React.createRef();
        return _this;
    }
    App.prototype.componentDidMount = function () {
        this.textInput.current.focus();
    };
    App.prototype.render = function () {
        return (React.createElement("input", { ref: this.textInput }));
    };
    return App;
}(React.Component));
var template = React.createElement("div", null,
    React.createElement(App, null));
var el = document.querySelector('#demo');
ReactDOM.render(template, el);
