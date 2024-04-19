const getA = (fn) => {
  setTimeout(() => {
    console.log("getA");
    if (typeof fn === "function") {
      fn();
    }
  }, 2000);
};

const getB = (a) => {
  console.log("getB" + a);
};

const getC = () => {
  console.log("getC");
};

getA(() => {
  getB(10);
});
getA(getC);
