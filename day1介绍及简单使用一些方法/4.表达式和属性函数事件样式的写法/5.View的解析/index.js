(function () {
    // View（虚拟DOM）
    var template = React.createElement("div", null, (function () {
        return data;
    })());
    var el = document.querySelector('#demo');
    ReactDOM.render(template, el);
})();
