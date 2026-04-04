//local storge
// store kaise kare-setitems
// data fetch kaise kare-getitems
// remove kaise kare- removitem
// update kaise kre- setitem(update the existed value)

// clear:empty the local Storage

// setitems

localStorage.setItem("Name", "yash sharma");

// getitems
let val = localStorage.getItem("Name");
console.log(val);

// removitem

localStorage.removeItem("Name");

// clear
localStorage.clear();

// ---sessionstorge---

// similar as local storge
// localstorge tab bnd hone k baad bhi data browser p rehta h isme tab close krte hi data remove ho jata h

// setitems

sessionStorage.setItem("Name", "yash sharma");

// getitems
let value = sessionStorage.getItem("Name");
console.log(val);

// removitem

sessionStorage.removeItem("Name");

// clear
sessionStorage.clear();

// cookies
// browser main chhota data store krne k liye cookies ka istmaal hota h

// cookies ~4kb ka data store krta h
// localstorge seeison storge  ~5mb ka

// cookies main jo bhi data store karoge vo data page reload per automatically server pr jayga

document.cookie = "key=value";
document.cookie = "username=Yash";

//----------JSON--------

// we cannot store array or object in localstore diretly
// so we convert it in string by using json.stringyfy and get it back by using parse

const user = {
  name: "Yash",
  age: 18,
};

const stringData = JSON.stringify(user);

console.log(stringData);

//------------

const data = '{"name":"Yash","age":18}';

const obj = JSON.parse(data);

console.log(obj.name); // Yash

//--
localStorage.setItem("user", JSON.stringify({ name: "Yash" }));
