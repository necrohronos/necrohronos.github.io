function ajax(method, url) {
    let httpReq = new XMLHttpRequest();
    httpReq.open(method, url)
    httpReq.onreadystatechange = function() {
        if(httpReq.readyState == 4) {
            if (httpReq.status == 200) {
                let returnData = httpReq.responseText;
                httpReq.onsuccess(returnData);
                httpReq = null;
            }
        }
    }
    httpReq.onsuccess = function(response) {
        let jsonObj = JSON.parse(response);
        console.log(response);
        let paragraf1 = document.createElement('p');
        let paragraf2 = document.createElement('p');
        let paragraf3 = document.createElement('p');
        paragraf1.innerHTML = jsonObj.userId;
        paragraf2.innerHTML = jsonObj.userName;
        paragraf3.innerHTML = jsonObj.userURL;
        document.body.appendChild(paragraf1);
        document.body.appendChild(paragraf2);
        document.body.appendChild(paragraf3);

    }
    httpReq.send()
}
//wywołanie funkcji


function pobierzDane() {
    ajax('GET','http://echo.jsontest.com/userId/108/userName/Akademia108/uresURL/akademia108.pl')
}
    document.getElementById('pDane').addEventListener('click', pobierzDane)