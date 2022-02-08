$(function () {
  let banner = $('.banner').get(0)
  if (typeof banner !== 'undefined') {

    function navFade() {
      let bannerHeight = banner.offsetHeight;
      let bannerWidth = banner.offsetWidth;
      let navHeight = $('.navigation').get(0).offsetHeight;
      let bounding = banner.getBoundingClientRect();
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
    }

    navFade();
    $(document).on('scroll', navFade);
  }
});
