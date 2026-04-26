// syncronous and asyncronous

// koi bhi code js main line by line chlega or natural pattern bhi hota h ki code line by line chle , but kbhi kabaar aise cases aaate h life m  jaha pr apka code wait krta h or utni der m agla code chl jata h

// sync: aisa code jo line by line chle
// Async: aisa code jo line by na line chle

// callback: ek function ko ek or function bhej do parameter m to vo function kehlata h callback
function thisfuc(func) {
  let sum = func() + 10;
  console.log(sum);
}
thisfuc(function () {
  return 5 + 7;
});

// callback hell
function loginUser(name, cb) {
  cb({ id: 1, name: name });
}

function getProfile(id, cb) {
  cb({ id: 2, userId: id });
}

function getPosts(id, cb) {
  cb([{ id: 3, profileId: id }]);
}

function getComments(id, cb) {
  cb(["Nice", "Good"]);
}

loginUser("Yash", function (user) {
  getProfile(user.id, function (profile) {
    getPosts(profile.id, function (posts) {
      getComments(posts[0].id, function (comments) {
        console.log(comments);
      });
    });
  });
});

// promises: aap ek promise bannate ho jo ki do states main se ek state me ja skta h and vo ya t resolve hoga ya to reject hoga ,,
// vo kuch bhi ho skta h isliye hume code dono k liye likhna pdta h

let pro = new Promise(function (res, rej) {
  setTimeout(() => {
    let num = Math.floor(Math.random() * 10);
    if (num > 5) res(num);
    else rej(num);
  }, 3000);
});

pro
  .then(function (val) {
    console.log("resolved with", val);
  })
  .catch(function (val) {
    console.log("reject with", val);
  });

// async await

async function abcd() {
  try {
    let val = await pro;
    console.log(val);
  } catch (err) {
    console.log(err);
  }
}
abcd();
