console.log(Number.prototype);
var a = 1;
// kiem tra 1 biến có phải number hay không.

if (a === 0 || (a && a.constructor.name === "number")) {
  console.log("this is number");
} else {
  console.log("this is not number");
}

if (Number.isInteger(a)) {
  console.log("so nguyen");
} else {
  console.log("khong phai so nguyen");
}

//so NaN = not a number.

var a = NaN;

console.log(typeof a);

//

var a = 10;
var b = 2;
var c = a / b;

if (Number.isNaN(c)) {
  console.log("khong phai so");
} else {
  console.log(c);
}

// so infinity
// NaN khong the so sach === NaN duoc
var a = 10;
var b = 0;
var c = a / b;
var d = 1000 ** 1000;
console.log(d);

console.log(c);

if (c !== Infinity) {
  console.log(c);
} else {
  console.log("qua gian han");
}

// ep kieu co nguyen, thuc

var a = "10.6";
var b = "10.6aaaa";
a = parseInt(a);
b = parseFloat(b);
console.log(typeof a);
console.log(b);

// ep kieu co

var a = "10.5";
// a = +a;
// a = Number(a);
console.log(a, typeof a);

/**
 *   1.kiểu tra 1 số
 *     - không phai NaN
 *     - khong phai Infinity
 *      - typeof number.
 *
 */

var a = "10";
if (!isNaN(a) && a !== Infinity && typeof a === "number") {
  console.log("la so");
} else {
  console.log("khong phai la so");
}

// chuyen number thanh String

// var a = 10 + "";

//c2
a = a.toString();
console.log(typeof a);

// lam tron va lay so luong phan thap phan

var a = 10.556;
a = a.toFixed(2);
console.log(a);
