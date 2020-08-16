
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('.logo.front').removeClass('hidden');
        } else {
            $('.logo.front').addClass('hidden');
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
