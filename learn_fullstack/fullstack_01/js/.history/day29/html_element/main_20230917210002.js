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
// Object.assign(title.style, css);

var changeCSS = function (element, style) {
  Object.assign(element.style, style);
};

changeCSS(title, css);
