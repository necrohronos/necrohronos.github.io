$(document).ready(function() {
  $('#btn').click(function(){
    $.getJSON(  "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",   function (data) { 
 console.log(data); 
  /*  $('#btn').after('<p>' + data.userId + '</p><p>' + data.userName + '</p><p>' + data.userURL); */
        $('body').append('<p>' + data.userId + '</p>');
        $('body').append('<p>' + data.userName + '</p>');
        $('body').append('<p>' + data.userURL + '</p>');
        
    })
  })
})