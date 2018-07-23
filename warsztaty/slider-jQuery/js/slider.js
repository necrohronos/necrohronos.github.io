$(document).ready(function () { 
    var slideShow = $('.slide-show');
    var slideCount = $('.single-slide').length;
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;
    $(slideShow).css('width', slideCount * 100 + '%');
    $(slideShow).find('.single-slide').css({
        "width": slideWidth + "%",
        "margin-left": 100 / slideCount + '%'
    })
    $('.prev-slide').click(function() {
        
    })
});