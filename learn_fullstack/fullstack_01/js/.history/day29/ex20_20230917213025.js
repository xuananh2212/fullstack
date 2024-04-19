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
  return Reflect.construct(HTMLElement, [], this.construct);
};

HelloWorld.prototype = HTMLElement.prototype;
console.log(HelloWorld);

console.log(HelloWorld.prototype);
