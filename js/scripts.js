$(document).ready(function () {

    $('.slide-one').owlCarousel({
        loop: true,
        margin: 40,
        nav: true,
        navText: ['', ' '],
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 3500,
        responsive: {
            0: {
                items: 1
            },

            1000: {
                items: 1
            }
        },
    });
});