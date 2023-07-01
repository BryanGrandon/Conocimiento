"use strict";

const Types = {
  typeDocument: {
    shape1: window.document,
    shape2: document,
  },

  documentLabel: {
    head: document.head,
    body: document.body,
    html: document.documentElement,
  },

  labels: {
    title: document.title,
    links: document.links,
    image: document.images,
    forms: document.forms,
  },

  externalFile: {
    css: document.styleSheets,
    js: document.scripts,
  },
};

for (let key of Object.values(Types)) {
  console.log(key);
}

console.log("User selected");
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);
