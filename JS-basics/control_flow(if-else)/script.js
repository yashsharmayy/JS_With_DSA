// if else else-if
// switch case
// early return pattern

let loggdin;

if (loggdin && admin) {
  console.log("admin");
} else if (loggdin) {
  console.log("User");
} else {
  console.log("please login first");
}

//------------------------------

switch (3) {
  case 1:
    console.log("hello case 1");

    break;
  case 2:
    console.log("hello case 2");

    break;
  case 3:
    console.log("hello case 3");

    break;

  default:
    break;
}

// que: write a fuction getGrade(score) that:
// . takes a student's marks (0 to 100)
// . Returen the grade based on the logic:

// 90-100 A+
// 80-89 A
// 70-79 B
// 60-69 C
// 33-59 D
// 0-32 fail
// anything else Invalid marks

function getGrade(marks) {
  if (marks < 33) {
    console.log("Fail");
  } else if (marks < 60) {
    console.log("D");
  } else if (marks < 70) {
    console.log("C");
  } else if (marks < 80) {
    console.log("B");
  } else if (marks < 90) {
    console.log("A");
  } else if (marks <= 100) {
    console.log("+A");
  } else {
    console.log("Invalid no");
  }
}

function ternaryGrade(marks) {
  marks < 33
    ? console.log("fail")
    : marks < 60
      ? console.log("D")
      : marks < 70
        ? console.log("C")
        : marks < 80
          ? console.log("B")
          : marks < 90
            ? console.log("A")
            : marks <= 100
              ? console.log("+A")
              : console.log("Invalid no ");
}

ternaryGrade(22);
getGrade(22);

// ---------------rock paper scissor-----

// make a rock paper scissor function

let user = "rock";
let computer = "scissor";

function rps(user, computer) {
  if (user === computer) {
    console.log("draw");
  } else if (user == "rock" && computer == "paper") {
    console.log("computer Win");
  } else if (user == "paper" && computer == "scissor") {
    console.log("computer Win");
  } else if (user == "scissor" && computer == "rock") {
    console.log("computer Win");
  } else {
    console.log("User win");
  }
}
rps(user, computer);

// ----------
let x = 2;
switch (x) {
  case 2:
    console.log("TWO");
  case 3:
    console.log("Three");
}
// output: two , three (bug if break is missing)
