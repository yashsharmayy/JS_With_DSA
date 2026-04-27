// Call Stack (Execution Stack)

// JS single threded h -> ek time pr ek hi kaam krta h jb tum function call karte ho ->
// vo stack k top p chla jata h funciton co,plete hone k baad stack se nikal jata h (pop ho jata h)

function one() {
  console.log("hello1");

  two();
}

function two() {
  console.log("hello2");
  three();
}

function three() {
  console.log("Hello3");
}

one();
//output:

//hello1
//hello3
//hello2

// Web Api
// conslode , settimeout setInterval alert prompt ye sb js ka part actualy hota hi ni h in real ye sb browser ka part hota h
