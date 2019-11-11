window.onload = function () {
    var mennu = document.getElementById("mennu");
    var lef = document.getElementById("lef");
    var btn = mennu.getElementsByTagName("li");
    var con = lef.getElementsByTagName("li");
    // 给元素添加可视窗口的高度
    for (var i = 0; i < con.length; i++) {
        con[i].style.height = window.innerHeight + "px";
    }
    for (let i = 0; i < btn.length; i++) {
        // 绑定索引
        btn[i].index = i;
        btn[i].onclick = function () {
            // 排他
            clear();
            this.className = 'active';
                // if (i==0) {
                //     window.scrollTo(0,0);
                // }
                
            // 跳转到顶部
            //top 返回最顶层的父窗口
            // var top = con[this.index].offsetTop; // 方式1 top 返回最顶层的父窗口
            var too = window.innerHeight * this.index; // 方式2 可视窗口高度
            window.scrollTo(0,too);
            // window.scrollTo(0,0);
                

        }
    }
    // 排他
    function clear() {
        for (var i = 0; i < btn.length; i++) {
            btn[i].className = '';
        }
    }
    let mennuHight = mennu.offsetTop;
    if (mennuHight == 0) {
        // 滚动窗口
        window.onscroll = function () {
            // let mennuHight=mennu.offsetTop;
            // 获取滚动的高度
            // if (mennuHight==0) {
            var scrootop = window.scrollY;
            //   滚动电梯模型  盒子offsetTop距离顶部的距离
            for (var i = 0; i < btn.length; i++) {
                if (scrootop >= con[i].offsetTop) {
                    clear();
                    btn[i].className = 'active';
                }
            }
            // }
            // var scrootop = window.scrollY;
            // //   滚动电梯模型  盒子offsetTop距离顶部的距离
            // for (var i = 0; i < btn.length; i++) {
            //     if (scrootop >= con[i].offsetTop) {
            //         clear();
            //         btn[i].className = 'active';
            //     }
            // }


        }
    }
    // 吸顶
}