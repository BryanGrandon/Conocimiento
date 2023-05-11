// ARRAY

const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

console.log(days[0]); // monday

let [day1, day2, day3, day4, day5, day6, day7] = days;
console.log(day1); // monday

// OBJECT

const person = {
  age: 21,
  name: "Bryan",
};

console.log(person.age); // 21

let { age, name } = person;
console.log(age); // 21
