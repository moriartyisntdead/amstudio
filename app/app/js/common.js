$(function () {
    $('.owl-carousel').owlCarousel({
        nav: true,
        // navText: [$('.carousel-button-left'), $('.carousel-button-right')],
        navText: ['',''],
        dots: false,
        slideBy: 1,
        startPosition: 0,
        autoplay: true,
        loop: true,
        responsive: {
            0: {
                items: 4
            }
        }
    });
});
