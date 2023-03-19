class Human {
  constructor(country, languaje) {
    this.country = country;
    this.languaje = languaje;
  }
}

const human1 = new Human("Chile", "Español");
console.log(human1); // Human {country: 'Chile', languaje: 'Español'}
