/* El metodo bind() es una funcion que permite vincular un objeto a una funcion */

this.nombre = "Global";

const persona = {
  nombre: "Bryan",
  saludar: function () {
    console.log(`Hola ${this.nombre}`); // Hola Bryan, Hola Global
  },
};

persona.saludar();

const otraPersona = {
  saludar: persona.saludar.bind(this),
};

otraPersona.saludar();
