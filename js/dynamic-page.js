var $fadeElements = $('.feat'); //.feat na fade zamienić w html i css

$fadeElements.hide();

$.fn.isOnScreen = function() {

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
    if ($fadeElements.isOnScreen()) {
        $fadeElements.fadeIn(2000);
    }
});





