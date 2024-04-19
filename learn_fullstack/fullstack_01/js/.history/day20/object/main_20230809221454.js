// khai báo
var users = new Object();

var users = {};

console.log(users);

// câu tạo 1 object

/**
 *  - thuộc tính: Biến.
 *  - phương thức: Hàm.
 *
 */

var users = {
  userName: "tuan anh",
  email: "hoangan.web@gmail.com",
  getName: function () {
    return "Hoàng An";
  },
};

var key = "email";
// truy cập vào key của object.

console.log(users[key]);
console.log(users.userName);
console.log(users.getName());

// thêm key mới.

users.location = "ha noi";

console.log(users);

for (let key in users) {
  var value = users[key];

  if (typeof value === "function") {
    console.log(value());
  } else {
    console.log(value);
  }
}

Object.keys(users).forEach((key) => {
  var value = users[key];
  if (typeof value === "function") {
    console.log(value());
  } else {
    console.log(value);
  }
});

// kiểm trả 1 biến là 1 object

var a = [];

if (Array.isArray(a) && a !== null && typeof a === `object`) {
  console.log(true);
}
