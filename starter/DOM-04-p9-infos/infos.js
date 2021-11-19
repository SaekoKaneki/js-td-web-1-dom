// 04-DOM : DONNEZ DU STYLE À VOS ÉLÉMENTS
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
DOM - PREPA 9 : « Infos » : informations sur un élément
Récupérez la largeur et la hauteur de la section d'id "contenu"
et affichez les deux informations dans une liste
(un item pour la largeur et un item pour la hauteur)
que vous insérez dans la section d'id "infos" après le titre
*/let WidthElt = getComputedStyle(document.querySelector('#contenu'));
console.log(WidthElt.width);
let HeightElt = getComputedStyle(document.querySelector('#contenu'));
console.log(HeightElt.height);
let UlCreate = document.createElement("ul");
document.querySelector("#infos").appendChild(UlCreate);
document.querySelector('ul').insertAdjacentHTML('beforeend', `<li>${WidthElt.width}</li>`)
document.querySelector('ul').insertAdjacentHTML('beforeend', `<li>${HeightElt.height}</li>`)