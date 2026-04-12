const form = document.querySelector("form");
const nameInput = document.querySelector('input[placeholder="Name"]');
const dateInput = document.querySelector(".date");
const purposeInput = document.querySelector('input[placeholder="Purpose"]');
const fileInput = document.querySelector("#fileInput");
const uploadBtn = document.querySelector(".upload");
const notif = document.getElementById("notification");
const callbtn = document.querySelector(".call-btn");
const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");

const emergencySec = document.querySelector(".emergencySec");
const urgentSec = document.querySelector(".urgentsec");
const importantSec = document.querySelector(".importantsec");
const noRushSec = document.querySelector(".norushsec");

// ✅ FORM SUBMIT
form.addEventListener("submit", (e) => {
  e.preventDefault();
  cardappend();
  alertShow("✅ Task Created Successfully");
  sechchange();
  form.reset();
  uploadBtn.textContent = "Upload img";
});

// ✅ NOTIFICATION
function alertShow(msg) {
  notif.textContent = msg;
  notif.style.opacity = 1;
  notif.style.right = "5%";

  setTimeout(() => {
    notif.style.opacity = 0;
    notif.style.right = "-55%";
  }, 2000);
}

// ✅ TOGGLE BUTTON
callbtn.addEventListener("click", sechchange);

function sechchange() {
  section1.classList.toggle("active");
  section2.classList.toggle("active");

  if (section1.classList.contains("active")) {
    callbtn.textContent = "📞 Call Form";
  } else {
    callbtn.textContent = "📋 View Reminders";
  }
}

// ✅ ADD CARD + STORE
function cardappend() {
  const category = document.querySelector('input[name="category"]:checked');

  if (!category) {
    alertShow("⚠️ Select category!");
    return;
  }

  const file = fileInput.files[0];

  const imgURL = file
    ? URL.createObjectURL(file)
    : "https://via.placeholder.com/300";

  const data = {
    id: Date.now(), // 🔥 unique id
    name: nameInput.value,
    img: imgURL,
    purpose: purposeInput.value,
    date: dateInput.value,
    category: category.value,
  };

  // ✅ get old data
  let allData = JSON.parse(localStorage.getItem("cards")) || [];

  // 🛡️ safety check
  if (!Array.isArray(allData)) {
    allData = [];
  }

  // ✅ push new
  allData.push(data);

  // ✅ save
  localStorage.setItem("cards", JSON.stringify(allData));

  // ✅ show UI
  createCard(data);
}

// ✅ CREATE CARD UI
function createCard(data) {
  let newcard = document.createElement("div");
  newcard.classList.add("card");
  newcard.setAttribute("data-id", data.id);

  newcard.innerHTML = `
    <img src="${data.img}" alt="img" />

    <div class="card-content">
      <span class="tag ${data.category}">${data.category}</span>
      <h3>📞 ${data.name}</h3>
      <p>${data.purpose}</p>
      <p class="time">⏰ ${data.date}</p>
      <button class="btn createNote done">Done</button>
    </div>
  `;

  if (data.category === "emergency") {
    emergencySec.appendChild(newcard);
  } else if (data.category === "urgent") {
    urgentSec.appendChild(newcard);
  } else if (data.category === "important") {
    importantSec.appendChild(newcard);
  } else {
    noRushSec.appendChild(newcard);
  }
}

// ✅ LOAD DATA ON REFRESH
window.addEventListener("DOMContentLoaded", () => {
  let allData = JSON.parse(localStorage.getItem("cards")) || [];

  if (!Array.isArray(allData)) return;

  allData.forEach((item) => {
    createCard(item);
  });
});

// ✅ DELETE (UI + localStorage)
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("done")) {
    const card = e.target.closest(".card");
    const id = Number(card.getAttribute("data-id"));

    // remove from UI
    card.remove();

    // remove from localStorage
    let allData = JSON.parse(localStorage.getItem("cards")) || [];

    allData = allData.filter((item) => item.id !== id);

    localStorage.setItem("cards", JSON.stringify(allData));
  }
});
