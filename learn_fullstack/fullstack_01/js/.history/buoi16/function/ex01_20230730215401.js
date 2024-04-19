// var a = 10;
//     b = 20;

/*
1. định nghĩa hàm.
function tenHam(thamso1, thamso2){
    
    noi dung ham.
}

- thuat ngu: 

  - tham so: dinh nghia ham.

  - doi so: khi goi ham

  - Ham return , ham void.

*/

// 2.goi ham

function getMsg() {
  console.log("xin chao f8");
}

function getMessage(msg, type = "success") {
  console.log(`xin chao ${msg}`);
  console.log(`xin chao ${type}`);
}
// hàm void....
function getTotal(a, b) {
  var s = a + b;
  console.log(s);
}
// hàm return

function getTotal(a, b) {
  var s = a + b;
  return s;
}

getTotal(getTotal());
getMessage();
