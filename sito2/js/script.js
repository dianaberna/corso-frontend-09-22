
jQuery(window).on("load", function () {
    "use strict";

    /*  ===================================
     Loading Timeout
     ====================================== */
    $("#loader-fade").fadeOut(800);
});

jQuery(function ($) {
    "use strict";

    var $window = $(window);
    var windowsize = $(window).width();

    /* ===================================
       Nav Scroll
       ====================================== */

    $(".scroll").on("click", function(event){
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 40}, 1100);
    });
    /* ====================================
       Nav Fixed On Scroll
       ======================================= */

    if ($("nav.navbar").hasClass("static-nav")) {
        $(window).on("scroll", function () {
            var $scroll = $window.scrollTop();
            var $navbar = $(".static-nav");
            if ($scroll >= 80) {
                $navbar.addClass("fixed-menu");
            } else {
                $navbar.removeClass("fixed-menu");
            }
        });
    }

    /*bottom menu fix*/
    if ($("nav.navbar").hasClass("bottom-nav")) {
        var navHeight = $(".bottom-nav").offset().top;
        $(window).on("scroll", function () {
            if ($window.scrollTop() > navHeight) {
                $('.bottom-nav').addClass('fixed-menu');
            } else {
                $('.bottom-nav').removeClass('fixed-menu');
            }
        });
    }
    if ($("nav.navbar").hasClass("bottom-nav")) {
        $(window).on("scroll", function () {
            var $scroll = $window.scrollTop();
            var $bottom = $(".bottom-nav");
            if ($scroll >= 400) {
                $bottom.addClass("scroll-menu");
            } else {
                $bottom.removeClass("scroll-menu");
            }
        });
    }
        $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 80) { // Set position from top to add class
            $('header').addClass('header-appear');
        }
        else {
            $('header').removeClass('header-appear');
        }
    });

    /* ===================================
       Side Menu
       ====================================== */

    if ($("#sidemenu_toggle").length) {
        $("#sidemenu_toggle").on("click", function () {
            $(".pushwrap").toggleClass("active");
            $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
        }), $("#close_side_menu").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
        }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        }), $("#btn_sideNavClose").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        })
    }

    /* =====================================
            Wow
       ======================================== */

    if ($(window).width() > 767) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        new WOW().init();
    }

    /* ----- Full Screen ----- */
    function resizebanner() {
        var $fullscreen = $(".full-screen");
        $fullscreen.css("height", $window.height());
        $fullscreen.css("width", $window.width());
    }
    resizebanner();
    $window.resize(function () {
        resizebanner();
    });


    /* ===================================
       Features Section Number Scroller
       ====================================== */

    $(".stats").each(function () {
        $('.numscroller').appear(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 5000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });


    /* ===================================
       Animated Progress Bar
       ====================================== */

    $(".progress-bar").each(function () {
        $(this).appear(function () {
            $(this).animate({width: $(this).attr("aria-valuenow") + "%"}, 2000)
        });
    });

    /* ===================================
       Parallax
       ====================================== */

    if (windowsize > 992) {
        $(".parallaxie").parallaxie({
            speed: 0.4,
            offset: 0,
        });
    }

    /* =====================================
       Portfolio Filter
       ======================================= */

    /*Portfolio Two*/

    // isotope
    $('.gallery').isotope({
        // options
        itemSelector: '.items'
    });

    var $gallery = $('.gallery').isotope({
        // options
    });

    // filter items on button click
    $('.filtering').on('click', 'span', function () {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({filter: filterValue});

    });

    $('.filtering').on('click', 'span', function () {

        $(this).addClass('active').siblings().removeClass('active');

    });

    setTimeout(function (){
        $('.filtering .active').click();
    }, 1500);


    /* ===================================
       Fancy Box
       ====================================== */
    $('[data-fancybox]').fancybox({
        protect: true,
        animationEffect: "fade",
        hash: null,
    });

    /* ===================================
       Equal Heights
       ====================================== */
        checheight();
         $window.on("resize", function () {
            checheight();
        });

        function checheight() {
            var $smae_height = $(".equalheight");
            if ($smae_height.length) {
                if (windowsize > 767) {
                    $smae_height.matchHeight({
                        property: "height",
                    });
                }
            }
        }
    /* ===================================
       Type Text
       ====================================== */

    if ($("#typewriting").length) {
        var app = document.getElementById("typewriting");
        var typewriter = new Typewriter(app, {
            loop: true
        });
        typewriter.typeString('Way to achieve success').pauseFor(2000).deleteAll()
            .typeString('Style to achieve success').pauseFor(2000).deleteAll()
            .typeString('Method to achieve success').start();
    }

    if ($("#personal").length) {
        var app = document.getElementById("personal");
        var personal = new Typewriter(app, {
            loop: true
        });
        personal.typeString('Photographer').pauseFor(2000).deleteAll()
            .typeString('Traveler').pauseFor(2000).deleteAll()
            .typeString('Model').start();
    }


    /* ===================================
       Owl Carousel
       ====================================== */

    /* Testimonial */
    $('.testimonial-two').owlCarousel({
        loop: true,
        smartSpeed: 500,
        responsiveClass: true,
        nav:false,
        dots: true,
        dotsContainer: ".owl-thumbs",
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
                margin: 30,
            },
            480: {
                items: 1,
                margin: 30,
            },
            992: {
                items: 1,
                margin: 30,
            }
        }
    });

    /* Brand Carousel */
    $('.brand-carousel').owlCarousel({
        margin: 75,
        nav: false,
        navText: [
            '<i class="ti ti-angle-left"></i>',
            '<i class="ti ti-angle-right"></i>'
        ],
        dots: false,
        autoWidth: false,
        autoplay: 300,
        autoplayHoverPause: false,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    });

});