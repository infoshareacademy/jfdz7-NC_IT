$(document).ready(function() {
    AOS.init();
    var $navLinks = $('.scroll');
    var $navbar = $('#navbarSupportedContent');
    var $navbarBtn = $('.navbar-toggler');
    var $nav = $('.navbar');
    var $logo = $('.logo');
    var $email = $('#email');
    var $formSubmitButton = $('#send');
    const $emailSubmit = $('.email-submit');
    const $pinInput = $('.pin-input');
    const pin = Math.round(Math.random() * 10000);

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

    var $goTop = $('.goTop');
    function showUpButton() {
        const $window = $(window).scrollTop();
        $window > 400 ?
            $goTop.fadeIn() :
            $goTop.fadeOut();
        }

    $(window).on('scroll', showUpButton);

    $goTop.click(function(){
        $("html, body").animate({ scrollTop: 0 }, 800);
    });

    function isEmailValid() {
        var emailRegex = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        return emailRegex.test($email.val());
    }

    function validateSubmitButton() {
        $formSubmitButton.prop('disabled', !isEmailValid());
    }

    $email.on('input', validateSubmitButton);

    $('<span class="is-human-pin"></span>').appendTo('.is-human');
    $('.is-human-pin').text(`${pin}`);

    function isPinInvalid() {
        let input = $pinInput.val();
        return parseInt(input) !== pin;
    }
    function validateSubmitBtn() {
        // isPinInvalid ? $emailSubmit.attr('disabled', '') : $emailSubmit.removeAttr('disabled') ;
        $emailSubmit.prop('disabled', isPinInvalid)
    }
    $pinInput.on('keyup', validateSubmitBtn);

    $('#game-btn').on('click', function(e) {
        e.preventDefault();
        var url = $(this).attr('href');
        $('#game-modal').html('<iframe width="100%" height="100%" frameborder="0" scrolling="no" allowtransparency="true" src="'+url+'"></iframe>');
    });

    $('#game').on('show.bs.modal', function () {
        $(this).find('.modal-dialog').css({
            'max-width': '100%',
            width:'820px',
            height:'720px',
            'padding':'0',
            'top': '-4%'
        });
        $(this).find('.modal-content').css({
            width:'820px',
            height:'720px',
            'border-radius':'0',
            'padding':'0',
            'background': '#000000'
        });

    })


});
