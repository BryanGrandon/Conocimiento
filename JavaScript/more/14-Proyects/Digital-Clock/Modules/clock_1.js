const d = document;
export default function clock_1(class1) {
  let $clocks = d.querySelectorAll(class1);

  $clocks.forEach((e) => {
    setInterval(() => {
      let clockHour = new Date().toLocaleTimeString();
      e.innerText = `${clockHour}`;
    }, 1000);
  });
}
