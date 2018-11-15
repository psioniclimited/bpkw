$(document).ready(function(){
    // Triggering animation on scroll
    $(window).scroll(function () {

        if ($(window).scrollTop() + $(window).height() > $('.company-overview-row').offset().top) {
            $('.animated01').addClass("fadeInUp");
            $('.animated02').addClass("fadeInUp");
            $('.animated03').addClass("fadeInUp");
            $('.animated04').addClass("fadeInUp");
        } else {
            // $('.st2').removeClass("st66");
        }

        if ($(window).scrollTop() + $(window).height() > $('.custom-our-expertise-row').offset().top) {
            $('.animated05').addClass("fadeInUp");
        } else {
            // $('.st2').removeClass("st66");
        }
    });
});
$('#oc-clients').owlCarousel({
    loop:true,
    items: 5,
    margin: 0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop: true
        },
        600:{
            items:3,
            nav:true,
            loop: true
        },
        1000:{
            items:5,
            nav:true,
            loop:true
        }
    },
    autoplay: true,
    nav:true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
})





