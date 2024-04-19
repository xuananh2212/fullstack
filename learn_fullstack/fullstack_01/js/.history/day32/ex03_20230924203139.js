// destructring object.

const user = {
    name: 'tuan anh',
    email: 'tuananh@gmail.com',
    age: 18,
}
// change name destuctring.
// const {name:_name , email, age} = user;
// console.log(_name, email, age);

const {name:_name, email, ...rest} = 