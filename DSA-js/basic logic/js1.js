let a = 5;
let b = 6;
console.log(a + b); //11

//-----------

let c = 12;
let d = "13";
console.log(c + d); //1213  //--concatenation--//
console.log(typeof (c + d)); // string

// -------

let e = 10;
let f = 20;

console.log("sum of 10 and 20 is " + e + f); //sum of 10 and 20 is 1020
// 1 +2 +3 = (1+2)+3 = 3+3 = 6 js is terh se work krta h
// ("sum of 10 and 20 " + e )+ f islye yehap p concatisnation ho rha h

console.log("sum of 10 and 20 is" + (e + f)); //sum of 10 and 20 is 30

//---------------
console.log("5" + 5); // 55
console.log("5" - 5); // 0
console.log("5" * 5); // 25
console.log("5" / 5); // 1

//------------
//type casting or type conversion
console.log(Number(12)); // 12 num
console.log(Number("12")); // 12 num
console.log(Number("sharma")); // NaN

//-------------
//swapping
//Method 1
let a1 = 10;
let b1 = 20;
let c1;

c1 = a1; // copy to c=10
a1 = b1; // a=20 , b=20
b1 = c1; // b = 10 , a = 20
console.log(a1, b1);

//method 2

let a2 = 10;
let b2 = 20;

a2 = a2 + b2; // 10 + 20 = 30
b2 = a2 - b2; // 30-20 = 10
a2 = a2 - b2; // 30-10 = 20

console.log(a2, b2);

// method 3
let a3 = 10;
let b3 = 20;

[a3, b3] = [b3, a3];
console.log(a3, b3);

//
let g = 12;
let h = 5;

console.log(g / h); // 2.4 -- qutioant
console.log(g % h); // 2 -- reminder
console.log(Math.floor(g / h)); // 2 -- integer

console.log(h % g); // 5 -- because divident is smaller then divisor
// 5<12

//------------------------
let I = 4563;
console.log(I % 10); // 3
console.log(I % 100); // 63
console.log(I % 1000); // 563
console.log(I % 10000); // 4563

console.log(I / 10); // 456.3
console.log(Math.floor(I / 10)); // 456
console.log(Math.floor(I / 100)); // 45
console.log(Math.floor(I / 1000)); // 4

//-------------------

// == vs ===
// == -> check the value only
// === -> check the value and datatype

console.log(13 == "13"); // true;
console.log(13 === "13"); // false;

// (&&) (|| )

console.log(10 > 5 && 15 > 6); // true
console.log(10 > 5 && 15 < 6); // false

console.log(10 > 5 || 15 > 6); // true
console.log(10 > 5 || 15 < 6); // true

//-----------------------------
// ++ -> increment
// --  -> decrement
// post increment = a++
// pre increment = ++a

// que----
let i = 11;
i = i++ + ++i;
console.log(i); //24

// que---
let j = 11; //-> 12 - > 13
let k = 22; //-> 23 ->24
let l = j + k + j++ + k++ + ++j + ++k;
// l = 11 + 22 + 11 + 22  + 13 +24
console.log("j=", j);
console.log("k=", k);
console.log("l=", l);

//que---------

let M = true; // true = 1
let N = false; // false = 0
++M;
++N;
console.log(M); // 2
console.log(N); // 1

// que-----
let m = 11;
m++; // valid
//let n = 12++ // invalid (error)-> you cannot use increment with constant

// que-------
let o = 10;
// let p = ++(a++) // = ++10
// error

//-----------------------------------

//Math.round() descrese 5<  ,increse 5>=

console.log(Math.round(10.3)); //10
console.log(Math.round(10.6)); //11
console.log(Math.round(10.5)); //11

console.log(Math.trunc(18.554)); //18 // remove the decimal values

// diffrence between floor and trunc
console.log(Math.floor(5.8)); // 5
console.log(Math.trunc(5.8)); // 5

console.log(Math.floor(-5.8)); // -6
console.log(Math.trunc(-5.8)); // -5

// -----------

console.log(Math.pow(2, 5)); // 2^5=32
console.log(Math.sqrt(16)); // 4
console.log(Math.cbrt(27)); // 3

console.log(Math.abs(-5)); //5  //negative to positive only

console.log(Math.max(5, 7, 8, 9, 3, 1)); //9
console.log(Math.min(5, 7, 8, 9, 3, 1)); //1

console.log(Math.random()); //  0 -- 1
console.log(Math.random() * 9000); //  0 -- 999
console.log(Math.random() * 9000 + 1000); //  1000 -- 9999
//otp
console.log(Math.floor(Math.random() * 9000 + 1000)); //  1000 -- 9999

const q = 872.2356;
console.log(q.toFixed(2)); // 872.23

// herons formula
let x = 5;
let y = 6;
let z = 9;

let s = (x + y + z) / 2;
console.log(s);
let herons = Math.sqrt(s * (s - x) * (s - y) * (s - z));
console.log(herons);

// area of circle
let R = 12;
let area = 2 * Math.PI * R;
console.log(Math.floor(area));
