//$(document).ready(function(){
//$(window).scroll(function(e){
//  parallax();
//});
//
//function parallax(){
//  var scrolled = $(window).scrollTop();
//  $('#header').css('top',-(scrolled*0.0315)+'rem');
//  $('#header > div').css('top',(scrolled*-0.5)+'rem');
////  $('#header > div').css('opacity',1-(scrolled*.00175));
//};
//});
  $(document).ready(function () {
    addScrolled();
});

$(window).scroll(function () {
    addScrolled();
});

function addScrolled() {
    if ($(window).scrollTop() > $('#main-nav').outerHeight()) {
        $('#main-nav').addClass('nav-scrolled');
    } else {
        $('#main-nav').removeClass('nav-scrolled');
    }
}  