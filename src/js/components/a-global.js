$(document).ready(function() {
    $('input[type="tel"]').mask('+7 999 999-9999', { autoclear: false }, { placeholder: '+7             ' });
    $(".custom-select").niceSelect()
});


$(".tab").click(function () {
    let path = $(this).attr("data-tabs-path")
    $(".tab").removeClass("tab--active")
    $(this).addClass("tab--active")
    $(".tab__content").removeClass("tab__content--active")
    $(`.tab__content[data-tabs-path="${path}"]`).addClass("tab__content--active")
})


$(".favourite-btn").click(function () {
    $(this).toggleClass("favourite-btn--active")
})

$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $(".scroll-up").addClass("scroll-up--active")
    } else {
        $(".scroll-up").removeClass("scroll-up--active")
    }
})

$(".scroll-up").click(function() {
    $(window).scrollTop(0);
})
