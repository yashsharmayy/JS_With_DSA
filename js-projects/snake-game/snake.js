let board = document.querySelector(".board");
let restart = document.querySelector(".restart");
let gameover = document.querySelector(".gameover");
const box_height = 50;
const box_width = 50;
const boxes = [];

let snake = [
  { x: 1, y: 5 },
  { x: 1, y: 4 },
  { x: 1, y: 3 },
];

let direction = "right";
let headDirection = 270;

let cols = Math.floor(board.clientWidth / box_width);
let rows = Math.floor(board.clientHeight / box_height);

let score = document.querySelector(".score");
let highscore = document.querySelector(".hscore");
let timer = document.querySelector(".timer");
let out = false;
let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols),
};

window.addEventListener("keydown", function (dets) {
  if ((dets.key === "w" || dets.key === "ArrowUp") && direction !== "bottom")
    direction = "top";
  headDirection = 180;

  if ((dets.key === "s" || dets.key === "ArrowDown") && direction !== "top")
    direction = "bottom";
  headDirection = 0;

  if ((dets.key === "d" || dets.key === "ArrowRight") && direction !== "left")
    direction = "right";
  headDirection = 90;

  if ((dets.key === "a" || dets.key === "ArrowLeft") && direction !== "right")
    direction = "left";
  headDirection = 90;
});

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const box = document.createElement("div");
    box.classList.add("box");
    board.appendChild(box);
    boxes[`${row}-${col}`] = box;
  }
}
function updatetimer() {
  let sec = 0;
  let min = 0;

  let interval = setInterval(() => {
    if (out) {
      clearInterval(interval);
    }
    sec++;
    if (sec >= 60) {
      sec = 0;
      min++;
    }

    let s = sec < 10 ? "0" + sec : sec;
    let m = min < 10 ? "0" + min : min;

    timer.textContent = `${m}:${s}`;
  }, 1000);
}
updatetimer();

let hcount = localStorage.getItem("highscore") || 0;
highscore.textContent = `${hcount}`;
function updatescore() {
  let count = snake.length - 3;
  score.textContent = `${count}`;
  if (count >= hcount) {
    hcount = count;
    highscore.textContent = `${hcount}`;
    localStorage.setItem("highscore", hcount);
  }
}

function snakebody() {
  snake.forEach((snakebox) => {
    let box = boxes[`${snakebox.x}-${snakebox.y}`];
    box.classList.remove("snakebody", "snakehead");
  });
  snake.forEach((snakebox, idx) => {
    let box = boxes[`${snakebox.x}-${snakebox.y}`];
    if (idx === 0) {
      box.classList.add("snakehead");
      box.style.rotate = `${headDirection}`;
    } else {
      box.classList.add("snakebody");
    }
  });
}

function snakefood(head) {
  if (head.x == food.x && head.y == food.y) {
    boxes[`${food.x}-${food.y}`].classList.remove("food");

    function getfood() {
      let newfood = {
        x: Math.floor(Math.random() * rows),
        y: Math.floor(Math.random() * cols),
      };

      let onsnake = snake.some(
        (segment) => segment.x === newfood.x && segment.y === newfood.y,
      );

      return onsnake ? getfood() : newfood;
    }
    food = getfood();
    boxes[`${food.x}-${food.y}`].classList.add("food");
    return true;
  }
  return false;
}
function snakebodytouch(head) {
  let body = snake.slice(1);

  let hit = body.some(
    (segment) => segment.x === head.x && segment.y === head.y,
  );

  if (hit) {
    out = true;
    gameover.style.opacity = 1;
    clearInterval(interval);
  }
}

function snakemove() {
  let head;
  if (direction == "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  }
  if (direction == "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  }
  if (direction == "top") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  }
  if (direction == "bottom") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  }
  if (head.x < 0 || head.y < 0 || head.x >= rows || head.y >= cols) {
    gameover.style.opacity = 1;
    out = true;

    clearInterval(interval);
    return;
  }

  snake.forEach((snakebox) => {
    boxes[`${snakebox.x}-${snakebox.y}`].classList.remove("snakebody");
  });
  let ate = snakefood(head);
  snake.unshift(head);
  snakebodytouch(head);

  if (!ate) {
    snake.pop();
  }

  snakebody();
}

let interval = setInterval(() => {
  boxes[`${food.x}-${food.y}`].classList.add("food");

  try {
    snakemove();
    updatescore();
  } catch (error) {
    out = true;
    gameover.style.opacity = 1;
    clearInterval(interval);
  }
}, 400);

// retart
restart.addEventListener("click", () => {
  location.reload();
});
