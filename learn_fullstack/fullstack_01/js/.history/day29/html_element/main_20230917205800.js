var title = document.querySelector(".title");
console.log(title);

console.log(HTMLElement.prototype);

var css = {
  border: "1px solid red",
  background: "yellow",
};

var title = document.querySelector(".title");
console.log(typeof title.style);
Object.assign(title.style, css);
