function createtoster(config) {
  return function (str) {
    let div = document.createElement("div");
    div.textContent = str;
    div.classList.add("noti");

    document.querySelector(".notification").appendChild(div);

    setTimeout(() => {
      document.querySelector(".notification").removeChild(div);
    }, config * 1000);
  };
}
let toster = createtoster(3);
toster("Request accepted ");
setTimeout(() => {
  toster("you are friend now  ");
}, 2000);
