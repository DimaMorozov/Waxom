
$(function () {
// HEADER__SLIDER
 $(document).ready(function(){
    $('.header__slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: $('.prev'),
  		nextArrow: $('.next'),
    });
});

// TOGGLE
 $('.menuToggle').click(function(){
       $('.menu__wrapper').fadeToggle();
    });


 // CAROUSEL

$(document).ready(function() {
  var carousel = $('.carousel').waterwheelCarousel();
});


// ISOTOPE


$(document).ready(function() {
    $('.grid').isotope({
        itemSelector: '.grid__item',
        percentPosition: true,
        masonry: {
            horizontalOrder: true,
        }
    });
    $('.filter').on('click', 'button', function(event) {
        event.preventDefault();
        var filterValue = $(this).attr('data-filter');
        $('.grid').isotope({ filter: filterValue });
    });

});


// ACCORDION

$(document).ready(function() {
  //прикрепляем клик по заголовкам acc-head
    $(' .mobile-device__list .mobile-device__item').on('click', f_acc);
});
 
function f_acc(){
//скрываем все кроме того, что должны открыть
  $('div.mobile-device__description').not($(this).next()).slideUp(5000);
// открываем или скрываем блок под заголовком, по которому кликнули
    $(this).next().slideToggle(1000);
}


// SCROLL

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// POSTS-SLIDER
  $('.posts__slider').slick({
      prevArrow: $('.prev-arrow'),
      nextArrow: $('.next-arrow'),
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1
    });


  // MAP

  $(window).ready(function(){
  const $map = $('#map');
  // The location of Kremenchuk
  var Kremenchuk = {lat: 49.078967, lng:  33.416660};

  // The map, centered at Kremenchuk
  var map = new google.maps.Map(
      $map[0], 
      {zoom: 13, center: Kremenchuk});

  // The marker, positioned at Kremenchuk
  var marker = new google.maps.Marker({
    position: Kremenchuk, map: map,
    icon: "images/map.svg",
    title: 'Waxom',
    animation: google.maps.Animation.BOUNCE, 
  });  

  });

 });
