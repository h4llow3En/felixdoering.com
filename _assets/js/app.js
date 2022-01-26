//= require vendor/cash.min.js
$(function () {
  $('.mobile-toggle').on('click', function () {
    if ($('.navigation').hasClass('open-nav')) {
      $('.navigation').removeClass('open-nav');
      if ($('.logo').hasClass('hidden')){
        $('.navigation').addClass('transparent')
      }
    } else {
      $('.navigation').addClass('open-nav');
      if ($('.logo').hasClass('hidden')){
        $('.navigation').removeClass('transparent')
      }
    }
  });

  var banner = $('.banner').get(0)
  var navHeight = $('.navigation').get(0).offsetHeight;

  if (typeof banner !== 'undefined') {
    var bannerHeight = banner.offsetHeight;
    var bannerWidth = banner.offsetWidth;
    $(document).on('scroll', function () {
      var bounding = banner.getBoundingClientRect();
      if (bounding.top >= -bannerHeight + navHeight &&
        bounding.left >= -bannerWidth &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + bannerWidth &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + bannerHeight) {
        $('.logo').addClass('hidden');
        $('.navigation').addClass('transparent')
      } else {
        $('.logo').removeClass('hidden');
        $('.navigation').removeClass('transparent')
      }
    });
  }
});
