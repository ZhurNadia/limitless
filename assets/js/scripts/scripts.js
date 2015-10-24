$(document).ready(function() {

    /* Wow Init */
    new WOW().init();

    /* Bakcstretch */
    $('#promo').backstretch("images/fog.jpg");

    /* Input Mask */
    $('#tel').inputmask("(999) 999-99-99");

    /* Fancybox */
    $(".team-image-overlay").fancybox({
        prevEffect	: 'none',
        nextEffect	: 'none',
        padding :7,
        helpers	: {
            title	: {
                type: 'outside'
            },
            overlay: {
                locked: false
            }
        }
    });

    /* Owl Testimonials */
    $("#testimonials-carousel").owlCarousel({
        items : 1,
        itemsCustom : false,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        autoPlay:true,
        pagination:true,
        stopOnHover : false,
        paginationNumbers: false
    });

    /* Owl Lastest Works */
    $("#latest-works-corousel").owlCarousel({
        items : 3,
        itemsCustom : false,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [980,2],
        itemsTablet: [768,2],
        itemsTabletSmall: [600,1],
        itemsMobile : [479,1],
        autoPlay:true,
        pagination:true,
        stopOnHover : false,
        paginationNumbers: false,
        navigation: true,
        navigationText:	["<i class=\'fa fa-arrow-left\'></i>","<i class=\'fa fa-arrow-right\'></i>"]


    });

    /* Navbar fixed class */
    function init() {
        "use strict";
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 250,
                header = document.querySelector(".navbar");
            if (distanceY > shrinkOn) {
                classie.add(header,"fixed");
            } else {
                if (classie.has(header,"fixed")) {
                    classie.remove(header,"fixed");
                }
            }
        });
    };
    window.onload = init();

    /* Form validation */
    jQuery("#contact-form").validationEngine({
        promptPosition : "bottomLeft",
        scroll: scroll,
        autoHidePrompt: true,
        autoHideDelay: 3000,
        scrollOffset: 100,
        binded: false
    });



});

    /* Height Equelazing */
$(function() {
    $('.latest-work-text').matchHeight();
    $('.media').matchHeight({
        byRow: false,
        property: 'height'
    });
    $('.team-text').matchHeight();
});




