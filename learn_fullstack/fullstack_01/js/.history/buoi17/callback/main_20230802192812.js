const getA = (fn) => {
  setTimeout(() => {
    if (typeof fn === "function") {
      fn();
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

getA(() => {
  getB(10);
});
getA(getC);
