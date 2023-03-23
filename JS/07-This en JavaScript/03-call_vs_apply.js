this.lugar = "Global";

function saludar(saludo, nombre) {
  console.log(`${saludo} ${nombre} desde ${this.lugar}`);
}

const obj = { lugar: "Obj" };

saludar.call(obj, "Hola", "Bryan"); // 'Hola Bryan desde Obj'
saludar.call(null, "Hola", "Bryan"); // 'Hola Bryan desde Global'
saludar.call(this, "Hola", "Bryan"); // 'Hola Bryan desde Global'

saludar.apply(obj, ["Adios", "Camila"]); // 'Adios Camila desde Obj'
saludar.apply(null, ["Adios", "Camila"]); // 'Adios Camila desde Global'
saludar.apply(this, ["Adios", "Camila"]); // 'Adios Camila desde Global'
