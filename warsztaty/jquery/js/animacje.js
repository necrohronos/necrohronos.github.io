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
                }, function() {
                    $( this ).after( "<p>Animation complete.</p>" )
                }
                               )
            })

    })
})
$(document).ready(function () {
    $('#anykey').click(function () {
      $('#box').animate({
        "left": "100px",
        "width": "100px",
        "height": "100px"
      }, 3000);},
      function() {
      $('#box').animate({
          'backgroundColor': "#000000"
          
        }, 5000); }
        
        );
      }); 
document.addEventListener("DOMContentLoaded",function(){
  document.getElementsByTagName('button').addEventListener('click' function() {
    document.getElementById('podglad').innerHTML += this.value;

  });
});
/* $('#hide').click(function () {
$('#animacja').slideUp('slow');
})
}); */
