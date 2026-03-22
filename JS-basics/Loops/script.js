// for-> kaha se jana h -> kaha tk jana h -> kese jana h
// for(start , end , change) {
//     code
// }

//while-> kaha se jana h -> kb rukna h -> kese jaaana h
// start
// while (end) {
//     //code
//     change
// }

for (let i = 1; i < 101; i++) {
  console.log(i);
}

let i = 1;
while (i < 33) {
  console.log(i);
  i++;
}
// -------do while----

let j = 1;
do {
  console.log(j);
  j++;
} while (j < 21);

//--------break------

for (let i = 1; i < 201; i++) {
  console.log(i);
  if (i === 69) {
    break;
  }
}

// ------continue----

for (let i = 0; i < 201; i++) {
  if (i === 69) {
    continue;
  }
  console.log(i);
}

// ----------que------

// print numbers from 1 to 10 using a for loop
for (let i = 1; i < 11; i++) {
  console.log(i);
}

// print numbers from 10 to 1 using a while loop

let k = 10;
while (k >= 1) {
  console.log(k);
  k--;
}

// print number form 1-20 using for loop

for (let i = 2; i < 21; i += 2) {
  console.log(i);
}

// print odd numbers form 1 to 15 using a while loop

let l = 1;
while (l < 16) {
  console.log(l);
  l += 2;
}

// print the multiplication table fo 5 (5 x 1 = 5... 5x10 = 50)
for (let i = 1; i < 11; i++) {
  console.log(`5 X ${i} = ${i * 5}`);
}
// find the sum of numbers form 1 to 100 using a loop
let sum = 1;
for (let i = 1; i < 101; i++) {
  sum += i;
}
console.log(sum);

// print all numbers btw 1 - 50 that are divisible by 3

for (let i = 0; i < 51; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}

// ask the user for a number and print whether each number from 1 to that number is even or odd

// let user = prompt("give a number");
let user = 89;
for (let i = 0; i < user; i++) {
  if (i % 2 == 0) {
    console.log(i, "is even");
  } else {
    console.log(i, "is odd");
  }
}

// count how many numbers between 1 to 100 are divisible by both 3 and 5
let count = 0;
for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    count++;
  }
}
console.log(count);

// stop at first multiple of 7

for (let i = 1; i < 101; i++) {
  if (i % 7 === 0) {
    break;
  }
  console.log(i);
}

// skip multiple of 3

for (let i = 1; i < 101; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}

// print first 5 odd numbers only
// use both if , continue , and a counter + break

let counter = 0;
for (let i = 1; i < 101; i++) {
  if (i % 2 === 1) {
    console.log(i);
    counter++;
    continue;
  }
  if (counter == 5) {
    break;
  }
}
