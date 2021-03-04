//clicclo il menu hamburger
$('.header-right .fas').click(
    function() {
        //cambio il display none dell'hamburger in display block
        $('.hamburger-menu').css('display', 'block');
    }
);

//clicco la x per uscire
$('.close > .fas').click(
    function() {
        //cambio il display none dell'hamburger in display none
        $('.hamburger-menu').css('display', 'none');
    }
);


