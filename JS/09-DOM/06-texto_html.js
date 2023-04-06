const $textDOM = document.getElementById("que-es");
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

//  Establecer contenido

// Respeta los espacios en blanco
$textDOM.innerText = text;
// No respeta los espacios en blanco
$textDOM.textContent = text;

// Establecer codigo HTML

// Dentro del elemento
$textDOM.innerHTML = text;
// Remplaza el elemento
$textDOM.outerHTML = text;
