let clickScroll = function() {
    let dBox = document.getElementById('d')
    let button = document.getElementById('button')
    if (dBox && button) {
        let left = dBox.offsetLeft
        let buttonLeft = button.offsetLeft
        console.log(left)
        console.log(buttonLeft)
        let navBox = document.getElementById('nav-box');
        if (navBox) {
            // clientWidth元素的宽度
            navBox.scrollTo(left - buttonLeft, 0);
            navBox.scrollTo
        }
    }
}