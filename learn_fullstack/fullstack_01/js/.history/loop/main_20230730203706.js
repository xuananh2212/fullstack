//for
//

// var n = 10;
// var s = 0;

// for (var i = 1; i <= n; i++) s += i;

// console.log(s);
var n = 5;

var s = 0;
var c = 1;

// function luythua(n) {
//   var totol = 1;
//   for (var i = 1; i <= n; i++) {
//     totol *= i;
//   }
//   return totol;
// }

// for (var i = 1; i <= n; i++) {
//   c *= i;
//   s += c;
// }

// console.log(s);

// kiêm số nguyên

var n = 10;

if (n < 1) {
  console.log("khong phai so nguyen to");
} else if (n === 2 || n === 3) {
  console.log(`so nguyen to ${n}`);
} else {
  var n = true;
  for (var i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      n = false;
    }
  }
  if (n === true) {
    console.log(`so nguyen to ${n}`);
  } else {
    console.log(`  ${n} khong phai so nguyen to`);
  }
}