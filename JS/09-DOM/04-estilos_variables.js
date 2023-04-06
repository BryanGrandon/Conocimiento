const $styleDOM = document.querySelector(".style-dom");

// Ver todas las propiedades CSS con los valores establecidos
console.log($styleDOM.style);

// Ver las propiedades CSS agregadas
console.log($styleDOM.getAttribute("style"));

// Ver todas las propiedades con su valores predeterminados y establecidos
console.log(window.getComputedStyle($styleDOM));

// Mostrar el valor de la propiedad
console.log($styleDOM.style.backgroundColor);
console.log($styleDOM.style.color);

// Establecer valores al elemento
$styleDOM.style.setProperty("color", "blueviolet");
$styleDOM.style.color = "blueviolet";

//  Variables CSS - Custom Properties CSS uso de :root{--dark-color: #222;}

const $html = document.documentElement,
  $body = document.body;

// Vincular el valor del root a una variable js
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.backgroundColor = varDarkColor;

// Cambiar el valor del root
// Establecer otro valor a la variable del :root
$html.style.setProperty("--dark-color", "#000");
// Asignar de nuevo la variable
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor);
