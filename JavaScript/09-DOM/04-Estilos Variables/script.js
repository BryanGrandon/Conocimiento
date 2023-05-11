const $estilos = document.querySelector(".estilos");

// Ver todas las propiedaades de CSS
console.log($estilos.style);

// Valores de elemento
console.log("color: ", getComputedStyle($estilos).getPropertyValue("color"));
console.log(
  "background: ",
  getComputedStyle($estilos).getPropertyValue("background-color")
);

// Establecer propiedades css
$estilos.style.setProperty("width", "50%");
$estilos.style.textAlign = "center";
$estilos.style.setProperty("padding", "5px");
$estilos.style.borderRadius = "10px";

console.log($estilos.getAttribute("style"));

// Variables de CSS
const $html = document.documentElement,
  $body = document.body;

// Designar una variable al valor de una variable css
let $color = getComputedStyle($html).getPropertyValue("--blueviolet-color");
$estilos.style.setProperty("background-color", $color);

// Cambiar el valor de la variable
let textColor = "#acc";
$html.style.setProperty("--text-color", textColor);

// Establecer una veriable a una propiedad
$body.style.setProperty("background-color", "var(--text-color)");
