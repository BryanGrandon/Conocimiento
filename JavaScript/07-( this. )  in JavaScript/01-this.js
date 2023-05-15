/* This en JavaScript es una palabra clave que se refiere al objeto 
desde el cual se llama una funcion, y es sensible al contexto. */

// Contexto Global //

this.nombre = "Global";
function imprimir() {
  console.log(this.nombre);
}

imprimir(); // Global

// function anonima //

const obj = {
  nombre: "obj",
  imprimir: function () {
    console.log(this.nombre);
  },
};
obj.imprimir(); // obj

// arrow function (No ocupar) //

const objArrow = {
  nombre: "obj arrow",
  imprimir: () => {
    console.log(this.nombre);
  },
};
objArrow.imprimir(); // Global
