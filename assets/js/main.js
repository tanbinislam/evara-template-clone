$(document).ready(function(){
    var site_modal =new bootstrap.Modal(document.getElementById('site-modal'));
    site_modal.show()

    $('.category-select').select2()

    $("#mobile-nav-toggle").click(function(){
        $('#mobile-menu').css({
            
            'width' : '320px',
        });
    });
    $("#menu-closing-button").click(function(){
        $('#mobile-menu').css({
            'width' : '0px',
        });
    });

    $('#nf-slide').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:1,
        loop: false,
        center: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 5000,
        smartSpeed: 100
    });

    $('#banner-slide').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:1,
        nav: true,
        navText: [
            "<i class='fi-rs-angle-left'></i>",
            "<i class='fi-rs-angle-right'></i>"
        ],
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 450
    });

    $(".popular-categories, .new-arrival").owlCarousel({
        items:6,
        nav: false,
        dots: false,
        navText: [
            "<i class='fi-rs-angle-left'></i>",
            "<i class='fi-rs-angle-right'></i>"
        ],
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 450,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:false,
                dots: false,
            },
            600:{
                items:4,
                nav:true,
                dots: false,
            },
            1000:{
                items:6,
                nav:true,
                dots: false,
                
            }
        }
    });

    // Banner-Countdown
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $(this).html(      
                event.strftime(''      
                    + '<span class="countdown-section"><span class="countdown-amount hover-up">%d</span><span class="countdown-period"> days </span></span>'
                    + '<span class="countdown-section"><span class="countdown-amount hover-up">%H</span><span class="countdown-period"> hours </span></span>'
                    + '<span class="countdown-section"><span class="countdown-amount hover-up">%M</span><span class="countdown-period"> mins </span></span>'
                    + '<span class="countdown-section"><span class="countdown-amount hover-up">%S</span><span class="countdown-period"> sec </span></span>'
                )
            );           
        });
    });

    $('.featured-brand').owlCarousel({
        items:6,
        nav: true,
        dots: false,
        navText: [
            "<i class='fi-rs-angle-left'></i>",
            "<i class='fi-rs-angle-right'></i>"
        ],
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:false,
                dots: false,
            },
            600:{
                items:4,
                nav:true,
                dots: false,
            },
            1000:{
                items:6,
                nav:true,
                dots: false,
                
            }
        }
    });

    $(".pills-featured-slide, .pills-popular-slide, .pills-newadd-slide").owlCarousel({
        items:4,
        nav: false,
        dots: false,
        navText: [
            "<i class='fi-rs-angle-left'></i>",
            "<i class='fi-rs-angle-right'></i>"
        ],
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 450,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:false,
                dots: false,
            },
            600:{
                items:2,
                nav:false,
                dots: false,
            },
            1000:{
                items:4,
                nav:false,
                dots: false,
                
            }
        }
    });
})