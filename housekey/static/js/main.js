setTimeout(function() {
  $('#message').fadeOut('slow');
}, 3000);
/////////////////////////  horizontal-Menu   ////////////////////////////////////////////////
document.getElementById('main').addEventListener('click', closeNav);
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/////////////////////change button text to innerHTML/////////////////////////////////////
$("[id*=option-text]").click(function () {
    str = $(this).text();
    $('#dropdownMenu1').html(str);
});
///////////////////////////////////////////////////
$(".property-status input").click(function () {
    var delimiter = ",";
    var text = $("#dropdownMenu2");
    var str = " ";
    // for each checked checkbox, add the checkbox value and delimiter to the textbox
    $(".property-status input:checked").each(function () {
        str += $(this).val() + delimiter;
    });
    // set the value of the textbox
    text.html(str);
});
/////////////////    List Grid JS    ///////////////////////
$('.shorting_icon').on('click', function (e) {
    if ($(this).hasClass('grid_view')) {
        $('.resulte_house_container').removeClass('list_view').addClass('grid_view');
        $('.resulte_house_container .col-xl-3').removeClass('col-xl-6');
        $('.resulte_house_container .col-xl-3').removeClass('col-xl-4');
    } else if ($(this).hasClass('list_view')) {
        $('.resulte_house_container').removeClass('grid_view').addClass('list_view');
        $('.features-item-offer').show();
    }
});
$('#grid_two_list').on('click', function () {
    $('.resulte_house_container .col-xl-3').addClass('col-xl-6');
    $('.resulte_house_container').removeClass('list_view')
});
$('#grid_two_list').on('click', function () {
    $('.resulte_house_container .col-xl-4').addClass('col-xl-6');
    $('.features-item-offer').hide();
});
$('#grid_three_list').on('click', function () {
    $('.resulte_house_container .col-xl-6').removeClass('col-xl-6').addClass('col-xl-4');
});
$('#grid_three_list').on('click', function () {
    $('.resulte_house_container .col-xl-3').removeClass('col-xl-6');
    $('.resulte_house_container .col-xl-3').addClass('col-xl-4');
    $('.resulte_house_container').removeClass('list_view')
});
if($(window).width() < 1199.98)
{
    $('#grid_two_list').on('click', function () {
        $('.resulte_house_container .col-xl-3').removeClass('col-xl-4 col-lg-4').addClass('col-lg-6 col-xl-6');
        $('.features-item-offer').hide();
    });
    $('#grid_three_list').on('click', function () {
        $('.resulte_house_container .col-xl-3').removeClass('col-lg-6').addClass('col-lg-4');
    });
}
/////////////////  SCROLLUP JS      /////////////////////////////
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.sticky-wrapper-menu').addClass("sticky");
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
        $('.sticky-wrapper-menu').removeClass("sticky");
    }
});
$(".back-to-top").on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 600);
    return false;
});
//////////////////  effect-label  /////////////////////////////////
$(function () {
    'use strict';
    $(".effect-label input").on("focusout", function () {
        if ($(this).val() != "") {
            $(this).parent().addClass("has-data");
        } else {
            $(this).parent().removeClass("has-data");
        }
    });
});
/////////////////////////  Swiper-slider     //////////////////////////////////
var swipermain = new Swiper('.slider-main-header', {
    loop: true,
    speed: 600,
    grabCursor: true,
    autoplay: {
        delay: 7000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var swiper1 = new Swiper('.swiper1', {
    lazy: true,
    loop: true,
    preloadImages: false,
    lazyLoading: true,
    lazyLoadingInPrevNextAmount: 0,
    pagination: {
        el: '.swiper-pagination1',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var swiper2 = new Swiper('.swiper2', {
    pagination: {
        el: '.swiper-pagination2',
    },
});
var swipersaay = new Swiper('.swiper-saying', {
    grabCursor: true,
    pagination: {
        el: '.pagination-swiper-saying',
    },
    breakpoints: {
        // when window width is <= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 5
        },
        // when window width is <= 480px
        425: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        570: {
            slidesPerView: 1,
            spaceBetween: 15
        },
    }
});
var swiperoffer = new Swiper('.swiper-offer', {
    pagination: {
        el: '.pagination-swiper-offer',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var swiperclients = new Swiper('.swiper-clients', {
    effect: 'slide',
    speed: 900,
    slidesPerView: 5,
    spaceBetween: 20,
    simulateTouch: true,
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    breakpoints: {
        // when window width is <= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 5
        },
        // when window width is <= 480px
        425: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        570: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        // when window width is <= 640px
        768: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        900: {
            slidesPerView: 5,
            spaceBetween: 25
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 30
        },
        1400: {
            slidesPerView: 7,
            spaceBetween: 35
        },
        1600: {
            slidesPerView: 8,
            spaceBetween: 40
        },
    }
});
var swiperagents = new Swiper('.swiper-container.agents', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 1,
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 1,
        },
    }
});
var swiperfeatured = new Swiper('.swiper-container.featured-properties', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next.featured-properties',
        prevEl: '.swiper-button-prev.featured-properties',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 1,
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 1,
        },
    }
});
var swiperimgfeatured = new Swiper('.swiper-img-featured', {
    lazy: true,
    loop: true,
    preloadImages: false,
    lazyLoading: true,
    lazyLoadingInPrevNextAmount: 0,
    pagination: {
        el: '.swiper-pagination1',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop:true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
});
var swipercomparre = new Swiper('.compare-item', {
    speed: 900,
    spaceBetween: 20,
    simulateTouch: true,
    runCallbacksOnInit: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        570: {
            slidesPerView: 1,
            spaceBetween:0
        },
    },
});
//////////////////   toastr-favorite  ////////////////////////////
$(".toastr").click(function () {
    iziToast.show({
        message: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.' +
            '\n ',
        position: 'topCenter',
        timeout: 2500,
    });
});
///////////////////// popup - Compare ////////////////////////////////////////
jQuery(document).ready(function ($) {
    //open popup
    $("[id*=popup-trigger]").click(function () {
        $('.popup-list-item-content').show();
        $('.cdk-overlay-dark-backdrop').show();
        $('.popup-compare-container').show();
    });
    //close popup
    $("a.cd-popup-close").click(function () {
        $('.cdk-overlay-dark-backdrop').hide();
        $('.popup-compare-container').hide();
    });
    $('a.remove-list-house').click(function () {
        $('.popup-list-item-content').fadeOut();
        setTimeout(function () {
            $('.cdk-overlay-dark-backdrop').fadeOut();
            $('.popup-compare-container').fadeOut();
        }, 800);
    });
});
//////////////////////// horizontal-Menu - Sidenav-details//////////////////////////////////////////
$('#cl-Side-card').click(function () {
    $('.bg-drawer-backdrop').show();
    $('#Side-card').addClass("right-sidenav");
    $(".bg-drawer-backdrop").click(function () {
        $('#Side-card').removeClass("right-sidenav");
        $('.bg-drawer-backdrop').hide();
  })
});
$('.close-card').click(function () {
    $('#Side-card').removeClass("right-sidenav");
    $('.bg-drawer-backdrop').hide();
});
//////////////////////// horizontal-Menu - Side-search-properties//////////////////////////////////////////
$('#cl-Side-search').click(function () {
    $('.bg-drawer-backdrop').show();
    $('#Side-search').addClass("right-sidenav");
   $('.search-sidenav .mat-card').css({"height":"204em"});
});
$('.bg-drawer-backdrop , .close-Side-search').click(function () {
    $('#Side-search').removeClass("right-sidenav");
    $('.bg-drawer-backdrop').hide();
});
//////////////////////////horizontal-Menu - account-sidenav////////////////////////////////////////////
$('#cl-account-sidenav').click(function () {
    $('.bg-drawer-backdrop').show();
    $('.horizontal-account-sidenav').addClass("right-sidenav");
    $('.horizontal-account-sidenav .mat-card').css({"height":"44em"});
});
$('.bg-drawer-backdrop , #close-card').click(function () {
    $('#account-sidenav').removeClass("right-sidenav");
    $('.bg-drawer-backdrop').hide();
});
//////////////////////////////////////////////////////////////////////////
