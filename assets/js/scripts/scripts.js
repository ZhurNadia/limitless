$(document).ready(function() {
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

    $("#latest-works-corousel").owlCarousel({
        items : 3,
        itemsCustom : false,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [980,2],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        autoPlay:true,
        pagination:true,
        stopOnHover : false,
        paginationNumbers: false,
        navigation: true,
        navigationText:	["<",">"]


    });

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
    jQuery("#contact-form").validationEngine({
        promptPosition : "bottomLeft",
        scroll: scroll,
        autoHidePrompt: true,
        autoHideDelay: 3000,
        scrollOffset: 100,
        binded: false
    });

    $('.latest-work-item').equalHeights();
    $('.team-text').equalHeights();
    $('.media-body').equalHeights();
    new WOW().init();
    $('#promo').backstretch("images/fog.jpg");
    $('#tel').inputmask("(999) 999-99-99");

});


$(window).resize(function(){
    $('.latest-work-item').css('height','auto');
    $('.latest-work-item').equalHeights();
    $('.team-text').css('height','auto');
    $('.team-text').equalHeights();
    $('media-body').css('height','auto');
    $('media-body').equalHeights();
});






