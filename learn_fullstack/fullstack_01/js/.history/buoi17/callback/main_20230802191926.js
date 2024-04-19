const getA = (fn) => {
  setTimeout(() => {
    console.log("getA");
    if (typeof fn === "function") {
      fn();
    }
  }, 2000);
};

const getB = () => {
  console.log("getB");
};

const getC = () => {
  console.log("getC");
};

getA(getB);
getA(getC);
