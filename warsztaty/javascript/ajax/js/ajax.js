function ajax(method, url) {
    //utworzenie obiektu XMLhttpRequest
    let httpReq = new XMLHttpRequest();
    //otwieram połącznie z serwerem
    httpReq.open(method, url)
    //jeżeli status serwera został zmieniony
    /* ): połączeie nie nawiązane,
    1: połączenie nawiązane,
    2. żądanie odebrane,
    3. przetwarzanie
    4. dane zwrócone i gotowe do użycia */
    httpReq.onreadystatechange = function() {
        // sprawdza kod readyState
        if(httpReq.readyState == 4) {
            //sprawdza status połączenia
            if (httpReq.status == 200) {
                //pojemnik na zwrócone dane
                let returnData = httpReq.responseText;
                //obrabianie danych
                httpReq.onsuccess(returnData);
                httpReq = null;
            }
        }
    }
    //definicja onsuccess na obiekcie httpReq
    httpReq.onsuccess = function(response) {
        let jsonObj = JSON.parse(response);
        console.log(response);
    }
    httpReq.send()
}
//wywołanie funkcji
ajax('GET','http://echo.jsontest.com/userId/108/userName/Akademia108/uresURL/akademia108.pl')