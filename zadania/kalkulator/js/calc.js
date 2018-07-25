//document.addEventListener('DOMContentLoaded', function() {
/*	let noButton = document.getElementsByClassName('number');
	let ekranik = document.getElementById('podglad');
	let resultButton = document.getElementById('wynik');
  let clearButton = document.getElementById('delete'); */
$(document).ready(function() {
	$('.number').click( widok()) 
    function widok() { 
        //$('#podglad').html += $('.number').value;};
        console.log($('.numbers').value)}
    $('#wynik').click(function(){var wynik = eval(widok()); $('#podglad').html(wynik)})
    $('#delete').click(function() {$('#podglad').empty()})
});
    
    
   /* function widok() {
  ekranik.innerHTML += this.value;
  console.log(this.value);
  }
  document.getElementsByClassName('number').addEventListener('click', widok());
  resultButton.addEventListener('click', function() {
    let wynik = eval(widok());
    ekranik.innerHTML(wynik);
  })
  clearButton.addEventListener('click', function() {
    ekranik.innerHTML('');
  }) 
}); */