console.log(`****** Elementos del Document ***** \n `);
// Capturar todo el documento
console.log(window.document);
console.log(document);

// Capturar la etiqueta head
console.log(document.head);
// Capturar la etiqueta body
console.log(document.body);
// Capturar la etiqueta html
console.log(document.documentElement);

// Captuturar el title
console.log(document.title);

// Capturar lista de enlaces
console.log(document.links);

// Captura lista de imagenes
console.log(document.images);

// Capturar lista de formularios
console.log(document.forms);

// Capturar las hojas de estilos
console.log(document.styleSheets);

// Capturar las scripts de programacion
console.log(document.scripts);

// Captura lo seleccionado por el usuario
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);
