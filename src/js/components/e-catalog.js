$(".catalog__filter-btn").click(function () {
    $(".filter").addClass("filter--active")
    $("body").addClass("fixed-body")
})

$("._close-filter").click(function () {
    $(".filter").removeClass("filter--active")
    $("body").removeClass("fixed-body")
})

$(".equip-card__title").click(function () {
    $(this).parents(".equip-card").toggleClass("_open")
    $(this).parents(".equip-card").find(".equip-card__desc").slideToggle()
})

$(".category__subtitle").click(function () {
    $(this).toggleClass("category__subtitle--active")
    $(this).siblings(".category__grid").slideToggle()
})
