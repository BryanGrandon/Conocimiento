const d = document;

window.addEventListener("resize", (e) => {
  console.log(e);
});
window.addEventListener("scroll", (e) => {
  console.log(e);
});
window.addEventListener("load", (e) => {
  console.log(e);
});
window.addEventListener("DOMContentLoaded", (e) => {
  console.log(e);
});

const properties = {
  resize: {
    page: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
    window: {
      width: window.outerWidth,
      height: window.outerHeight,
    },
  },
  scroll: {
    x: window.scrollX,
    y: window.scrollY,
  },
  load: {
    x: window.screenX,
    y: window.screenY,
  },
  DOMContentLoaded: {
    x: window.screenX,
    y: window.screenY,
  },
};

console.log(properties);

// Methods

const $open = d.getElementById("open"),
  $closed = d.getElementById("closed"),
  $print = d.getElementById("print");

let variable;

$open.addEventListener("click", (e) => {
  variable = window.open("https://google.com");
});

$closed.addEventListener("click", (e) => {
  variable.close();
});

$print.addEventListener("click", (e) => {
  window.print();
});

// ----

const locationURL = {
  all: location,
  origin: location.origin,
  protocol: location.protocol,
  host: location.host,
  hostname: location.hostname,
  port: location.port,
  href: location.href,
  hash: location.hash,
  search: location.search,
  pathname: location.pathname,
};

const historyObj = {
  all: history,
  lenght: history.length,
};

const navigatorObj = {
  all: navigator,
  connection: navigator.connection,
  geolocation: navigator.geolocation,
  mediaDevices: navigator.mediaDevices,
  onLine: navigator.onLine,
  serviceWorker: navigator.serviceWorker,
  storage: navigator.storage,
  usb: navigator.usb,
  userAgent: navigator.userAgent,
};

console.log(locationURL, historyObj, navigatorObj);
