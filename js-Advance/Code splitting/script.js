let btn = document.querySelector("button");
btn.addEventListener("click", async function () {
  let heavy = await import("./script2.js");
  heavy.heavydata();
});
