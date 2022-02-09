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
  if (typeof pageanchors !== 'undefined') {
    var anchors = pageanchors.map((anchor) => {
      return $('#' + anchor).get(0)
    }).sort(function (a, b) {
      return a.offsetTop - b.offsetTop;
    });

    let originalUrl = window.location.href.toString().split(window.location.host)[1].split("#")[0];

    function anchorMenu() {
      var windowTop = window.pageYOffset;
      var anchorActive = false;
      var anchorElements = $('.anchorlink');
      anchors.forEach(function (anchorlink) {
        if (windowTop >= anchorlink.offsetTop - 150) {
          $('.active').removeClass('active');
          anchorElements.each(function (anchor) {
            var anchorElement = $(anchorElements.get(anchor))
            if (anchorElement.children()[0].hash.includes(anchorlink.id)) {
              if (window.location.href.toString().split(window.location.host)[1].split("#")[1] !== anchorlink.id) {
                window.history.replaceState("", "", "#" + anchorlink.id);
              }
              anchorElement.addClass('active');
              anchorActive = true;
            }
          });
        }
      });
      if (!anchorActive) {
        var lastId = $(anchors[0]).get(0).id;
        $('.active').removeClass('active');
        anchorElements.each(function (anchor) {
          var anchorElement = $(anchorElements.get(anchor))
          if (anchorElement.children()[0].hash.includes(lastId)) {
            anchorElement.prev().addClass('active');
            if (window.location.href.toString().split(window.location.host)[1] !== originalUrl) {
              window.history.replaceState("", "", originalUrl);
            }
          }
        });
      }
    }
    anchorMenu();
    $(window).on('scroll', anchorMenu);
  }
});
