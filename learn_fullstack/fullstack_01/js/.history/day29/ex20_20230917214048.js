/*
Custom Element
- kỹ thuật tạo ra 1 thẻ html riêng.

- thẻ html nào phải có 2 từ trở lên và có gạch ngang.

- kỹ thuật để phân chia các thành phần trong trang web 
=> hay còn gọi là componect.

Sử dụng: 

- customElements

- kế thừa từ HtmlElement.
- lifecyle callbacks -> vòng đời từ lúc 1 component được tạo ra cho đến lúc xoá nó.


*/

// tạo commponent: 1 hàm hoặc 1 class.

var HelloWorld = function () {
  return Reflect.construct(HTMLElement, [], this.constructor);
};

HelloWorld.prototype = Object.create(HTMLElement.prototype);

// vòng đời component
HelloWorld.prototype.constructor = HelloWorld;
HelloWorld.prototype.connectedCallback = function () {
  console.log("connected");
  this.innerHTML = "HELLO WORLD";
};

// HelloWorld.prototype.connectedCallback();
console.log(HelloWorld);

console.log(HelloWorld.prototype);

// đăng kí componnet

customElements.define("hello-world", HelloWorld);
