// this == undefined

function sayHi() {
  alert(this);
}

sayHi(); // undefined

// У стрелочных функций нет «this»

let user = {
  firstName: 'Ilya',
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  },
};

user.sayHi(); // Ilya

//   Это особенность стрелочных функций. Она полезна, когда мы на самом деле не хотим иметь отдельное this, а скорее хотим взять его из внешнего контекста.
