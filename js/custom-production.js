$(document).ready(function(){
    // Triggering animation on scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > $('#erp-svg-trigger').offset().top) {
            $('.fadeIn01').addClass("svg-img-01");
            $('.fadeIn02').addClass("svg-img-02");
            $('.fadeIn03').addClass("svg-img-03");
            $('.fadeIn04').addClass("svg-img-04");
            $('.fadeIn05').addClass("svg-img-05");
            $('.fadeIn06').addClass("svg-img-06");
            $('.fadeIn07').addClass("svg-img-07");
        } else {
            // $('.st2').removeClass("st66");
        }


    });
});