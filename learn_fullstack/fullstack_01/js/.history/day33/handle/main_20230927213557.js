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
 *   1. callback
 *   2. Promise
 *   3. Async Await function.
 */
const getUsers = () => {
  setTimeout(() => {
    console.log("danh sach users");
    if (typeof callback === "function") {
      callback();
    }
  });
};

const showMessage = () => {
  console.log("lay du lieu thanh cong");
};
