var title = document.querySelector(".title");
console.log(title);

console.log(HTMLElement.prototype);

var css = {
  border: "1px solid red",
  background: "yellow",
};

var title = document.querySelector(".title");
console.log(typeof title.style);
console.log([title.style]);
console.log(title);
// Object.assign(title.style, css);

// var changeCSS = function (element, style) {
//   Object.assign(element.style, style);
// };

// changeCSS(title, css);
HTMLElement.prototype.changeCSS = function (style) {
  Object.assign(this.style, style);
};
title.changeCSS({
  border: "1px solid red",
  background: "yellow",
});
