const form = document.querySelector("form");

form.addEventListener("submit", (dets) => {
  dets.preventDefault();

  let inputs = document.querySelectorAll("input");
  let info = document.querySelector("textarea");

  let card = document.createElement("div");
  card.classList.add("card");

  let profile = document.createElement("div");
  profile.classList.add("profile");

  let profileimg = document.createElement("img");
  profileimg.classList.add("profileimg");

  let file = pfimg.files[0];
  console.log(pfimg.files);

  if (file) {
    profileimg.src = URL.createObjectURL(file);
  } else {
    profileimg.src =
      "https://images.unsplash.com/photo-1774331510646-a1781c4a9713";
  }

  let h2 = document.createElement("h2");
  h2.textContent = inputs[0].value;
  let h3 = document.createElement("h3");
  h3.textContent = inputs[1].value;
  let p = document.createElement("p");
  p.textContent = info.value;

  document.body.appendChild(card);

  profile.appendChild(profileimg);
  card.appendChild(profile);
  card.appendChild(h2);
  card.appendChild(h3);
  card.appendChild(p);
});

let pfimg = document.querySelector("#pfimg");
let upbtn = document.querySelector(".upbtn");
upbtn.addEventListener("click", (e) => {
  e.preventDefault();
  pfimg.click();
});
pfimg.addEventListener("change", (dets) => {
  upbtn.textContent = `${dets.target.files[0].name}`;
});
