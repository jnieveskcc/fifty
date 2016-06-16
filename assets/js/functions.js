(function ($) {

'use strict';

var $body,
    $window,
    settings = {
        scrollDuration: 300
    };

  function onMobileToggleClick () {
      var $this = $(this),
          $navigation = $('.mobile-nav');

      $this.toggleClass('is-open');
      $navigation.toggleClass('is-open');
  }

  function onBlankLinkClick (e) {
          var $this = $(this),
              href = $this.attr('href'),
              $target = $(href);

          if ($target.length === 0) {
              return;
          }

          e.preventDefault();

          $body.animate({
              scrollTop: $target.offset().top
          }, settings.duration);
      }

function courseGalleryHome () {
  $('.imgWrap').hover(function () {
    // $(this).css('width', '36%');
     $(this).addClass('current');
    //$(this).siblings().css('width', '16%');
     $(this).siblings().addClass('notCurrent');
  }, function () {
    //$('.imgWrap').css('width', '10%');
    $('.imgWrap').siblings().removeClass('notCurrent');
    $('.imgWrap').removeClass('current');
  });
}

function bindings () {
    // Toggle mobile navigation (mobileNav)
    $('.mobile-nav-toggle').on('click', onMobileToggleClick);

    // Smooth scroll (smoothScroll)
    $('a[href^="#"]').on('click', onBlankLinkClick);
}

$(document).ready(function() {
  // Variable definitions
  $body = $('html, body');
  $window = $(window);

  courseGalleryHome();
  bindings();
});

})(jQuery);
