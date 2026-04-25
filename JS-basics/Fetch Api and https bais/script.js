fetch("https://dummyjson.com/users")
  .then((response) => response.json())
  .then((data) => {
    data.users.forEach((el) => {
      const card = document.createElement("div");
      card.className = "card w-52 p-4 rounded-xl border bg-pink-200 shadow-md";
      card.innerHTML = `   <div class="logo w-16 h-16 rounded-full overflow-hidden mx-auto">
          <img
            src=${el.image}
            alt="user"
            class="w-full h-full object-cover"
          />
        </div>

       
        <div class="text-center mt-3">
          <h2 class="text-lg font-bold">${el.firstName}</h2>
          <p class="text-sm text-gray-700">Age: ${el.age}</p>
        </div>`;
      let cards = document.querySelector(".cards");
      cards.appendChild(card);
    });
  });

// basic project
