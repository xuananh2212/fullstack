
var a = 0;

// var b  = a && "f8";
var b = a ? "f8" : a;

console.log(b);

var count = 1;
var defaultCount = 10;
var totalCount = count || defaultCount;
console.log(totalCount); // In ra 10

var x = 10;

var y = (x++ + ++x - x--) / (--x  * x--);
/*
x = 10;
x = 11;
x =12;

x =81, 
x= 8
x= 10
x= 18
x= 1

*/

console.log(y);