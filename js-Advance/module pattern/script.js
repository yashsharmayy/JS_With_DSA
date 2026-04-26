// iife : Immediately Invoked Function Expression

// used to create private variables
let fun = (function () {
  return 12;
})();
console.log(fun);

let bank = (function () {
  let bankBalance = 12000; // private variable cannot uise outside the function
  function checkbalance() {
    console.log(bankBalance);
  }
  function craditbalance(value) {
    bankBalance += value;
  }
  function debitedbalnce(value) {
    if (value < bankBalance) bankBalance -= value;
  }
  return {
    check: checkbalance, // revealing module pattern : you can chanfe function name
    craditbalance,
    debitedbalnce,
  }; // these are public functions
})();

bank.check();
bank.craditbalance(4000);
bank.check();
bank.debitedbalnce(5000);
bank.check();

//factory function pattern
function createproduct(name, price) {
  let stock = 10;
  return {
    name,
    price,
    checkStock() {
      console.log(stock);
    },
    buy(qty) {
      if (qty <= 10) {
        stock -= qty;
        console.log(`booked quantity ${qty} , pieces left ${stock}`);
      } else {
        console.log("unsuficient quantity");
      }
    },
    refill(qty) {
      stock += qty;
    },
  };
}
let iphone = createproduct("iphone", 160000);
iphone.buy(5);
iphone.refill(6);
iphone.checkStock();

let kitkat = createproduct("kit-kat", 50);
kitkat.checkStock();

// observer pattern

class createYutubechannel {
  constructor() {
    this.subscriber = [];
  }

  subscribe(user) {
    this.subscriber.push(user);
    console.log(`${user.name}, you've subscribed the chnannel`);
  }
  unsubscribe(user) {
    this.subscriber = this.subscriber.filter((sub) => sub !== user);
    console.log(`${user.name}, you unsubscribed the channel`);
  }
  notify(msg) {
    this.subscriber.forEach((sub) => {
      sub.update(msg);
    });
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
  update(msg) {
    console.log(msg);
  }
}

let Meu = new createYutubechannel();
let User1 = new User("yash sharma");
let User2 = new User("raju");
Meu.subscribe(User1);
Meu.subscribe(User2);

Meu.notify("subscribed");
Meu.unsubscribe(User2);
