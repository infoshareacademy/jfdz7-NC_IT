var $fadeElements1 = $('.feat');

$fadeElements1.hide();

$.fn.isOnScreen = function () {

    var $window = $(window);

    var viewport = {
        top : $window.scrollTop(),
        left : $window.scrollLeft()
    };
    viewport.right = viewport.left + $window.width();
    viewport.bottom = viewport.top + $window.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

$(window).scroll(function() {
    if ($fadeElements1.isOnScreen()) {
        $fadeElements1.fadeIn(3000);
    }
});

var $fadeElements2 = $('.member-box');
$fadeElements2.hide();

$(window).scroll(function() {
    if ($fadeElements2.isOnScreen()) {
        $fadeElements2.fadeIn(3000);
    }
});