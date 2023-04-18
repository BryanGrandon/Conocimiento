window.addEventListener("resize", (e) => {
  console.clear();
  console.log("********** Evento Resize **********");
  // Tamaño de la Pagina
  console.log(window.innerWidth);
  console.log(window.innerHeight);

  // Tamaño de la Ventana
  console.log(window.outerWidth);
  console.log(window.outerHeight);

  console.log(e);
});

window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("********** Evento Scroll **********");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});

window.addEventListener("load", (e) => {
  console.log("********** Evento Load **********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

window.addEventListener("DOMContentLoaded", (e) => {
  console.log("********** Evento DOMContentLoaded **********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});
