function closeMenu() {
    document.getElementById("toggle-nav").checked = false
}

window.addEventListener("load", randomBg());

var scrollOffsets = {
    listen: 0,
    gigs: document.getElementById("listen").clientHeight * 0.5,
    mailinglist: document.getElementById("listen").clientHeight * 0.5,
    meet: 0
}

function zscroll(elN) {
    var listen = document.getElementById("listen").clientHeight
    var gigs = document.getElementById("gigs").clientHeight
    var mailinglist = document.getElementById("mailinglist").clientHeight
    var meet = document.getElementById("meet").clientHeight
    var scroll = new SmoothScroll();
    var heights = [listen, gigs, mailinglist, meet]
    var offsets = [0, (window.innerHeight / 3.5), (window.innerHeight / 3.5), 0]
    var scrollDistance = heights.slice(0, elN).reduce(
        function(a, b) { return a + b; },
        0
    ) - offsets[elN]
    scroll.animateScroll(scrollDistance);
    console.log(offsets[elN])
    closeMenu()
}

function randomBg(){
    var random = Math.floor(Math.random() * 11) + 1;
    var menu = document.getElementById("menu")
    menu.style.backgroundImage = "url('images/" + random + ".jpg')";
}

