var btn = document.querySelector(".btn");
var content = document.querySelector(".content");
console.log(btn);
console.log(content);

// classList => thao tác với class.

console.log(content.classList);

btn.addEventListener("click", function(){
    // content.classList.add("content-1", "content-2");
    // content.classList.remove("content-1");	

    // kiem tra class ton tai

    if(content.classList.contains("content-1")){
        console.log("da ton tai");
    }else{
        content.classList.add("content-1");
    }

    // toggle class

    content.classList.toggle("abc");



})
