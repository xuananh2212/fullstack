const getA = (fn, number) => {
  setTimeout(() => {
    if (typeof fn === "function") {
      fn(number);
    }
    console.log("getA");
  }, 2000);
};

const getB = (a) => {
  console.log("getB" + a);
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
getA(getB, "tuan anh");
