// DOM = document Object model

// DOM  element: truy xuat vao cac the html => tao doi tuong html

// DOM CSS : thay doi css inline cua the html

// DOM HTML : thay doi noi dung , thuoc tinh the html

//  DOM event: gan su kien cho cac the html

// DOM Event listener: Lang nghe cac su kien

// Dom Navigation: thao tac vo cac element phan cap

// DOM node, nodeList: Thao tac voi cac the HTML Thong qua node(Object);

/*
- truy xuat thong qua id:

document.getElementById(id);

- truy xuat thong qua class

document.getElementByTagName();


*/

// var title = document.getElementById("title");
// console.log(typeof title);
// console.log([title]);
// console.log(title.innerText);

// var title = document.getElementsByClassName("title");

// console.log(title);

// console.log(typeof title);

// for (var index of title) {
//   console.log(index);
// }

// var title = document.getElementsByTagName("h1");

// console.log(title);

// console.log(typeof title);

// for (var index of title) {
//   console.log(index);
// }

/*

- truy xuat thong qua css selector.

*/

// var title = document.querySelector(".title");
// console.log(title);

// var titleList = document.querySelectorAll(".title");

// titleList.forEach((title) => {
//   console.log(title);
// });

/**
 *  DOM Event
 *
 * 1. tác động trực tiếp vào thẻ html thông qua thuoc tinh
 *
 */

// function handClick() {
//   console.log("click me");
// }

// function handleChange() {
//   console.log("change me");
// }

// tao element
// event handler
var btn = document.querySelector(".btn");
console.log(btn);

// btn.onclick = function () {
//   console.log("dang ki khoa hoc thanh cong");
// };

// var province = document.querySelector(".province");
// province.onchange = function () {
//   console.log("da chon");
// };

// event listener

/*
  hàm addEventListener(name_event, callback): thêm sự kien;
  hàm removeEventListener(name_event, callback): xoa sư kien
 */

// btn.addEventListener("click", function (e) {
//   console.log("dang ki khoa hoc thanh cong");
//   console.log(e);
// });
// btn.addEventListener("click", function () {
//   console.log("dang ki that bai");
// });

// btn.removeEventListener("click", function () {
//     console.log("dang ki that bai");

// });
