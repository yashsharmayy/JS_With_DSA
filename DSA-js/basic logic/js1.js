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
