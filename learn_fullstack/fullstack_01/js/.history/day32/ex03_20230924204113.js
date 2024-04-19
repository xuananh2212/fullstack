// destructring object.

const user = {
    name: 'tuan anh',
    email: 'tuananh@gmail.com',
    age: 18,
}
// change name destuctring.
// const {name:_name , email, age} = user;
// console.log(_name, email, age);

// const {name:_name, email, ...rest} = user;
// console.log(_name, email, rest);


// destructring for array

const userNames =["tuan anh", "tuananh@gmail.com", 31, 'Hồ chí minh'];

// const [username, email , , address, salary=5000] = userNames; 
// console.log(username, email, salary);

const [username , email, ...rest] = 