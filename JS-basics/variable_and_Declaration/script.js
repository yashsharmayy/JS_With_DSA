// ver let const
// declarations and initialization

var a = 12;
var a = 13;

// window main add hota h
// funtion scoped hota h
// we can declare it again with same name without error
// it is function scope : we can use it anywhere in a function

let b = 12;
b = 20; // we can further change value of let
const c = 12; // we cannot change the value of const

// reassigment and redeclaration

var d = 12;
d = 13;

let e = 15;
e = 55;

const f = 12;

// Temporal Dead Zone--> utna area jitna js ko pta h vo exist krta h pr access ni de skta like js ko pta h z kya h pr pehle log m ni de skta

// console.log(z);
// let z = 99; // give an error

// quetions

var x = 1;
{
  var x = 2;
}

console.log(x); // 2

let num = 22;
{
  let num = 20;
  console.log("Inside", num); // 20
}

console.log("Outside:", num); // 22
