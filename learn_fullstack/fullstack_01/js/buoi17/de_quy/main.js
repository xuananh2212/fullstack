function sumS(n) {
  if (n === 1) {
    return n;
  }
  return n + sumS(n - 1);
}

let a = sumS(10);

console.log(a);
