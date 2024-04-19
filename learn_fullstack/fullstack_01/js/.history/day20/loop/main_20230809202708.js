/**
 *  Hàm reduce(callback, initialValue)
 * - callback: hàm có 2 tham số (prevalue, currentValue);
 *
 * - initialValue: giá trị khoi tao
 * - gìa trị của hàm reduce là kết quả  currentValue;
 */

var numbers = [5, 10, 15, 20, 25];

var result = numbers.reduce((pre, current) => {
  console.log(pre);
  console.log(current);
  return pre;
}, 0);

console.log(result);
