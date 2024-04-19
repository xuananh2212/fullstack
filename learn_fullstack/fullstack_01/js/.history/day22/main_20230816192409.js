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

var a = 10;
var b = 0;
var c = a / b;

console.log(c);
