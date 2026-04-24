// this

const user = {
  name: "Yash",
  greet: function () {
    console.log(this.name);
  },
};

user.greet(); // name

// call apply bind
// function ko call karte wakt aap set kr skte ho ki uski this ki value kya hogi

// call
let obj = {
  name: "yash sharma",
};
function abcd() {
  console.log(this);
}
abcd.call(obj);

// apply -> sirf 2 parameter hi pass kr skte h 1: jise "this" bnana h dusra jo parameter h
// note: agr 1 se jayda para pass krne h to baki parameters ko array m daal do
let obj2 = {
  name: "yash sharma",
};
function defg(a, b, c) {
  console.log(this, a, b, c);
}
defg.apply(obj, [1, 2, 3]);

// bind : code messy ho jata h to ye pure function ki copy bnake new function bna deta h

let obj3 = {
  name: "yash sharma",
};
function hijk(a, b, c) {
  console.log(this, a, b, c);
}
let fun = hijk.bind(obj, 1, 2, 3);
fun();
