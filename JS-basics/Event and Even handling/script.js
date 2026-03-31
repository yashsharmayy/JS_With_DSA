// handle a event

//onclick
let p = document.querySelector("p");
p.addEventListener("click", () => {
  p.style.color = "orangered";
});

// on double click
p.addEventListener("dblclick", () => {
  p.style.backgroundColor = "violet";
});

// some common eventlistener

// click , input , change , submit , mouseover , keyup

// click
let h1 = document.querySelector("h1");
h1.addEventListener("click", () => {
  h1.style.color = "green";
});

// input

let input = document.querySelector("input");
input.addEventListener("input", (evt) => {
  // console.log("Typing...");
  // console.log(evt);
  console.log(evt.data);
});

// change : change event used when there is change in input , select or textarea
let sel = document.querySelector("select");
let device = document.querySelector(".dets");
sel.addEventListener("change", (e) => {
  console.log(e.target.value);
  device.textContent = `${e.target.value} device is selected`;
});

// keydown: use window.addEventListener

let key = document.querySelector(".key");
window.addEventListener("keydown", (dets) => {
  if (dets.key === " ") {
    key.textContent = "space";
  } else {
    key.textContent = `${dets.key}`;
  }
  console.log(dets);
});

//---------------

const file = document.querySelector("#file");
const upload = document.querySelector(".upload");
upload.addEventListener("click", () => {
  file.click();
});
file.addEventListener("change", (dets) => {
  upload.textContent = `${dets.target.files[0].name}`;
});
