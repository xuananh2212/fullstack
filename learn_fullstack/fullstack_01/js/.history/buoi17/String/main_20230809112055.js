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

// console.log(username);

// 7. include(subStr):  tìm thấy trả về true ngược lại trả về false.

// 8. concat(str1, str2,...) : nối chuỗi.

//9. replace(tucantim, tuthaythe) => Thay thế từ đầu tiên tìm được.

//10  replaceAll(tucantim , tuthaythe) => Thay thế tất cả.

//11. Hàm split(char) => tách chuỗi thành mảng.

// console.log(str.split(" "));

// 12. trim() => loại bỏ khoảng cách từ đầu đến cuối chuỗi.

// 13. trimStart(): loại bỏ khoảng trắng  của đầu chuỗi.

//13. toLowerCase(): chuyển thành chữ hoa.

// 14. match

var welcome = "chao mung ban den voi den voi f8";

var wordFirst = welcome.slice(0, welcome.indexOf(" "));
var wordLast = welcome.slice(welcome.lastIndexOf(" ") + 1, welcome.length);
var wordMid = welcome.slice(welcome.indexOf(" ") + 1, welcome.lastIndexOf(" "));

console.log(wordLast + wordMid + wordFirst);

var fullName = "tạ hoàng an";

if (fullName.length !== 0) {
  var position = 0;
  var result = "";

  while (position !== -1) {
    if (position === 0) {
      result +=
        fullName.slice(0, position) +
        fullName.slice(position, position + 1).toUpperCase();
    } else {
      result +=
        fullName.slice(0, position) +
        fullName.slice(position, position + 1).toUpperCase();
      fullName = fullName.slice(position + 1);
    }

    position = fullName.indexOf(" ");
  }
  result += fullName;
  console.log(result);
}
