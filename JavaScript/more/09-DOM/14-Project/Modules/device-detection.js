const d = document,
  n = navigator,
  ua = n.userAgent;

export default function userDeviceInfo(id) {
  const $id = d.getElementById(id),
    isMovile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini|OPR/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera() ||
          this.ie() ||
          this.edge()
        );
      },
    };

  $id.innerHTML = `<ul>
    <li>User Agent: ${ua}</li>
    <li>Platform: ${isMovile.any() ? isMovile.any() : isDesktop.any()}</li>
    <li>Browser: ${isBrowser.any()}</li>
  </ul>`;

  //   exclusive content
  if (isBrowser.chrome()) {
    $id.innerHTML += `<p><mark>Exclusive content for chrome</mark></p>`;
  }

  // Redirect
  if (isMovile.android()) {
    window.location.href = "https://jonmircha.com";
  }
}
