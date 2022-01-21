/* Roozbeh Eslami */
/* www.roozbeheslami.com */

// google.maps.event.addDomListener(window, 'load', init);
// function init() {
//     var mapOptions = {
//         zoom: 12,
//         maxZoom: 12,
//         disableDefaultUI: true,
//         zoomControl: false,
//         scaleControl: false,
//         scrollwheel: false,
//         center: new google.maps.LatLng(35.689197, 51.388974), // Tehran
//         styles: [ { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [ { "color": "#444444" } ] }, { "featureType":
//                 "landscape", "elementType": "all", "stylers": [ { "color": "#f2f2f2" } ] }, { "featureType": "poi", "elementType": "all",
//                 "stylers": [ { "visibility": "off" } ] }, { "featureType": "road", "elementType": "all", "stylers": [ { "saturation": -100
//                 }, { "lightness": 45 } ] }, { "featureType": "road.highway", "elementType": "all", "stylers": [ { "visibility": "simplified"
//                 } ] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType":
//                 "transit", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "water", "elementType": "all",
//                 "stylers": [ { "color": "#FFEB00" }, { "visibility": "on" } ] } ]
//     };
//     var mapElement = document.getElementById('map');
//     var map = new google.maps.Map(mapElement, mapOptions);
//     var marker = new google.maps.Marker({
//         position: new google.maps.LatLng(35.689197, 51.388974),
//         map: map,
//         animation: google.maps.Animation.BOUNCE,
//         icon: "img/map-marker.png"
//     });
//     marker.setMap(map);
// }

$(window).on('scroll', function () {
    $grid.isotope( 'layout' );
});

// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.grid-item'
});

// filter functions
var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
    }
};

// bind filter button click
$('#filters').on( 'click', 'li', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
});

// bind sort button click
$('#sorts').on( 'click', 'li', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'li', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
    });
});

$(document).ready(function(){
    $('.skills-slick').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    arrows: true,
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    arrows: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 800,
                settings: {
                    arrows: true,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.point-slick').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: true,
        autoplaySpeed: 6000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false
                }
            }
        ]
    });
});

$(window).scroll(function(){
    $(".avatar").css("opacity", 1 - $(window).scrollTop() / 350);
    $(".half .arrow").css("opacity", 1 - $(window).scrollTop() / 200);
    $(".half").css("opacity", 1 - $(window).scrollTop() / 6000);
});

$(window).on('scroll', function () {
    var pixs = $(document).scrollTop()
    pixs = pixs / 200;
    $(".half .caption, .half .arrow").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" })     
});

if ($(window).width() > 768) {
    $(document).scroll(function() {
        x = $(document).scrollTop();
        if ($(window).scrollTop() > $(".home").height() / 2) {
            $(".nav-fix").fadeIn();
        } else {
            $(".nav-fix").fadeOut();
        }
    });
    
    $(document).ready(function(){

        $('.profile ul li').addClass("hideme").viewportChecker({
            classToAdd: 'showme animated fadeInUp',
            offset: 300
        });

        $('.skills .holder .sub').addClass("hideme").viewportChecker({
            classToAdd: 'showme animated fadeInUp',
            offset: 300
        });

    });
}

$(document).ready(function(){

    $(".nav-mob").click(function() {
        $(".nav-mob-list").slideToggle();
        $(".menu").toggleClass('open');
    });

    $(".nav-mob-list").click(function() {
        $(".nav-mob-list").hide();
        $(".nav-mob .menu").toggleClass('open');
    });

    $(document).on('click', 'a', function(e) {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 30
        }, 1000);
    });

});
