function greet(name) {
  let phrase = `Hello ${name}`;

  // The debugger command
  debugger;

  say(phrase);
}
function say(phrase) {
  alert(`** ${phrase} **`);
}
