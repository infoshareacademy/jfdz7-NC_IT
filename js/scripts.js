//https://www.youtube.com/watch?v=x0YnVwAuNQI

$(document).ready(function() {
    var $navLinks = $('.scroll');
    var $navbar = $('#navbarSupportedContent');
    var $navbarBtn = $('.navbar-toggler');
    var $nav = $('.navbar');

    function scrollToSection(event) {
        event.preventDefault();
        var hideMenu = $(event.delegateTarget).data('hide-menu');

        if (hideMenu === 'yes') {
            $navbar.removeClass('show');
        } else {
            $navbarBtn.toggleClass('collapsed');
            $navbar.toggleClass('show');
        }

        $('body, html').animate({
            scrollTop: $(this.hash).offset().top - 30
        }, 800);
    }
    $navLinks.on('click', scrollToSection);

    function handleNavbarEffect() {
        const effectThreschold = 80;

        $(window).scrollTop() > effectThreschold ?
            $nav.addClass('navbar-effect') :
            $nav.removeClass('navbar-effect');
    }

    $(window).on('scroll', handleNavbarEffect);

    function dynamicChangeTitle() {
        const $window = $(window).scrollTop();
        if ($window <= 530) {
            document.title='Pomocnik Zakupowy';
        }
        if ($window > 530 && $window <= 1000){
            document.title='Najważniejsze Funkcje';
        }
        if ($window > 1000 && $window <= 1500){
            document.title='Zapisz się !';
        }
        if ($window > 1500){
            document.title='Dodatkowe Informacje';
        }
        if ($window === $(document).height() - $(window).height()) {
            document.title='O nas'
        }
    }

    $(window).on('scroll', dynamicChangeTitle);
});