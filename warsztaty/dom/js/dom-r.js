/* let innerLink = document.getElementsByClassName('inner-link');
for (i =0; i < innerLink.length; i++){
    innerLink[i].addEventListener('click', function(event) {
    event.preventDefault();
    console.log(event.type);
    })
} */
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('przycisk').addEventListener('click', function(e) {
        e.stopPropagation()
        document.getElementById('lista-linkow').style.left = '0px';
    });
document.body.addEventListener('click', function() {
        document.getElementById('lista-linkow').style.left = '-300px';
    });
document.getElementById('lista-linkow').addEventListener('click', function(e) {
    e.stopPropagation();
});
})
//stopPropagation blokuje wykonywanie funkcji przez dzieci
/* document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tlo').addEventListener('click', function(e) {
        e.stopPropagation();
        document.getElementById('paragraf1').style.backgroundColor = "red";
        document.getElementById('paragraf2').style.backgroundColor = "yellow";
        
    })
}) */
document.getElementById('tlo').addEventListener('click', function(e) {
    function ustawTlo() {
        let paragrafy = document.getElementsByName('p');
        paragrafy[0].style.backgroundColor = "red";
        paragrafy[1].style.backgroundColor = "yellow";
    }
})