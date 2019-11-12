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
var Panel = /** @class */ (function (_super) {
    __extends(Panel, _super);
    function Panel(props) {
        var _this = _super.call(this, props) //不可少
         || this;
        _this.state = {
            // 创建空数组装数据
            news: []
        };
        // 发送请求获取数据
        axios.get('https://cnodejs.org/api/v1/topics').then(function (data) {
            _this.setState({
                news: data.data.data
            });
            console.log(data);
        });
        return _this;
    }
    // 用样式节点遍历请求回来的数据
    Panel.prototype.renderNews = function (news) {
        var arr = news.map(function (item, index) {
            return (React.createElement("a", { key: index, className: "weui-media-box weui-media-box_appmsg" },
                React.createElement("div", { className: "weui-media-box__hd" },
                    React.createElement("img", { className: "weui-media-box__thumb", src: item.author.avatar_url, alt: "" })),
                React.createElement("div", { className: "weui-media-box__bd" },
                    React.createElement("h4", { className: "weui-media-box__title" }, item.title),
                    React.createElement("p", { className: "weui-media-box__desc" }, item.author.loginname))));
        });
        return arr;
        // style={{marginBottom:'100px'}}注意驼峰命名法
    };
    // 渲染DOM
    Panel.prototype.render = function () {
        return (React.createElement("div", { className: "weui-panel weui-panel_access" },
            React.createElement("div", { className: "weui-panel__hd" }, "\u56FE\u6587\u7EC4\u5408\u5217\u8868"),
            React.createElement("div", { className: "weui-panel__bd" }, this.renderNews(this.state.news)),
            React.createElement("div", { className: "weui-panel__ft" },
                React.createElement("a", { className: "weui-cell weui-cell_access weui-cell_link" },
                    React.createElement("div", { style: { marginBottom: '100px' }, className: "weui-cell__bd" }, "\u67E5\u770B\u66F4\u591A"),
                    React.createElement("span", { className: "weui-cell__ft" })))));
    };
    return Panel;
}(React.Component));
