let marks = [10, 28, 94, 75, 64];

console.log(marks[2]); //94

marks[3] = 99;
console.log(marks[3]);

//---------- array methods-----

let arr = [1, 2, 3, 4, 5];

//push:Add a value
arr.push(700);
console.log(arr);

//pop:remove a value from last

arr.pop();
console.log(arr);

//shift:remove a value from start

arr.shift();
console.log(arr);

// unshift : add a value in starting of the code
arr.unshift(0);
console.log(arr);

// splice : remove value from middle of array

arr.splice(2, 1); // second place se 1 value htani h
console.log(arr);

// ** we can also add values at any index using splice

arr.splice(1, 0, 85, 99);
//--------(index=1) (value delete = 0) (value add = 85,99)

// slice : slice and splice are almost same but slice make a copy and we can change the copy it doesnt affect real one

// it add value from index n to m in newarr

let newarr = arr.slice(0, 3);

console.log(newarr); // newarr: [0,2,4]

// arr = [0,2,4,5]

// reverse: revrese the array

arr.reverse();

console.log(arr); //[5,4,2,0]

// sort : it arrange array in ascending or descending order, its syntax is bit diffrent form others it use a function

// a-b = ascending , b-a = descending

let arr2 = [85, 5, 6, 47, 2, 0];
// ascending

let asec = arr2.sort((a, b) => {
  return a - b;
});

console.log(asec);
// descending

let desc = arr2.sort((a, b) => {
  return b - a;
});

console.log(desc);

// ---------------imp---------
// foreach

//let arr2 = [85, 5, 6, 47, 2, 0];// use this already made above

arr2.forEach((val) => {
  console.log(val);
  console.log(val + 5);
});

// map

//map tb use krna h jb apko ek new array bnana h picchle array ke data k basis p

// map dikhte hi apne mn m ek blank array ban lo

let newarr2 = arr2.map((val) => {
  return val * 12;
});
console.log(newarr2);

// newarr2 = [1020, 564, 72, 60, 24, 0]

// filter:only those value who fulfill the condition will store in new array

// when return true save in newarray otherwise wont
let newarr3 = arr2.filter((val) => {
  if (val > 20) return true;
});
console.log(newarr3);

// reducer : pure array p opration krke ek value mile

//  prevVal = accumulator = privious value
// zero(0) is initial value of prevVal

let sum = arr2.reduce((prevVal, val) => {
  return prevVal + val;
}, 0);

console.log(sum);

// find:condition p values dhundhni h

let users = [
  { id: 1, name: "Yash" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Aman" },
];

let user = users.find((user) => {
  return user.id === 2;
});
console.log(user);

//some : it find value according to condition and return true or false

let some = arr2.some((val) => {
  return val > 60;
});
console.log(some); //true

// every : if all element fullfil the condtion only then return true otherwise false

let eve = arr2.every((val) => {
  return val > 5;
});
console.log(eve); // false

/// destructuring and spread operator

// destructuring
let arrr = [1, 2, 3, 4];
let [a, b, , c] = arrr;
//a = 1, b= 2 , c = 4
console.log(a, b, c);

// spread operator

let arrr2 = [...arrr];

console.log(arrr2);

// quetions--------------------------------------

// que1 create an array with 3 fruits and print the second fruit

const fruit = ["grapes", "apple", "banana"];
console.log(fruit[1]);

// add "mango" at the end and "pineapple at the beginning of this array

fruit.push("Mango");

fruit.unshift("Pineapple");
console.log(fruit);

// replace "banana" with "kiwi" in the array above

fruit.pop();
fruit.push("kiwi");

console.log(fruit);

// insert "Red" and "Blue" at index 1 in this array:

let colours = ["Green", "Yellow"];
colours.splice(1, 0, "Red", "Blue");
console.log(colours);

// extract only the middle 3 elements from this array

let items = [1, 2, 3, 4, 5, 6];

let newitems = items.slice(1, 4);
console.log(newitems);

// sort this array alphabetically and then reverse it

let names = ["zara", "arjun", "mira", "bhavya"];
let sort = names.sort((a, b) => {
  return a - b;
});
// names.sort();

// console.log(names);
// let rev = names.reverse();
// console.log(rev);

// or
names.sort().reverse();
console.log(names);

// use .map() to square each number

let sq = [1, 2, 3, 4];
let newsq = sq.map((val) => {
  return val ** 2;
});

console.log(newsq);

// use .filter() to keep numbers greater than 10

let greate10 = [5, 12, 8, 20, 3];

let newgreat10 = greate10.filter((val) => {
  return val > 10;
});

console.log(newgreat10);

// use .reduce() to find the sum of this array:

let summ = [10, 20, 30];
let newsumm = summ.reduce((prevVal, val) => {
  return prevVal + val;
}, 0);

console.log(newsumm);

// use .find() to get the first number less then 10

let less10 = [12, 8, 5, 20, 3];

let newless10 = less10.find((val) => {
  return val < 10;
});
console.log(newless10);

// use .some() to check if any student has scored below 35

let below35 = [45, 60, 28, 90];

let newbelow35 = below35.some((val) => {
  return val < 35;
});
console.log(newbelow35);

// use .every() to check all no are even

let even = [2, 4, 6, 8, 10];
let neweven = even.every((val) => {
  return val % 2 == 0;
});
console.log(neweven);

// desturcture this array to get first name and lastname

let fullname = ["yash", "sharma"];
let [firstname, lastname] = fullname;
console.log(firstname, lastname);

// merge two arrays using spread operators

let A = [1, 2];
let B = [3, 4];

let AB = [...A, ...B];
console.log(AB);
// add "India" to the start of this array using spread:

let countries = ["USA", "UK"];
let newcountries = ["India", ...countries];
console.log(newcountries);

// clone this array properly (not by reference)
let copy = [5, 8, 9];
newcopy = [...copy];

console.log(copy);

console.log(newcopy);
