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

// kiêm số nguyên to

// var n = 5.5;

// if (n % 1 == 0) {
//   if (n <= 1) {
//     console.log("khong phai so nguyen to");
//   } else if (n === 2 || n === 3) {
//     console.log(`so nguyen to ${n}`);
//   } else {
//     var x = true;
//     for (var i = 2; i <= Math.sqrt(n); i++) {
//       if (n % i === 0) {
//         x = false;
//       }
//     }
//     if (x) {
//       console.log(`so nguyen to ${n}`);
//     } else {
//       console.log(` ${n} khong phai so nguyen to`);
//     }
//   }
// } else {
//   console.log("khong phai so nguyen");
// }

// while

var i = 1;
while (i <= 10) {
  console.log(`xin chao F8: ${i}`);
  i++;
}
