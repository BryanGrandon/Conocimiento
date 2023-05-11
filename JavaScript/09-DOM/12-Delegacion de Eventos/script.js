function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this} el click lo origino ${e.target.className}`
  );
}

document.addEventListener("click", (e) => {
  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
    console.log("f");
  }
  if (e.target.matches(".eventos-flujo a")) {
    alert("Dirigir a otra pagina");
    e.preventDefault();
  }
});
