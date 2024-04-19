console.log(Math);

console.log(Math.PI);

var a = -10;

console.log(Math.abs(a));

console.log(Math.random() * 3);

// 3. luon lam tron xuong

console.log(Math.floor(10.8));

//4. luon lam tron len

console.log(Math.ceil(10.1));

// 5. lam tron theo quy tac

console.log(Math.round(10.4));
console.log(Math.round(10.5));

// 6. can bac hai

console.log(Math.sqrt(4));

// 7. max, min

console.log(Math.max(...[10, 23, 34, 34, 34, 99]));
console.log(Math.min(...[10, 23, 34, 34, 34, 99]));

// 8.tag clound js

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 100.8));

// optional chaninig voi phuong thuc

var a = {
  name: {
    job: "giang vien",
  },
  getName1: function () {
    return "tuan anh";
  },
};

console.log(a.getName?.());
