let input = document.querySelector("input");
let add = document.querySelector(".add");
let ul = document.querySelector(".todo-list");

let task = JSON.parse(localStorage.getItem("task")) || [];

render();
add.addEventListener("click", () => {
  if (input.value === "") return;
  task.push(input.value);
  localStorage.setItem("task", JSON.stringify(task));

  console.log(task);
  render();

  input.value = "";
});

function render() {
  ul.innerHTML = "";
  task.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
        <span>${task}</span>
        <div  class="actions">
          <button class="complete" onclick="completeTask(this)">✔</button>
          <button class="remove" onclick="deleteTask(this,${index})">✖</button>
        </div>
      `;
    ul.appendChild(li);
  });
}

function completeTask(btn) {
  btn.parentElement.parentElement.classList.toggle("completed");
}

// Delete
function deleteTask(index) {
  task.splice(index, 1);
  localStorage.setItem("task", JSON.stringify(task)); // ✅ update storage
  render();
}
