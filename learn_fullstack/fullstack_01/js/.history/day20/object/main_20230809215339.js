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
