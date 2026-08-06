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
