let form = document.querySelector("form");
let Name = document.querySelector("#Name");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameRegex = /^[A-Za-z]{3,}$/;

  if (Name.value.length <= 3 || !nameRegex.test(Name.value)) {
    document.querySelector("small").classList.add("visible");
    document.querySelector("small").classList.remove("hide");
  } else {
    document.querySelector("small").classList.add("hide");
    document.querySelector("small").classList.remove("visible");
  }
});
// mostly we use rejex for validation

// email passoword validator
