//insertBefore replaceChild setAtributeNode są nodami
let btn = document.createElement('button');
let textBtn = document.createTextNode('Kliklij mnie');
//let classAtr = document.createAttribute('class');
//classAtr.value = 'btn';
document.body.appendChild(btn);
btn.appendChild(textBtn);
//btn.setAttributeNode(classAtr);
btn.setAttribute('class', 'btn') //zastepuje classAtr value i setAttribureNode
btn.setAttribute('href', '#');
console.log(document.body.childNodes);