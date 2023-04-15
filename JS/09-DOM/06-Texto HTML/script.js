let text = `
<p>
El modelo de Objetos del Documento (<b><i>DOM-Document Object Model</i></b>) es una API para documentos HTML y XML
</p>
<p>
Este provee una reprecentacion estructural del documento permitido modificar se contenido y presentacion virtual mediante codigo JS
</p>
<p>
<mark>El DOM no ses parte de la especificacion de JavaScript, es una API para navegadores</mark>
</p>
`;

// Establece contenido. Respetando los espacios en blanco
const $innerText = document.getElementById("inner-text");
$innerText.innerText = text;

// Establece contenido. No respeta los espacios en blanco
const $textContent = document.getElementById("text-content");
$textContent.textContent = text;

// Establecer HTML. Dentro del elemeto
const $innerHtml = document.getElementById("inner-html");
$innerHtml.innerHTML = text;

// Establecer HTML. Remplazando el elemento
const $outerHtml = document.getElementById("outer-html");
$outerHtml.outerHTML = text;
