// settimeout: run only 1 time
let timeout = setTimeout(() => {
  console.log("settimeout");
}, 3000);

// setinverval: run again and again after a specific interval of time

let interval = setInterval(() => {
  console.log("setinverval");
}, 5000);

//clear
clearTimeout(timeout);
clearInterval(interval);

// ----------------
let count = 10;
function counter() {
  let counter = setInterval(() => {
    if (count >= 0) {
      console.log(count);
      --count;
    } else {
      done();
      clearInterval(counter);
    }
  }, 1000);
}
counter();
function done() {
  console.log("done");
}

// Auto hide banner...---------
let alertbanner = document.querySelector(".alertbanner");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let countt = 5;
  let innterval = setInterval(() => {
    if (countt >= 0) {
      btn.textContent = countt;
      countt--;
    } else {
      alerter();
      clearInterval(innterval);
    }
  }, 1000);
});

function alerter() {
  alertbanner.style.top = "10%";
  alertbanner.style.opacity = 1;
  setTimeout(() => {
    alertbanner.style.top = "-100%";
    alertbanner.style.opacity = 0;
  }, 3000);
}
