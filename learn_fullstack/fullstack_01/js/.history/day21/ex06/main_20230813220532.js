// const { object } = require("prop-types");

// Array.prototype.map2 = function (fn) {
//   var array = [];
//   if (typeof fn !== "function") {
//     // throw new Error("not a function");
//     return undefined;
//   } else {
//     for (var i = 0; i < this.length; i++) {
//       array.push(fn(this[i], i));
//     }
//     return array;
//   }
// };

// var user = ["user1", "user2", "user3"];

// var newArray = user.map2(function (user, index) {
//   return `<h2>${index} - ${user}</h2>`;
// });

// console.log(newArray);

// var obj1 = {
//   fullName: "tuan anh",
//   email: "tuananh.web@gmail.com",
// };
// var obj2 = {
//   age: 31,
//   address: "ha noi",
// };

// for (var key in obj2) {
//   obj1[key] = obj2[key];
// }

// console.log(obj1);

// Object.key(obj2).forEach((element) => {
//   obj1[element] = obj2[element];
// });

// Object.create(null);

// tạo object không có prototype

var user = Object.create(null);
console.log(user);

// tham chiếu.

var a = {
  fullName: "Tuan Anh",
  email: "tuananh@gmail.com",
  tuan: {
    text: "hoang",
  },
};

var b = a;
b.name = "Hoang";

console.log(b);
console.log(a);

// sao chep object.

var b = Object.assign({}, a);

b.tuan.text = "hung";

console(b, a);
