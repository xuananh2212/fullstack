// destructring object.

const user = {
    name: 'tuan anh',
    email: 'tuananh@gmail.com',
    age: 18,
}

const {name:_name , email, age} = user;
console.log(_name, email, age);