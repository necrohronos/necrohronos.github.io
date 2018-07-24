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
        
        jsonObj.forEach(function(element, index){
            let paragraf1 = document.createElement('p');
        let paragraf2 = document.createElement('p');
        let paragraf3 = document.createElement('p');
        let paragraf4 = document.createElement('p');
            paragraf1.innerHTML = 'User ID: ' + element.id;
            paragraf2.innerHTML = 'User Name: ' + element.name;
            paragraf3.innerHTML = 'User URL: ' + element.website;
            paragraf4.innerHTML = '--------';
            document.body.appendChild(paragraf1);
            document.body.appendChild(paragraf2);
            document.body.appendChild(paragraf3);
             document.body.appendChild(paragraf4);
        })
/* for (let i=0; i < jsonObj.length; i++) {
    
    console.log('User ID: ' + jsonObj[i].id);
    console.log('User Name: ' + jsonObj[i].name);
    console.log('User URL: ' + jsonObj[i].website);
    console.log('------');
    
} */
    }
    httpReq.send()
}
//wywołanie funkcji


/* function pobierzDane() {
    ajax('GET','https://jsonplaceholder.typicode.com/users');} */

window.addEventListener('scroll', function(){
    let scrolled = window.pageYOffset;
    let windowHeight = window.innerHeight;
    let documentHeight = document.documentElement.offsetHeight;
    if(windowHeight + scrolled === documentHeight) {
       ajax('GET','https://jsonplaceholder.typicode.com/users')
    } 
})