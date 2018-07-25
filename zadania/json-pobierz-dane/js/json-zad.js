$(document).ready(function() {
    console.log('test');
    $('#btn').click(function() {
$.getJSON(  "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",   function (data) { 

          $('body').append('<div id="dane-programisty"></div>');
        $('#dane-programisty').html('<p>' + data.imie + '</p><p>' + data.nazwisko + '</p><p>' + data.zawod + '</p><p>' + data.firma + '</p>');
});
          });
    });