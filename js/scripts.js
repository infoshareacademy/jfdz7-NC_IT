//https://www.youtube.com/watch?v=x0YnVwAuNQI

$(document).ready(function() {
    var navLinks = $('.scroll');
    var $navbar = $('#navbarSupportedContent');
    var $navbarBtn = $('.navbar-toggler');

    function scrollToSection(event) {
        event.preventDefault();
        $navbar.toggleClass('show');
        $navbarBtn.toggleClass('collapsed');
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 800 );
    }
    navLinks.on('click', scrollToSection);

});