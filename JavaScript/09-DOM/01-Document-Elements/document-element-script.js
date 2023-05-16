const typeDocument = {
  shape1: window.document,
  shape2: document,
};
console.log(typeDocument);

const documentLabel = {
  head: document.head,
  body: document.body,
  html: document.documentElement,
};
console.log(documentLabel);

const labels = {
  title: document.title,
  links: document.links,
  image: document.images,
  forms: document.forms,
};
console.log(labels);

const externalFile = {
  css: document.styleSheets,
  js: document.scripts,
};
console.log(externalFile);

console.log("Seleccionado por el usuario");
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);
