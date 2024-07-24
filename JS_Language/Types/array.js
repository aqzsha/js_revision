// !!!!!!!!!!!!!!!!!!!!!!!!!!!
// Array.splice изменяет исходный массив и возвращает массив, содержащий удаленные элементы.

// Array.slice не изменяет исходный массив. Он просто возвращает новый массив элементов, который является подмножеством исходного массива.

// Splice
let arr = ['Я', 'изучаю', 'JavaScript'];

arr.splice(1, 1); // начиная с индекса 1, удалить 1 элемент

alert(arr); // осталось ["Я", "JavaScript"]

//Splice Add
let arrs = ['Я', 'изучаю', 'JavaScript'];

// с индекса 2
// удалить 0 элементов
// вставить "сложный", "язык"
arrs.splice(2, 0, 'сложный', 'язык');

alert(arrs); // "Я", "изучаю", "сложный", "язык", "JavaScript"

//Slice
let arrq = ['t', 'e', 's', 't'];

alert(arrq.slice(1, 3)); // e,s (копирует с 1 до 3)

alert(arrq.slice(-2)); // s,t (копирует с -2 до конца)

//FIND
let users = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 3, name: 'Маша' },
];

let user = users.find((item) => item.id == 1);

alert(user.name); // Вася

//REDUCE
let arre = [1, 2, 3, 4, 5];

let result = arre.reduce((sum, current) => sum + current, 0);

alert(result); // 15

// IsArray
alert(Array.isArray({})); // false

alert(Array.isArray([])); // true

alert(typeof {}); // object
alert(typeof []); // тоже object

//SOME
// Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true

// EVERY
// Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
