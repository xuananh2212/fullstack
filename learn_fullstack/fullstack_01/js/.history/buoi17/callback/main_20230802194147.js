const getA = (fn, ...array) => {
  setTimeout(() => {
    if (typeof fn === "function") {
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
