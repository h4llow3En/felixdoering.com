$(function () {
  $('.mobile-toggle').on('click', function () {
    if ($('.navigation').hasClass('open-nav')) {
      $('.navigation').removeClass('open-nav');
      if ($('.logo').hasClass('hidden')) {
        $('.navigation').addClass('transparent')
      }
    } else {
      $('.navigation').addClass('open-nav');
      if ($('.logo').hasClass('hidden')) {
        $('.navigation').removeClass('transparent')
      }
    }
  });
});
