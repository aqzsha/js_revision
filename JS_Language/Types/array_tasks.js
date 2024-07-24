// 1
function camelize(str) {
  return str
    .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map(
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      (word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}

// 2
function filterRange(arr, a, b) {
  const newArray = arr.filter((item) => {
    if (a <= item && b >= item) {
      return item;
    }
  });
  return newArray;
}

// 3
let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
    }
  }
}

filterRangeInPlace(arr, 1, 4);

// 4
arr.sort((a, b) => b - a);
console.log(arr);

// 5
function copySorted(arr) {
  return arr.slice().sort();
}

// 6
let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [vasya, petya, masha];

let names = users.map((item) => item.name);

console.log(names);

// 7
let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

// 8
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

let arrs = [vasya, petya, masha];

sortByAge(arrs);

// теперь: [vasya, masha, petya]
console.log(arrs[0].name); // Вася
console.log(arrs[1].name); // Маша
console.log(arrs[2].name); // Петя

// 9

function getAverageAge(arr) {
  return arr.reduce((sum, acc) => sum + acc.age, 0) / arr.length;
}
console.log(getAverageAge(arrs));

//10
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}
