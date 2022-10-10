$(".header__catalog-btn").click(function () {
    $(".header__catalog-btn").toggleClass("header__catalog-btn--active")
})

if (window.innerWidth<992){
    $("[data-placeholder]").each(function (index, el) {
        let placeholder = $(el).attr("data-placeholder")
        console.log(placeholder)
        $(el).attr("placeholder",placeholder)
    });
}

$(".header-catalog__tab").click(function () {
    $(".header-catalog__tab").removeClass("header-catalog__tab--active")
    $(this).addClass("header-catalog__tab--active")
    $(".header-catalog__content").fadeOut()
    $(this).siblings(".header-catalog__content").fadeIn()
})

fixHeader()
$(window).scroll(function() {
    fixHeader()
})

function fixHeader() {
    if ($(window).scrollTop() > 75) {
        $(".header").addClass("header--fix")
    } else {
        $(".header").removeClass("header--fix")
    }
}
