//oop (object oriented programming)
// it is like a blue print which we can use for many diffrent products

// Example

function CreatePencil(name, price, color, company) {
  this.name = name;
  this.price = price;
  this.color = color;
  this.company = company;
  this.write = function () {
    let h1 = document.createElement("h1");
    h1.textContent = "Nice handwritting";
    h1.style.color = color;
    document.body.append(h1);
  };
}
CreatePencil.prototype.country = "india";

// prototype set default value for funtion so that same value apply for all

let pencil1 = new CreatePencil("Nataraj", 10, "black", "natraj");
let pencil2 = new CreatePencil("Doms", 10, "red", "Doms");
//note : it is important to use new is set the value of "this"
console.log(pencil1);
console.log(pencil2);

pencil1.write();
pencil2.write();

console.log(pencil1.country);
console.log(pencil2.country);

// class: better way to do same thing

// constructor : used to set default values and variables

class CreatePen {
  constructor(name, price, color, company) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
  }

  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.append(h1);
  }
}

let pen1 = new CreatePen("butterflow regular", 10, "blue", "butterflow");
console.log(pen1);
pen1.write("ye h mera pen");

// Inheritance : one class can use properties of another class and also it can have its own diffrent propertuies

class User {
  constructor(name, email, phoneNo, id) {
    this.name = name;
    this.email = email;
    this.phoneNo = phoneNo;
    this.id = id;
    this.role = "user";
  }

  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = `${this.name}:${text}`;
    document.body.append(h1);
  }
}

class Admin extends User {
  constructor(name, email, phoneNo, id, role) {
    super(name, email, phoneNo, id);
    this.role = role;
  }

  remove() {
    document.querySelectorAll("h1").forEach((el) => {
      el.remove();
    });
  }
}

let u1 = new User("yash", "ys4468570@gmail.com", "99108585", "ab12");
let u2 = new User("kishor", "lishor570@gmail.com", "991288145", "ab13");
console.log(u1);
console.log(u2);

let admin1 = new Admin(
  "yash sharma",
  "yashsharamyy1804@gmail.com",
  "8798654525",
  "admin12",
  "admin",
);
console.log(admin1);
