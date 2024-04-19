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
// 1. callback
// const getUsers = (callback) => {
//   setTimeout(() => {
//     console.log("danh sach users");
//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 1000);
// };

// const showMessage = () => {
//   console.log("lay du lieu thanh cong");
// };
// getUsers(showMessage);

// 2.promise

const getUsers = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [
        {
          name: "tuan anh",
          email: "tuananh2212@gmail.com",
        },
      ];
    }, 1000);
  });
};

const showMessage = () => {
  console.log("lay du lieu thanh cong");
};
