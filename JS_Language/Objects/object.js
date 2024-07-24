let user = {
  name: 'John',
  age: 30,
  'likes birds': true, // имя свойства из нескольких слов должно быть в кавычках
};

let fruit = prompt('Какой фрукт купить?', 'apple');

let bag = {
  [fruit]: 5, // имя свойства будет взято из переменной fruit
};

alert(bag.apple); // 5, если fruit="apple"
