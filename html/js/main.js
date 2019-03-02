function closeMenu() {
    document.getElementById("toggle-nav").checked = false
}

function zscroll(elN) {
    // coupled to viewport in CSS :S
    // because I know the heights of all of the divs I can make this precise
    var height = document.getElementById("gigs").clientHeight
    var scroll = new SmoothScroll();
    var scrollDistance = height*elN
    if (document.documentElement.clientWidth < 1024) {
        var scrollDistance = (height*elN) + document.getElementById("menu").clientHeight
    }

    scroll.animateScroll(scrollDistance);
    closeMenu()
}

function randomBg(){
    var random = getRandomInt(1, 13);
    var menu = document.getElementById("menu")
    menu.style.backgroundImage = "url('images/" + random + ".jpg')";
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


