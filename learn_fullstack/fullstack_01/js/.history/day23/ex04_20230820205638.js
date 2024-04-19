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
link.setAttribute("width", "50px")
console.log(link.getAttribute("width"));

// xoa thuoc tinh
link.removeAttribute("width");

// 
const link02 = document.querySelector(".link-02");

console.log(link02.href);

console.log(link02.getAttribute("href"));

console.log(link02.getAttribute("data-count"));

// truy cập vào data getAtrribute

var content = document.querySelector(".content");
console.log(content.getAttribute("data-count"));

// c2: truy cap thong qua dataset.
console.log(content.dataset);
console.log(content.dataset.count);

// truy cap thong qua 