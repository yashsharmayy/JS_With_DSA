let ans = "15";

if (ans >= 6) {
  console.log(ans, "is greter then 6");
} else {
  console.log(ans, "is not greter then 6");
}
//output:   console.log(ans, " is greter then 6");
// "15" act as a integer

//-------------------------------
// let age = Number(prompt("what is your age"));
let age = 6;
if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you can not vote");
}
//-------------------------------------------

let amt = 10000; //(long method)
//(dis * amt) / 100 -> discount amount
//amt - ((dis * amt) / 100 )-> payable amount
if (amt > 0 && amt <= 5000) {
  console.log(amt);
} else if (amt > 5000 && amt <= 7000) {
  console.log(Math.floor(amt - (5 * amt) / 100));
} else if (amt > 7000 && amt <= 9000) {
  console.log(Math.floor(amt - (10 * amt) / 100));
} else if (amt > 9000) {
  console.log(Math.floor(amt - (20 * amt) / 100));
} else {
  console.log("Wrong input");
}
// short method

let dis = 0;
if (amt > 0 && amt <= 5000) {
  dis = 0;
} else if (amt > 5000 && amt <= 7000) {
  dis = 5;
} else if (amt > 7000 && amt <= 9000) {
  dis = 10;
} else if (amt > 9000) {
  dis = 20;
} else {
  console.log("Wrong input");
}
console.log(Math.floor(amt - (dis * amt) / 100));

// bijli bijli

let unit = 500;

let sum = 0;

if (unit > 400) {
  sum += (unit - 400) * 13;
  unit = 400;
}
if (unit <= 400 && unit > 200) {
  sum += (unit - 200) * 8;
  unit = 200;
}
if (unit <= 200 && unit > 100) {
  sum += (unit - 100) * 6;
  unit = 100;
}
// if (unit <= 100) {
//   sum += unit * 4;
// }
sum += unit * 4;
console.log(sum);

// NIR currency

let money = 4328;

if (money >= 500) {
  console.log("500 notes =", Math.floor(money / 500));
  money %= 500;
}

if (money >= 200) {
  console.log("200 notes =", Math.floor(money / 200));
  money %= 200;
}

if (money >= 100) {
  console.log("100 notes =", Math.floor(money / 100));
  money %= 100;
}

if (money >= 50) {
  console.log("50 notes =", Math.floor(money / 50));
  money %= 50;
}

if (money >= 20) {
  console.log("20 notes =", Math.floor(money / 20));
  money %= 20;
}

if (money >= 10) {
  console.log("10 notes =", Math.floor(money / 10));
  money %= 10;
}

if (money >= 5) {
  console.log("5 coins =", Math.floor(money / 5));
  money %= 5;
}

if (money >= 2) {
  console.log("2 coins =", Math.floor(money / 2));
  money %= 2;
}

if (money >= 1) {
  console.log("1 coins =", money);
}
//------------
