// Evento con atributo

function holaMundo() {
  alert("Hola Mundo");
}

// Evento con manejador semantico

const $eventoSemantico = document.getElementById("evento-semantico");
// Designarle una funcion
$eventoSemantico.onclick = holaMundo;
// Establecer una arrow function
$eventoSemantico.onclick = (e) => {
  alert("Hola Mundo, Manejador Sementico");
  console.log(e);
};

// Evento Multiple

const $eventoMultiple = document.getElementById("evento-multiple");
$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola Mundo, Manejo de evento Multiple");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
});

// Evento con parametros
function saludar(nombre = `Desconocid@`) {
  alert(`Hola ${nombre}`);
}

// Designar una funcion dentro de otra funcion
$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("Bryan");
});

// Eliminar evento

const $eventoRemover = document.getElementById("evento-remover");

const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
};

$eventoRemover.addEventListener("dblclick", removerDobleClick);
