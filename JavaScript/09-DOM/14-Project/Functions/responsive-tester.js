const d = document;
export default function responsiveTester(form) {
  const $form = d.getElementById(form);
  let tester;
  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      tester = window.open(
        $form.address.value,
        "tester",
        `innerWidth = ${$form.widthTs.value}, innerHeight = ${$form.heightTs.value}`
      );
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target === $form.closse) {
      tester.close();
    }
  });
}
