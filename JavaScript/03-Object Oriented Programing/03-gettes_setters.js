class Human {
  constructor(country, languaje) {
    this.country = country;
    this.languaje = languaje;
  }
  set setCountry(newCountry) {
    return (this.country = newCountry);
  }
  get getGender() {
    return this.gender;
  }
  set setGender(gender) {
    return (this.gender = gender);
  }
}

const human1 = new Human("Chile", "Español");
console.log(human1); // Human {country: 'Chile', languaje: 'Español'}

human1.setCountry = "España";
console.log(human1);

// GET add gender, SET sets gender
human1.getGender;
human1.setGender = "male";
console.log(human1);

class Staff extends Human {
  constructor(country, languaje, name, age) {
    super(country, languaje);
    this.name = name;
    this.age = age;
  }
}

const human2 = new Staff("Chile", "Español", "Bryan", 21);
console.log(human2); // Personal {country: 'Chile', languaje: 'Español', name: 'Bryan', age: 21}
