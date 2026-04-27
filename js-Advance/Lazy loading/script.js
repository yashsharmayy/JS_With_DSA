let imgs = document.querySelectorAll("img");

let observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let img = entry.target;
        img.src = img.dataset.src;
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  },
  {
    root: null, // null = full screen : hume jidhr screen load krvani h
    threshold: 0.1, // 0.1 = 10% : 10% screen p img load ho jaygi
  },
);

imgs.forEach(function (img) {
  observer.observe(img);
});
