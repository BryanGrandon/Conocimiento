/* 
Nodos:
    Cada nodo reprecenta una parte de documento, como un elemento HTML 

Elementos:
    La forma de seleccionar los elementos del documento

Selectores:
    Son los valores a ingresar tienen que ser selectores validos de css
*/

console.log("id - getElementById");
const $id = document.getElementById("section-id");
console.log($id.textContent);

console.log(` \nClass - querySelector(".")`);
const $class = document.querySelector(".section-class");
console.log($class.textContent);

console.log(` \nEtiqueta - querySelector("article")`);
const $article = document.querySelector("article");
console.log($article.textContent);

console.log(` \nTodas las class - querySelectorAll(".")`);
const $allClass = document.querySelectorAll(".section-class");
console.log($allClass);

console.log(` \nTodas mas mismas etiquetas - querySelectorAll("")`);
const $allEtiqueta = document.querySelectorAll("section");
console.log($allEtiqueta);

console.log(" \nMetodos\n ");
const $cantidadDeLink = document.querySelectorAll("a").length;
console.log("length: ", $cantidadDeLink);

const $sectionEsp = document.querySelectorAll("section")[2];
console.log("Utilizando []: ", $sectionEsp.textContent);

console.log("forEach para los links");
document.querySelectorAll("a").forEach((e) => {
  console.log(e);
});
