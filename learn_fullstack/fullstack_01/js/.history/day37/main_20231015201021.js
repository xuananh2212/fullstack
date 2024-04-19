// set cookie
document.cookie = "username=tuananh.web";
// expire sẽ chấp nhận định dạng thời gian UTC
const expires = new Date("2023-10-16 09:00:00").toUTCString();
document.cookie = "username=tuananh.web;expires=" + expires;
console.log(expires);
document.cookie = "email=tuananh@gmail.com;expires=" + expires;

// 2. đọc cookie
console.log(document.cookie);

// 3. cập nhật cookie
document.cookie = "username=tuan11anh.web";

// 4. xoá cookie

document.cookie = `email=tuananh@gmail.com;expires=${new Date().toUTCString()}`;

//

document.cookie = `username="tuananh";path=/`;
document.cookie = `username="tuananh"`;

/*
Httponly -> chỉ cho phép back-end lấy cookie. (lấy thông qua http)
secure -> chỉ lấy  được cookie u ử

*/
