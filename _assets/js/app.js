//= require vendor/cash.min.js
$(function () {
  $('.mobile-toggle').on("click", function () {
    if ($('.navigation').hasClass('open-nav')) {
      $('.navigation').removeClass('open-nav');
      $('.fas').removeClass('fa-times')
      $('.fas').addClass('fa-bars')
    } else {
      $('.navigation').addClass('open-nav');
      $('.fas').removeClass('fa-bars')
      $('.fas').addClass('fa-times')
    }
  });
});
