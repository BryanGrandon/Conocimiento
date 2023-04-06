// Acceder a los atributos
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

// Acceder a los atributos de una clase
console.log(document.querySelector(".link").href);
console.log(document.querySelector(".link").getAttribute("href"));

// Modificar valor del atributo
document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-CL");
console.log(document.documentElement.lang);

// Asignacion a una variable se utiliza $
const $linkDOM = document.querySelector(".link");
$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");

//  Data Attributes
//  Data-Atribute. Son atributos que podemos crear nosotros utilizando el data- =""
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de objeto del documento");
$linkDOM.dataset.description = "Modelo de objeto del documento con punto";
