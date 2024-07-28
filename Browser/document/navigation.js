// Как мы уже видели, childNodes похож на массив. На самом деле это не массив, а коллекция – особый перебираемый объект-псевдомассив.
for (let node of document.body.childNodes) {
  alert(node); // покажет все узлы из коллекции
}

// родителем <body> является <html>
alert(document.body.parentNode === document.documentElement); // выведет true

// после <head> идёт <body>
alert(document.head.nextSibling); // HTMLBodyElement

// перед <body> находится <head>
alert(document.body.previousSibling); // HTMLHeadElement

// tasks
// 1
const body = document.body.firstElementChild;
document.body.children[1];
document.body.lastElementChild.lastElementChild;

// 2
