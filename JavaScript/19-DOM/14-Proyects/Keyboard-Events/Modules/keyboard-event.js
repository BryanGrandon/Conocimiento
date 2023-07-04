const d = document;
export default function events(e, key, keyCode) {
  const $key = d.querySelector(key),
    $keyCode = d.querySelector(keyCode);

  $key.innerText = `${e.key}`;
  $keyCode.innerText = `${e.keyCode}`;

  if (e.key === "1") {
    alert(`Key: 1 ;  keyCode: 49`);
  }
  if (e.keyCode === 50) {
    alert(`Key: 2 ;  keyCode: 50`);
  }
}
