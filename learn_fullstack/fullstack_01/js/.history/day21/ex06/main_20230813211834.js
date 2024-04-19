Array.prototype.map2 = function (fn) {
  var array = [];
  for (var i = 0; i < this.length; i++) {
    array.push(fn());
  }
};

var user = ["user1", "user2", "user3"];

var newArray = user.map2(function (user, index) {
  return `<h2>${index} - ${user}</h2>`;
});

console.log(newArray);
