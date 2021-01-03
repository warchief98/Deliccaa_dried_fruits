let menuToggle = document.getElementById("navBtn");
let menuBack = document.getElementById("backBtn");
let menu = document.getElementById("side-menu");


menuToggle.addEventListener("click", () => {
    menu.classList.toggle("side-menu-show");
})

menuBack.addEventListener("click", () => {
        menu.classList.remove("side-menu-show");
    })
    // __________________________
let btnCounter = 0;
$(".btn-container").click(function() {
    $(".btn-container").removeClass("btn-container-down");
    if (btnCounter == 0) {
        $(this).find(".beforeBtn").addClass("btn-off");
        $(this).find(".afterBtn").removeClass("btn-off");
        $(this).addClass("btn-container-down");
        btnCounter = 1;
    } else {
        $(this).find(".beforeBtn").removeClass("btn-off");
        $(this).find(".afterBtn").addClass("btn-off");
        $(this).removeClass("btn-container-down");
        btnCounter = 0;
    }
});

let cartBoxMouseLeave = document.getElementsByClassName("cardBox1");

for (var i = 0; i < cartBoxMouseLeave.length; i++) {
    cartBoxMouseLeave[i].addEventListener("mouseleave", () => {
        $(".btn-container").removeClass("btn-container-down");
        $(".btn-container").find(".beforeBtn").removeClass("btn-off");
        $(".btn-container").find(".afterBtn").addClass("btn-off");
        btnCounter = 0;
    })
}


// ___________________



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
    // ______________small slider
let sliderCounter = 0;
let sliderwidth = $(".small-slider").outerWidth();
let rollWidth = $(".roll").outerWidth();
let rollSlides = $(".slide").length;
let rollMove = rollWidth / rollSlides;
$(".leftBtn").click(function() {

    if (-sliderCounter <= (rollWidth - rollMove)) {
        sliderCounter -= rollMove;
        $(".roll").css("transform", "translateX(" + (sliderCounter) + "px)");
    } else {
        sliderCounter = 0;
        $(".roll").css("transform", "translateX(" + (sliderCounter) + "px)");
    }
})

$(".rightBtn").click(function() {

    if (sliderCounter <= sliderwidth) {
        sliderCounter += rollMove;
        $(".roll").css("transform", "translateX(" + (sliderCounter) + "px)");
    } else {
        sliderCounter = 0;
        $(".roll").css("transform", "translateX(" + (sliderCounter) + "px)");
    }
})