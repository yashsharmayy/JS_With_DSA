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
}

dance("Sher"); // sher , bhalu etc are arguments
dance("Bhalu");

function Sum(a, b) {
  console.log(a * b);
}
Sum(11, 8);

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
