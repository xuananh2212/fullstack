// biến , hàm => con của đối tượng có tên là window.

var user = "tuan anh";
var getUser = function () {
  return user;
};

console.log(window.user);

// react

window.setTimeout(() => {
  console.log("f8");
}, 2000);

console.log(window);

console.log(console);
