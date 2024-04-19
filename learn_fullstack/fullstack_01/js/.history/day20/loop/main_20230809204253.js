/**
 *  Hàm reduce(callback, initialValue)
 * - callback: hàm có 2 tham số (prevalue, currentValue);
 *
 * - initialValue: giá trị khoi tao
 * - gìa trị của hàm reduce là kết quả  currentValue;
 */

var numbers = [5, 10, 15, 20, 25];

var result = numbers.reduce((pre, current) => {
  console.log(`prev: ${pre}, current: ${current}`);
  return current;
}, 0);

console.log(result);

var numbers = [1, 2, 3, 4, 5];

var result = numbers.reduce((pre, current) => {
  console.log(pre);
  console.log(current);
  return pre + current;
}, 0);

console.log(result);

var numbers = [5, 9, 10, 2, 8];

var result = numbers.reduce((pre, current) => {
  if (pre < current) {
    return current;
  }
});

console.log(result);
