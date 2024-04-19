/**
 *  Dom HTML
 * - thuoc tinh co san: ban than the html co san
 * 
 * - thuoc tinh tu  tao: data attributes
 * 
 * 
 */

var link = document.querySelector('.link');
console.log(link);

// lấy giá trị thuộc tính

// cú pháp: element.tenthuoctinh.

console.log(link.href);
console.log(link.title);
console.log(link.className);
console.log(link.rel);
console.log(link.id);

//  thay doi gia tri thuoc tinh(attribute). bang getAttribute

console.log(link.getAttribute("width"));

link.href = "http://google.com";

// setAttribute

console.log(link.setAttribute("width", "50px"));

