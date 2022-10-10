function mainSlider() {
    let delay = 7000
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: delay
        },
        speed: 2000,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.main .swiper-button-next',
            prevEl: '.main .swiper-button-prev',
        },
        pagination: {
            el: '.main .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        on: {
            init: function () {
                pushProgress()
            },
            slideChange: function () {
                pushProgress()
            }
        }
    })

    function pushProgress() {
        $(".main .swiper-pagination-bullet span").remove()
        $(".main .swiper-pagination-bullet-active").html("<span style="+"animation-duration:" + delay + "ms" + "></span>")
    }
}

function productsSlider() {
    $(".products__slider").each(function (index, el) {
        $(el).attr("data-slider-id", `${index}`)
        var swiper = new Swiper(`.products__slider[data-slider-id="${index}"].swiper-container`, {
            slidesPerView: "auto",
            spaceBetween: 24,
            navigation: {
                nextEl: `.products__slider[data-slider-id="${index}"] .swiper-button-next`,
                prevEl: `.products__slider[data-slider-id="${index}"] .swiper-button-prev`,
            },
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
        })
    });
}

function providersSlider() {
    var swiper = new Swiper('.providers .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 24,
        navigation: {
            nextEl: '.providers .swiper-button-next',
            prevEl: '.providers .swiper-button-prev',
        },
    })
}

function gallery() {
    var swiper = new Swiper(".gallery .mySwiper", {
        spaceBetween: 16,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            320: {
                direction: "horizontal",
            },
            992: {
                direction: "vertical",
            }
        }
    });
    var swiper2 = new Swiper(".gallery .mySwiper2", {
        spaceBetween: 10,
        thumbs: {
            swiper: swiper,
        },
    });
}


mainSlider()
productsSlider()
providersSlider()
gallery()
