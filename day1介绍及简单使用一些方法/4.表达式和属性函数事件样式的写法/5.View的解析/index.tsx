(() => {
    // View（虚拟DOM）
    const template = <div>
        {(() => {
            return data
        })()}
    </div>
    const el = document.querySelector('#demo')
    ReactDOM.render(template, el)
})();