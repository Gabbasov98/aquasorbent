$("._minus").click(function () {
    let current = getCurrentCount()
    if(current === 1){
        $(".buy-card__cart").removeClass("buy-card__cart--active")
        return
    }
    setCurrentCount(current-1)
})

$("._plus").click(function () {
    let current = getCurrentCount()
    setCurrentCount(current+1)
})

$("._add-cart").click(function () {
    $(".buy-card__cart").addClass("buy-card__cart--active")
    setCurrentCount(1)
})


function getCurrentCount() {
    return +$(".buy-card__output").attr("data-output")
}

function setCurrentCount(count) {
    $(".buy-card__output").attr("data-output",count)
}
