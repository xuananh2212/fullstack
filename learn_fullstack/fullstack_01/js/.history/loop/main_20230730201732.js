//for
//

// var n = 10;
// var s = 0;

// for (var i = 1; i <= n; i++) s += i;

// console.log(s);
var n = 5;

var s = 0;

function luythua(n) {
  var totol;
  for (var i = 1; i <= n; i++) {
    totol *= i;
  }
  return totol;
}
for (var i = 1; i <= n; i++) {
  s += luythua(i);
}
