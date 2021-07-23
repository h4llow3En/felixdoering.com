//= require vendor/cash.min.js
$(function () {
  $('.mobile-toggle').on("click", function () {
    if ($('.navigation').hasClass('open-nav')) {
      $('.navigation').removeClass('open-nav');
    } else {
      $('.navigation').addClass('open-nav');
    }
  });
});
