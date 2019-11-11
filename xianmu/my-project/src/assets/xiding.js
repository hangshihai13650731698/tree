window.onload = function () {
    var mennu = document.getElementById("mennu");
    // let tt=this.document.querySelector
    window.console.log(mennu)
    // var mennu = document.getElementById("mennu");
    window.onscroll = function () {
        var scrollTop = window.scrollY;
        let offsettop = 600;
        if (scrollTop >= offsettop) {

            //达到临界点,给菜单添加类名
            window.console.log(mennu)
            mennu.className = 'mennu fix';
        } else {
            mennu.className = 'mennu';
        }
    }
}