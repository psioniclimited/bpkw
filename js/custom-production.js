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
// $('.custom-production-page-owl-gallery').owlCarousel({
//     margin:20,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true,
//             loop: true
//         },
//         600:{
//             items:2,
//             nav:true,
//             loop: true
//         },
//         1000:{
//             items:4,
//             nav:true,
//             loop:true
//         }
//     },
//     autoWidth:false,
//     loop:true,
//     autoplay: true,
//     nav:true,
//     items:4,
//     navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
// })
$(document).ready(function() {
    $(".popup").magnificPopup({
        type: "iframe",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true,
        gallery: {
            enabled: true
        }
    });
});
$(".bootleggers").owlCarousel({
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop: true
        },
        600:{
            items:2,
            nav:true,
            loop: true
        },
        768:{
            items:3,
            nav:true,
            loop: true
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    },
    autoWidth:false,
    loop:true,
    autoplay: true,
    nav:true,
    items:4,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
});