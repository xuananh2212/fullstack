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

/**
 *  các trạng thái của promise
 *   - pending:
 *   - fulfilled: khi data trả về thành công
 *   - reject: khi data trả về thất bại.
 *
 */

// const getUsers = () => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = [
//         {
//           name: "tuan anh",
//           email: "tuananh2212@gmail.com",
//         },
//       ];
//       console.log("ok");
//       resolve(data);
//       reject("loi ket noi");
//     }, 1000);
//   });
//   return promise;
// };
// const showMessage = () => {
//   console.log("lay du lieu thanh cong");
// };

// getUsers()
//   .then((users) => {
//     console.log(users);
//     showMessage();
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// promise chaining.

const getA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("getA");
    }, 1000);
  });
};

const getB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("getB");
    }, 2000);
  });
};
const getC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("getc");
    }, 1500);
  });
};

// getA().then((data) => {
//   console.log(data);
//   getB().then((data) => {
//     console.log(data);
//     getC().then((data) => {
//       console.log(data);
//     });
//   });
// });

getA()
  .then((data) => {
    console.log(data);
    return getB();
  })
  .then((data) => {
    console.log(data);
    return getC();
  })
  .then((data) => {
    console.log(data);
  });

// promise all.
// case tao ra hezo
//
