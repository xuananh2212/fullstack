var content = document.querySelector(".content");
content.style.color = "blue";
content.style.fontWeight = "bold";
content.style.backgroundColor = "black";
console.log(content);

var css = {
  color: "black",
  backgroundColor: "black",
  lineHeight: 1.5,
};

Object.assign(content.style, css);
