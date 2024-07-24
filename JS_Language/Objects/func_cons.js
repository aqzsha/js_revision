function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User('Jack');

alert(user.name); // Jack
alert(user.isAdmin); // false

function User(name) {
  if (!new.target) {
    // в случае, если вы вызвали меня без оператора new
    return new User(name); // ...я добавлю new за вас
  }

  this.name = name;
}

let john = User('John'); // переадресовывает вызов на new User
alert(john.name); // John
