const users = [
  {
    name: "Yash Sharma",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Rahul Verma",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Ankit Singh",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Priya Gupta",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Neha Sharma",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "Amit Kumar",
    img: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    name: "Rohit Mehta",
    img: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Sneha Kapoor",
    img: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    name: "Vikas Yadav",
    img: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Pooja Sharma",
    img: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    name: "Arjun Patel",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Karan Malhotra",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Simran Kaur",
    img: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    name: "Deepak Joshi",
    img: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    name: "Nisha Arora",
    img: "https://randomuser.me/api/portraits/women/15.jpg",
  },
];

const input = document.querySelector(".search-box input");
const cards = document.querySelector(".cards");
const Name = document.querySelector(".card h3");
const img = document.querySelector(".card img");

function showusers(array) {
  array.forEach((item) => {
    let card = document.createElement("div");

    card.innerHTML = `
      <div class="card">
        <img src="${item.img}" />
        <h3>${item.name}</h3>
      </div>
    `;
    cards.appendChild(card);
  });
}
showusers(users);

input.addEventListener("input", () => {
  let val = input.value.toLowerCase();
  let newarray = users.filter((usr) => {
    return usr.name.toLowerCase().startsWith(val);
  });
  cards.innerHTML = "";
  showusers(newarray);
});
