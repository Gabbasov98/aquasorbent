$(document).ready(function() {

    setCountrySelectFlags()
    setSelectedFlag()

    $(".flags-select .option").click(function () {
        let flagName = $(this).attr("data-value")
        $(this).parents(".custom-select").attr("style", `background-image:url(../img/${flagName}.svg) !important`)
    })

    function setCountrySelectFlags() {
        $(".flags-select .option").each(function (index, el) {
            let flagName = $(el).attr("data-value")
            $(el).attr("style", `background-image:url(../img/${flagName}.svg) !important`)
        });
    }

    function setSelectedFlag() {
        $(".flags-select .selected").each(function (index, el) {
            let flagName = $(el).attr("data-value")
            $(el).parents(".custom-select").attr("style", `background-image:url(../img/${flagName}.svg) !important`)
        });
    }

    if(window.innerWidth<992){
        setSelectMobileText()
        $("._mob-text").change(function () {
            let current = $(this).siblings(".custom-select").find(".selected")
            $(current).parents(".custom-select").find(".current").html(current.attr("data-value"))
        })
    }

    function setSelectMobileText() {
        $("._mob-text .selected").each(function (index, el) {
            let current = $(el)
            $(current).parents(".custom-select").find(".current").html(current.attr("data-value"))
        });
    }

})
