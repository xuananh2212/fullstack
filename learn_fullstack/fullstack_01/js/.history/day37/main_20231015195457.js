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
