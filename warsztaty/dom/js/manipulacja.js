let parFirst = document.getElementById('parFirst');

//get
console.log(parFirst.innerHTML);
//set
parFirst.innerHTML += '<p class="tekst">Lorem<p>';

//get
/* console.log(parFirst.innerHTML);
let parSecond = document.getElementById('parSecond');
console.log(parSecond);
parSecond.innerText += '<p>To jest nowy tekst</p>'
let nav = document.getElementById('main-nav');

nav.outerHTML += '<nav id="new-nav"><ul><li><a href="#">new link</a></li></ul></nav>'; */

//element.nazwa_atrybutu = 'nowa wartość'
/* document.getElementsById('link').href = 'http://google.com'; 
document.getElementsById('link').classList.remove("google"); */
document.getElementById('link').style.color = 'red';

