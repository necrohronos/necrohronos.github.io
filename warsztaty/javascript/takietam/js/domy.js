'use strict'
console.log('DOOM')
let sekcjaJeden = document.getElementById('parFirst');
let btnKliknijMnie = document.createElement("button");
let txtKliknijMnie = document.createTextNode("kliknij button");
let classKliknijMnie = document.createAttribute("class");
classKliknijMnie.value = "button";
btnKliknijMnie.setAttribute("id","przycisk");
btnKliknijMnie.appendChild(txtKliknijMnie);
btnKliknijMnie.setAttributeNode(classKliknijMnie);
(console.log(btnKliknijMnie));
sekcjaJeden.insertBefore(btnKliknijMnie, sekcjaJeden.childNodes[5]);


/*
//pokazuje tylko elementy HTML
console.log(sekcjaJeden.children);
//pokazuje wszystko co jest w znaczniku
console.log(sekcjaJeden.childNodes); */