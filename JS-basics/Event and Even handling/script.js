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

//---------mouseover,out-----------

let box = document.querySelector(".box");
box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "pink";
});
box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "#86f0d2";
});

// -------Event bubbling----
// child p eventlistner na ho to parent p check krta h uspe hota h to run kr jata h
// or baar baar child p eventlistner lgne ki jegh parent p lagate h

// child ka event chloa to parent ka bhi chlelga
let ul = document.querySelector(".fruits");
ul.addEventListener("click", (dets) => {
  dets.target.classList.toggle("lt");
});
