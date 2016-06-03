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

function moduleAnimate(){
  var tl = new TimelineLite();
  tl.staggerFrom('.p1', 2, {opacity:0, delay:0.4}, 0.3)
  .from('.power-of-community__text', 1, {right:100, autoAlpha:0}, '-=3');
}

function fiftyRowScroll() {
    var wScroll = $window.scrollTop();

    if ($('section.row.section--free-courses').offset().top - $window.height() / 1.2 < wScroll) {
        $('.col-50').each(function(i) {
            setTimeout(function() {
                $('.col-50').eq(i).addClass('is-visible');
            }, 100 * i);
        });
    }
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

  moduleAnimate();

  $window.scroll(function() {
      fiftyRowScroll();
  });

  bindings();
});

})(jQuery);
