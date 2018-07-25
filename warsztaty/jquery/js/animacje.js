$(document).ready(function () {
    $('#show').click(function () {
        //  $('#animacja').slideDown('slow'); 
        $('#animacja').animate({
                "width": "80%",
                "height": "200px"
            },
            1000,
            function () {
                $(this).animate({
                    "width": "100%",
                    "height": "150%"
                })
            })

    })
})
$(document).ready(function () {
    $('#anykey').click(function () {
      $('#box').animate({
        left: 100px,
        width: 100px,
        height: 100px,
      }
      3000,)
    });
});
/* $('#hide').click(function () {
$('#animacja').slideUp('slow');
})
}); */
