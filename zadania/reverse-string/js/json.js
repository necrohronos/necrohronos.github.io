let jsonObj = {
     "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}
jsonObj.pracownicy.forEach(function(element, index) {
                console.log(index + ' ' + element.firstName + ' ' + element.lastName)
                });