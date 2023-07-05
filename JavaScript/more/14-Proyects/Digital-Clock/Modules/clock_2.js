const d = document;
export default function clock_2(class2) {
  const $clock = d.querySelector(class2),
    $section1 = d.createElement("section"),
    $section2 = d.createElement("section");

  $section1.classList.add("f2-main");
  $section2.classList.add("f2-second");

  setInterval(() => {
    let hours = new Date().getHours();
    if (hours < 10) hours = `0${hours}`;

    let minutes = new Date().getMinutes();
    if (minutes < 10) minutes = `0${minutes}`;

    let seconds = new Date().getSeconds();
    if (seconds < 10) seconds = `0${seconds}`;

    $section1.textContent = `${hours}:${minutes}`;
    $section2.textContent = `${seconds}`;

    $clock.appendChild($section1);
    $clock.appendChild($section2);
  }, 1000);
}
