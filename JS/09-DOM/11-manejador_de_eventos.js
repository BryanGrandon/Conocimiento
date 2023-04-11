/* Eventos:
    Los eventos son los mecanismos que tenemos en JavaScript para controlar las acciones del usuario
    y definir el comportamiento del documento en cierto momento o cuando se cumplan ciertas condiciones.

Las funciones que se ejecutan en un evento se llaman Event Handler (Manejador de Eventos). */

/* Evento con atributo HTML 
<button onclick="holaMundo()">Atributo</button> */

function holaMundo() {
  alert("Hola Mundo");
}

/*  Evento con manejador semantico
<button id="evento-semantico">Semantico</button> */

const $eventoSemantico = document.getElementById("evento-semantico");
$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = (e) => {
  alert("Hola Mundo Manejador de Eventos Semanticos");
  console.log(e);
};

/* Evento Multiple
<button id="enevto-multiple">Multiple</button> */

const $eventoMultiple = document.getElementById("evento-multiple");
$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola Mundo Manejador de Evento Multiple");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
});

/* Evento con parametros */

function saludar(nombre = `Desconocid@`) {
  alert(`Hola ${nombre}`);
}

$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("Bryan");
});

/* Eliminar eventos 
<button id="evento-remover">Remover</button> */

const $eventoRemover = document.getElementById("evento-remover");

const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
};

$eventoRemover.addEventListener("dblclick", removerDobleClick);
