$(document).ready(function() {
    function pobierzBitcoin() {
        var currentBuyPrice = $('#buy-price').html();
        var buyArrow = $('#buy-arrow');
        var currentSellPrice = $('#sell-price').html();
        var sellArrow = $('#sell-arrow');
        $.getJSON("https://blockchain.info/pl/ticker", function(data){
            $('#buy-price').html(data.PLN.buy);
            $('#sell-price').html(data.PLN.sell);
            console.log('odswieżono');
            if(currentBuyPrice > data.PLN.buy) {
                buyArrow.removeAttr('class').addClass('fa fa-arrow-down').css('color', 'red');
            }
            else if(currentBuyPrice < data.PLN.buy) {
               buyArrow.removeAttr('class').addClass('fa fa-arrow-up').css('color', 'green'); 
            }
            else {
                sellArrow.removeAttr('class').addClass('fa fa-minus-square-o').css('color', 'blue');
            }
            if(currentSellPrice > data.PLN.sell) {
                sellArrow.removeAttr('class').addClass('fa fa-arrow-down').css('color', 'red');
            }
            else if(currentSellPrice < data.PLN.sell) {
               sellArrow.removeAttr('class').addClass('fa fa-arrow-up').css('color', 'green'); 
            }
            else {
                sellArrow.removeAttr('class').addClass('fa fa-minus-square-o').css('color', 'blue');
            }
        })
        
    }
    pobierzBitcoin();
    var interval = setInterval(pobierzBitcoin, 5000);
    $('#refresh').html('5');
    $('.control-button').click(function(){
        clearInterval(interval);
        interval = setInterval(pobierzBitcoin, $(this).val());
        $('#refresh').html($(this).html());
    });
})