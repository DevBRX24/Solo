/* =========================================
                Preloader
============================================ */
$(window).on('load', () => { // makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/* =========================================
                Team
============================================ */
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            //breakpoint from 0 to up
            0: {
                items: 1
            },
            //breakpoint from 480 up
            480: {
                items: 2
            }
        }
    });
});

/* =========================================
                Progress Bars
============================================ */
$(() => {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        this.destroy();
    }, {
            offset: 'bottom-in-view'
        });
});

/* =========================================
               Responsive Tabs
============================================ */
$(() => {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});

/* =========================================
               Portfolio
============================================ */
$(window).on('load', function () {
    //Initialize Isotope
    $('#isotope-container').isotope({});

    //filter items on button click
    $('#isotope-filters').on('click', 'button', function () {
        //get filter value
        let filterValue = $(this).attr('data-filter');
        //filter porfolio
        $('#isotope-container').isotope({
            filter: filterValue
        });
        //active button
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');
    });

});
/* =========================================
               Magnific Popup
============================================ */
$(() => {
    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/* =========================================
               Testimonials
============================================ */
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 600,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* =========================================
               Stats
============================================ */
$(() => {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    })
})
/* =========================================
                Clients
============================================ */
$(function () {
    $("#clients-list").owlCarousel({
        items: 5,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            //breakpoint from 0 to up
            0: {
                items: 2
            },
            //breakpoint from 480 up
            480: {
                items: 3
            },
            //breakpoint from 768 up
            768: {
                items: 5
            }
        }
    });
});
/* =========================================
                Navigation
============================================ */
/**Show  & Hide White Navigation */
$(() => {
    //show and hide nav on page load
    showHideNav();

    $(window).scroll(function () {
        //show and hide nav on windows scroll
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            //Show white nav
            $('nav').addClass('white-nav-top');
            //Show dark logo
            $('.navbar-brand img').attr('src', 'img/logo/logo-dark.png');

            //Show back to top button
            $('#back-to-top').fadeIn();
        } else {
            //Hide white nav
            $('nav').removeClass('white-nav-top');
            //Show Logo
            $('.navbar-brand img').attr('src', 'img/logo/logo.png');

            //Hide back to top button
            $('#back-to-top').fadeOut();
        }
    }
});

/* =========================================
    Navbar Smooth Scroll with Easing effect
============================================ */
$(() => {
    $('a.smooth-scroll').click(function (event) {
        event.preventDefault();

        //get section id like, #about, #services, #work, #team,
        let sectionID = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(sectionID).offset().top - 64
        }, 1250, 'easeInOutExpo');
    });
});

/* =========================================
                Mobile Menu
============================================ */
$(() => {

    //Show Mobile Navigation
    $('#mobile-nav-open-btn').click(function () {
        $('#mobile-nav').css('height', '100%');
    });
    //Hide Mobile Navigation
    $('#mobile-nav-close-btn, #mobile-nav a').click(function () {
        $('#mobile-nav').css('height', '0');
    });
})

/* =========================================
                Google Map
============================================ */
$(window).on('load', function () {

    //Map Variables
    const addressString = 'Quezon City Hall, Diliman, Lungsod Quezon, Kalakhang Maynila';
    const latLong = {
        lat: 14.688430,
        lng: 121.074530
    };

    //Render Map
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: latLong
    });

    // Map Marker
    let marker = new google.maps.Marker({
        position: latLong,
        map: map,
        title: 'Click to see Address'
    });

    //Information Window
    let inforindow = new google.maps.InfoWindow({
        content: addressString
    });

    marker.addListener('click', function () {
        inforWindow.open(map, marker);
    });

    //Resize Function
    google.maps.event.addDomListener(window, 'resize', function () {
        let center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);

    });
});

/* =========================================
                Animation
============================================ */
//animate on scroll Wow.min.js
$(function () {
    new WOW().init();
});

