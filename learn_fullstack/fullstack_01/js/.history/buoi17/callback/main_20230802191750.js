const getA = (fn) => {
  setTimeout(() => {
    console.log("getA");
    fn();
  }, 2000);
};

const getB = () => {
  log("getB()");
};
