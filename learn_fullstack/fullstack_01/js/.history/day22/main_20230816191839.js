console.log(Number.prototype);
var a = 1;
// kiem tra 1 biến có phải number hay không.

if (a === 0 || (a && a.contructor.name === "number")) {
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
