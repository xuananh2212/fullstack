var btn = document.querySelector(".btn");
var content = document.querySelector(".content");
console.log(btn);
console.log(content);

// classList => thao tác với class.

console.log(content.classList);

btn.addEventListener("click", function(){
    content.classList.add("content-1", "content-2");
    // content.classList.remove("content-1");	
})