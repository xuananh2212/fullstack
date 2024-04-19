// BOM = browser object module

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  window.open(
    "http://vnexpress.net",
    "vnexpress",
    "width=100px,height=100px,top=100px"
  );
});

console.log(window.location);
console.log(window.location.href);
