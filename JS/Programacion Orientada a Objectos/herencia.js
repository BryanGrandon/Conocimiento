class Human {
  constructor(country, languaje) {
    this.country = country;
    this.languaje = languaje;
  }
}

const human1 = new Human("Chile", "Español");
console.log(human1); // Human {country: 'Chile', languaje: 'Español'}

class Personal extends Human {
  constructor(country, languaje, name, age) {
    super(country, languaje);
    this.name = name;
    this.age = age;
  }
}

const human2 = new Personal("Chile", "Español", "Bryan", 21);
console.log(human2); // Personal {country: 'Chile', languaje: 'Español', name: 'Bryan', age: 21}
