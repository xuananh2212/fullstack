// var a = 10;
//     b = 20;

/*
1. định nghĩa hàm.
function tenHam(thamso1, thamso2){
    
    noi dung ham.
}

- thuat ngu: 

  - tham so: dinh nghia ham.

  - doi so: khi goi ham

  - Ham return , ham void.

*/

// 2.goi ham

// function getMsg() {
//   console.log("xin chao f8");
// }

// function getMessage(msg, type = "success") {
//   console.log(`xin chao ${msg}`);
//   console.log(`xin chao ${type}`);
// }
// // hàm void....
// function getTotal(a, b) {
//   var s = a + b;
//   console.log(s);
// }
// // hàm return

// function getTotal(a, b) {
//   var s = a + b;
//   return s;
// }

// console.log(getTotal(getTotal()));
// getMessage();

/**
 * Expected
 * sumPrime(5) // output: 10;
 * sumPrime(10) // output: 17;
 */
function isPrime(n) {
  if (n <= 1) {
    return false;
  } else if (n === 2 || n === 3) {
    return true;
  } else {
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  }
}

function sumPrime(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumPrime(10));
