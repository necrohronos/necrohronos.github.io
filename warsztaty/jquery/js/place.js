$( document ).ready(function() { 
 $('#count-sum').click(function(){
    
     var suma = 0;
     $('.salary').each(function(){
    suma += parseFloat($(this).text());
});
     
   $('#sum').html(suma);
 })
} ); 