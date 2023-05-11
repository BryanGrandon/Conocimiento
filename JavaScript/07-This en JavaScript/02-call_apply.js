/* Es una forma de ejecutar una funcion */
this.lugar = "Global";

function saludar() {
  console.log(`${this.lugar}`);
}

const obj = { lugar: "Obj" };

saludar(); // Global
saludar.call(obj); // Obj
saludar.apply(obj); // Obj
