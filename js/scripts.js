$(document).ready(function() {
    AOS.init();
    var $navLinks = $('.scroll');
    var $navbar = $('#navbarSupportedContent');
    var $navbarBtn = $('.navbar-toggler');
    var $nav = $('.navbar');
    var $logo = $('.logo');

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
            $nav.addClass('navbar-effect') &&
            $logo.addClass('logo-sm'):
            $nav.removeClass('navbar-effect') &&
            $logo.removeClass('logo-sm');
    }

    $(window).on('scroll', handleNavbarEffect);

    function dynamicChangeTitle() {
        document.title = $('.active').text();
    }

    $(window).on('scroll', dynamicChangeTitle);

    function showUpButton() {
        const $window = $(window).scrollTop();
        $window > 400 ?
            $('.button_up').fadeIn() :
            $('.button_up').fadeOut();
        }

    $(window).on('scroll', showUpButton);

    $('.goTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 800);
    });

});