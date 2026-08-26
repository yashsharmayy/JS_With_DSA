// loop
// 1-22
for (let i = 1; i < 23; i++) {
  console.log(i);
}

// 200-100
for (let i = 200; i > 99; i--) {
  console.log(i);
}

// for (let i = 1; i < 10; ) {
// //   console.log(i); // infinite
// }

//-------sum of N natural numbers-------

// let n = Number(prompt("Enter your no"))
let n = 7;
if (isNaN(n)) {
  console.log("enter a valid no");
} else {
  if (n > 0) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    console.log(sum);
  } else {
    console.log("no should be n=0or n>0");
  }
}
//----------factorial

if (isNaN(n)) {
  console.log("enter a valid no");
} else {
  if (n > 0) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
      fact = fact * i;
    }
    console.log(fact);
  } else {
    console.log("no should be n=0or n>0");
  }
}
