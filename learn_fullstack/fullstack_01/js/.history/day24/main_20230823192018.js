var content = document.querySelector(".content");
content.style.color = "blue";
content.style.fontWeight = "bold";
content.style.backgroundColor = "black";
console.log(content);

var css = {
  color: "black",
  backgroundColor: "blue",
  lineHeight: 1.5,
};

var content1 = Object.assign(content.style, css);

const btn = document.querySelector(".btn");
