let obj = {
  name: "yash sharma",
  age: "20",
  clg: "Kirori mal",
};

console.log(obj.age);
console.log(obj.name);
console.log(obj.clg);

// or

console.log(obj["name"]);
console.log(obj["age"]);
console.log(obj["clg"]);

// nested object

const user = {
  name: "Yash",
  address: {
    city: "Delhi",
    location: {
      area: "Karol Bagh",
      pincode: 110005,
    },
  },
};

console.log(user.address.location.pincode);
//110005

// or destrcturing

let { area, pincode } = user.address.location;
console.log(area, pincode);

const student = {
  name: "Ravi",
  subjects: {
    science: {
      marks: 85,
      topics: ["Physics", "Chemistry"],
    },
  },
};

console.log(student.subjects.science.topics[0]);
//physics

// looping---------

let obj1 = {
  name: "yash sharma",
  age: "20",
  clg: "Kirori mal",
  phone: 9717136085,
};

for (let key in obj1) {
  console.log(key);
  console.log(obj1[key]);
}
//-------------------------------
//object.key(obj) turn boject keys into array
let showkey = Object.keys(obj1);
console.log(showkey);

//(4) ['name', 'age', 'clg', 'phone']

//------------------------------------
// object.entries(obj): turn key and values in small array and pack all small array into a array

let arrobj = Object.entries(obj1);
console.log(arrobj);

// 0: (2) ['name', 'yash sharma']
// 1: (2) ['age', '20']
// 2: (2) ['clg', 'Kirori mal']
// 3: (2) ['phone', 9717136085]

//---------copy obj---------

let obj2 = { ...obj }; // problem with this if your object is nested, then nested values still passed by refrence not clone properly
console.log(obj);
console.log(obj2);

let objj2 = Object.assign({}, obj); // old method work same as spread oprator "nobody use it "
console.log(objj2);

// deep clone---------
// use json

let deepcopy = JSON.stringify(obj);
let copy = JSON.parse(deepcopy);
console.log(copy);

// or

let deeeepcopy = JSON.parse(JSON.stringify(obj));
console.log(deeeepcopy);

// optional chaining

let detail = {
  name: "yash sharma",
  phone: 9717136085,
  address: {
    city: "Delhi",
    location: {
      area: "Karol Bagh",
      pincode: 110005,
    },
  },
};

let change = detail?.addresssssss?.location;

console.log(change); // undifined
//if we use this detail.addresssssss.location;
// it will give an error but using this
// detail?.addresssssss?.location; give undiefined

//--------computed properties
let role = "Admin";
let prop = {
  name: "yash sharma",
  phone: 9717136085,
  address: {
    city: "Delhi",
  },
  [role]: "developer",
};
console.log(prop);
//output: {name: 'yash sharma',
//    phone: 9717136085,
//     address: {…},
//      Admin: 'developer'}

//----quetions-----------
// create an object for a student with name , age , and is enrolled
let studentt = {
  name: "yash sharma",
  age: 20,
  isEnrolled: true,
};

// Can an object key be a number or boolean? try this
let boolnum = {
  true: "yes",
  45: "Forty two",
};
console.log(boolnum);
// yes , a object key can be a numebr or boolean (no error)

// Access the value of first name from this object
let userr = {
  // "firstname": "yash",
  lastname: "sharma",
  age: 20,
};
// console.log(userr["firstname"]);

//Given a dynamic key let key ="age", how will you access user[key]?

let key = "age";
let userrr = {
  firstname: "yash",
  lastname: "sharma",
  age: 20,
};
console.log(userrr[key]);

// destructure the city and lat form location object above

let locations = {
  city: "delhi",
  coordinate: {
    lat: 23.3,
    lan: 44.4,
  },
};
let { city } = locations;
let { lat } = locations.coordinate;

console.log(city, lat);

// use for-in log all keys in this objects
let place = {
  country: "India",
  city: "delhi",
  coordinate: {
    lat: 23.3,
    lan: 44.4,
  },
};

for (let key in place) {
  console.log(key);
}

// use object.entries() to print all key-value pairs as :
// title: javascript,
// duration:4weeks

const course = {
  title: "javascript",
  duration: "4 weeks",
};
console.log(Object.entries(course));

Object.entries(course).forEach((val) => {
  console.log(`${val[0]} : ${val[1]}`);
});
