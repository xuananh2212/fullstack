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

btn.addEventListener("click", function (e) {
  if (btn.textContent === "ẩn") {
    btn.textContent = "hiện thị";
    content.style = "display: none";
  } else {
    content.style.display = "block";
    btn.textContent = "ẩn";
  }
});

console.log(content.style.display);
