$(document).ready(function () {
 $('.container a').click(function(e) {
     e.preventDefault();
     $(this).css('color','red');
 })   
});