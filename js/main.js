let menuToggle = document.getElementById("navBtn");
let menuBack = document.getElementById("backBtn");
let menu = document.getElementById("side-menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("side-menu-show");
})

menuBack.addEventListener("click", () => {
    menu.classList.remove("side-menu-show");
})


// __________
$(document).scroll(function() {
    _h = $(this).scrollTop();
    console.log(_h);
    if (_h > 500) {
        $('.main-nav').addClass('main-nav-up');
    }
    if (_h < 500) {
        $('.main-nav').removeClass('main-nav-up');
    }
})