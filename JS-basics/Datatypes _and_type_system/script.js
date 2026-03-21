// primitives data type --> inko copy krne pr ek real copy milegi
// EX- (string, number , bolean , null , undefined , symbol)

// refernece datatype--> inko copy krne pr copy ni milegi or refernce milega parent ka
// Ex - (arrays-[],objects-{},functions-())

let a = 12;
let b = a; //primitive

a = a + 2;

console.log(a); // 14
console.log(b); // 12 // b ki value same 12 hi rhi kyuki vo saparte copy h

let c = [1, 2, 3];
let d = c; //reference
d.pop(); // remove 1 value from d

console.log(c); // removing 1 value from d also remove 1 value from c because  d having same value of c  mtlb d ki bhi value c ki hi h d ne udhar li h

// symbol -> unique immutable value
let u1 = Symbol("id");
let u2 = Symbol("id");

console.log(u1 === u2); // false

//-------type coercion (== vs ===)----

"5" + 1; // '51'
"5" - 1; //  4

1 == "1"; // true
1 === "1"; // false

//---------truthy vs falsy values ------

// falsy -> 0 false "" null fundifined NaN document.all
// true -> all other then falsy

// to check any value use !!_
//  eg !!0->false !!""-> false

// -----------Practice----------

console.log(true + false); // 1
console.log(null + 1); // 1
console.log(5 + "5"); // 55
console.log(!!undefined);
false;

let x;
console.log(x); // undefined

let y = null;
console.log(y); // null

// agr koi variable assign h to undefined aaya or uski value null di h to null
