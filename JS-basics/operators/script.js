// Arithmetic ,assignment, comparison , logical , assigment , unary , ternary

// +  -  *  /  %  ** --> arethemetic

// = += -= *= /= %= -->

// == === < > <=  >=  ! != !== !! --> comparison

// && || --> logical

// ?: --> ternary (if else short trick)

let a = 12; // "=" -> value assign
12 == 13; // false
12 == "12"; // true ("==" its not check type properly )
12 === "12"; // false ("===" also check type with value )

12 > 13 ? console.log(true) : console.log(false); //false  // ternary operator

//----------prac-----
let c = 2;
c++; // later increase
++c; // before increase

// when x++ or x-- then the in that line the value of x still same but in next line it will change

let i = 1;
console.log(++i); // 2
console.log(i++); // 2 (but i is now 3)

let x = 3;
let y = x++;
console.log(x, y);
// 4 3
let z = ++x;
console.log(x, y, z);
// 5 3 5

// ----------

let m = 10;
console.log(m--); // 10
console.log(m); //9

//----------

let n = 5;
let result = n++ + ++n; //“First, n++ uses the value 5 and then increases it to 6. After that, ++n increases it to 7. So the result is 5 + 7 = 12.”
console.log(result); // 12

let likes = 100;

function likePost() {
  return ++likes;
}
console.log(likePost()); //101
console.log(likes); //101

// -------
(""); //false
!""; // true
!!""; // false

0; // false
!0; //true
!!0; // false
