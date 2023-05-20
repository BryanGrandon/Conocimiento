const d = document;
function aFunction() {
  alert("Is a funcition");
}

// Event with attribute -----
/* using onclick="function()" */
function forAttributeEvent() {
  alert("Event with Attribute");
}

// Event with semantic handler -----
const $semanticEvent = d.getElementById("semantic-event");
$semanticEvent.onclick = aFunction;
$semanticEvent.onclick = (e) => {
  alert("Arrow function in Semantic Handler");
};

// Multiple Events -----
const $multipleEvents = d.getElementById("multiple-events");
$multipleEvents.addEventListener("click", aFunction);
$multipleEvents.addEventListener("click", (e) => {
  alert("Arrow function in multilpe Events");
  theEvent = {
    event: e,
    type: e.type,
    target: e.target,
  };
  console.log(theEvent);
});

// Event with paramethers
function greet(name = "anonymous") {
  alert(`Hello ${name}`);
}

$multipleEvents.addEventListener("click", () => {
  greet();
  greet("Bryan");
});

// Remove Event -----
const $removeEvent = d.getElementById("remove-event");

const removeTheEvent = (e) => {
  alert(`Remove type event ${e.type}`);
  $removeEvent.removeEventListener("dblclick", removeTheEvent);
};
$removeEvent.addEventListener("dblclick", removeTheEvent);
