// Static Methods
let date = new Date();

let dayOfTheMonth = date.getDate();
console.log(dayOfTheMonth);

let dayOfTheWeek = date.getDay();
console.log(dayOfTheWeek);

let monthOfTheYear = date.getMonth();
console.log(monthOfTheYear);

let year = date.getFullYear();
console.log(year);

let hours = date.getHours();
console.log(hours);

let minutes = date.getMinutes();
console.log(minutes);

let seconds = date.getSeconds();
console.log(seconds);

// Date String

date.toString(); // 'Thu Mar 09 2023 11:43:20 GMT-0300'

date.toDateString(); // 'Thu Mar 09 2023'

date.toLocaleString(); // '9/3/2023, 11:42:32'

date.toLocaleDateString(); // '9/3/2023'

date.toLocaleTimeString(); // '11:44:35'
