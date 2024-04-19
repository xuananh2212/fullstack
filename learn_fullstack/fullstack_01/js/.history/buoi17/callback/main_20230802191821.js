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

const getB = () => {
  console.log("getB");
};
