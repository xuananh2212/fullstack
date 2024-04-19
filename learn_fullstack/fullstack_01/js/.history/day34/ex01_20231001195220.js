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

const getB = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("getB");
    }, 2000);
  });
};

const getC = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("getC");
    }, 50);
  });
};

async function getData() {
  const dataA = await getA();
  const dataB = await getB();
  const dataC = await getC();
  console.log(dataA, dataB, dataC);
}
getData();
