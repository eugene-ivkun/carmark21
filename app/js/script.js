$(window).scroll(function() {
    if($(this).scrollTop() > 0) {
        $(".header").addClass("header--scrolled")
        $("body").css({
            "padding-top": $(".header").outerHeight() + "px"
        })
    }
    else {
        $(".header").removeClass("header--scrolled");
        $("body").css({
            "padding-top": 0 + "px"
        })
    }
});

$(window).on("resize", function() {
    $("body").addClass("not-anim");
    setTimeout(function() {
        $("body").removeClass("not-anim");
    }, 1000);
})

$(".header-main__btn").click(function() {
    $(".header-menu").toggleClass("header-menu--open");
    $(".header-main").toggleClass("header-main--active");
});
