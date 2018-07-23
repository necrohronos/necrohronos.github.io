$(document).ready(function () {
    //wyciąga tekst z selektora
    console.log($('.container p').text());
    //ustawia tekt w selektorze
    $('.container p').text('Dalszy rozwój różnych form działalności zmusza nas do tej sprawy pomaga w kształtowaniu kolejnych kroków w określaniu dalszych kierunków postępowego wychowania. Wyższe założenie ideowe, a także usprawnienie systemu finansowego pociąga za sobą proces wdrożenia i określenia systemu powszechnego uczestnictwa.');
    //wyciąga kod HTML z selektora
    console.log($('.container p').html());
    //ustawia kod HTML w pierwszym selektorze
    $('.container p').html('Lorem<strong>ipsum</strong>');
    //ustawia we wszystkich
    $('.container p').html('Lorem <strong>ipsum</strong>');
    $('#dodaj').append('<p>nowy</p>');
    $('#dodaj').prepend('<p><strong>nowszy</strong></p>');
    $('#dodaj').after('<p>nowy paragraf</p>');
    // $('#dodaj').empty();
    // $('#dodaj').remove();
    console.log($('.container p').css('color'));
    $('.container p').css({
        fontSize: '20px',
        color: 'red'
    });
    console.log($('form input').val());
});
$('form input').val('lorem');
$('.container p').addClass('paragraf fsggs');
$('.container p').removeClass('paragraf');


// $('p').text
