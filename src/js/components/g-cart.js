$(".cart-card__calc input").each(function (index,el) {
    let count = getCartItemCount($(el))
    setCartItemCount($(el),count)
})

$("._cart-minus").click(function () {
    let input = $(this).siblings("input")
    let current = getCartItemCount($(input))
    setCartItemCount($(input),current-1)
})

$("._cart-plus").click(function () {
    let input = $(this).siblings("input")
    let current = getCartItemCount($(input))
    setCartItemCount($(input),current+1)
})


function setCartItemCount(el,count) {
    if(count === 1){
        $(el).siblings("._cart-minus").addClass("_disabled")
    }else {
        $(el).siblings("._cart-minus").removeClass("_disabled")
    }
    $(el).val(count)
    setFullPrice(el,count)
}

function getCartItemCount(el) {
    return +$(el).val()
}

function setFullPrice(el,count) {
    let parent = $(el).parents(".cart-card")
    let price = +$(parent).find("._cart-price span").html().replace(/\s+/g, '')
    console.log(price)
    $(parent).find("._cart-price-all span").html((price*count).toLocaleString('ru'))
}
