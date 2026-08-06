let ans = "15";

if (ans >= 6) {
  console.log(ans, "is greter then 6");
} else {
  console.log(ans, "is not greter then 6");
}
//output:   console.log(ans, " is greter then 6");
// "15" act as a integer

//-------------------------------
let age = Number(prompt("what is your age"));

if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you can not vote");
}
//-------------------------------------------

let amt = 6000;
if (amt > 0 && amt <= 5000) {
  console.log(amt);
} else if (amt > 5000 && amt <= 7000) {
  console.log(Math.floor((5 * amt) / 100));
}
