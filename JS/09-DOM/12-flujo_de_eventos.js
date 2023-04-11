/* 
El metodo addEventListener() tiene un tercer parametro que puede ser de tipo boolean, si no se esecifica,
el valor por defecto es false.

Si el parametro es false se ejecuta la fase de burbuja (ir del elemento mas interno al mas externo)
Si el parametro es true se ejecuta la fase de captura (ir del elemento mas externo al mas interno)

HTML:
    <section class="eventos-flujo">
        <div class="uno">
        1
            <div class="dos">
                2
                <div class="tres">
                3
                </div>
            </div>
        </div>
    </section> 
*/

const $divsEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo origino ${e.target.className}`
  );
}

console.log($divsEventos);
// Establecer un evento a varios elementos
$divsEventos.forEach((div) => {
  // Fase de burbuja
  div.addEventListener("click", flujoEventos);
  div.addEventListener("click", flujoEventos, false);

  // Fase de captura
  div.addEventListener("click", flujoEventos, true);
  div.addEventListener("click", flujoEventos, {
    capture: true,
    // Ejecutarse 1 vez
    once: true,
  });
});
