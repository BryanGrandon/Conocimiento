console.log("Acceder a los atributos");

const $langPunto = document.documentElement.lang;
console.log($langPunto);

const $langGet = document.documentElement.getAttribute("lang");
console.log($langGet);

console.log("Acceder a los atributos de una clase");

const $hrefPuntoLink = document.querySelector(".link").href;
console.log($hrefPuntoLink);

const $hrefGetLink = document.querySelector(".link").getAttribute("href");
console.log($hrefGetLink);

console.log("Modificar valor del atributo");
document.documentElement.setAttribute("lang", "es-CL");
console.log(document.documentElement.lang);

console.log("Asignacion a una variable se utiliza $");
const $link = document.querySelector(".link");
$link.setAttribute("target", "_blank");
$link.setAttribute("rel", "noopener");

console.log("Data-Attributes");
const $description = document.querySelector(".description");
// $description.getAttribute("data-description");
$description.setAttribute("data-description", "Modulo de objeto del documento");
console.log($description);
