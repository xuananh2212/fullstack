
var a = 0;

// var b  = a && "f8";
var b = a ? "f8" : a;

console.log(b);

var count = 1;
var defaultCount = 10;
var totalCount = count || defaultCount;
console.log(totalCount); // In ra 10