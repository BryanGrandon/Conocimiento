const d = document,
  n = navigator;
export default function getGeolocation(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

  const success = (position) => {
    let coords = position.coords;
    console.log(position);
    $id.innerHTML = `<p>Your current position is:</p>
    <ul>
        <li>Latitude: <b>${coords.latitude}</b></li>
        <li>Length: <b>${coords.longitude}</b></li>
        <li>Precision: <b>${Math.round(coords.accuracy)}</b>metros</li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${
      coords.longitude
    },17z" target="_blank" rel="noopener" >To see in google maps</a>
    `;
  };
  const error = (err) => {
    $id.innerHTML = `<p><mark>Error ${err.code} ${err.message}</mark></p>`;
    console.log(`Error ${err.code}: ${err.message}`);
  };

  n.geolocation.getCurrentPosition(success, error, options);
}
