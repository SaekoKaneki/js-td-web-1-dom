/*
Exercices qui accompagnent le tuto en anglais de Christian Heilmann :
« The essentials of DOM scripting in 10 minutes »,
http://icant.co.uk/articles/domessentials/
=> voir traduction française sur transparents (js-cours-DOM.pdf)
*/

/* 1. Cibler l'élément d'id nav */
let nav = document.querySelector("#nav");


/* 2. Récupérer tous les li */
let eLis = document.querySelectorAll("li");


/* 3. Cibler le 4e li */
let eQuatrieme = document.querySelector("li:nth-child(4)");

/* 4. Compter le nombre de li dans la page */
let eNombLis = document.querySelectorAll("li").length;

/* 5. Cibler le premier li pair */
let eLiPairs = document.querySelector("li .pair");


/* 6. Récupérer tous les li de classe impair */
let eClassImpairs = document.querySelectorAll("li.impair");

/* a) afficher ce qu'on obtient */
console.log(nav);
console.log(eLis);
console.log(eQuatrieme);
console.log(eNombLis);
console.log(eLiPairs);
console.log(eClassImpairs);

/* b) afficher le 2e li de classe impair */
console.log(eClassImpairs[1]);

/* c) afficher chacun des li impair */
for (const element of eClassImpairs) {
    console.log(element);
}

/* d) compter le nombre de li de classe impair dans la page */
console.log(eClassImpairs.length);

/* 7. Cibler le 4e li puis, à partir de là, cibler son frère juste avant lui */
let eQuatrePrevious = eQuatrieme.previousSibling;

/* 8. Cibler le 4e li puis, à partir de là, cibler le suivant */
let eQuatreNext = eQuatrieme.nextSibling;

/* 9. Cibler le parent du 4e li */
let eParent = eQuatrieme.parentNode;

/* 10. Récupérer tous les enfants de l'ul */
let aChilds = document.querySelector("ul").childNodes;

/* a) afficher ce qu'on obtient */
console.log(eQuatrePrevious);
console.log(eQuatreNext);
console.log(eParent);
console.log(aChilds);
/* b) cibler le 1er enfant de l'ul */
let eFirstChilds = document.querySelector("ul li:first-child");
console.log(eFirstChilds)

/* c) cibler le dernier enfant de l'ul */
let eLastChilds = document.querySelector("ul li:last-child");
console.log(eLastChilds);

/* c) cibler le 4e enfant de l'ul */
let eFourChilds = aChilds.item(4);
console.log(eFourChilds);


/* 11. Chaînage de méthodes - que retournent les expressions suivantes ? */

/* a) document.getElementById("nav"). getElementsByTagName("li")[3].firstChild */
    let eFirst = document.getElementById("nav"). getElementsByTagName("li")[3].firstChild;
console.log(eFirst);
/*Retourne le a photos*/

/* b) document. getElementsByTagName("li")[2].childNodes[3].firstChild */
    //let eSecond = document. getElementsByTagName("li")[2].childNodes[3].firstChild;
//console.log(eSecond);

/* c) document. getElementsByTagName("li")[2].firstChild.firstChild */
    let eThree =  document. getElementsByTagName("li")[2].firstChild.firstChild;
console.log(eThree);
/*Retourne texte "About me"*/


/* 12. Afficher les propriétés (nom du nœud, type de nœud, valeur du nœud) d'un nœud
*/
/* a) du noeud document.getElementById("nav").getElementsByTagName("li")[3].firstChild */
let eFive = document.getElementById("nav").getElementsByTagName("li")[3].firstChild;
console.log(eFive.nodeType, eFive.nodeName, eFive.nodeValue);

/* b) du noeud document.getElementById("nav").getElementsByTagName("a")[2].firstChild */
let eSix = document.getElementById("nav").getElementsByTagName("a")[2].firstChild;
console.log(eSix.nodeType, eSix.nodeName, eSix.nodeValue);


/* 13. Changer le texte "Photos" en "Visuals" */
//document.querySelector("#li4").textContent = "Visuals";


/* 14. Modifier les attributs d'un élément */
/* a) Changer la valeur de l'attribut href du lien "Photos" en "photos.php" */
document.querySelector("#li4 a").href = "photos.php";

/* a) Lui ajouter un attribut title avec la valeur "voir mes photos" */
document.querySelector("#li4 a").title = "voir mes photos";

/* 15. Supprimer le dernier li du menu
       (faites-le en utilisant la méthode querySelector pour cible l'ul
        et querySelectorAll pour cibler les li)
*/
document.querySelector("ul").removeChild(document.querySelector("li:last-child"));


/* 16. Ajouter un li à la fin de la liste */

//document.querySelector("#nav").insertAdjacentHTML("beforeend", `<li id="fichiers">Fichier</li>\`);
document.querySelector("ul").insertAdjacentHTML("beforeend","<li></li>");


/* 17. Ajouter un lien dans le menu. Ce lien doit
	- venir avant "photos",
	- afficher le texte "Bibliographie",
	- pointer vers la page "biblio.html" et
	- afficher au survol la boîte de dialogue avec le texte "consulter ma bibliographie"  */
let eBibli = document.querySelector("ul").insertBefore("<li><a>Bibliographie</a></li>","null");






/* 18. Modifier le lien "Photos" 
	  - changer son libellé en "Visuals" 
	  - ajouter une boîte de dialogue au survol avec le texte "voir la galerie" 
	  - changer la cible du lien en "visuals.html " */
document.querySelector("#li4").textContent = "Visuals";
document.querySelector("#li4").href = "visuals.html";




/* 19. Dupliquer le li "Photos" et s'en servir pour ajouter un lien
	   - juste après le lien "Photos"
	   - dont le libellé est "Visuals" 
	   - avec une boîte de dialogue au survol qui affiche le texte "voir la galerie" 
	   - qui pointe vers la page "visuals.html " */





/* 20. Remplacer le dernier lien par le texte (non cliquable) "Contact : monmail@gmail.com"*/
