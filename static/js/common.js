$(function () {
    $('.owl-carousel').owlCarousel({
        nav: true,
        // navText: [$('.carousel-button-left'), $('.carousel-button-right')],
        navText: ['',''],
        dots: false,
        slideBy: 1,
        startPosition: 0,
        loop: true,
        responsive: {
            0: {
                items: 4
            }
        }
    });
    $('.connect_btn').magnificPopup({
        type:"inline",
        midClicl:true,
        closeBtnInside:true,
    });
});
