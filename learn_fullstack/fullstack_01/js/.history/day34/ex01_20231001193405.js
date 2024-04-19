// async Await

/**
 *  async is a function => luon trả về 1 promise
 *
 *
 */

const getName = async () => {
  return "tuan anh";
};

console.log(
  getName().then(function (name) {
    console.log(name);
  })
);
