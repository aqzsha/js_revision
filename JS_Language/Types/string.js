// Первый метод — str.indexOf(substr, pos).

// Он ищет подстроку substr в строке str, начиная с позиции pos, и возвращает позицию, на которой располагается совпадение, либо -1 при отсутствии совпадений.

let str = 'Widget with id';

alert(str.indexOf('Widget')); // 0, потому что подстрока 'Widget' найдена в начале
alert(str.indexOf('widget')); // -1, совпадений нет, поиск чувствителен к регистру

alert(str.indexOf('id')); // 1, подстрока "id" найдена на позиции 1 (..idget with id)

//INCLUDES

alert('Midget'.includes('id')); // true
alert('Midget'.includes('id', 3)); // false, поиск начат с позиции 3

//Slice

let strs = 'stringify';
// 'strin', символы от 0 до 5 (не включая 5)
alert(strs.slice(0, 5));
// 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
alert(strs.slice(0, 1));
