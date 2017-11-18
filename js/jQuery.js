$(document).ready(function() {
    function sprawdzRozmiarOkna() {
        if ( $(window).width() < 479) {
            $('#zajawka_li3').text('Przeszuka za Ciebie wszystkie dostępne oferty i znajdzie najniższe ceny!');
        }

    }
    $(window).resize(sprawdzRozmiarOkna);

});
