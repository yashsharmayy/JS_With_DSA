// scope - functional scope , global scope and bloack scope

// function scope - we can only use it in function
// global scope - we can use it in whole code
// bloack scope - we can use it in {} curly braces

function sum() {
  var a = 12;
}
// console.log(a); // error

//---------------------

// execution context
// js sabse pehle jaise hi apka function dekhta h sbse pahle js banaata hai execution context , ye ek process hai jo ki do diffrent phases main chlta h  , memory phase and execution phase

// closures ->

// function k andr function return ho rha ho or use returned function ki value parent function m use ho rhi ho

function abcd() {
  let a = 12;
  return function () {
    console.log(a);
  };
}
