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
    console.log('msg: ${msg}');
    console.log(type);
}

getMessage("hello tuan anh");