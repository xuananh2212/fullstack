/**
 *  để hiện các phương thức và thuộc tính của String sử dụng String.prototype
 *
 */
var str = "xin chao f8";

console.log(str.charAt(str.length - 1));
console.log(str.slice(0, 4));

// indexOf  trả về vị trí đầu tiên tìm được nếu không tìm thấy trả về -1

// lastindexOf : trả về vị trí cuối cùng.

var email = "hoangan.web@gmail.com";
var username = "";

for (let i = 0; i < email.length; i++) {
  if (email[i] === "@") {
    break;
  }
  username += email[i];
}

console.log(username);

// 7. include(subStr):  tìm thấy trả về true ngược lại trả về false.
