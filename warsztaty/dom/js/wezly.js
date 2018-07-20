let parFirstParentNode = document.getElementById('parFirst').parentNode;
console.log(parFirstParentNode);
 let parFirstParentElement = document.getElementById('parFirst').parentElement;
console.log(parFirstParentElement);

let sectionFirstChildNode = document.getElementById('sectionFirst').childNodes;
console.log(sectionFirstChildNode);
console.log(sectionFirstChildNode[0].nodeName);
console.log(sectionFirstChildNode[0]);
//children zwraca tylko elementy HTML
let sectionFirstChildren = document.getElementById('sectionFirst').children;
console.log(sectionFirstChildren);

let prevParSecondSibling = document.getElementById('parSecond').previousElementSibling;
console.log(prevParSecondSibling);
let nextParSecondSibling = document.getElementById('parSecond').nextElementSibling;
console.log(nextParSecondSibling);