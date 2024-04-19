const step1 = () => {
  console.log("step1");
};

const step2 = () => {
  setTimeout(() => {
    console.log("step2");
  }, 1000);
};

const step3 = () => {
  console.log("step3");
};

step1();
step2();
step3();

/**
 *  cách xử lý bất đồng bộ
 *   1. Callback
 *   2.Promise
 *   3. Async Await function.
 *
 *
 *
 */
