// Flujo de eventos
const $divsEventos = document.querySelectorAll(".eventos-flujos div");

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo origino ${this.target.className}`
  );
  // Detiene la propagacion
  e.stopPropagation();
}

$divsEventos.forEach((div) => {
  div.addEventListener("click", flujoEventos);
});

const link = documnet.querySelector(".link");
$divsEventos.addEventListener("click", (e) => {
  alert("Dirigir a otra pagina");
  // Elimina la accion que tiene por defaul
  e.preventDefalt();

  e.stopPropagation();
});
