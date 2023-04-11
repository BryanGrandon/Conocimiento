/*  Designamos el evento al documento HTML, y con condicionales 
le asignamos los elementos con su respectiva programacion */

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this} el click lo origino ${e.target.className}`
  );
}

document.addEventListener("click", (e) => {
  if (e.target.maches(".eventos-flujos div")) {
    flujoEventos(e);
  }
  if (e.target.maches(".eventos-flujo a")) {
    alert("Dirigir a otra pagina");
    e.preventDefault();
  }
});
