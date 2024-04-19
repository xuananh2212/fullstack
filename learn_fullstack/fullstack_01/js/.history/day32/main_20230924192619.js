/**
 *  Arrow functions: (hàm mũi tên).
 *
 */

// arrow function không có tham số.

var getMessage = () => "hello f8";

console.log(getMessage());

// arrow function có 1 tham số 

var getMessage = msg => msg;
console.log(getMessage("hello word"));

// arrow function co nhieu tham so

var getMessage = (msg, type = 'success') => {
    console.log(`msg: ${msg}`);
    console.log(type);
}

getMessage("hello tuan anh");

// lưu ý : nếu return về 1 object => bọc cặp ngoặc () => ngoặc tròn


var getCustomer = () => ({name: 'tuan anh', email: 'xuantuananh2212@gmail.com'});

console.log(getCustomer());

var users = [
    {name: "tuan anh", email: "xuantuananh212@gmail.com"},
    {name: "tuan anh1", email: "xuantuananh2121@gmail.com"},
    {name: "tuan anh2", email: "xuantuananh2122@gmail.com"},
    {name: "tuan anh3", email: "xuantuananh2123@gmail.com"},
]