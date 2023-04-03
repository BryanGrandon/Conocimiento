// Captura el elemento que tenga el id
console.log(document.getElementById("menu"));

// Captura el primer elemento que se encuentre
// Valores a ingresar tienen que ser selectores validos de css
console.log(document.querySelector());
// id # (mejor usar getElementById)
console.log(document.querySelector("#menu"));
// class .
console.log(document.querySelector(".articulo"));
// etiqueta
console.log(document.querySelector("article"));
// Seleccionar todos los elementos que que esten en el documento
console.log(console.log(document.querySelectorAll()));
// class .
console.log(document.querySelectorAll(".articulo"));
// etiqueta
console.log(document.querySelectorAll("article"));

// metodos y propiedad que se pueden utilizar
console.log(document.querySelectorAll("a").length);
console.log(document.querySelectorAll("articulo")[2]);
document.querySelectorAll("a").forEach((e) => {
  console.log(e);
});
