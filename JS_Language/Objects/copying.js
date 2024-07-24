let user1 = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // изменено по ссылке из переменной "admin"

alert(user.name); // 'Pete', изменения видны по ссылке из переменной "user"

let a = {};
let b = {}; // два независимых объекта

alert(a == b); // fals

let user = {
  name: 'John',
  age: 30,
};

let clone = Object.assign({}, user);
