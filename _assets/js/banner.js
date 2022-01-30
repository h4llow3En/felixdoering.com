$(function () {
  var banner = $('.banner').get(0)
  if (typeof banner !== 'undefined') {
    $(document).on('scroll', function () {
      var bannerHeight = banner.offsetHeight;
      var bannerWidth = banner.offsetWidth;
      var navHeight = $('.navigation').get(0).offsetHeight;
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
