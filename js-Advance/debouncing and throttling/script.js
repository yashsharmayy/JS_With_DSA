// debunce: ek delay btaoge tum utha delay jb bhi aayga to action ka reaction milega

function Debounce(func, delay) {
  let timer;
  return function (dets) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(dets);
    }, delay);
  };
}

let inp1 = document.querySelector(".input1");

inp1.addEventListener(
  "input",
  Debounce(function (dets) {
    if (dets.data == null) {
      dets.data = " ";
    } else {
      console.log(dets.target.value);
    }
  }, 1000),
);

// throttle:

function throttle(func, delay) {
  let timer = 0;
  return function (dets) {
    let now = Date.now();
    if (now - timer >= delay) {
      timer = now;
      func(dets);
    }
  };
}

let inp2 = document.querySelector(".input2");

inp2.addEventListener(
  "input",
  throttle(function (dets) {
    if (dets.data == null) {
      dets.data = " ";
    } else {
      console.log("run");
    }
  }, 1000),
);
