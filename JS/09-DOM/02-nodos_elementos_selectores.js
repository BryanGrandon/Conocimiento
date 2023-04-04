console.log(`***** Nodos, Elementos y Selectores ***** \n `);
// Nodos
// Cada nodo reprecenta una parte de documento, como un elemento HTML

// Elementos
console.log(document.getElementById("nav"));

// Selectores
// Valores a ingresar tienen que ser selectores validos de css
// id # (mejor usar getElementById)
console.log(document.querySelector("#nav"));
// class .
console.log(document.querySelector(".articulo"));
// etiqueta
console.log(document.querySelector("article"));
// class .
console.log(document.querySelectorAll(".articulo"));
// etiqueta
console.log(document.querySelectorAll("article"));

// metodos y propiedad que se pueden utilizar
// length
console.log(document.querySelectorAll("a").length);
// []
console.log(document.querySelectorAll("articulo")[1]);
// forEach
document.querySelectorAll("a").forEach((e) => {
  console.log(e);
});
