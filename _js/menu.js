
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('.logo').removeClass('hidden');
        } else {
            $('.logo').addClass('hidden');
        }
    });
    $('.mobile-toggle').click(function () {
        if ($('.navigation').hasClass('open-nav')) {
            $('.navigation').removeClass('open-nav');
        } else {
            $('.navigation').addClass('open-nav');
        }
    });
});