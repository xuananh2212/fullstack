// set cookie
document.cookie = "username=tuananh.web";
// expire sẽ chấp nhận định dạng thời gian UTC
const expires = new Date("2023-10-16 09:00:00").toUTCString();
console.log(expires);
