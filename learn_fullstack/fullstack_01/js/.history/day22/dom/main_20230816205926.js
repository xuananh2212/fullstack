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

var title = document.getElementById("title");
console.log(typeof title);
console.log([title]);
console.log(title.innerText);

var title = document.getElementsByClassName("title");

console.log(title);

console.log(typeof title);

for (var index of title) {
  console.log(index);
}

var title = document.getElementsByTagName("h1");

console.log(title);

console.log(typeof title);

for (var index in title) {
  console.log(index);
}
