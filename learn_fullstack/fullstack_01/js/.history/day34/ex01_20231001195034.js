// async Await

/**
 *  async is a function => luon trả về 1 promise
 *
 *
 */

// console.log(
//   getName().then(function (name) {
//     console.log(name);
//   })
// );

// const getData = () => {
//   return new Promise((resolve, reject) => {
//     reject("Error");
//   });
// };

// (async () => {
//   try {
//     const data = await getData();
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   }
// })();

const getA = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("getA");
    }, 1000);
  });
};
