console.log(Number.prototype);
var a = 0;
// kiem tra 1 biến có phải number hay không.
//a === 0 ||
if (a && a.contructor.name === "number") {
  console.log("this is number");
} else {
  console.log("this is not number");
}

if (Number.isInteger(a)) {
  console.log("so nguyen");
} else {
  console.log("khong phai so nguyen");
}
