// 04-DOM : DONNEZ DU STYLE À VOS ÉLÉMENTS

/*
SOURCE :
- https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/3501896-donnez-du-style-a-vos-elements
- https://github.com/oc-courses/javascript-web
*/
/*
Référence des propriétés CSS par le MDN : 
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference
*/

// A. MODIFIER LE STYLE D'UN ÉLÉMENT

// 1. La propriété style
/*
- Les éléments du DOM possèdent une propriété style.
- Cette propriété style est elle-même un objet de type Style
	- qui représente l'attribut  style de l'élément ;
	- les propriétés de cet objet correspondent aux propriétés CSS de l'élément
	  (elles doivent s'écrire en JS en camelCase, voir la référence sur le MDN :
	  https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)
*/
/* EXERCICE 1 :
- Ciblez le premier paragraphe de la page
- Modifiez ses propriétés de style par JavaScript :
	* mettez la couleur du texte en #813050 ;
	* ajoutez-lui des marges de 1em en haut et en bas ;
	* mettez-lui une couleur de fond #D8EFE3 ;
	* ajoutez un padding de 0.5em ;
	* écrivez-le en Baskerville de préférence, sinon Garamond
	 (font-stack : Baskerville, Baskerville Old Face, Garamond, Hoefler Text, Times New Roman, serif);
	* doublez la taille de la police ;
	* centrez-le autour d'une largeur de 5em;
	* centrez-y le texte ;
*/
let eP= document.querySelector('p');
eP.style.color = '#813050';
eP.style.margin = '1em 0'
eP.style.backgroundColor = '#D8EFE3';
eP.style.padding = '0.5em';
eP.style.fontFamily = 'Baskerville, Baskerville Old Face, Garamond, Hoefler Text, Times New Roman, serif';
eP.style.fontSize = '2em';
eP.style.textAlign = 'center';






// B. ACCÉDER AU STYLE D'UN ÉLÉMENT

// 1. Les limites de la propriété style
/*
On peut utiliser la propriété style pour récupérer les propriétés CSS d'un élément,
mais attention… elle ne représente QUE l'attribut style de l'élément,
elle ne permet donc pas d'accéder aux styles qui se trouvent dans une feuille de style externe
*/
/* EXERCICE 2 :
Affichez la couleur du texte de chacun des trois paragraphes de la page
*/


// 1. Les limites de la propriété style
let eParagraph = document.querySelectorAll("p");
console.log(eParagraph[0].style.color);
console.log(eParagraph[1].style.color);
console.log(eParagraph[2].style.color);


// 2. La fonction getComputedStyle()
/*
La fonction window.getComputedStyle() (https://developer.mozilla.org/fr/docs/Web/API/Window/getComputedStyle)
- prend en paramètre un élément
- renvoie un objet de type Style représentant son style
- les différents styles de l'élément sont des propriétés de cet objet Style
*/
/* EXEFCICE 3 :
Affichez la police de caractère et la couleur du 3e paragraphe (qui a l'id "para")
*/
let ePara = getComputedStyle(document.querySelector('#para'));
console.log(ePara.fontFamily,ePara.color);