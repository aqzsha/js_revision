let map = new Map();

map.set('1', 'str1'); // строка в качестве ключа
map.set(1, 'num1'); // цифра как ключ
map.set(true, 'bool1'); // булево значение как ключ

// помните, обычный объект Object приводит ключи к строкам?
// Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
alert(map.get(1)); // "num1"
alert(map.get('1')); // "str1"

alert(map.size); // 3

let recipeMap = new Map([
  ['огурец', 500],
  ['помидор', 350],
  ['лук', 50],
]);

// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // огурец, помидор, лук
}

// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}
