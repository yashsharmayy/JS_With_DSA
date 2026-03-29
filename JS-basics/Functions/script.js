// function

function Name() {
  console.log("hlo ji");
}
Name();

// or

let Namee = () => {
  console.log("Helo hi ");
};
Namee();

// parameters(temp value ) and arguments(real value)

function dance(animal) {
  // animal is parameters
  console.log(`${animal} naach rha h `);
  console.log(animal, " fir nach rha h ");
}

dance("Sher"); // sher , bhalu etc are arguments
dance("Bhalu");

function Sum(a, b) {
  console.log(a * b);
  console.log(a / b);
}
Sum(11, 8);
Sum(5, 10);

function msg() {
  alert("Form submitted");
}

// default para

function multi(a = 4, b = 2) {
  console.log(a * b);
}
multi();
multi(2);
multi(5, 9);

// --------------------
// jab arguments kai saare ho to humine utne hi parameter bnanaane pdege, issey bachne k liye , hum rest(or spread) ka use krte hai  "..." agr ... function k parameter space m lge to vo rest operator h

function abcd(...val) {
  console.log(val);
}
abcd(1, 2, 3, 4, 5, 6);

//-----------

function returnval(a) {
  return a ** 2;
}

let val = returnval(8);
console.log(val);

//------first class functions fncs-----------

function parent(val) {
  val();
}

parent(() => {
  console.log("child");
});

//---HOF(higher order function)-------

// hof vo function hota h jo ki return kare function ya fir acceept kre ek func apne parameter m

function xyz() {
  return function () {
    console.log("nested function");
  };
}
xyz()(); // nested function

//----------------

// pure vs impure functions

// pure-> function jo bhar ki value ko na badle
// immpure -> function jo bhar ki value ko bdl de

let a = 12;
// pure
function nochange() {
  console.log("no change pure");
}
// impure
function change() {
  // this func change value ouside the function
  a++;
}

// closures-> ek function j return kre ek or function aor return hone vala function hemsha use krega parent func ka koi variable

function abc() {
  let a = 12;
  return function () {
    console.log(a);
  };
}
abc()();

// iffe:(immediately invoke function expretions  )
(function () {
  console.log("hi");
})();

// hoisting

print();

function print() {
  console.log("hellow");
}

//que: whats the diffrence betwen function declaration and expression in terms of hoisting

greet();

function greet() {
  console.log("hello");
}

//que: convert this into arrow function

function multiplay(a, b) {
  return a * b;
}

const multiple = (a, b) => {
  return a * b;
};
console.log(multiple(5, 9));

// how many parameters and arguments

function demo(a, b, c) {}
demo(1, 2);
// 3 parameters
// 2 arguments

//que: what does the ... operator mean in parameters?

function abcde(a, b, c, ...val) {
  console.log(a, b, c, val);
}
abcde(1, 2, 3, 4, 5, 6, 7);
//output: 1 2 3 [4,5,6,7]

// use rest parameter to accept any numbers of scroes and return the total

function getscore(...score) {
  let total = 0;
  score.forEach((val) => {
    total += val;
  });
  return total;
}

console.log(getscore(1, 2, 6, 8, 9));

// short method to write

function checkage(age) {
  if (age < 18) {
    console.log("to Young");
  } else {
    console.log("Allowed");
  }
}

function agecheck(age) {
  if (age < 18) return "too Young";
  return "Allowed";
}
checkage(55);
console.log(agecheck(55));

// que:
function f() {
  return;
}

console.log(f()); // undefined

// pass a function into another function and execute it inside

function fun(val) {
  val();
}
fun(function () {
  console.log("working");
});

// wirte a BMI calculator

function BMI(weight, hight) {
  return weight / (hight * hight);
}

console.log(BMI(57, 1.57).toFixed(2));

// reuseable discount

function discountcalculator(dis, price) {
  let val = (dis * price) / 100;
  return price - val;
}
console.log(discountcalculator(5, 1000));

// reuseable discount (HOF)

function discount(dis) {
  return function (price) {
    return price - price * (dis / 100);
  };
}
let discounter = discount(10);
console.log(discounter(200));

//example of hof

function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

let c = counter();
console.log(c()); //1
console.log(c()); //2
console.log(c()); //3
console.log(c()); //4

let d = counter();
console.log(d()); //1
console.log(d()); //2
console.log(d()); //3
