/**
 * Dom html:
 *  thay đổi text html
 * thay đổi thuộc tính
 * xoá thẻ html
 *
 */

// give content in html

// before give content => must give html

// var content = document.querySelector(".box");
// console.log(content.innerHTML);

// 1.1 innerHTML => return content in html

// 1.2 innerText => return text in tag html
// console.log(content.innerText);

// 1.3 textConent => return text in tag html and all text display: none;

// console.log(content.textContent);

// 1.4 outerHTML

// console.log(content.outerHTML);// give tag html;

// 1.4 outerText
// console.log(content.outerText);


// bt

// khi click vao nut "click me" => lay toan bo content cua div class content va


const btn = document.querySelector(".btn");
btn.addEventListener((e) => {
    const content  = document.querySelector(".content");
    const result =  document.querySelector(".result");
    result.innerHTML = content.innerHTML;
    content.innerHTML = "";
    
})
