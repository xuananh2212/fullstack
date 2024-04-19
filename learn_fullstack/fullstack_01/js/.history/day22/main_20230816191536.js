console.log(Number.prototype);

// kiem tra 1 biến có phải number hay không.

if (a === 0 || (a && a.contructor.name === "number")) {
  console.log("this is number");
} else {
  console.log("this is not number");
}
