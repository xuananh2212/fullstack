const getA = (fn, ...array) => {
  setTimeout(() => {
    if (typeof fn === "function") {
      console.log(array);
      fn(...array);
    }
    console.log("getA");
  }, 2000);
};

const getB = (a, b, c) => {
  console.log("getB" + a + b + c);
};

const getC = () => {
  console.log("getC");
};

// c1

// getA(() => {
//   getB(10);
// });
// getA(getC);

//c2
getA(getB, "tuan anh", "fullstack", "F8");

var sum2 = function (title, content, subject) {
  console.log(title, content, subject);
};

var a = [1, 2, 3];

sum2(...a);
