document.addEventListener('DOMContentLoaded', function () {
    let formularz = document.getElementById('form');
     let zgoda1 = document.getElementById('zgoda-marketingowa-1');
    let zgoda2 = document.getElementById('zgoda-marketingowa-2');
    let zgodaAll = document.getElementById('wszystkie-zgody');
    function allOfThem() {
            if (zgodaAll.checked = true) {
                zgoda1.checked = true;
                zgoda2.checked = true;
                zgoda1.setAttribute('disabled', "");
                zgoda2.setAttribute('disabled', "");
            } 
            else {
                zgoda1.cheched = false;
                zgoda2.checked = false;
                zgoda1.removeAttribute('disabled');
                zgoda2.removeAttribute('disabled');
            }

        }
    zgodaAll.addEventListener('change', allOfThem);
    formularz.addEventListener('submit', function (e) {
       
        let msg = document.getElementById('wiadomosc');
        let name = document.getElementById('name');
        let mail = document.getElementById('email');
        if (name.value == null || name.value == '') {
            e.preventDefault();
            console.log('ok');
            let noName = document.createElement('li');
            let noNameTxt = document.createTextNode('Nie wpisano nazwiska')
            noName.appendChild(noNameTxt)
            msg.appendChild(noName);
            // noName.document.createTextNode('Nie wpisano nazwiska!');
        }
        if (mail.value == null || mail.value == '') {
            e.preventDefault();
            console.log('ok');
            let noMail = document.createElement('li');
            let noMailTxt = document.createTextNode('Nie wpisano adresu e-mail')
            noMail.appendChild(noMailTxt)
            msg.appendChild(noMail);
        }
        if (zgoda1.checked == false || zgoda2.checked == false) {
            e.preventDefault();
            let noChech = document.createElement('li');
            let noCheckTxt = document.createTextNode('Nie zaznaczono zgód')
            noChech.appendChild(noCheckTxt)
            msg.appendChild(noChech);
        }

        
        /* zgodaAll.addEventListener('change', function() {
              if(zgoda1.checked == false || zgoda2.checked == false) {
                  console.log('i tu wchodzi');
                  zgoda1.checked == true;
                  zgoda1.setAttribute('disabled');
                  zgoda2.checked == true;
                  zgoda2.setAttribute('disabled');
              }
          }); */
    });
});
