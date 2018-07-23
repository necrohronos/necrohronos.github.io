$(document).ready(function () {
 /*$('.container a').click(function(e) {
     e.preventDefault();
     $(this).css('color','red');
 }); */
//kilka eventów na elementów
 /* $('.container a').on({
     "click": function(e){
         e.preventDefault();
         $(this).css('color','red')
     },
      "mouseover": function(e){
         $(this).css('color','green');
     },
    "mouseout": function(e){
         $(this).css('color','red')
     
      
 });   */
     $(window).scroll(function() {
     var scrolled = $(this).scrollTop();
     var result = -(scrolled / 2);
     $('#background').css('background-position', + result + 'px 0px')
 })
});