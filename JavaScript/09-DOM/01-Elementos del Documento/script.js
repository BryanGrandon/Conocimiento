console.log("Documento");
console.log(window.document, document);

console.log("Etiqueta del documento");
// head
console.log(document.head);
// body
console.log(document.body);
// html
console.log(document.documentElement);

console.log(" \nEtiqueta title");
console.log(document.title);

console.log(" \nLista de enlaces");
console.log(document.links);

console.log(" \nLista de imagenes");
console.log(document.images);

console.log(" \nLista de formularios");
console.log(document.forms);

console.log(" \nHojas de estilos");
console.log(document.styleSheets);

console.log(" \nScripts de programacion");
console.log(document.scripts);

console.log(" \nSeleccionado por el usuario");
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);
