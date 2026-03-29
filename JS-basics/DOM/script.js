const box = document.querySelector(".box");
box.textContent = "This is not a box";

//----Atributes---

// setAttribute
const img = document.querySelector(".img");
img.setAttribute(
  "src",
  "https://plus.unsplash.com/premium_photo-1773902044720-94d9f36e65c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
);

// GetAttribute
let imgsrc = img.getAttribute("src");
console.log(imgsrc);

// RemoveAttribute
let imgAlt = img.getAttribute("alt");
console.log(imgAlt);
img.removeAttribute("alt");

//----------create element

const mydiv = document.querySelector(".mydiv");

// append: div k end m aata h
let h1 = document.createElement("h1");
h1.textContent = "i am google";
mydiv.append(h1);

// prepend : div k start m aata h
let h2new = document.createElement("h2");
h2new.textContent = "i am facebook";
mydiv.prepend(h2new);

//------------style, class

h1.style.color = "red";
h1.style.fontFamily = "roboto";

const h4 = document.querySelector(".h4");
const h3 = document.querySelector(".h3");
const h2 = document.querySelector(".h2");
h4.classList.add("big");
h3.classList.remove("h3");
h2.classList.toggle("toggle");

//que----------

// select all <li> elements and orint text using a loop
let lis = document.querySelectorAll("li");
lis.forEach((val) => {
  console.log(val.innerText);
});
// or

for (let i = 0; i < lis.length; i++) {
  console.log(lis[i].textContent);
}

//-----------------------------
// note: use textContent over innertext beacuse textcontent is better version of innertext
//-------------------------------

// select a paragraph and replce its content with

// "<b> Updated </b> by javascript"

let p = document.querySelector("p");
p.innerHTML = "<b> Updated </b> by javascript";

let btn = document.querySelector(".btn");
btn.removeAttribute("disabled");
