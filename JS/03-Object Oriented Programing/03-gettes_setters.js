class Human {
  constructor(country, languaje) {
    this.country = country;
    this.languaje = languaje;
  }
  set setCountry(newCountry) {
    return (this.country = newCountry);
  }
  get getGenero() {
    return this.genero;
  }
  set setGenero(genero) {
    return (this.genero = genero);
  }
}

const human1 = new Human("Chile", "Español");
console.log(human1); // Human {country: 'Chile', languaje: 'Español'}

human1.setCountry = "España";
console.log(human1);

// GET agregar genero SET establezer el genero
human1.getGenero;
human1.setGenero = "male";
console.log(human1);

class Personal extends Human {
  constructor(country, languaje, name, age) {
    super(country, languaje);
    this.name = name;
    this.age = age;
  }
}

const human2 = new Personal("Chile", "Español", "Bryan", 21);
console.log(human2); // Personal {country: 'Chile', languaje: 'Español', name: 'Bryan', age: 21}
